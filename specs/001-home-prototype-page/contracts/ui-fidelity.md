# UI Fidelity Contract

## Source of Truth

- Pencil file: `/home/deeivan/Área de trabalho/Developer/Pessoal/dashboard-redesign.pen`
- Node ID: `khBEU`
- Node name: `Ireix Solution Website - Desktop`
- Desktop frame: 1440px wide, 5772px high

## Required Section Order

1. Top Navigation
2. Hero Section
3. Services Section
4. Process Section
5. WhatsApp AI Spotlight
6. Testimonials Section
7. Blog Insights Section
8. Contact Section
9. Professional Footer

## Desktop Layout Contract

- Base width target: 1440px.
- Main horizontal page padding: 48px where used by the prototype.
- Top navigation height: 76px.
- Hero height: 790px; two-column layout with 660px copy block and visual card on the right.
- Services section: 3 rows x 3 cards on desktop, cards 210px high, 18px gaps.
- Process section: left copy column and right step stack.
- WhatsApp spotlight: 560px high, dark overlay, copy left and chat mock right.
- Testimonials: 3 equal cards in one desktop row.
- Blog: 3 equal cards in one desktop row.
- Contact: copy column left and proposal form right.
- Footer: dark surface with brand, service, company and contact columns.

## Responsive Contract

- At tablet/mobile widths, two-column and three-column groups collapse into a single readable column.
- Top navigation may collapse links/actions into a compact mobile layout, but must keep brand and primary contact action available.
- Text must not overlap or clip at mobile, tablet or desktop widths.
- Touch targets should remain at least 44px high for primary actions and form controls.

## Visual Tokens to Preserve

- Primary dark ink: `#0A1317`
- Body/support text: `#64717C`
- Cobalt prototype CTA: `#0064E0`
- Soft cobalt chip: `#EAF2FF`
- Soft surface: `#F5F6F7`
- Hairline: `#EDF0F2`
- Warning yellow chip: `#FFD84D`
- WhatsApp green: `#168A45`
- Main card radii: 16px, 24px, 32px
- Pill radius: 100px
- Font family: Montserrat-compatible typography

## Content Fidelity Contract

- Section labels, titles, descriptions, service names, process steps, testimonial text, blog titles, form labels and footer text must match `spec.md`.
- Any copy change requires explicit content approval and update to the spec.

## Verification

- Capture desktop screenshot at 1440px and compare manually against Pencil `khBEU`.
- Capture mobile screenshot at 390px and verify responsive hierarchy.
- Check first viewport includes brand, nav, hero title, hero CTAs and right visual.
- Check full page includes every required section in order.
