import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your appointment at Dolsk Barbershop. Choose your service, pick a date and time, and confirm via WhatsApp.",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
