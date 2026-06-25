import Link from "next/link";
import { services } from "@/constants/services";
import type { Metadata } from "next";

// SEO metadata for this specific page
export const metadata: Metadata = {
  title: "Services | Dolsk Barbershop",
  description:
    "Explore our range of premium grooming services. From classic cuts to luxury hot towel shaves, we have something for every gentleman.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            What We Offer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Premium grooming services delivered with precision and care. Choose
            your service and book your appointment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col hover:border-primary/50 transition-colors duration-300"
              >
                {/* Service image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Service name */}
                  <h2 className="font-serif text-xl text-foreground">
                    {service.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 text-muted text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Price and duration */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">
                      R{service.price}
                    </span>
                    <span className="text-muted text-xs bg-background px-2 py-1 rounded">
                      {service.duration}
                    </span>
                  </div>

                  {/* Book Now button — links to booking with service pre-selected */}
                  <Link
                    href={`/booking?service=${service.id}`}
                    className="mt-5 block text-center bg-primary hover:bg-primary-hover text-background font-semibold py-2.5 rounded text-sm uppercase tracking-wide transition-colors duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">
            Not Sure What You Need?
          </h2>
          <p className="mt-3 text-muted">
            Visit us or get in touch — our barbers will recommend the perfect
            service for you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 border border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-3 rounded text-sm uppercase tracking-wide transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
