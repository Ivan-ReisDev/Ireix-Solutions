# Feature Specification: Página Principal pelo Protótipo Pencil

**Feature Branch**: `001-home-prototype-page`

**Created**: 2026-06-05

**Status**: Draft

**Input**: User description: "Criar a página principal da IREX de forma idêntica ao protótipo do Pencil Node ID `khBEU`, usando o arquivo `/home/deeivan/Área de trabalho/Developer/Pessoal/dashboard-redesign.pen`, reaproveitando as imagens do protótipo e seguindo `docs/designer-system.md`."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender a Oferta na Home (Priority: P1)

Como visitante que chega pela página principal, quero ver uma home fiel ao protótipo, com marca, proposta de valor, CTAs e métricas logo no primeiro bloco, para entender rapidamente o que a IREX oferece e como iniciar contato.

**Why this priority**: A primeira dobra define percepção de marca, clareza da oferta e caminho principal de conversão.

**Independent Test**: Abrir a página principal em desktop e mobile, comparar a navegação e o hero com o node `khBEU` e confirmar que a proposta de valor, chips, CTAs, métricas e imagem principal estão presentes, legíveis e na ordem esperada.

**Acceptance Scenarios**:

1. **Given** um visitante acessando a página principal, **When** a página carrega, **Then** ele vê a marca "Ireix Solution", links "Processo", "Soluções" e "Contato", CTA "Falar no WhatsApp", link "Acesso do cliente" e o hero com o título "Transforme sua presença digital em vendas, automação e crescimento previsível."
2. **Given** um visitante no hero, **When** ele avalia as ações disponíveis, **Then** os CTAs "Solicitar proposta" e "Conhecer serviços" conduzem de forma clara para contato e serviços.
3. **Given** um visitante usando tela menor, **When** a home é exibida, **Then** a hierarquia do hero permanece equivalente ao protótipo, sem texto cortado, sobreposição ou perda dos CTAs principais.

---

### User Story 2 - Explorar Serviços, Processo e Prova Social (Priority: P2)

Como potencial cliente avaliando a IREX, quero navegar pelas seções de serviços, processo, WhatsApp com IA, depoimentos e conteúdo estratégico, para entender as capacidades da empresa e ganhar confiança antes do contato.

**Why this priority**: A seção intermediária sustenta a decisão do visitante, responde objeções e conecta serviços técnicos a resultados de negócio.

**Independent Test**: Rolar a página do início ao fim e verificar que todas as seções do protótipo aparecem na ordem correta, com os textos, cards, ícones, imagens e CTAs correspondentes.

**Acceptance Scenarios**:

1. **Given** um visitante rolando até "Serviços", **When** a seção aparece, **Then** ele vê os nove cards do protótipo: Sites profissionais, Sistemas web, React e Next.js, Backend e APIs, Automações, IA para empresas, WhatsApp Business API, SEO e performance, MVPs e consultoria.
2. **Given** um visitante rolando até "Processo", **When** ele lê a seção, **Then** ele vê as quatro etapas Diagnóstico, Prototipação, Desenvolvimento e Evolução, com numeração e descrições equivalentes ao protótipo.
3. **Given** um visitante rolando até "WhatsApp + IA", **When** a seção aparece, **Then** ele vê o bloco escuro com imagem de fundo, copy do spotlight, CTAs "Quero WhatsApp inteligente" e "Ver integrações", e o mock de conversa do Ireix Assistant.
4. **Given** um visitante buscando evidências de resultado, **When** ele chega a "Depoimentos", **Then** ele vê três cards com avaliações, nomes, cargos e resultados: Mariana Costa, Rafael Mendes e Juliana Alves.
5. **Given** um visitante procurando conteúdo educativo, **When** ele chega ao bloco de blog, **Then** ele vê três cards: "Como um site profissional gera leads todos os meses", "Quando automatizar o atendimento sem perder qualidade" e "Como aplicar IA em processos reais da empresa".

---

### User Story 3 - Solicitar Contato Comercial (Priority: P3)

Como potencial cliente interessado, quero poder chamar a IREX no WhatsApp ou preencher uma solicitação de proposta, para iniciar uma conversa comercial com contexto suficiente.

**Why this priority**: A home precisa converter interesse em oportunidade, mantendo a promessa de resposta rápida do protótipo.

**Independent Test**: Usar os CTAs da página e preencher o formulário com dados válidos e inválidos, confirmando que o visitante recebe orientação clara e que os dados essenciais são coletados.

**Acceptance Scenarios**:

