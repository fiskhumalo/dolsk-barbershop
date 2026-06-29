interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
          {label}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
