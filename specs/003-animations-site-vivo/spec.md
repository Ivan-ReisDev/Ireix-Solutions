# Feature Specification: Animações para Deixar o Site Mais Vivo

**Feature Branch**: `003-animations-site-vivo`

**Created**: 2026-06-06

**Status**: Draft

**Input**: A home da Ireix Solution é estática — seções aparecem sem transição, cards não reagem a hover/scroll. O site precisa de animações sutis para transmitir modernidade, profissionalismo e engajamento, sem comprometer performance ou acessibilidade.

## Pesquisa de Biblioteca

### Opções Consideradas

| Biblioteca | Versão | Bundle | React 19 | Next 16 | Veredito |
|---|---|---|---|---|---|
| **framer-motion / motion** | 12.40.0 | ~15kB gzip | ✅ | ✅ | ✅ **Escolhida** |
| Tailwind CSS animate + keyframes | nativo | 0kB | ✅ | ✅ | ⚠️ Limitado para sequências |
| GSAP | 3.12 | ~30kB gzip | ⚠️ API imperativa | ✅ | ❌ Overkill |
| react-spring | 9.7 | ~12kB gzip | ✅ | ✅ | ⚠️ Menos recursos de scroll |
| AOS | 2.3 | ~8kB gzip | ⚠️ Não React | ✅ | ❌ Não React-native |

### Por que framer-motion?

1. **React 19 + Next.js 16 compatível** — versão 12.40.0 tem suporte oficial
2. **`useInView`** — hook nativo para animações acionadas por scroll, ideal para seções que aparecem
3. **`stagger`** — animação em cascata perfeita para grid de 9 cards de serviços
4. **`whileHover` / `whileTap`** — interações por gestos sem JS manual
5. **`AnimatePresence`** — para mobile menu e transições suaves
6. **Tree-shakeable** — só entra no bundle o que for usado
7. **Server Components seguro** — animações rodam apenas no client com `"use client"`

## Animações Planejadas por Seção

| Seção | Animação | Gatilho |
|---|---|---|
| **TopNavigation** | Sombra/background mais opaco ao scroll | Scroll |
| **HeroSection** | Stagger reveal: badges → título → body → CTAs → métricas → imagem | Page load |
| **ServicesSection (9 cards)** | Stagger fade-up, cada card aparece em cascata | Scroll into view |
| **ProcessSection (4 steps)** | Fade-in com slide lateral alternado (esquerda/direita) | Scroll into view |
| **WhatsAppSpotlight** | Reveal suave com parallax sutil no fundo | Scroll into view |
| **TestimonialsSection (3 cards)** | Stagger fade-up + scale leve | Scroll into view |
| **BlogInsightsSection (3 cards)** | Stagger fade-up | Scroll into view |
| **ContactSection** | Formulário fade-in, campos aparecem sequencialmente | Scroll into view |
| **Footer** | Fade-in simples | Scroll into view |
| **Cards / Botões (geral)** | `whileHover: scale(1.02)`, `whileTap: scale(0.98)` | Hover / click |

**Princípio**: Todas as animações devem ser sutis (200-500ms), com `ease` suave e respeitando `prefers-reduced-motion`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Seções Aparecem Suavemente ao Rolar (Priority: P1)

Como visitante navegando pela home, quero que cada seção apareça com uma transição suave ao rolar, para ter uma experiência fluida e profissional.

**Acceptance Scenarios**:
1. **Given** um visitante rolando a página, **When** a seção de serviços entra no viewport, **Then** os 9 cards aparecem um após o outro (stagger) com fade-up.
2. **Given** um visitante rolando até "Processo", **When** a seção entra no viewport, **Then** as 4 etapas aparecem com slide lateral alternado.
3. **Given** um visitante com `prefers-reduced-motion: reduce`, **When** a página carrega, **Then** todas as animações são desativadas e o conteúdo aparece normalmente.

### User Story 2 — Interação em Cards e Botões (Priority: P2)

Como visitante, quero feedback visual ao passar o mouse ou clicar em cards e botões, para sentir que a interface é reativa.

