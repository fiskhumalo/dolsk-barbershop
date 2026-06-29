interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      {label && (
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
