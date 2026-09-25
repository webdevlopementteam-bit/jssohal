# J. S. Engineering — Landing Page (Next.js)

Premium industrial B2B landing page for J. S. Engineering Company (Sohal JS Engineering),
built with Next.js 14 (App Router), React, Tailwind CSS, Lucide icons and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

(This project fetches Manrope and Inter from Google Fonts at build time via `next/font/google`,
so an internet connection is required during `npm run build`.)

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind base + industrial grid/blade utilities
components/
  TopBar.tsx          Slim top info bar
  Navbar.tsx          Sticky nav, mega menu, mobile drawer
  Hero.tsx            Hero banner
  Counters.tsx        Animated statistics
  About.tsx           About + timeline
  TopProducts.tsx     Top 6 product cards
  Expertise.tsx       Dark "Our Expertise" section
  WhyChooseUs.tsx     6-feature grid
  ProductRange.tsx    Filterable full product catalog
  Testimonials.tsx    Client reviews
  FAQ.tsx             Accordion FAQ
  Clients.tsx         Trusted brands
  CTA.tsx             Closing call-to-action banner
  Footer.tsx          Footer + contact form
  Floaters.tsx        WhatsApp / Call floating buttons + mobile quote bar
  MachineGraphic.tsx  Reusable SVG machine illustration
  Reveal.tsx          Scroll-reveal wrapper (Framer Motion)
lib/
  data.ts             All copy/content: products, FAQs, nav links, company info
```

## Content & facts

Company facts (founding year 1948, founder S. Jaswant Singh Sohal, 1970s bread-slicer
milestone, address, phone, and real client names — Britannia, Modern Bread, Harvest Gold,
Bonn, Kitty Industries) were sourced from the reference site sohaljsengineering.com.
Testimonials are clearly labeled as representative placeholders — replace with real
customer quotes when available.

## Things to customize before launch

- Swap `MachineGraphic.tsx` illustrations for real product photography (`components/*`,
  any `<img>` you add — see `next.config.js` if loading from a remote image host, you'll
  need to add it to `images.remotePatterns`).
- Add your real business email in `components/Footer.tsx` (currently a placeholder).
- Wire up the footer/contact form and mobile "GET A QUOTE" button to a real form handler,
  CRM, or email API route.
- Update social links in `components/Footer.tsx`.
- Confirm/adjust the 1970s bread-slicer date and any other historical details — the
  reference site has two slightly different years (1970 vs. 1976) for this milestone.
