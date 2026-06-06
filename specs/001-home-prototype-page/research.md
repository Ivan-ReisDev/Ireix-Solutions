# Research: Página Principal pelo Protótipo Pencil

## Decision: Use Next.js App Router with Server Components for the homepage

**Rationale**: Local Next.js 16 docs confirm `app/page.tsx` is the public route for `/`, route folders colocate safely, and Server Components are the default production/performance path. The homepage is mostly static marketing content and should be crawlable without client JavaScript.

**Alternatives considered**:
- Client-only homepage: rejected because it increases JavaScript and weakens crawlability.
- Pages Router: rejected because the project already uses App Router and the constitution requires App Router for new routes.

## Decision: Colocate home-specific sections under `app/_components/home/`

**Rationale**: The repository currently has no `components/` directory or reusable UI library. The home sections are specific to this page and map directly to Pencil `khBEU`, so colocating them keeps ownership clear and avoids premature abstraction. Reusable primitives can move to `components/` only after another route needs them.

**Alternatives considered**:
- Put every section in root `components/`: rejected because these are not yet shared across the application.
- Keep all markup in `app/page.tsx`: rejected because the page has 8 sections and would become hard to maintain.

## Decision: Copy Pencil assets into `public/images/home/`

**Rationale**: The prototype references Unsplash URLs and one local generated image. Copying assets into the app makes the visual result stable, avoids external remote image configuration for every image, improves cacheability and supports exact visual comparison.

**Alternatives considered**:
- Use remote Unsplash URLs directly: rejected due external availability, optimization configuration and future visual drift.
- Recreate images manually: rejected because the user explicitly asked to use the same images.

## Decision: Use `next/image` for photographic and avatar assets

**Rationale**: Local Next docs require width/height or fill with stable parent dimensions to prevent layout shift. The prototype has fixed-size visual areas: hero visual, spotlight background and 48px avatars.

**Alternatives considered**:
- CSS background images only: accepted only for decorative overlay backgrounds where accessibility text is not needed; rejected for meaningful hero and avatar assets.
- Plain `<img>`: rejected because `next/image` provides built-in optimization and layout stability.

## Decision: Use Server Action plus Zod for proposal form

**Rationale**: Local Next forms docs recommend Server Actions for forms and Zod for server-side validation. The constitution requires OWASP and Zod/equivalent validation for inputs. The action should call a service and return a typed state with field errors or success.

**Alternatives considered**:
- Client-only validation: rejected because it does not satisfy server-side validation.
- Route Handler endpoint: viable, but Server Action better matches the page form and progressive enhancement.

## Decision: Add `lucide-react` for icons used in the prototype

**Rationale**: Pencil uses Lucide icons (`monitor`, `layout-dashboard`, `code`, `server-cog`, `workflow`, `bot`, `message-circle`, `search-check`, `rocket`, `arrow-right`, `check`, `sparkles`). The project has no icon library; using Lucide preserves fidelity and avoids hand-drawn SVG duplication.

**Alternatives considered**:
- Inline SVGs: rejected because it duplicates an established icon set from the prototype.
- Icon font: rejected because Lucide React has direct named icons and smaller scoped imports.

## Decision: Keep visual fidelity priority over generic design-system cobalt guidance

**Rationale**: `docs/designer-system.md` recommends scarce cobalt on marketing surfaces, but the approved Pencil node uses cobalt `#0064E0` as the primary CTA color. The user's explicit goal is an identical copy, so the implementation should preserve the prototype and document the exception.

**Alternatives considered**:
- Convert CTAs to black marketing buttons: rejected because it would intentionally diverge from `khBEU`.

## Decision: Use a content map for repeated sections

**Rationale**: Services, process steps, testimonials and blog cards are structured repeated data. A typed `home-content.ts` keeps text aligned with the prototype, prevents copy scatter and allows simple rendering loops without making a CMS or backend.

**Alternatives considered**:
- Hardcode each card inline: rejected due duplication and harder verification against Pencil.
- Add CMS/data fetching: rejected as out of scope for a static home copy.

## Decision: Verify with build, lint and visual viewport checks

**Rationale**: The feature's risk is visual fidelity and responsive layout. `npm run lint` and `npm run build` catch code issues; desktop/mobile browser checks catch text overflow, layout shifts and prototype mismatch.

**Alternatives considered**:
- Unit tests only: rejected because they cannot validate the primary visual requirement.
