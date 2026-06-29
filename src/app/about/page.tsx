import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { team } from "@/constants/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dolsk Barbershop — our story, our mission, and the skilled barbers behind the chair.",
};

const values = [
  {
    title: "Precision",
    description: "Every cut, every line, every detail matters. We don't rush — we craft.",
  },
  {
    title: "Respect",
    description: "For the craft, for our clients, and for each individual's style and preferences.",
  },
  {
    title: "Experience",
    description: "From the moment you walk in to the moment you leave — every touchpoint is intentional.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        label="Our Story"
        title="About Dolsk"
        description="More than a barbershop — a grooming experience built on tradition, skill, and respect for the craft."
      />

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg h-80 order-2 md:order-1 bg-surface">
            <img
              src="/about-barber.jpg"
              alt="Barber giving a fresh fade at Dolsk Barbershop"
              className="w-full h-full object-contain"
            />
          </div>

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

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <h3 className="font-serif text-xl text-primary">{value.title}</h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
                <div className="w-20 h-20 rounded-full bg-background border border-border mx-auto flex items-center justify-center">
                  <span className="text-primary font-serif text-2xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-xs uppercase tracking-wide mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
