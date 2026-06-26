"use client";

import { useState } from "react";
import Image from "next/image";

// Gallery images — finished African barbershop styles
const galleryItems = [
  { id: 1, category: "Haircuts", alt: "Fresh fade", src: "/style-1.jpg" },
  { id: 2, category: "Haircuts", alt: "Clean lineup", src: "/style-2.jpg" },
  { id: 3, category: "Haircuts", alt: "Skin fade", src: "/style-3.jpg" },
  { id: 4, category: "Haircuts", alt: "Low fade", src: "/style-4.jpg" },
  { id: 5, category: "Haircuts", alt: "Close cut", src: "/style-5.jpg" },
  { id: 6, category: "Haircuts", alt: "Textured top", src: "/style-6.jpg" },
  { id: 7, category: "Haircuts", alt: "Sharp cut", src: "/style-7.jpg" },
  { id: 8, category: "Haircuts", alt: "Fresh style", src: "/style-8.jpg" },
  { id: 9, category: "Haircuts", alt: "Curly top fade", src: "/style-9.jpg" },
  { id: 10, category: "Haircuts", alt: "High top", src: "/style-10.jpg" },
  { id: 11, category: "Haircuts", alt: "Waves cut", src: "/style-11.jpg" },
  { id: 12, category: "Haircuts", alt: "Tapered fade", src: "/style-12.jpg" },
  { id: 13, category: "Beards", alt: "Fade with full beard", src: "/style-13.jpg" },
  { id: 14, category: "Beards", alt: "Low cut with beard shape", src: "/style-14.jpg" },
  { id: 15, category: "Beards", alt: "Waves with beard lineup", src: "/style-15.jpg" },
];

// Unique categories for the filter tabs
const categories = ["All", "Haircuts", "Beards"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Our Work
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">Gallery</h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            A showcase of our craftsmanship. Every cut tells a story.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded text-sm uppercase tracking-wide transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-primary text-background font-semibold"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="relative overflow-hidden rounded-lg h-80 group cursor-pointer border border-border hover:border-primary/50 transition-colors duration-300 bg-surface"
                aria-label={`View ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <div className="relative max-w-3xl w-full h-[80vh]">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded">
                {lightboxImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
