# Implementation Plan: Animações para Deixar o Site Mais Vivo

**Branch**: `003-animations-site-vivo` | **Date**: 2026-06-06 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-animations-site-vivo/spec.md`

## Summary

Adicionar animações sutis em todas as seções da home Ireix Solution usando **Framer Motion 12.40.0**. A abordagem é progressiva — instalar a lib, criar um contexto de animação compartilhado (reduced motion provider), e envolver cada seção com animações de scroll reveal, stagger e hover.

**Abordagem técnica**: Criar um `animation-provider.tsx` que detecta `prefers-reduced-motion` e expõe variantes compartilhadas. Cada seção recebe um `AnimationWrapper` ou implementa `motion.div` diretamente com variantes pré-definidas. Crescimento de bundle controlado via tree-shaking e `"use client"` apenas nos wrappers.

## Pesquisa de Biblioteca

**Decisão**: Framer Motion 12.40.0 ✅

| Fator | Avaliação |
|---|---|
| React 19 compat | ✅ Atualizado para React 19 |
| Next.js 16 App Router | ✅ `"use client"` boundary + SSR compatível |
| Scroll animations | ✅ `useInView` hook nativo |
| Stagger (cascata) | ✅ `staggerChildren` em variantes |
| Gestos (hover/tap) | ✅ `whileHover`, `whileTap` |
| Bundle impact | ~15kB gzip, tree-shakeable |
| Reduced motion | ✅ `useReducedMotion` hook |
| Manutenção | API madura e estável |

## Constitution Check

*GATE: Must pass before implementation.*

- **IREX source of truth**: PASS. Animações são melhoria sobre a home existente, não substituição de conteúdo.
- **SOLID and componentization**: PASS. Animações serão wrappers reutilizáveis, não lógica embutida em componentes de negócio.
- **OWASP security**: PASS. Animações não processam dados de usuário nem alteram estado de formulários.
- **Next.js App Router**: PASS. `"use client"` isolado em wrappers de animação; Server Components permanecem puros.
- **SEO and performance**: PASS. Conteúdo continua estático e crawlable. Animações não afetam LCP significativamente.
- **Design system and responsive UX**: PASS. Animações adaptativas (reduced-motion, mobile-first).
- **Acessibilidade**: PASS. `prefers-reduced-motion` desativa todas as animações.

## Complexity Tracking

Sem violações de constituição.

## Project Structure

### Documentation (this feature)

```text
specs/003-animations-site-vivo/
├── spec.md         (este arquivo)
└── plan.md
└── tasks.md
```

### Source Code (new / altered files)

```text
app/_components/
└── shared/
    ├── animation-provider.tsx    (NOVO — contexto de animação)
    ├── fade-in-view.tsx          (NOVO — wrapper fade-up com useInView)
    └── stagger-container.tsx     (NOVO — wrapper stagger para grids)

app/(pages)/(home)/_components/
├── TopNavigation.tsx             (ALTERADO — scroll effect)
├── HeroSection.tsx               (ALTERADO — stagger reveal)
├── ServicesSection.tsx           (ALTERADO — stagger cards + hover)
├── ProcessSection.tsx            (ALTERADO — slide alternado)
├── WhatsAppSpotlight.tsx         (ALTERADO — fade reveal)
├── TestimonialsSection.tsx       (ALTERADO — stagger cards)
├── BlogInsightsSection.tsx       (ALTERADO — stagger cards)
├── ContactSection.tsx            (ALTERADO — stagger form)
└── ProfessionalFooter.tsx        (ALTERADO — fade-in)
```

## Phase 0: Setup

1. Instalar `framer-motion` no projeto
2. Criar `app/_components/shared/` diretório
3. Criar `animation-provider.tsx` com variantes globais e hook de reduced motion
4. Criar `fade-in-view.tsx` — wrapper de fade-up com `useInView`
5. Criar `stagger-container.tsx` — container com `staggerChildren`

## Phase 1: Hero + Navegação

1. HeroSection: `motion.div` com variantes de stagger para cada elemento filho
2. TopNavigation: `useScroll` + `useTransform` para background opacity progressivo

## Phase 2: Seções com Scroll Reveal

1. ServicesSection: Envolver grid em `stagger-container`, cada card em `motion.div`
2. ProcessSection: Steps com fade-in + slide lateral alternado
3. WhatsAppSpotlight: Fade-up reveal
4. TestimonialsSection: Stagger fade-up
5. BlogInsightsSection: Stagger fade-up
6. ContactSection: Stagger campos do formulário
7. Footer: Fade-in simples

## Phase 3: Hover + Interação

1. Cards de serviço: `whileHover: { scale: 1.02, y: -4 }`
2. Botões CTA: `whileHover: { scale: 1.03 }`, `whileTap: { scale: 0.97 }`

## Phase 4: Acessibilidade + Verificação

1. Testar com `prefers-reduced-motion: reduce`
2. `npm run build` sem erros
3. Lighthouse audit não degradado