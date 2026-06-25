// All services offered by Dolsk Barbershop
// Defined once here, reused on Home page (preview) and Services page (full list)

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string; // e.g. "30 min"
  image: string; // path to service image in public/
}

export const services: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    description:
      "Traditional barbershop cut with precision scissors and clippers. Includes hot towel finish.",
    price: 150,
    duration: "30 min",
    image: "/gallery-5.jpg",
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Shape",
    description:
      "Expert beard grooming with straight razor edging and conditioning oil treatment.",
    price: 100,
    duration: "20 min",
    image: "/barber-1.jpg",
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    description:
      "Luxury straight razor shave with hot towel prep, premium lather, and aftershave balm.",
    price: 180,
    duration: "40 min",
    image: "/gallery-10.jpg",
  },
  {
    id: "fade-cut",
    name: "Skin Fade",
    description:
      "Modern fade with seamless blending. Includes lineup and styling.",
    price: 180,
    duration: "45 min",
    image: "/gallery-3.jpg",
  },
  {
    id: "hair-beard-combo",
    name: "Cut & Beard Combo",
    description:
      "Full haircut plus beard trim and shape. The complete grooming package.",
    price: 220,
    duration: "50 min",
    image: "/gallery-7.jpg",
  },
  {
    id: "kids-cut",
    name: "Kids Cut",
    description:
      "Gentle haircut for children under 12. Patient barbers, great results.",
    price: 100,
    duration: "20 min",
    image: "/gallery-9.jpg",
  },
];
