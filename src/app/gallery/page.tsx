"use client";

import { useState } from "react";
import Image from "next/image";

// Gallery images — African barbershop style (local images)
const galleryItems = [
  {
    id: 1,
    category: "Beards",
    alt: "Beard trim and styling",
    src: "/gallery-1.jpg",
  },
  {
    id: 2,
    category: "Haircuts",
    alt: "Modern skin fade",
    src: "/gallery-2.jpg",
  },
  {
    id: 3,
    category: "Beards",
    alt: "Full beard grooming",
    src: "/beard-grooming.jpg",
  },
  {
    id: 4,
    category: "Haircuts",
    alt: "Sharp low fade",
    src: "/gallery-4.jpg",
  },
  {
    id: 5,
    category: "Beards",
    alt: "Beard shape and lineup",
    src: "/about-barber.jpg",
  },
  {
    id: 6,
    category: "Shop",
    alt: "Barbershop session",
    src: "/gallery-6.jpg",
  },
  {
    id: 7,
    category: "Haircuts",
    alt: "Precision line up",
    src: "/gallery-7.jpg",
  },
  {
    id: 8,
    category: "Shop",
    alt: "Barber at work",
    src: "/gallery-8.jpg",
  },
  {
    id: 9,
    category: "Haircuts",
    alt: "Fresh haircut finish",
    src: "/gallery-9.jpg",
  },
  {
    id: 10,
    category: "Haircuts",
    alt: "Fresh cut styling",
    src: "/gallery-10.jpg",
  },
  {
    id: 11,
    category: "Shop",
    alt: "Barber and client",
    src: "/gallery-11.jpg",
  },
  {
    id: 12,
    category: "Haircuts",
    alt: "Classic taper fade",
    src: "/gallery-12.jpg",
  },
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
                className="relative overflow-hidden rounded-lg h-64 group cursor-pointer border border-border hover:border-primary/50 transition-colors duration-300"
                aria-label={`View ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.alt}
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
          <div className="relative max-w-3xl w-full h-[70vh]">
            {/* Close button */}
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

            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded">
                {lightboxImage.alt} — {lightboxImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
