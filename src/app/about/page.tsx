import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dolsk Barbershop",
  description:
    "Learn about Dolsk Barbershop — our story, our mission, and the skilled barbers behind the chair.",
};

// Team members data — could move to constants/ if reused elsewhere
const team = [
  {
    name: "Daniel Olsen",
    role: "Founder & Head Barber",
    bio: "15 years of experience in classic and modern cuts. Daniel founded Dolsk with a vision of premium grooming for every man.",
  },
  {
    name: "Marcus Phiri",
    role: "Senior Barber",
    bio: "Specializes in skin fades and creative designs. Known for his precision and attention to detail.",
  },
  {
    name: "Johan van Wyk",
    role: "Barber & Stylist",
    bio: "Expert in beard grooming and hot towel shaves. Brings a calm, relaxing energy to every appointment.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">About Dolsk</h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            More than a barbershop — a grooming experience built on tradition,
            skill, and respect for the craft.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-surface border border-border rounded-lg h-80 flex items-center justify-center order-2 md:order-1">
            <p className="text-muted text-sm">Shop Interior</p>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl">The Dolsk Story</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Dolsk Barbershop was born from a simple belief: every man deserves
              a grooming experience that makes him feel confident and refreshed.
              What started as a single chair in a small studio has grown into a
              trusted name in premium grooming.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We combine time-honoured barbering techniques with modern trends,
              creating a space where tradition and style coexist. Every visit is
              more than a haircut — it&apos;s a moment to relax, recharge, and
              leave looking your best.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Precision",
                description:
                  "Every cut, every line, every detail matters. We don't rush — we craft.",
              },
              {
                title: "Respect",
                description:
                  "For the craft, for our clients, and for each individual's style and preferences.",
              },
              {
                title: "Experience",
                description:
                  "From the moment you walk in to the moment you leave — every touchpoint is intentional.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <h3 className="font-serif text-xl text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">
              The Team
            </p>
            <h2 className="font-serif text-3xl">Meet Our Barbers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-surface border border-border rounded-lg p-6 text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-background border border-border mx-auto flex items-center justify-center">
                  <span className="text-primary font-serif text-2xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-xs uppercase tracking-wide mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