**Acceptance Scenarios**:
1. **Given** um visitante passando o mouse sobre um card de serviço, **When** o hover inicia, **Then** o card escala suavemente para 1.02 e eleva a sombra.
2. **Given** um visitante clicando em um CTA, **When** o clique acontece, **Then** o botão escala para 0.98 (feedback tátil).

### User Story 3 — Hero Animado no Carregamento (Priority: P3)

Como visitante chegando pela primeira vez, quero que o hero tenha uma entrada animada sutil, para causar uma boa primeira impressão.

**Acceptance Scenarios**:
1. **Given** um visitante acessando a página, **When** a página carrega, **Then** os badges aparecem primeiro, seguidos pelo título, body, CTAs e métricas em cascata.

### Edge Cases

- `prefers-reduced-motion: reduce` DESATIVA todas as animações (CSS `@media` + framer-motion `useReducedMotion`)
- Animações só carregam JS no client (Server Components puros não são afetados)
- Viewport menor (mobile) mantém as animações, adaptando direção do slide
- Sem animações infinitas ou piscantes que possam causar desconforto

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O projeto DEVE instalar `framer-motion` (^12.40.0) como dependência.
- **FR-002**: HeroSection DEVE ter stagger reveal com `useInView` ou `initial + animate` com cascade nos elementos: chips → title → body → CTAs → metrics → visual.
- **FR-003**: ServicesSection DEVE ter stagger fade-up nos 9 cards quando entrarem no viewport.
- **FR-004**: ProcessSection DEVE ter fade-in com slide lateral alternado (odd steps left, even steps right).
- **FR-005**: WhatsAppSpotlight DEVE ter reveal suave com fade-up.
- **FR-006**: TestimonialsSection DEVE ter stagger fade-up nos 3 cards.
- **FR-007**: BlogInsightsSection DEVE ter stagger fade-up nos 3 cards.
- **FR-008**: ContactSection DEVE ter fade-up no container e stagger nos campos do formulário.
- **FR-009**: ProfessionalFooter DEVE ter fade-in simples.
- **FR-010**: Todos os cards de serviço DEVM ter `whileHover: scale(1.02)` com transição suave.
- **FR-011**: TopNavigation DEVE aumentar opacidade do background ao scroll (via `useScroll` + `useTransform`).
- **FR-012**: Animações DEVEM respeitar `prefers-reduced-motion`, desativando completamente.
- **FR-013**: Nenhuma animação DEVE ultrapassar 500ms de duração.
- **FR-014**: A build (`npm run build`) DEVE passar sem erros.

### Non-Functional Requirements

- **Performance**: LCP não deve aumentar mais que 100ms. Framer Motion é tree-shakeable e só entra no client.
- **Bundle**: Apenas os componentes animados (`"use client"`) carregam o JS de animação.
- **Acessibilidade**: `prefers-reduced-motion` respeitado em todas as animações. Sem elementos piscantes ou movimento infinito.
- **Manutenção**: Animações definidas via variantes (`variants` object) centralizadas ou colocated no próprio componente.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `npm run build` passa sem erros.
- **SC-002**: Em desktop 1440px, rolando a página do início ao fim, cada seção aparece com animação suave.
- **SC-003**: Cards de serviço tem hover effect perceptível (scale 1.02).
- **SC-004**: Com `prefers-reduced-motion: reduce`, a página aparece 100% estática sem animações.
- **SC-005**: Lighthouse Performance não degrada mais que 5 pontos.
- **SC-006**: Bundle analysis mostra framer-motion apenas nos client components necessários.

## Assumptions

- Os componentes atuais serão convertidos para `"use client"` (quando necessário) ou receberão wrappers de animação.
- Animações serão sutis — o foco é tornar o site "vivo", não "chamativo".
- Navegadores modernos (Chrome, Firefox, Safari, Edge últimos 2 anos) são o alvo.
- O protótipo Pencil `khBEU` pode ser consultado para referência visual, mas animações são adição criativa.
