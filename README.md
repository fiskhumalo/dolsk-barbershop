# Dolsk Barbershop

A modern, premium barbershop website built for the CommunityBytes Web Developer Technical Assessment. Features a fully functional booking system, responsive design, and a dark luxury aesthetic.

![Dolsk Barbershop Preview](./public/preview.png)

## Live Demo

🔗 **Live Site:** [dolsk-barbershop.vercel.app](https://dolsk-barbershop.vercel.app)

📂 **Repository:** [github.com/fiskhumalo/dolsk-barbershop](https://github.com/fiskhumalo/dolsk-barbershop)

## Features

- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Booking System** — Complete 4-step appointment flow with calendar, time slots, customer details, and confirmation
- **Dynamic Calendar** — Shows next 14 available dates, disables closed days (Sundays), respects business hours
- **WhatsApp Integration** — Generates pre-filled booking messages with service, date, time, and customer info
- **No Dead Ends** — Every clickable element provides visual feedback or state change
- **SEO Optimized** — Proper meta tags, Open Graph data, heading hierarchy, keyword metadata
- **Accessible** — Semantic HTML, keyboard navigation, focus-visible indicators, form labels, proper ARIA attributes
- **Performance Focused** — Google Fonts loaded locally, static generation, minimal JavaScript
- **Active Navigation** — Current page highlighted in navbar
- **Service Images** — Each service displays a visual example of the haircut/style
- **Gallery Filtering** — Filter images by category (Haircuts, Beards)
- **Lightbox** — Click gallery images to view full size
- **Custom 404 Page** — Styled "Page Not Found" with navigation back to home
- **Form Validation** — Contact form with required field validation and success/error feedback

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section, services preview with images, about teaser, testimonials, CTA |
| Services | Full service list with images, pricing, duration, and "Book Now" buttons |
| About | Brand story, values (Precision, Respect, Experience), team members |
| Gallery | Filterable image grid (Haircuts/Beards) with lightbox modal |
| Contact | Contact form with validation, business hours, phone, email, WhatsApp link |
| Booking | 4-step flow: Service → Date/Time → Details → Confirmation + WhatsApp |

## Booking System Details

The booking system includes:

1. **Service Selection** — Visual cards with images showing each service
2. **Date Selection** — Calendar grid showing 14 days ahead, closed days (Sunday) disabled and marked
3. **Time Slot Selection** — Available slots generated from business hours (Mon-Fri: 08:00-18:00, Sat: 08:00-14:00)
4. **Customer Details** — Name, phone (required), email (optional) with booking summary
5. **Confirmation** — Success screen with appointment details and WhatsApp button
6. **WhatsApp Message** — Pre-filled message: "Hello, I would like to book a [Service] on [Date] at [Time]..."

Closed days are:
- Visually distinct (greyed out, strikethrough, "Closed" label)
- Unclickable (disabled attribute)
- Cannot be selected

## Technologies Used

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts (Playfair Display for headings, Inter for body)
- **Deployment:** Vercel
- **Linting:** ESLint with Next.js config

## Lighthouse Scores

| Category | Score |
|----------|-------|
| Performance | 87 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/fiskhumalo/dolsk-barbershop.git

# Navigate to project
cd dolsk-barbershop

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Pages (App Router)
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout (navbar + footer)
│   ├── globals.css       # Design system (colors, fonts)
│   ├── not-found.tsx     # Custom 404 page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── gallery/          # Gallery with filtering + lightbox
│   ├── contact/          # Contact form + business info
│   └── booking/          # 4-step booking system
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Responsive navbar with active states
│   ├── Footer.tsx        # Site footer with links + hours
│   ├── PageHeader.tsx    # Reusable page header section
│   ├── SectionHeader.tsx # Reusable section title
│   ├── ServiceCard.tsx   # Service card with image + pricing
│   └── StarRating.tsx    # Star rating display
└── constants/            # Shared data
    ├── services.ts       # Service definitions (name, price, duration, image)
    ├── business-hours.ts # Operating hours + time slot generator
    ├── gallery.ts        # Gallery items and categories
    ├── testimonials.ts   # Customer testimonials
    ├── team.ts           # Team member profiles
    └── contact.ts        # Business contact info (phone, email, address)
```

## Design Decisions

- **Dark theme with gold accents** — Premium, luxury barbershop aesthetic
- **Playfair Display for headings** — Classic serif font with barber heritage feel
- **Inter for body text** — Clean, modern, highly readable
- **Mobile-first approach** — Built for mobile then enhanced for larger screens
- **Component architecture** — Reusable pieces for consistency and maintainability
- **Static generation** — Pages pre-rendered at build time for fast loading
- **Constants pattern** — Services and business hours defined once, reused across pages

## Business Hours

| Day | Hours |
|-----|-------|
| Monday - Friday | 08:00 - 18:00 |
| Saturday | 08:00 - 14:00 |
| Sunday | Closed |

## Author

Built by Fisokuhle Khumalo for the CommunityBytes Access Web Developer Technical Assessment.

## License

This project is for assessment purposes.
