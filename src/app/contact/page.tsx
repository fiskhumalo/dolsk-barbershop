"use client";

import { useState } from "react";
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  WHATSAPP_URL,
} from "@/constants/contact";

type FormStatus = "idle" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("success");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Have a question or want to get in touch? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-background font-semibold py-3 rounded text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Send Message
              </button>

              {status === "success" && (
                <div className="bg-success/10 border border-success/30 text-success rounded p-3 text-sm text-center">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="bg-error/10 border border-error/30 text-error rounded p-3 text-sm text-center">
                  Please fill in all fields before submitting.
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Visit Us</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-2">
                  Address
                </h3>
                <p className="text-muted text-sm">
                  {BUSINESS_ADDRESS.street}<br />
                  {BUSINESS_ADDRESS.area}<br />
                  {BUSINESS_ADDRESS.region}
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  className="text-muted hover:text-primary transition-colors text-sm"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-muted hover:text-primary transition-colors text-sm"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-2">
                  Business Hours
                </h3>
                <ul className="text-muted text-sm space-y-1">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>08:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-error">Closed</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 rounded px-5 py-3 text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
