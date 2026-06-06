# Data Model: Página Principal pelo Protótipo Pencil

## PageContent

Represents the complete home page content copied from Pencil node `khBEU`.

**Fields**:
- `navigation`: NavigationContent
- `hero`: HeroContent
- `services`: Service[]
- `process`: ProcessSection
- `spotlight`: WhatsAppSpotlight
- `testimonials`: Testimonial[]
- `blog`: BlogSection
- `contact`: ContactSection
- `footer`: FooterContent

**Validation Rules**:
- Must contain all 8 major sections in the order defined by the spec.
- Must preserve prototype text exactly unless a later content approval changes it.
- Must be renderable without client-side data fetching.

## NavigationContent

**Fields**:
- `brandName`: "Ireix Solution"
- `brandTagline`: "solucoes digitais para crescimento"
- `links`: CTA[] for Processo, Soluções, Contato
- `primaryCta`: CTA for Falar no WhatsApp
- `secondaryCta`: CTA for Acesso do cliente

**Relationships**:
- Links target anchors or configured routes.

## HeroContent

**Fields**:
- `chips`: "Mais vendas no digital", "Menos tarefas manuais"
- `title`: Main H1
- `body`: Supporting paragraph
- `ctas`: Solicitar proposta, Conhecer serviços
- `metrics`: Metric[]
- `visual`: AssetVisual for `hero-visual.jpg`
- `overlayTitle`: "Tecnologia que resolve gargalos reais do negócio."
- `overlayBody`: Supporting overlay text

**Validation Rules**:
- Exactly one H1 on the page.
- Metrics must include `15+`, `24h`, `100%`.

## Service

**Fields**:
- `title`: Service name
- `description`: Service copy
- `icon`: Lucide icon key

**Required Records**:
- Sites profissionais
- Sistemas web
- React e Next.js
- Backend e APIs
- Automações
- IA para empresas
- WhatsApp Business API
- SEO e performance
- MVPs e consultoria

**Validation Rules**:
- Exactly 9 services.
- Each service requires title, description and icon.

## ProcessStep

**Fields**:
- `number`: `01` through `04`
- `title`: Diagnóstico, Prototipação, Desenvolvimento, Evolução
- `description`: Step body copied from Pencil

**Validation Rules**:
- Exactly 4 steps.
- Numbers must be sequential and visible.

## WhatsAppSpotlight

**Fields**:
- `eyebrow`: "WHATSAPP + IA"
- `title`: Spotlight heading
- `body`: Spotlight body
- `ctas`: Quero WhatsApp inteligente, Ver integrações
- `background`: AssetVisual for `whatsapp-spotlight.png`
- `chatMock`: ChatMock

## ChatMock

**Fields**:
- `assistantName`: "Ireix Assistant"
- `status`: "automacao ativa"
- `badge`: "WhatsApp conectado"
- `contextLabel`: "Fluxo sugerido"
- `contextValue`: "Qualificar leads e encaminhar proposta"
- `messages`: ChatMessage[]
- `composerPlaceholder`: "Escreva uma mensagem..."

## Testimonial

**Fields**:
- `rating`: five stars
- `quote`: Main testimonial quote
- `supportCopy`: Supporting text
- `outcome`: Highlight chip
- `personName`: Person name
- `personRole`: Person role
- `avatar`: AssetVisual

**Required Records**:
- Mariana Costa
- Rafael Mendes
- Juliana Alves

## BlogCard

**Fields**:
- `tag`: SEO, AUTOMAÇÃO or IA
- `icon`: Lucide icon key
- `title`: Article title
- `summary`: Article summary
- `cta`: "Ler artigo"
- `href`: Internal route or fallback anchor

**Validation Rules**:
- Exactly 3 cards.
- Cards can link to placeholders only if the link behavior is explicit and non-broken.

## ContactSection

**Fields**:
- `eyebrow`: "CONTATO"
- `title`: Contact heading
- `body`: Contact paragraph
- `bullets`: Contact assurance bullets
- `whatsappCta`: CTA
- `form`: ProposalForm

## ProposalForm

Represents the user's proposal request.

**Fields**:
- `name`: string, required, 2-120 characters
- `email`: string, required, valid email
- `phone`: string, required, 8-20 digits after normalization
- `projectType`: string, required, one of approved options
- `message`: string, required, 20-2000 characters

**State Transitions**:
- `idle` -> initial state
- `invalid` -> after failed validation, with field errors and preserved values
- `submitting` -> while user submission is pending
- `success` -> accepted by server action/service
- `error` -> unexpected failure with safe generic message

## CTA

**Fields**:
- `label`: visible text
- `href`: anchor, route, WhatsApp URL or fallback route
- `variant`: primary, secondary, whatsapp, footer
- `purpose`: navigation, conversion, support, content

**Validation Rules**:
- Must be keyboard focusable.
- Must not have empty or broken destination.

## AssetVisual

**Fields**:
- `filename`: local filename under `public/images/home/`
- `source`: Pencil URL or local source path
- `alt`: user-facing alternative text or empty string for decorative assets
- `width`: intrinsic or target width
- `height`: intrinsic or target height
- `role`: hero, background, avatar, social image

**Validation Rules**:
- Must have stable dimensions or a fixed aspect-ratio parent.
- Must preserve visual crop from Pencil.
