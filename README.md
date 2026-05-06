# Electrician Website Template — Voltline Electric Co.

A polished, sample website template for licensed electrical contractors. Use
this to show prospective clients what their finished site could look like —
the design and structure are ready, just swap in their branding, copy and
contact details.

> Template demo site for electrical contractors. Final design, branding and
> content will be customized for your business.

Default placeholder details used across the template:

- Brand: Voltline Electric Co.
- Owner: Master Electrician (generic placeholder)
- Phone: (555) 123-4567
- Email: hello@voltlineelectric.com
- Location: Your City, USA

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- React Router

## Local development

```sh
npm install
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080).

## Build

```sh
npm run build      # production build
npm run preview    # preview the production build locally
```

## Project layout

```
src/
  components/   # Navbar, Footer, ContactForm, ChatWidget, Reveal, ui/
  pages/        # Index, NotFound
  hooks/        # use-mobile, use-toast
  lib/          # utils
  index.css     # design tokens + animations
  App.tsx       # routes
```

## Customizing the template for a client

When pitching this to a real electrical contractor, replace the placeholders:

- Brand name `Voltline Electric Co.` (Navbar, Footer, Index, ContactForm, index.html)
- Phone `(555) 123-4567` and `tel:5551234567`
- Email `hello@voltlineelectric.com`
- Service area copy (currently "Your Area" / generic neighborhood names)
- `/public/logo.webp` — swap in the client's logo
- Replace the sample testimonial with real customer reviews
- Update structured data (`<script type="application/ld+json">`) in `index.html`

## TODOs before launch

- Wire `ContactForm` to a real webhook (`WEBHOOK_URL` constant in `src/components/ContactForm.tsx`)
- Wire `ChatWidget` to the real chat provider
- Replace the sample testimonial with real customer reviews
- Add a real favicon to `/public`
