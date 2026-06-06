# Tasks: Página Principal pelo Protótipo Pencil

**Input**: Design documents from `/specs/001-home-prototype-page/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Automated tests are not requested for this feature. Validation tasks focus on lint, build, browser checks, form behavior, accessibility, SEO, and visual comparison against Pencil node `khBEU`.

**Organization**: Tasks are grouped by user story so the homepage can be delivered incrementally: first the visible hero MVP, then the credibility/content sections, then contact conversion.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and does not depend on incomplete tasks
- **[Story]**: User story label for story phases only
- Every task includes exact file paths

## Path Conventions

- **Home route**: `app/page.tsx`
- **Route-only home UI**: `app/_components/home/`
- **Server Action**: `app/actions/proposal.ts`
- **Validation and service logic**: `lib/schemas/proposal.ts`, `lib/services/proposal-service.ts`
- **Homepage assets**: `public/images/home/`
- **Feature docs**: `specs/001-home-prototype-page/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare dependencies, folders, assets, and project guidance before implementation.

- [x] T001 [P] Review implementation sources in `specs/001-home-prototype-page/spec.md`, `specs/001-home-prototype-page/plan.md`, `specs/001-home-prototype-page/contracts/ui-fidelity.md`, `docs/designer-system.md`, and `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- [x] T002 Install `zod` and `lucide-react`, updating `package.json` and `package-lock.json`
- [x] T003 Create feature directories `app/_components/home/`, `app/actions/`, `lib/schemas/`, `lib/services/`, and `public/images/home/`
- [x] T004 Copy or download required Pencil assets into `public/images/home/hero-visual.jpg`, `public/images/home/whatsapp-spotlight.png`, `public/images/home/testimonial-mariana.jpg`, `public/images/home/testimonial-rafael.jpg`, `public/images/home/testimonial-juliana.jpg`, and `public/images/home/og-home.png` per `specs/001-home-prototype-page/contracts/asset-inventory.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the static content map, base styling, and root route shell that all stories depend on.

**CRITICAL**: No user story work can begin until this phase is complete.

- [x] T005 Define homepage typed content, CTA URLs, asset references, service cards, process steps, testimonials, blog cards, contact copy, and footer copy in `app/_components/home/home-content.ts`
- [x] T006 Update global design tokens, body defaults, focus styles, anchor scroll behavior, and responsive base rules in `app/globals.css`
- [x] T007 Update site language, Montserrat-compatible font setup, IREX metadata defaults, and Open Graph defaults in `app/layout.tsx`
- [x] T008 Create the homepage composition shell in `app/_components/home/HomePage.tsx` with section placeholders in Pencil order
- [x] T009 Replace scaffold content in `app/page.tsx` with the server-rendered `HomePage` entry point from `app/_components/home/HomePage.tsx`

**Checkpoint**: Project has a compilable home shell, content source, base styling, and local assets ready for story implementation.

---

## Phase 3: User Story 1 - Entender a Oferta na Home (Priority: P1) MVP

**Goal**: A visitor sees the IREX brand, navigation, hero proposition, CTAs, metrics, and hero visual matching Pencil `khBEU`.

**Independent Test**: Open `/` on desktop and mobile and confirm the top navigation and hero contain the exact brand, links, chips, title, body, CTAs, metrics, and visual from `spec.md`, with no clipping or overlap.

### Implementation for User Story 1

- [x] T010 [P] [US1] Implement `TopNavigation` with brand, tagline, nav links, WhatsApp CTA, client access link, and mobile behavior in `app/_components/home/TopNavigation.tsx`
- [x] T011 [P] [US1] Implement `HeroSection` with chips, H1, body, CTAs, metrics, hero image, and overlay card in `app/_components/home/HeroSection.tsx`
- [x] T012 [US1] Integrate `TopNavigation` and `HeroSection` into the first viewport in `app/_components/home/HomePage.tsx`
- [x] T013 [US1] Add homepage-specific title, description, canonical, and social metadata for the root route in `app/layout.tsx`
- [x] T014 [US1] Add homepage sitemap and robots coverage in `app/sitemap.ts` and `app/robots.ts`
- [x] T015 [US1] Tune desktop and mobile first-viewport spacing, typography, button sizing, image aspect ratio, and anchor offsets in `app/_components/home/TopNavigation.tsx`, `app/_components/home/HeroSection.tsx`, and `app/globals.css`

