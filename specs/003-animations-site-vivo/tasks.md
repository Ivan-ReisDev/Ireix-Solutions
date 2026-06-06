# Tasks: Animações para Deixar o Site Mais Vivo

**Input**: Spec documents from `/specs/003-animations-site-vivo/`

**Prerequisites**: plan.md (required), spec.md (required)

**Tests**: `npm run build`, verificação visual em desktop e mobile, teste com `prefers-reduced-motion`, Lighthouse

## Path Conventions

- **Animation wrappers**: `app/_components/shared/`
- **Home sections**: `app/(pages)/(home)/_components/`
- **Dependency**: `framer-motion@^12.40.0`

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Instalar `framer-motion` — `npm install framer-motion`
- [ ] T002 Criar `app/_components/shared/animation-provider.tsx` — contexto com variantes globais + `useReducedMotion`
- [ ] T03 Criar `app/_components/shared/fade-in-view.tsx` — wrapper `motion.div` com `useInView`, fade-up, opcional delay/stagger
- [ ] T004 Criar `app/_components/shared/stagger-container.tsx` — container com `staggerChildren` + `useInView`

## Phase 2: Hero + Navegação

- [ ] T005 [P] Alterar `HeroSection.tsx` — `"use client"`, adicionar stagger reveal nos elementos filho
- [ ] T006 [P] Alterar `TopNavigation.tsx` — `useScroll` + `useTransform` para opacity do background

## Phase 3: Seções com Scroll Reveal

- [ ] T007 [P] Alterar `ServicesSection.tsx` — `"use client"`, grid com stagger-container, cards com hover (scale 1.02)
- [ ] T008 [P] Alterar `ProcessSection.tsx` — `"use client"`, steps com fade-in + slide lateral alternado
- [ ] T009 [P] Alterar `WhatsAppSpotlight.tsx` — `"use client"`, fade-up reveal
- [ ] T010 [P] Alterar `TestimonialsSection.tsx` — `"use client"`, stagger fade-up nos 3 cards
- [ ] T011 [P] Alterar `BlogInsightsSection.tsx` — `"use client"`, stagger fade-up nos 3 cards
- [ ] T012 [P] Alterar `ContactSection.tsx` — `"use client"`, fade-up + stagger nos campos
- [ ] T013 [P] Alterar `ProfessionalFooter.tsx` — `"use client"`, fade-in simples

## Phase 4: Hover + Interação

- [ ] T014 Adicionar `whileHover` nos cards de serviço (scale 1.02, y: -4)
- [ ] T015 Adicionar `whileHover` + `whileTap` nos botões CTA

## Phase 5: Acessibilidade e Verificação

- [ ] T016 Verificar que `prefers-reduced-motion: reduce` desativa todas as animações
- [ ] T017 `npm run build` sem erros
- [ ] T018 Lighthouse performance audit sem degradação significativa
- [ ] T019 Capturar screenshots comparando com/sem animações

## Phase 6: Entrega

- [ ] T020 Limpar `console.log` e código temporário
- [ ] T021 Atualizar documentação se necessário