import Link from "next/link";
import { services } from "@/constants/services";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our range of premium grooming services. From classic cuts to luxury hot towel shaves, we have something for every gentleman.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="What We Offer"
        title="Our Services"
        description="Premium grooming services delivered with precision and care. Choose your service and book your appointment."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

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