**Checkpoint**: User Story 1 is independently functional as the MVP homepage first viewport.

---

## Phase 4: User Story 2 - Explorar Serviços, Processo e Prova Social (Priority: P2)

**Goal**: A visitor can evaluate IREX capabilities through services, process, WhatsApp + IA, testimonials, and blog teaser sections.

**Independent Test**: Scroll from services through blog and confirm every section appears in Pencil order with exact titles, cards, icons, images, CTAs, and responsive stacking.

### Implementation for User Story 2

- [x] T016 [P] [US2] Implement the 9-card services grid with Lucide icons and Pencil-matched card styling in `app/_components/home/ServicesSection.tsx`
- [x] T017 [P] [US2] Implement the process copy column, methodology CTA, and 4 numbered process steps in `app/_components/home/ProcessSection.tsx`
- [x] T018 [P] [US2] Implement the dark WhatsApp + IA spotlight, background image, CTAs, and chat mock in `app/_components/home/WhatsAppSpotlight.tsx`
- [x] T019 [P] [US2] Implement the 3 testimonial cards with stars, quotes, outcome chips, avatars, names, and roles in `app/_components/home/TestimonialsSection.tsx`
- [x] T020 [P] [US2] Implement the blog insights header, CTA, and 3 blog cards with tags, icons, summaries, and links in `app/_components/home/BlogInsightsSection.tsx`
- [x] T021 [US2] Integrate `ServicesSection`, `ProcessSection`, `WhatsAppSpotlight`, `TestimonialsSection`, and `BlogInsightsSection` into `app/_components/home/HomePage.tsx`
- [x] T022 [US2] Tune desktop grids, mobile stacking, image overlays, card heights, section padding, and text wrapping for US2 sections in `app/_components/home/ServicesSection.tsx`, `app/_components/home/ProcessSection.tsx`, `app/_components/home/WhatsAppSpotlight.tsx`, `app/_components/home/TestimonialsSection.tsx`, and `app/_components/home/BlogInsightsSection.tsx`

**Checkpoint**: User Stories 1 and 2 work independently; the homepage now communicates offer, capability, process, proof, and content authority.

---

## Phase 5: User Story 3 - Solicitar Contato Comercial (Priority: P3)

**Goal**: A visitor can contact IREX through WhatsApp or a validated proposal request form and see the full footer.

**Independent Test**: Use contact CTAs and submit the proposal form with valid and invalid data, confirming clear success/error states, preserved values, accessible labels, and footer content.

### Implementation for User Story 3

- [x] T023 [P] [US3] Implement the proposal Zod schema, project type options, normalized phone validation, and typed action state in `lib/schemas/proposal.ts`
- [x] T024 [P] [US3] Implement the proposal submission service with safe success and fallback responses in `lib/services/proposal-service.ts`
- [x] T025 [US3] Implement the thin Server Action that parses FormData, validates with schema, delegates accepted data to the service, and returns consistent state in `app/actions/proposal.ts`
- [x] T026 [US3] Implement the client-side contact form with `useActionState`, accessible labels, field errors, pending state, preserved values, and success message in `app/_components/home/ContactForm.tsx`
- [x] T027 [US3] Implement the contact section copy, assurance bullets, WhatsApp CTA, and form layout in `app/_components/home/ContactSection.tsx`
- [x] T028 [P] [US3] Implement the professional footer with brand copy, CTAs, service links, company links, contact info, copyright, and stack phrase in `app/_components/home/ProfessionalFooter.tsx`
- [x] T029 [US3] Integrate `ContactSection` and `ProfessionalFooter` into `app/_components/home/HomePage.tsx`
- [x] T030 [US3] Tune mobile contact layout, form spacing, footer stacking, WhatsApp CTA fallback, and field error presentation in `app/_components/home/ContactSection.tsx`, `app/_components/home/ContactForm.tsx`, and `app/_components/home/ProfessionalFooter.tsx`

**Checkpoint**: All user stories are independently functional; the homepage includes conversion paths and complete footer.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Verify fidelity, SEO, accessibility, performance, and final implementation quality across all stories.

