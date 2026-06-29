import Link from "next/link";
import Image from "next/image";
import { services } from "@/constants/services";
import { testimonials } from "@/constants/testimonials";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StarRating from "@/components/StarRating";

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[85vh] px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Premium Grooming
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight">
            Where Tradition Meets{" "}
            <span className="text-primary">Modern Style</span>
          </h1>
          <p className="mt-6 text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the art of grooming at Dolsk Barbershop. Expert barbers,
            timeless techniques, and a relaxing atmosphere crafted for the modern
            gentleman.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-primary hover:bg-primary-hover text-background font-semibold px-8 py-3.5 rounded text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="border border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-3.5 rounded text-sm uppercase tracking-wide transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="What We Offer" title="Our Services" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                imageHeight="h-72"
                showBookButton={false}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-primary hover:text-primary-hover text-sm uppercase tracking-wide border-b border-primary/50 hover:border-primary pb-1 transition-colors duration-200"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Craftsmanship Since Day One
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              At Dolsk Barbershop, we believe grooming is more than a haircut —
              it&apos;s an experience. Our skilled barbers blend traditional
              techniques with modern trends to deliver results that make you look
              and feel your best.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From classic cuts to contemporary fades, every service is delivered
              with precision, care, and attention to detail.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-primary hover:text-primary-hover text-sm uppercase tracking-wide border-b border-primary/50 hover:border-primary pb-1 transition-colors duration-200"
            >
              Learn More About Us →
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-lg h-80">
            <Image
              src="/barber-1.jpg"
              alt="Client getting a fresh cut at Dolsk Barbershop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Testimonials" title="What Our Clients Say" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-surface border border-border rounded-lg p-6"
              >
                <StarRating />
                <p className="mt-3 text-muted text-sm leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="mt-4 text-foreground text-sm font-semibold">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Ready for a Fresh Look?
          </h2>
          <p className="mt-4 text-muted text-lg">
            Book your appointment today and experience the Dolsk difference.
          </p>
          <Link
            href="/booking"
            className="inline-block mt-8 bg-primary hover:bg-primary-hover text-background font-semibold px-10 py-4 rounded text-sm uppercase tracking-wide transition-colors duration-200"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
