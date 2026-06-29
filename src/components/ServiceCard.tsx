import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/constants/services";

interface ServiceCardProps {
  service: Service;
  imageHeight?: string;
  showBookButton?: boolean;
}

export default function ServiceCard({
  service,
  imageHeight = "h-80",
  showBookButton = true,
}: ServiceCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col hover:border-primary/50 transition-colors duration-300">
      <div className={`relative ${imageHeight} overflow-hidden bg-surface`}>
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-foreground">{service.name}</h3>
        <p className="mt-2 text-muted text-sm leading-relaxed flex-1">
          {service.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-semibold text-lg">
            R{service.price}
          </span>
          <span className="text-muted text-xs bg-background px-2 py-1 rounded">
            {service.duration}
          </span>
        </div>
        {showBookButton && (
          <Link
            href={`/booking?service=${service.id}`}
            className="mt-5 block text-center bg-primary hover:bg-primary-hover text-background font-semibold py-2.5 rounded text-sm uppercase tracking-wide transition-colors duration-200"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
}
