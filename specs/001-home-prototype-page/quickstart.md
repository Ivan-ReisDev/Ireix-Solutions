# Quickstart: Página Principal pelo Protótipo Pencil

## Prerequisites

- Current branch: `001-home-prototype-page`
- Active feature: `specs/001-home-prototype-page`
- Pencil source available: `/home/deeivan/Área de trabalho/Developer/Pessoal/dashboard-redesign.pen`
- Design system reviewed: `docs/designer-system.md`

## Implementation Readiness

1. Read `spec.md`, `plan.md`, `research.md`, `data-model.md` and all files under `contracts/`.
2. Confirm required dependencies are installed or planned: `zod` and `lucide-react`.
3. Extract/copy the required assets listed in `contracts/asset-inventory.md` to `public/images/home/`.
4. Confirm `app/page.tsx` is still the scaffold and can be replaced.

## Local Verification Commands

```bash
npm run lint
npm run build
npm run dev
```

## Browser Verification

1. Open `http://localhost:3000`.
2. Desktop check at 1440px:
   - Top navigation height and layout match Pencil.
   - Hero title, body, chips, CTAs, metrics and image match Pencil.
   - Sections appear in the exact order from `contracts/ui-fidelity.md`.
   - Services are 3 x 3 cards.
   - Process is two-column.
   - WhatsApp spotlight has dark image background and chat mock.
   - Testimonials and blog cards are 3-column rows.
   - Contact form and footer match Pencil.
3. Mobile check around 390px:
   - Content stacks cleanly.
   - Navigation remains usable.
   - CTAs and form fields are touch-friendly.
   - No text overlap, clipping or horizontal scroll.
4. Accessibility check:
   - Keyboard can reach all links, CTAs and fields.
   - Form labels are programmatically associated.
   - Error messages are announced or visible next to fields.
5. SEO check:
   - Page has one H1.
   - Metadata title/description are IREX-specific.
   - Main content is visible in initial rendered HTML.
   - OG image exists.
   - Sitemap and robots include the homepage.

## Implementation Notes

- Manual desktop review at 1440px and mobile review at 390px were completed against the implemented page.
- The Pencil node does not provide a reusable vector/logo asset for the top-left mark, so the implementation recreates the footprint with a compact dark monogram block while preserving size, contrast and surrounding typography.
- No production WhatsApp number exists in the repository, so WhatsApp CTAs route to `#contato` and expose a visible fallback message plus `contato@ireixsolution.com`.
- A lightweight `/blog` route was added so blog CTAs remain non-broken while the full article area is still outside this feature scope.
- The local spotlight background was preserved from the Pencil export and is rendered as a CSS background to avoid runtime optimization issues with the source file format.

## Acceptance Gate

Implementation is ready for review only when:

- `npm run lint` passes.
- `npm run build` passes.
- Desktop visual fidelity against Pencil `khBEU` is at least 95% by manual review.
- Mobile responsive review passes.
- Proposal form validation handles valid and invalid submissions.
- No constitution gate remains violated except the documented cobalt CTA exception for prototype fidelity.
