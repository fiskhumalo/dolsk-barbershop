export interface GalleryItem {
  id: number;
  category: "Haircuts" | "Beards";
  alt: string;
  src: string;
}

export const galleryItems: GalleryItem[] = [
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

export const galleryCategories = ["All", "Haircuts", "Beards"] as const;
