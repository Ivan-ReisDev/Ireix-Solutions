# Implementation Plan: Página Principal pelo Protótipo Pencil

**Branch**: `001-home-prototype-page` | **Date**: 2026-06-05 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-home-prototype-page/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Implementar a home pública da IREX substituindo o scaffold atual por uma página fiel ao protótipo Pencil `khBEU` do arquivo `/home/deeivan/Área de trabalho/Developer/Pessoal/dashboard-redesign.pen`. A entrega deve reproduzir conteúdo, imagens, hierarquia, grid, cards, CTAs, formulário e footer do protótipo, mantendo SEO, performance, acessibilidade, validação OWASP e responsividade definidos na constituição.

Abordagem técnica: usar Next.js App Router com a rota `/` em `app/page.tsx`, Server Components para todo conteúdo estático/crawlable, um Client Component apenas para o formulário com estado de validação, Server Action para submissão validada por Zod, assets extraídos do Pencil para `public/images/home/`, ícones Lucide equivalentes aos usados no protótipo e estilos Tailwind/CSS tokens alinhados ao design system.

## Technical Context

**Language/Version**: TypeScript 5, React 19.2.4, Next.js 16.2.7 App Router

**Primary Dependencies**: Next.js, React, Tailwind CSS 4, `next/image`, `next/font`, planned `zod` for form validation, planned `lucide-react` for Pencil-matched icons

**Storage**: No durable storage in this feature. Proposal submissions return a validated response and can be wired to a future delivery provider; visible fallback uses configured commercial contact.

**Testing**: `npm run lint`, `npm run build`, browser verification in desktop 1440px and mobile viewport, visual comparison against Pencil node `khBEU`, keyboard/form validation checks

**Target Platform**: Public web homepage served by Next.js App Router

**Project Type**: Web application / marketing website

**Performance Goals**: Static/cached homepage, stable image dimensions, no visible layout shift, crawlable content available in initial HTML, minimal client JavaScript limited to the contact form

**Constraints**: Must copy Pencil node `khBEU` as the visual source of truth; must reuse Pencil images; must follow `docs/designer-system.md`; must follow OWASP; must consult local Next.js 16 docs before implementation

**Scale/Scope**: Single public homepage with 8 major sections, 9 service cards, 4 process steps, 3 testimonials, 3 blog cards, 1 contact form, footer, metadata and public assets

**SEO Impact**: Replace generic scaffold metadata with IREX homepage title/description, one H1, ordered section headings, crawlable service/process/blog/contact copy, Open Graph image, internal anchors, sitemap/robots compatibility

**Security/OWASP Impact**: Contact form validates all inputs with Zod on the server, returns safe field errors, preserves values on validation failure, avoids exposing secrets, and keeps endpoint/action thin

**Design System Impact**: Uses Montserrat/Optimistic-compatible fallback, white/soft-cloud surfaces, hairline borders, rounded cards, pill CTAs, 32px photographic corners, 3-column desktop grids collapsing to single column. Exception: Pencil uses cobalt `#0064E0` on marketing CTAs; implement as a prototype-fidelity override documented here.

**Existing Component Reuse**: No reusable application components exist yet. Create shared `components/Button/` only if multiple future routes can reuse it; keep this home-specific implementation colocated under `app/_components/home/` to avoid premature abstraction.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- IREX source of truth: PASS. The home becomes the canonical public web presence and copies the approved Pencil source.
- SOLID and componentization: PASS. Existing component inventory is empty; route-only home sections stay in `app/_components/home/`; reusable primitives are limited to genuine repeated UI.
- OWASP security: PASS. Proposal submission uses Zod server validation and thin action/service separation.
- Next.js App Router: PASS. Local Next 16 docs reviewed for project structure, metadata, production, forms and images.
- SEO and performance: PASS. Static Server Component content, metadata, Open Graph asset, semantic headings and optimized images are planned.
- Design system and responsive UX: PASS WITH DOCUMENTED EXCEPTION. Cobalt CTA usage follows Pencil `khBEU` even though the design system says to keep cobalt scarce on marketing surfaces.

## Project Structure

### Documentation (this feature)

```text
specs/001-home-prototype-page/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── asset-inventory.md
│   ├── proposal-form.md
│   └── ui-fidelity.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
app/
├── _components/
│   └── home/
│       ├── HomePage.tsx
│       ├── TopNavigation.tsx
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProcessSection.tsx
│       ├── WhatsAppSpotlight.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogInsightsSection.tsx
│       ├── ContactSection.tsx
│       ├── ProfessionalFooter.tsx
│       ├── ContactForm.tsx
│       └── home-content.ts
├── actions/
│   └── proposal.ts
├── page.tsx
├── layout.tsx
├── opengraph-image.png
├── robots.ts
└── sitemap.ts

lib/
├── schemas/
│   └── proposal.ts
└── services/
    └── proposal-service.ts

public/
└── images/
    └── home/
        ├── hero-visual.jpg
        ├── whatsapp-spotlight.png
        ├── testimonial-mariana.jpg
        ├── testimonial-rafael.jpg
        ├── testimonial-juliana.jpg
        └── og-home.png
```

**Structure Decision**: Keep route-specific home UI in `app/_components/home/` because this feature owns a single page and the current repo has no existing component library. Put validation and submission logic in `lib/schemas/` and `lib/services/` so the Server Action remains thin. Put Pencil-derived images in `public/images/home/` to avoid external image dependency, layout shift and remote image configuration risk.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Cobalt CTA on marketing surface | Pencil `khBEU` uses `#0064E0` as the primary CTA color throughout the home | Replacing cobalt with black would reduce visual fidelity to the approved prototype |

## Phase 0: Research Output

See [research.md](./research.md).

## Phase 1: Design Output

- Data model: [data-model.md](./data-model.md)
- UI fidelity contract: [contracts/ui-fidelity.md](./contracts/ui-fidelity.md)
- Proposal form contract: [contracts/proposal-form.md](./contracts/proposal-form.md)
- Asset inventory contract: [contracts/asset-inventory.md](./contracts/asset-inventory.md)
- Quickstart validation: [quickstart.md](./quickstart.md)

## Post-Design Constitution Check

- IREX source of truth: PASS. Artifacts lock Pencil `khBEU` sections, copy, imagery and CTAs as source of truth.
- SOLID and componentization: PASS. Plan separates content data, sections, schema and service.
- OWASP security: PASS. Proposal contract requires server-side schema validation and safe error responses.
- Next.js App Router: PASS. Plan uses `app/page.tsx`, metadata files, Server Components and Server Action patterns from local docs.
- SEO and performance: PASS. Plan includes metadata, OG, sitemap/robots, local assets and reduced client JS.
- Design system and responsive UX: PASS WITH DOCUMENTED EXCEPTION. Cobalt CTA exception remains intentional for prototype fidelity.
