"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation links — defined once, used in both desktop and mobile menus
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  // State to track if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Get current page path to highlight active link
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl text-primary">Dolsk</span>
            <span className="hidden sm:inline text-sm text-muted uppercase tracking-widest">
              Barbershop
            </span>
          </Link>

          {/* Desktop Navigation — hidden on mobile, shown on medium screens and up */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book Now Button — desktop only */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className={`font-semibold px-6 py-2.5 rounded text-sm uppercase tracking-wide transition-colors duration-200 ${
                pathname === "/booking"
                  ? "bg-primary-hover text-background"
                  : "bg-primary hover:bg-primary-hover text-background"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button — shown only on small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 rounded hover:bg-surface transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {/* Hamburger icon (3 lines) or X icon based on state */}
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu — slides down when hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded text-sm uppercase tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block bg-primary hover:bg-primary-hover text-background font-semibold px-3 py-2.5 rounded text-sm uppercase tracking-wide text-center transition-colors duration-200 mt-3"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
