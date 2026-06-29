"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/constants/services";
import { businessHours, getTimeSlotsForDay, dayNames } from "@/constants/business-hours";

type BookingStep = "service" | "datetime" | "details" | "confirmation";

// Inner component that uses useSearchParams (must be inside Suspense)
function BookingContent() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<BookingStep>("service");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  // Pre-select service if coming from Services page (e.g., /booking?service=classic-cut)
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && services.find((s) => s.id === serviceParam)) {
      setSelectedService(serviceParam);
      setStep("datetime");
    }
  }, [searchParams]);

  const getCalendarDays = () => {
    const days: Date[] = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const calendarDays = getCalendarDays();

  const isDayClosed = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    return !businessHours[dayOfWeek].open;
  };

  const availableTimeSlots = selectedDate
    ? getTimeSlotsForDay(selectedDate.getDay())
    : [];

  const generateWhatsAppMessage = () => {
    const service = services.find((s) => s.id === selectedService);
    const dateStr = selectedDate
      ? selectedDate.toLocaleDateString("en-ZA", {
          day: "numeric",
          month: "long",
        })
      : "";
    return `Hello, I would like to book a ${service?.name} on ${dateStr} at ${selectedTime}. My name is ${customerName}. Phone: ${customerPhone}`;
  };

  const whatsappLink = `https://wa.me/27749121260?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-ZA", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Schedule Your Visit
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">Book Appointment</h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Choose your service, pick a date and time, and you&apos;re all set.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            {[
              { key: "service", label: "Service" },
              { key: "datetime", label: "Date & Time" },
              { key: "details", label: "Details" },
              { key: "confirmation", label: "Confirmed" },
            ].map((s, index) => (
              <div key={s.key} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    step === s.key
                      ? "bg-primary text-background"
                      : index <
                        ["service", "datetime", "details", "confirmation"].indexOf(step)
                      ? "bg-primary/20 text-primary"
                      : "bg-surface border border-border text-muted"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="hidden sm:block ml-2 text-xs text-muted">
                  {s.label}
                </span>
                {index < 3 && (
                  <div className="w-8 sm:w-16 h-px bg-border mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Step 1: Service */}
          {step === "service" && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Choose a Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setStep("datetime");
                    }}
                    className={`text-left rounded-lg border overflow-hidden transition-colors duration-200 ${
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border bg-surface hover:border-primary/50"
                    }`}
                  >
                    <div className="h-40 overflow-hidden bg-surface">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-muted text-xs mt-1">
                        {service.duration}
                      </p>
                      <p className="text-primary font-semibold mt-2">
                        R{service.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === "datetime" && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Pick a Date & Time</h2>

              {/* Calendar — horizontal scrollable on mobile */}
              <div>
                <h3 className="text-sm text-muted mb-3 uppercase tracking-wide">
                  Select Date
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {calendarDays.map((date) => {
                    const closed = isDayClosed(date);
                    const isSelected =
                      selectedDate?.toDateString() === date.toDateString();

                    return (
                      <button
                        key={date.toISOString()}
                        onClick={() => {
                          if (!closed) {
                            setSelectedDate(date);
                            setSelectedTime(""); // Reset time when date changes
                          }
                        }}
                        disabled={closed}
                        className={`p-3 rounded-lg text-center transition-colors duration-200 ${
                          closed
                            ? "bg-surface/50 border border-border/50 text-muted/40 cursor-not-allowed line-through"
                            : isSelected
                            ? "bg-primary text-background border border-primary"
                            : "bg-surface border border-border text-foreground hover:border-primary/50"
                        }`}
                        aria-label={`${formatDate(date)}${closed ? " - Closed" : ""}`}
                      >
                        <span className="block text-xs">
                          {dayNames[date.getDay()].slice(0, 3)}
                        </span>
                        <span className="block text-lg font-semibold mt-1">
                          {date.getDate()}
                        </span>
                        {closed && (
                          <span className="block text-xs text-error mt-1">
                            Closed
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots — only show after date is selected */}
              {selectedDate && (
                <div className="mt-8">
                  <h3 className="text-sm text-muted mb-3 uppercase tracking-wide">
                    Select Time
                  </h3>
                  {availableTimeSlots.length > 0 ? (
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {availableTimeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-3 rounded text-sm font-medium transition-colors duration-200 ${
                            selectedTime === time
                              ? "bg-primary text-background"
                              : "bg-surface border border-border text-foreground hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted text-sm">
                      No available slots for this day.
                    </p>
                  )}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setStep("service")}
                  className="border border-border text-muted hover:text-foreground hover:border-primary/50 px-6 py-2.5 rounded text-sm uppercase tracking-wide transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (selectedDate && selectedTime) {
                      setStep("details");
                    }
                  }}
                  disabled={!selectedDate || !selectedTime}
                  className={`px-6 py-2.5 rounded text-sm uppercase tracking-wide font-semibold transition-colors duration-200 ${
                    selectedDate && selectedTime
                      ? "bg-primary hover:bg-primary-hover text-background"
                      : "bg-surface border border-border text-muted cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === "details" && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Your Details</h2>

              <div className="space-y-5">
                <div>
                  <label htmlFor="booking-name" className="block text-sm text-muted mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className="block text-sm text-muted mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="074 912 1260"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className="block text-sm text-muted mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Booking Summary */}
              <div className="mt-8 bg-surface border border-border rounded-lg p-4">
                <h3 className="text-sm text-muted uppercase tracking-wide mb-3">
                  Booking Summary
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted">Service</span>
                    <span className="text-foreground font-medium">
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Date</span>
                    <span className="text-foreground font-medium">
                      {selectedDate && formatDate(selectedDate)}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Time</span>
                    <span className="text-foreground font-medium">
                      {selectedTime}
                    </span>
                  </li>
                  <li className="flex justify-between border-t border-border pt-2 mt-2">
                    <span className="text-muted">Price</span>
                    <span className="text-primary font-semibold">
                      R{services.find((s) => s.id === selectedService)?.price}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setStep("datetime")}
                  className="border border-border text-muted hover:text-foreground hover:border-primary/50 px-6 py-2.5 rounded text-sm uppercase tracking-wide transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (customerName && customerPhone) {
                      setStep("confirmation");
                    }
                  }}
                  disabled={!customerName || !customerPhone}
                  className={`px-6 py-2.5 rounded text-sm uppercase tracking-wide font-semibold transition-colors duration-200 ${
                    customerName && customerPhone
                      ? "bg-primary hover:bg-primary-hover text-background"
                      : "bg-surface border border-border text-muted cursor-not-allowed"
                  }`}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === "confirmation" && (
            <div className="text-center">
              {/* Success icon */}
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="font-serif text-3xl">Booking Confirmed!</h2>
              <p className="mt-2 text-muted">
                Thank you, {customerName}. Your appointment is set.
              </p>

              {/* Booking details card */}
              <div className="mt-8 bg-surface border border-border rounded-lg p-6 text-left max-w-md mx-auto">
                <h3 className="text-sm text-muted uppercase tracking-wide mb-4">
                  Appointment Details
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted">Service</span>
                    <span className="text-foreground font-medium">
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Date</span>
                    <span className="text-foreground font-medium">
                      {selectedDate && formatDate(selectedDate)}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Time</span>
                    <span className="text-foreground font-medium">
                      {selectedTime}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Name</span>
                    <span className="text-foreground font-medium">
                      {customerName}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Phone</span>
                    <span className="text-foreground font-medium">
                      {customerPhone}
                    </span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-success hover:bg-success/90 text-background font-semibold px-6 py-3 rounded text-sm uppercase tracking-wide transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirm via WhatsApp
              </a>

              {/* Book another */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setStep("service");
                    setSelectedService("");
                    setSelectedDate(null);
                    setSelectedTime("");
                    setCustomerName("");
                    setCustomerPhone("");
                    setCustomerEmail("");
                  }}
                  className="text-primary hover:text-primary-hover text-sm uppercase tracking-wide border-b border-primary/50 hover:border-primary pb-1 transition-colors duration-200"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// Main export — wraps BookingContent in Suspense (required by Next.js for useSearchParams)
export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted">Loading booking...</p>
        </main>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