1. **Given** um visitante na seção "Contato", **When** ele lê o bloco lateral, **Then** ele vê o título "Vamos desenhar a próxima solução digital da sua empresa?", os três bullets de confiança e o CTA "Chamar no WhatsApp".
2. **Given** um visitante preenchendo o formulário, **When** ele informa nome, e-mail, telefone/WhatsApp, tipo de projeto e mensagem válidos, **Then** ele consegue enviar a solicitação e recebe confirmação clara.
3. **Given** um visitante preenchendo dados inválidos ou incompletos, **When** ele tenta enviar, **Then** a página informa quais campos precisam de correção sem apagar os dados já preenchidos.
4. **Given** um visitante que prefere contato direto, **When** ele aciona um CTA de WhatsApp, **Then** ele é levado ao canal comercial configurado com intenção de conversa preservada.

### Edge Cases

- Imagens do protótipo indisponíveis ou lentas devem ter alternativa visual estável e texto alternativo apropriado, sem quebrar o layout.
- Links de navegação por âncora devem funcionar mesmo em telas pequenas e não esconder títulos sob a navegação.
- Formulário deve tratar campos vazios, e-mail inválido, telefone muito curto e mensagem excessivamente curta.
- Conteúdo deve permanecer legível com zoom do navegador e em viewport mobile, sem sobreposição entre cards, CTAs e textos.
- CTAs que dependem de destino comercial ainda não configurado devem apresentar fallback claro e não resultar em erro silencioso.
- A página deve manter conteúdo textual crawlable mesmo quando imagens, ícones ou scripts auxiliares não carregarem.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A página principal MUST reproduzir a estrutura visual e de conteúdo do protótipo Pencil `khBEU`, incluindo a ordem: Top Navigation, Hero Section, Services Section, Process Section, WhatsApp AI Spotlight, Testimonials Section, Blog Insights Section, Contact Section e Professional Footer.
- **FR-002**: A navegação superior MUST apresentar marca "Ireix Solution", tagline "solucoes digitais para crescimento", links "Processo", "Soluções", "Contato", CTA "Falar no WhatsApp" e ação secundária "Acesso do cliente".
- **FR-003**: O hero MUST apresentar os chips "Mais vendas no digital" e "Menos tarefas manuais", o título, a descrição, os CTAs "Solicitar proposta" e "Conhecer serviços", as métricas "15+", "24h" e "100%", e o card visual com imagem do protótipo.
- **FR-004**: A seção de serviços MUST apresentar nove cards com os títulos, descrições e ícones equivalentes ao protótipo, organizados em três linhas no desktop e adaptados para leitura vertical em telas menores.
- **FR-005**: A seção de processo MUST apresentar o texto introdutório, CTA "Ver metodologia" e as quatro etapas numeradas com os mesmos títulos e descrições do protótipo.
- **FR-006**: O spotlight "WHATSAPP + IA" MUST usar a imagem de fundo e o mock de conversa do protótipo, incluindo o estado "Ireix Assistant", badge "WhatsApp conectado", contexto sugerido, bolhas de conversa e campo "Escreva uma mensagem...".
- **FR-007**: A seção de depoimentos MUST apresentar três cards com cinco estrelas, quote, texto de apoio, resultado destacado, avatar, nome e cargo para Mariana Costa, Rafael Mendes e Juliana Alves.
- **FR-008**: A seção de blog MUST apresentar o cabeçalho "CONTEÚDO E ESTRATÉGIA", CTA "Ver todos os artigos" e três cards com tag, ícone, título, resumo e link "Ler artigo".
- **FR-009**: A seção de contato MUST apresentar texto comercial, três bullets de confiança, CTA de WhatsApp e formulário com campos Nome, E-mail, Telefone / WhatsApp, Tipo de projeto e Mensagem.
- **FR-010**: O footer MUST apresentar coluna de marca, CTAs, links de serviços, links de empresa, informações de contato, copyright 2026 e a frase "Estratégia digital · Software sob medida · IA aplicada".
- **FR-011**: Todos os CTAs MUST ter comportamento perceptível e coerente: navegação interna, contato por WhatsApp, solicitação de proposta ou fallback claro quando o destino final ainda não estiver disponível.
- **FR-012**: As imagens usadas no protótipo MUST ser reutilizadas ou preservadas visualmente, incluindo imagem principal do hero, imagem de fundo do spotlight e avatares dos depoimentos.
- **FR-013**: A página MUST seguir o design system oficial em cores, tipografia, espaçamento, bordas, cards, botões pill, grid, hierarquia visual e responsividade.
- **FR-014**: A página MUST ser responsiva em mobile, tablet e desktop, mantendo leitura, ordem lógica, toque confortável e ausência de sobreposição de conteúdo.
- **FR-015**: A página MUST ser acessível por teclado e leitores de tela, com hierarquia de headings, labels de formulário, textos alternativos para imagens relevantes e contraste adequado.
- **FR-016**: A página MUST expor conteúdo indexável e metadata adequada para motores de busca, incluindo título, descrição, headings semânticos, links internos, imagem social e texto principal renderizado de forma crawlable.
- **FR-017**: O formulário de contato MUST validar campos obrigatórios, formatos de e-mail e telefone/WhatsApp, tamanho mínimo da mensagem e exibir mensagens de erro claras.
- **FR-018**: O formulário MUST preservar os dados digitados quando houver erro de validação e MUST apresentar confirmação quando a solicitação for aceita.
- **FR-019**: A página MUST manter carregamento estável, evitando saltos visuais perceptíveis em imagens, cards, hero, formulário e footer.
- **FR-020**: A entrega MUST incluir verificação visual comparando a implementação final com o node `khBEU` em desktop e com adaptação responsiva em mobile.