- [x] T031 Validate all visible copy and section order against `specs/001-home-prototype-page/spec.md` and `app/_components/home/home-content.ts`
- [x] T032 Validate required local assets, dimensions, alt text, and visual crop against `specs/001-home-prototype-page/contracts/asset-inventory.md` and `public/images/home/`
- [x] T033 Review desktop visual fidelity at 1440px against Pencil node `khBEU` and record any deviations in `specs/001-home-prototype-page/quickstart.md`
- [x] T034 Review mobile responsiveness around 390px for no overlap, no clipping, no horizontal scroll, and usable CTAs using `app/_components/home/` and `app/globals.css`
- [x] T035 Review keyboard navigation, focus visibility, form labels, aria-live messaging, image alt text, and heading order in `app/_components/home/` and `app/page.tsx`
- [x] T036 Review SEO coverage for title, description, one H1, headings, crawlable content, social image, sitemap, and robots in `app/layout.tsx`, `app/page.tsx`, `app/opengraph-image.png`, `app/sitemap.ts`, and `app/robots.ts`
- [x] T037 Run `npm run lint` and resolve any reported issues in `app/`, `lib/`, `package.json`, and `package-lock.json`
- [x] T038 Run `npm run build` and resolve any reported issues in `app/`, `lib/`, `package.json`, and `package-lock.json`
- [x] T039 Run the browser verification checklist from `specs/001-home-prototype-page/quickstart.md` against `http://localhost:3000`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational; suggested MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational and benefits from US1 layout shell; can be developed in parallel after shell exists.
- **User Story 3 (Phase 5)**: Depends on Foundational; can be developed in parallel with US2 after shell exists.
- **Polish (Phase 6)**: Depends on all selected stories being complete.

### User Story Dependencies

- **US1**: Independent MVP after Foundational.
- **US2**: Independent content exploration after Foundational; integrates into the same `HomePage` shell.
- **US3**: Independent contact conversion after Foundational; requires proposal schema/action/service.

### Within Each User Story

- Content source before section rendering.
- Assets before image-based sections.
- Schema before Server Action.
- Service before Server Action delegation.
- Server Components before Client Components except `ContactForm.tsx`.
- Section implementation before `HomePage.tsx` integration.
- Integration before responsive/fidelity tuning.

### Parallel Opportunities

- T001 and T003 can run while dependencies/assets are prepared.
- T010 and T011 can run in parallel once Foundational is complete.
- T016, T017, T018, T019, and T020 can run in parallel because they touch separate section files.
- T023, T024, and T028 can run in parallel because they touch schema/service/footer files.
- T031 through T036 can be split after all implementation tasks are complete.

---

## Parallel Example: User Story 2

```bash
Task: "Implement the 9-card services grid with Lucide icons and Pencil-matched card styling in app/_components/home/ServicesSection.tsx"
Task: "Implement the process copy column, methodology CTA, and 4 numbered process steps in app/_components/home/ProcessSection.tsx"
Task: "Implement the dark WhatsApp + IA spotlight, background image, CTAs, and chat mock in app/_components/home/WhatsAppSpotlight.tsx"
Task: "Implement the 3 testimonial cards with stars, quotes, outcome chips, avatars, names, and roles in app/_components/home/TestimonialsSection.tsx"
Task: "Implement the blog insights header, CTA, and 3 blog cards with tags, icons, summaries, and links in app/_components/home/BlogInsightsSection.tsx"
```

## Parallel Example: User Story 3

```bash
Task: "Implement the proposal Zod schema, project type options, normalized phone validation, and typed action state in lib/schemas/proposal.ts"
Task: "Implement the proposal submission service with safe success and fallback responses in lib/services/proposal-service.ts"
Task: "Implement the professional footer with brand copy, CTAs, service links, company links, contact info, copyright, and stack phrase in app/_components/home/ProfessionalFooter.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Validate desktop/mobile first viewport against Pencil `khBEU`.
5. Stop for review if a quick MVP demo is needed.

### Incremental Delivery

1. Setup + Foundational creates the route shell, content source, base styling, and assets.
2. US1 replaces scaffold with a working branded hero.
3. US2 fills the long-form marketing/proof sections.
4. US3 adds conversion form and footer.
5. Polish validates full visual fidelity, SEO, accessibility, performance, lint and build.

### Format Validation

All tasks above use the required checklist format:

```text
checkbox + T### + optional [P] + optional [US#] + description with file path
```
