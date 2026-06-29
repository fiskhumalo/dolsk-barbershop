import Link from "next/link";
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
} from "@/constants/contact";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Appointment" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl text-primary">Dolsk Barbershop</h3>
            <p className="mt-2 text-muted text-sm leading-relaxed">
              Premium grooming experience. Where tradition meets modern style.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>123 Main Street, City Center</li>
              <li>Mon - Fri: 08:00 - 18:00</li>
              <li>Sat: 08:00 - 14:00</li>
              <li>Sun: Closed</li>
              <li className="pt-2">
                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {BUSINESS_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Dolsk Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