### Key Entities *(include if feature involves data)*

- **Página Principal**: Experiência pública de entrada da IREX, composta por seções ordenadas, CTAs, conteúdo institucional e formulário.
- **Seção de Conteúdo**: Bloco editorial ou comercial da home, como hero, serviços, processo, spotlight, depoimentos, blog, contato e footer.
- **Serviço**: Oferta exibida em card, com título, descrição e ícone.
- **Etapa do Processo**: Passo numerado da metodologia, com título e descrição.
- **Depoimento**: Prova social com avaliação, quote, apoio, resultado, pessoa e cargo.
- **Artigo Destacado**: Card de conteúdo com tag, ícone, título, resumo e link.
- **Solicitação de Proposta**: Dados enviados pelo visitante: nome, e-mail, telefone/WhatsApp, tipo de projeto e mensagem.
- **CTA**: Ação clicável de navegação interna, WhatsApp, proposta, serviços, metodologia, integrações, blog ou acesso do cliente.
- **Asset Visual**: Imagem ou avatar herdado do protótipo Pencil, com papel visual definido na página.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em desktop de 1440px, a página final apresenta 100% das seções do protótipo `khBEU` na mesma ordem e com todos os blocos principais visíveis.
- **SC-002**: A comparação visual da página final com o protótipo em desktop atinge pelo menos 95% de fidelidade percebida em layout, hierarquia, cores, cards, espaçamento, imagens e conteúdo textual.
- **SC-003**: Um visitante consegue identificar a oferta principal da IREX e acionar "Solicitar proposta" ou "Falar no WhatsApp" em até 10 segundos após carregar a página.
- **SC-004**: Um visitante consegue encontrar serviços, processo, WhatsApp + IA, depoimentos, blog e contato usando rolagem ou navegação interna sem ficar perdido.
- **SC-005**: Um visitante consegue enviar uma solicitação de proposta válida em até 2 minutos.
- **SC-006**: 100% dos campos obrigatórios do formulário apresentam feedback claro quando preenchidos incorretamente.
- **SC-SEO**: A página indexável expõe título, descrição, um H1 claro, headings ordenados, texto principal crawlable, imagem social e links internos relevantes.
- **SC-PERF**: O conteúdo principal aparece rapidamente em uma conexão móvel comum e não apresenta saltos visuais perceptíveis durante o carregamento.
- **SC-A11Y**: A navegação por teclado alcança todos os links, CTAs e campos do formulário, e o fluxo principal pode ser compreendido com leitor de tela.

## Assumptions

- A página principal será a home pública da IREX e substituirá a tela padrão atual.
- O protótipo Pencil `khBEU` é a fonte de verdade visual para desktop; o design system define como adaptar o comportamento responsivo.
- As imagens e avatares do protótipo podem ser reutilizados no projeto, mantendo créditos ou metadados quando necessário.
- CTAs de WhatsApp usam o canal comercial configurado do projeto; caso o número final ainda não exista, deve haver fallback visível.
- "Acesso do cliente" é apenas um ponto de navegação exibido na home; criação de autenticação ou área logada está fora desta feature.
- Os cards de blog são teasers da home; criação de páginas completas de artigo está fora desta feature, salvo se já houver destino existente.
- A solicitação de proposta pode ser entregue por integração existente, notificação, e-mail ou fluxo equivalente aprovado posteriormente; esta spec exige a experiência do visitante e a coleta validada dos dados.
