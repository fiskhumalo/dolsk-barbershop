import Link from "next/link";
import { services } from "@/constants/services";

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
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-surface border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    R{service.price}
                  </span>
                  <span className="text-muted text-xs">{service.duration}</span>
                </div>
              </div>
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
            <img
              src="/barber-1.jpg"
              alt="Client getting a fresh cut at Dolsk Barbershop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Thabo M.",
                text: "Best barbershop in town. The attention to detail is unmatched. I won't go anywhere else.",
              },
              {
                name: "James K.",
                text: "The hot towel shave is an experience. Felt like a king walking out of there. Highly recommend.",
              },
              {
                name: "Sipho N.",
                text: "Finally found a barber who understands what I want. Clean fades every single time.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-surface border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed italic">
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
