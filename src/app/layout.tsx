import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dolsk Barbershop | Premium Grooming Experience",
    template: "%s | Dolsk Barbershop",
  },
  description:
    "Experience premium grooming at Dolsk Barbershop. Expert barbers, classic cuts, and a luxury atmosphere. Book your appointment today.",
  keywords: [
    "barbershop",
    "haircut",
    "grooming",
    "fade",
    "beard trim",
    "hot towel shave",
    "Dolsk",
    "barber",
    "Free State",
    "South Africa",
  ],
  openGraph: {
    title: "Dolsk Barbershop | Premium Grooming Experience",
    description:
      "Expert barbers, classic cuts, and a luxury atmosphere. Book your appointment today.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
