# Feature Specification: Reframe de Serviços — Stack → Valor para o Cliente

**Feature Branch**: `002-services-value-reframe`

**Created**: 2026-06-06

**Status**: Draft

**Input**: Os cards "React e Next.js" e "Backend e APIs" na seção de serviços da home descrevem tecnologias específicas (Next.js, React, NestJS), que não comunicam valor de negócio para o cliente. O cliente contrata resultado, não framework.

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Serviços Comunicam Valor, Não Tecnologia (Priority: P1)

Como visitante avaliando a Ireix Solution, quero que os cards de serviço descrevam o benefício para meu negócio, não o nome de frameworks ou bibliotecas, para entender o que eu ganho sem precisar conhecer tecnologia.

**Why this priority**: Clientes que não são técnicos representam a maioria do público e precisam entender claramente o valor de cada serviço.

**Independent Test**: Abrir a página principal em desktop e verificar que os 9 cards de serviço usam linguagem de benefício/valor, sem mencionar nomes de frameworks específicos (Next.js, React, NestJS, etc.).

**Acceptance Scenarios**:

1. **Given** um visitante não-técnico na seção de serviços, **When** ele lê o card anteriormente chamado "React e Next.js", **Then** ele vê "Interfaces modernas e responsivas" com descrição focada em resultado (design system, performance, conversão).
2. **Given** um visitante não-técnico na seção de serviços, **When** ele lê o card anteriormente chamado "Backend e APIs", **Then** ele vê "Infraestrutura e APIs" com descrição focada em segurança, integração e escalabilidade.
3. **Given** um desenvolvedor experiente, **When** ele lê os cards, **Then** ele ainda reconhece o escopo técnico mesmo sem nomes de frameworks explícitos.

### Edge Cases

- Os 7 cards restantes não devem ser alterados, permanecendo idênticos em título, descrição e ícone.
- A alteração não deve quebrar layout, responsividade ou grid dos cards.
- Metadados de SEO, acessibilidade e navegação interna devem permanecer intactos.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O card com `icon: "Code2"` MUST ter title alterado de "React e Next.js" para "Interfaces modernas e responsivas" e description alterada para remover menção a Next.js, React e TypeScript, focando em valor de negócio.
- **FR-002**: O card com `icon: "ServerCog"` MUST ter title alterado de "Backend e APIs" para "Infraestrutura e APIs" e description alterada para remover menção a NestJS, focando em segurança, integração e escalabilidade.
- **FR-003**: Os demais 7 cards MUST permanecer inalterados.
- **FR-004**: O layout, grid, ícones e responsividade da seção de serviços MUST permanecer idêntico ao atual.
- **FR-005**: A alteração MUST ser feita exclusivamente no arquivo `app/(pages)/(home)/_components/home-content.ts`.

### Key Entities

- **Card de Serviço**: Item da seção de serviços com title, description e icon. A alteração afeta apenas os campos title e description de dois cards específicos.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em desktop de 1440px, a seção de serviços apresenta 9 cards com os mesmos ícones, grid e layout de antes.
- **SC-002**: Os cards "Interfaces modernas e responsivas" e "Infraestrutura e APIs" não mencionam Next.js, React, NestJS ou TypeScript.
- **SC-003**: As novas descrições comunicam valor de negócio (performance, conversão, segurança, escalabilidade, integração).
- **SC-004**: `npm run build` passa sem erros.
- **SC-005**: A página renderiza sem quebras visuais em desktop e mobile.

## Assumptions

- O conteúdo dos demais 7 cards está correto e não precisa de alteração.
- O protótipo Pencil `khBEU` será atualizado posteriormente para refletir os novos nomes.
- A mudança é exclusivamente de conteúdo textual, sem impacto em estruturas de dados, tipagens ou componentes.
