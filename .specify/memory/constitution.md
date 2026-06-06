<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- Principle 1 placeholder -> I. Fonte Principal da Presenca Web IREX
- Principle 2 placeholder -> II. Arquitetura SOLID e Componentizacao
- Principle 3 placeholder -> III. Seguranca OWASP por Padrao
- Principle 4 placeholder -> IV. Next.js App Router, SEO e Performance
- Principle 5 placeholder -> V. Design System e Experiencia Responsiva
Added sections:
- Estrutura Obrigatoria do Projeto
- Fluxo de Desenvolvimento e Qualidade
Removed sections:
- Placeholder SECTION_2_NAME
- Placeholder SECTION_3_NAME
Templates requiring updates:
- UPDATED .specify/templates/plan-template.md
- UPDATED .specify/templates/spec-template.md
- UPDATED .specify/templates/tasks-template.md
- UPDATED .specify/templates/commands/*.md (diretorio inexistente neste projeto)
- UPDATED README.md
Follow-up TODOs:
- Nenhum
-->
# IREX Site Constitution

## Core Principles

### I. Fonte Principal da Presenca Web IREX
Este repositorio MUST ser tratado como a fonte principal de verdade para a
presenca web da IREX. Toda feature, conteudo, metadata, asset publico e
integracao exposta ao usuario MUST preservar coerencia de marca, informacao e
mensagem institucional. Alteracoes que impactem posicionamento, oferta, copy
estrategica ou navegacao principal MUST declarar a fonte do conteudo e o impacto
esperado em SEO, conversao e experiencia.

Rationale: o site principal e o ponto canonico de descoberta, confianca e
conversao da marca; divergencia entre codigo, conteudo e SEO dilui autoridade.

### II. Arquitetura SOLID e Componentizacao
Codigo de aplicacao MUST seguir SOLID, separacao clara de responsabilidades e
baixo acoplamento. Antes de criar qualquer componente, hook, servico ou helper,
a implementacao MUST verificar se ja existe equivalente reutilizavel no projeto.
Componentes compartilhados entre rotas MUST viver em `components/`, com uma
pasta por componente quando houver arquivo principal, estilos, testes, tipos ou
subcomponentes associados. Componentes exclusivos de uma pagina MUST ficar
colocados na propria rota em `app/**/components/` ou `app/**/_components/`, junto
do `page.tsx` que os consome. Duplicacao de UI, logica ou estilos MUST ser
justificada no plano quando a reutilizacao for rejeitada.

Rationale: componentes pequenos, localizados e reutilizaveis reduzem regressao,
facilitam testes e mantem a evolucao visual do site consistente.

### III. Seguranca OWASP por Padrao
Toda mudanca MUST aplicar boas praticas OWASP nas camadas afetadas. Entradas de
usuario, parametros de rota, payloads de Server Actions e Route Handlers MUST ser
validados com Zod ou schema equivalente aprovado. Segredos MUST permanecer no
servidor e nunca usar prefixo `NEXT_PUBLIC_` salvo quando a exposicao ao cliente
for intencional e documentada. Codigo server-only MUST ficar isolado da camada
cliente; dados enviados para Client Components MUST ser DTOs minimos e seguros.
Endpoints MUST ser enxutos: validar entrada, delegar regras de negocio para
servicos ou entidades, aplicar autorizacao quando houver contexto de usuario e
retornar respostas consistentes. Regras de negocio complexas MUST NOT ficar
diretamente em endpoints, componentes de pagina ou handlers de formulario.

Rationale: seguranca no App Router depende de fronteiras explicitas entre
cliente, servidor, dados e regras de negocio; validar tarde ou misturar camadas
aumenta risco de vazamento, injecao e autorizacao incorreta.

### IV. Next.js App Router, SEO e Performance
Novas rotas MUST usar o App Router em `app/` e os guias locais de
`node_modules/next/dist/docs/` MUST ser consultados antes de mudancas que toquem
APIs, convencoes, renderizacao, cache, metadata, imagens, scripts, Route
Handlers ou Server Actions. Server Components MUST ser o padrao; Client
Components MUST ser usados somente quando houver interatividade de navegador.
Toda pagina indexavel MUST definir metadata unica, semantica HTML apropriada,
conteudo crawlable, imagem social quando aplicavel e estrategia de sitemap e
robots compativel com a intencao de indexacao. Implementacoes MUST otimizar
Core Web Vitals, usar `next/image`, `next/font`, `next/link` e `next/script`
quando aplicavel, evitar waterfalls de dados, justificar renderizacao dinamica e
preservar performance de build e runtime.

Rationale: SEO e performance sao requisitos centrais do produto, nao tarefas de
polimento; as convencoes do Next.js 16 mudam e devem guiar a implementacao real.

### V. Design System e Experiencia Responsiva
Qualquer interface nova ou alterada MUST consultar e seguir
`docs/designer-system.md` antes da implementacao. Tokens, hierarquia tipografica,
padroes de componentes, espacamento, estados e comportamento responsivo MUST ser
respeitados ou a excecao MUST ser registrada com motivo. Interfaces MUST ser
mobile-first, acessiveis, sem sobreposicao de texto, com HTML semantico,
contraste adequado, navegacao previsivel e estados visuais claros. Componentes
novos MUST nascer individualizados, testaveis e alinhados ao design system.

Rationale: consistencia visual e acessibilidade sustentam confianca, leitura,
conversao e manutencao do site em longo prazo.

## Estrutura Obrigatoria do Projeto

O projeto MUST manter Next.js App Router como arquitetura principal. `app/` MUST
conter rotas, layouts, pages, metadata files e handlers de rota. O arquivo
`app/**/page.tsx` representa a pagina individual de uma rota. Componentes
globais e reutilizaveis MUST ficar em `components/<ComponentName>/` quando
tiverem mais de um arquivo ou responsabilidade publica. Componentes usados por
uma unica rota MUST ficar dentro da propria rota, preferencialmente em
`app/<segment>/components/` ou `app/<segment>/_components/`.

Backend interno, quando necessario, MUST ser separado por responsabilidade em
pastas como `lib/`, `services/`, `entities/`, `repositories/`, `schemas/` e
`app/api/**/route.ts`, mantendo orientacao a objetos para regras de negocio,
servicos e entidades quando houver dominio relevante. Route Handlers e Server
Actions MUST depender de schemas e servicos, nao conter regras complexas.

Assets publicos MUST ficar em `public/` ou nas convencoes de metadata do App
Router quando forem favicon, icon, Open Graph, Twitter image, sitemap, robots ou
manifest. Estilos globais MUST permanecer restritos a base, tokens e reset; UI
especifica MUST ficar no componente ou na rota que a possui.

## Fluxo de Desenvolvimento e Qualidade

Toda spec e plano MUST declarar impacto em SEO, performance, seguranca OWASP,
componentizacao, design system e estrutura de rotas. Toda feature MUST definir
criterios de aceite independentes e verificaveis, incluindo validacao visual ou
responsiva quando tocar UI. Mudancas em endpoints, Server Actions, formularios
ou dados MUST incluir validacao de entrada, cenarios de erro e estrategia de
autorizacao quando aplicavel.

Antes de implementar, o plano MUST verificar componentes existentes e registrar
reuso ou justificativa para novo componente. Antes de entregar, a mudanca MUST
executar ao menos `npm run lint` e `npm run build`, salvo bloqueio documentado.
Quando a mudanca afetar UI, MUST haver verificacao em viewport mobile e desktop.
Quando afetar SEO, MUST haver revisao de metadata, headings, links internos,
indexacao, sitemap/robots quando pertinente e conteudo renderizado para crawlers.

## Governance

Esta constituicao supersede praticas conflitantes em templates, specs, planos,
tasks, README e instrucoes operacionais do projeto. Alteracoes futuras MUST ser
feitas em `.specify/memory/constitution.md` e propagadas para templates e docs
dependentes no mesmo conjunto de mudancas.

Amendments MUST incluir motivo, impacto esperado, arquivos sincronizados e tipo
de bump semantico. MAJOR se aplica a remocao ou redefinicao incompatibilidade de
principios; MINOR se aplica a novos principios, secoes ou expansao material de
governanca; PATCH se aplica a clarificacoes sem mudanca semantica. Toda revisao
de plano, spec, tarefa ou PR MUST verificar conformidade com esta constituicao.
Violacoes deliberadas MUST ser registradas em Complexity Tracking com motivo,
alternativa mais simples rejeitada e risco aceito.

**Version**: 1.0.0 | **Ratified**: 2026-06-05 | **Last Amended**: 2026-06-05
