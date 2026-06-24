"use client";

import { useState } from "react";

// Gallery images — in a real project these would be actual photos
// For now we use placeholder descriptions. You'll replace with real images later.
const galleryItems = [
  { id: 1, category: "Haircuts", alt: "Classic gentleman's cut" },
  { id: 2, category: "Haircuts", alt: "Modern skin fade" },
  { id: 3, category: "Beards", alt: "Beard trim and shape" },
  { id: 4, category: "Haircuts", alt: "Textured crop cut" },
  { id: 5, category: "Beards", alt: "Full beard grooming" },
  { id: 6, category: "Shop", alt: "Barbershop interior" },
  { id: 7, category: "Haircuts", alt: "Taper fade with design" },
  { id: 8, category: "Shop", alt: "Barber tools close-up" },
  { id: 9, category: "Beards", alt: "Hot towel shave process" },
];

// Unique categories for the filter tabs
const categories = ["All", "Haircuts", "Beards", "Shop"];

export default function GalleryPage() {
  // Track which category filter is active
  const [activeCategory, setActiveCategory] = useState("All");
  // Track which image is open in the lightbox (null = closed)
  const [lightboxImage, setLightboxImage] = useState<typeof galleryItems[0] | null>(null);

  // Filter images based on active category
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
                className="bg-surface border border-border rounded-lg h-64 flex items-center justify-center hover:border-primary/50 transition-colors duration-300 cursor-pointer group"
                aria-label={`View ${item.alt}`}
              >
                {/* Placeholder — replace with real images later */}
                <div className="text-center">
                  <p className="text-muted text-sm group-hover:text-foreground transition-colors">
                    {item.alt}
                  </p>
                  <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal — shows when an image is clicked */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <div className="relative max-w-3xl w-full bg-surface border border-border rounded-lg h-96 flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image placeholder */}
            <div className="text-center">
              <p className="text-foreground text-lg">{lightboxImage.alt}</p>
              <p className="text-primary text-sm mt-2">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
