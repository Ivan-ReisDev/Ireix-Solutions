# Tasks: Reframe de Serviços — Stack → Valor para o Cliente

**Input**: Spec documents from `/specs/002-services-value-reframe/`

**Prerequisites**: plan.md (required), spec.md (required)

**Tests**: `npm run build`, verificação visual em browser desktop e mobile

## Phase 1: Alteração de Conteúdo

- [ ] T001 [P] Alterar card "React e Next.js" para "Interfaces modernas e responsivas" com descrição focada em valor no arquivo `app/(pages)/(home)/_components/home-content.ts`
- [ ] T002 [P] Alterar card "Backend e APIs" para "Infraestrutura e APIs" com descrição focada em valor no arquivo `app/(pages)/(home)/_components/home-content.ts`
- [ ] T003 Verificar que os demais 7 cards permanecem inalterados em `app/(pages)/(home)/_components/home-content.ts`

## Phase 2: Verificação

- [ ] T004 Rodar `npm run build` e confirmar compilação sem erros
- [ ] T005 Verificar visualmente em desktop (1440px) que os cards estão corretos
- [ ] T006 Verificar visualmente em mobile que o layout não quebrou

## Phase 3: Entrega

- [ ] T007 Capturar screenshot da seção de serviços antes e depois da alteração
- [ ] T008 Registrar branch e merge (se aplicável)
