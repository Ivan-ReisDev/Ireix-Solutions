# Implementation Plan: Reframe de Serviços — Stack → Valor para o Cliente

**Branch**: `002-services-value-reframe` | **Date**: 2026-06-06 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-services-value-reframe/spec.md`

## Summary

Substituir o título e descrição de dois cards da seção de serviços da home: "React e Next.js" → "Interfaces modernas e responsivas" e "Backend e APIs" → "Infraestrutura e APIs", removendo menções a frameworks específicos (Next.js, React, TypeScript, NestJS) e adotando linguagem de valor de negócio para o cliente.

A alteração é puramente de conteúdo no arquivo `app/(pages)/(home)/_components/home-content.ts` — sem mudanças em componentes, tipagens, layout ou estrutura de dados.

## Technical Context

**Language/Version**: TypeScript 5, React 19.2.4, Next.js 16.2.7 App Router

**Primary Dependencies**: Nenhuma nova dependência. O projeto já usa `lucide-react` e os ícones `Code2` e `ServerCog` permanecem os mesmos.

**Storage**: Sem impacto em armazenamento.

**Testing**: `npm run build` para verificar compilação, verificação visual em browser desktop e mobile.

**Target Platform**: Página web pública — home Ireix Solution

**Project Type**: Web application / marketing website

**Performance Goals**: Sem impacto. Apenas conteúdo textual estático alterado.

**Constraints**: 
- Os ícones `Code2` e `ServerCog` devem permanecer os mesmos
- Os 7 cards restantes não podem ser alterados
- Layout, grid e responsividade devem permanecer idênticos

**Scale/Scope**: Alteração textual em 2 dos 9 cards de serviço (aproximadamente 6 linhas de código alteradas no total).

**SEO Impact**: Neutro. As palavras-chave relevantes (interfaces, performance, APIs, segurança, escalabilidade) são igualmente valiosas para SEO.

**Design System Impact**: Nenhum. A alteração é puramente de conteúdo textual.

**Existing Component Reuse**: Nenhum componente precisa ser criado ou alterado.

## Constitution Check

*GATE: Must pass before implementation.*

- **IREX source of truth**: PASS. A home continua sendo a fonte de verdade da presença web. A alteração melhora a comunicação de valor.
- **SOLID and componentization**: PASS. A alteração é exclusivamente no arquivo de conteúdo (`home-content.ts`), sem impacto em componentes ou lógica.
- **OWASP security**: PASS. Não há alteração em formulários, ações ou validações.
- **Next.js App Router**: PASS. Sem alteração em roteamento, server components ou metadata.
- **SEO and performance**: PASS. Conteúdo textual substituto mantém relevância semântica para busca.
- **Design system and responsive UX**: PASS. Layout, grid, ícones e responsividade não são alterados.
- **Valor sobre tecnologia**: PASS. Os novos títulos e descrições comunicam resultado para o cliente, não ferramentas específicas.

## Complexity Tracking

Sem violações de constituição. Alteração simples e isolada.

## Project Structure

### Documentation (this feature)

```text
specs/002-services-value-reframe/
├── plan.md         (este arquivo)
├── spec.md
└── tasks.md
```

### Source Code (altered files)

```text
app/(pages)/(home)/_components/home-content.ts   (2 service items)
```

Nenhum arquivo novo. Nenhum arquivo removido.

## Phase 0: Research Output

Não aplicável. Alteração de conteúdo textual não requer pesquisa de assets ou protótipo.

## Phase 1: Design Output

Não aplicável. Alteração de conteúdo textual não requer design adicional.

## Post-Design Constitution Check

- IREX source of truth: PASS
- SOLID and componentization: PASS
- OWASP security: PASS
- Next.js App Router: PASS
- SEO and performance: PASS
- Design system and responsive UX: PASS
- Valor sobre tecnologia: PASS
