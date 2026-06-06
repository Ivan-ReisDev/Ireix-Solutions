export type HomeCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "whatsapp" | "footer";
  purpose:
    | "navigation"
    | "conversion"
    | "support"
    | "content"
    | "client-access";
};

export type HomeAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon:
    | "Monitor"
    | "LayoutDashboard"
    | "Code2"
    | "ServerCog"
    | "Workflow"
    | "Bot"
    | "MessageCircle"
    | "SearchCheck"
    | "Rocket";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  supportCopy: string;
  outcome: string;
  name: string;
  role: string;
  avatar: HomeAsset;
};

export type BlogCard = {
  tag: "SEO" | "AUTOMACAO" | "IA";
  icon: "SearchCheck" | "Workflow" | "Bot";
  title: string;
  summary: string;
  href: string;
};

export type ProposalProjectType =
  | "Site profissional"
  | "Sistema web"
  | "Automacao"
  | "WhatsApp Business API"
  | "IA para empresas"
  | "SEO e performance"
  | "MVP ou consultoria"
  | "Outro";

const whatsappNumber =
  process.env.NEXT_PUBLIC_IREX_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://ireixsolution.com";

export const contactEmail = "contato@ireixsolution.com";
export const hasConfiguredWhatsApp = whatsappNumber.length >= 10;

const buildWhatsAppHref = (message: string) => {
  if (!hasConfiguredWhatsApp) {
    return "#contato";
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const proposalProjectTypes: ProposalProjectType[] = [
  "Site profissional",
  "Sistema web",
  "Automacao",
  "WhatsApp Business API",
  "IA para empresas",
  "SEO e performance",
  "MVP ou consultoria",
  "Outro",
];

export const homePageContent = {
  navigation: {
    brandName: "Ireix Solution",
    brandTagline: "solucoes digitais para crescimento",
    links: [
      { label: "Processo", href: "#processo", variant: "secondary", purpose: "navigation" },
      { label: "Soluções", href: "#solucoes", variant: "secondary", purpose: "navigation" },
      { label: "Contato", href: "#contato", variant: "secondary", purpose: "navigation" },
    ] satisfies HomeCta[],
    primaryCta: {
      label: "Falar no WhatsApp",
      href: buildWhatsAppHref(
        "Ola! Quero falar sobre uma solucao digital para minha empresa."
      ),
      variant: "whatsapp",
      purpose: "support",
    } satisfies HomeCta,
    secondaryCta: {
      label: "Ja sou cliente",
      href: "#contato",
      variant: "secondary",
      purpose: "client-access",
    } satisfies HomeCta,
  },
  hero: {
    chips: ["Mais vendas no digital", "Menos tarefas manuais"],
    title:
      "Transforme sua presença digital em vendas, automação e crescimento previsível.",
    body:
      "A Ireix Solution cria sites, sistemas, automações e experiências digitais que reduzem processos manuais, capturam oportunidades e deixam sua operação pronta para escalar.",
    ctas: [
      {
        label: "Solicitar proposta",
        href: "#contato",
        variant: "primary",
        purpose: "conversion",
      },
      {
        label: "Conhecer serviços",
        href: "#solucoes",
        variant: "secondary",
        purpose: "navigation",
      },
    ] satisfies HomeCta[],
    metrics: [
      { value: "15+", label: "frentes de tecnologia" },
      { value: "24h", label: "primeiro retorno" },
      { value: "100%", label: "projeto sob medida" },
    ],
    visual: {
      src: "/images/home/hero-visual.jpg",
      alt: "Equipe trabalhando em solução digital para crescimento.",
      width: 1080,
      height: 810,
    } satisfies HomeAsset,
    overlayTitle: "Tecnologia que resolve gargalos reais do negócio.",
    overlayBody:
      "Do primeiro contato ao sistema funcionando, com clareza, velocidade e foco em resultado.",
  },
  services: {
    eyebrow: "SERVIÇOS",
    title: "Tudo que sua empresa precisa para crescer no digital.",
    body:
      "Escolha uma entrega pontual ou combine site, sistema, automação, atendimento e infraestrutura em uma solução completa.",
    cta: {
      label: "Montar meu projeto",
      href: "#contato",
      variant: "primary",
      purpose: "conversion",
    } satisfies HomeCta,
    items: [
      {
        title: "Sites profissionais",
        description:
          "Sites institucionais, landing pages, páginas de captura, redesign e experiências responsivas com foco em conversão.",
        icon: "Monitor",
      },
      {
        title: "Sistemas web",
        description:
          "Painéis administrativos, dashboards, portais com login, plataformas SaaS e sistemas internos sob medida.",
        icon: "LayoutDashboard",
      },
      {
        title: "React e Next.js",
        description:
          "Frontend moderno com Next.js, React e TypeScript, migrações, interfaces responsivas e integração com APIs.",
        icon: "Code2",
      },
      {
        title: "Backend e APIs",
        description:
          "APIs REST, NestJS, autenticação, permissões, upload de arquivos, microsserviços e bancos de dados.",
        icon: "ServerCog",
      },
      {
        title: "Automações",
        description:
          "n8n, webhooks, cron jobs, integrações entre sistemas e processos automáticos de cadastro, cobrança e notificação.",
        icon: "Workflow",
      },
      {
        title: "IA para empresas",
        description:
          "Chatbots, assistentes treinados com documentos, classificação de mensagens e agentes conectados a sistemas internos.",
        icon: "Bot",
      },
      {
        title: "WhatsApp Business API",
        description:
          "Captação de leads, notificações, atendimento automatizado, painel de mensagens e automação com IA.",
        icon: "MessageCircle",
      },
      {
        title: "SEO e performance",
        description:
          "SEO técnico, estrutura de blog, sitemap, robots, velocidade, indexação e otimização para Google.",
        icon: "SearchCheck",
      },
      {
        title: "MVPs e consultoria",
        description:
          "MVPs para startups, validação de ideias, arquitetura, revisão de código, deploy e orientação técnica.",
        icon: "Rocket",
      },
    ] satisfies ServiceItem[],
  },
  process: {
    eyebrow: "PROCESSO",
    title: "Da ideia ao software funcionando, com clareza em cada etapa.",
    body:
      "A proposta é reduzir risco: entender o negócio, priorizar o que dá retorno, prototipar rápido e evoluir com base em dados reais.",
    cta: {
      label: "Ver metodologia",
      href: "#contato",
      variant: "secondary",
      purpose: "content",
    } satisfies HomeCta,
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description:
          "Mapeamos objetivos, gargalos, público, canais e sistemas existentes.",
      },
      {
        number: "02",
        title: "Prototipação",
        description:
          "Criamos a experiência visual e o fluxo principal antes de desenvolver.",
      },
      {
        number: "03",
        title: "Desenvolvimento",
        description:
          "Construímos com stack moderna, integrações, segurança básica e performance.",
      },
      {
        number: "04",
        title: "Evolução",
        description:
          "Acompanhamos métricas, manutenção, melhorias e novas automações.",
      },
    ] satisfies ProcessStep[],
  },
  spotlight: {
    eyebrow: "WHATSAPP + IA",
    title:
      "Atendimento automatizado que captura leads e responde com contexto.",
    body:
      "Integramos WhatsApp Business API, chatbots, automações e agentes de IA para responder clientes, notificar equipes e transformar conversas em oportunidades.",
    background: {
      src: "/images/home/whatsapp-spotlight.png",
      alt: "",
      width: 1440,
      height: 560,
    } satisfies HomeAsset,
    ctas: [
      {
        label: "Quero WhatsApp inteligente",
        href: buildWhatsAppHref(
          "Ola! Quero automatizar meu atendimento com WhatsApp e IA."
        ),
        variant: "primary",
        purpose: "conversion",
      },
      {
        label: "Ver integrações",
        href: "#solucoes",
        variant: "secondary",
        purpose: "navigation",
      },
    ] satisfies HomeCta[],
    chatMock: {
      assistantName: "Ireix Assistant",
      status: "automacao ativa",
      badge: "WhatsApp conectado",
      contextLabel: "Fluxo sugerido",
      contextValue: "Qualificar leads e encaminhar proposta",
      messages: [
        {
          role: "client",
          body: "Ola! Quero automatizar meu atendimento.",
          timestamp: "10:18",
        },
        {
          role: "assistant",
          body:
            "Perfeito. Posso entender seu volume de mensagens e o principal objetivo?",
          timestamp: "10:18",
        },
      ],
      composerPlaceholder: "Escreva uma mensagem...",
    },
  },
  testimonials: {
    eyebrow: "DEPOIMENTOS",
    title:
      "Resultados percebidos por quem precisava vender melhor e operar com mais clareza.",
    body:
      "Projetos que unem site, sistema, automacao e atendimento costumam ser avaliados pelo impacto no comercial, na operacao e na velocidade de resposta ao cliente.",
    items: [
      {
        quote:
          "O novo site organizou nossa apresentacao comercial e aumentou a qualidade dos leads que chegam para o time.",
        supportCopy:
          "Em poucas semanas, a equipe passou a atender com mais contexto e menos retrabalho.",
        outcome: "+38% em leads qualificados",
        name: "Mariana Costa",
        role: "Diretora comercial, clinica premium",
        avatar: {
          src: "/images/home/testimonial-mariana.jpg",
          alt: "Mariana Costa",
          width: 1080,
          height: 1080,
        },
      },
      {
        quote:
          "Automatizamos etapas que antes consumiam horas por dia e finalmente ganhamos previsibilidade no atendimento.",
        supportCopy:
          "Hoje o processo e mais rapido, rastreavel e muito menos dependente de tarefas manuais.",
        outcome: "Atendimento 2.4x mais agil",
        name: "Rafael Mendes",
        role: "Operacoes, distribuidora B2B",
        avatar: {
          src: "/images/home/testimonial-rafael.jpg",
          alt: "Rafael Mendes",
          width: 1080,
          height: 1080,
        },
      },
      {
        quote:
          "A integracao com WhatsApp e formulario deixou o contato comercial simples para o cliente e melhor para nossa equipe.",
        supportCopy:
          "Recebemos pedidos mais completos e conseguimos responder com muito mais velocidade.",
        outcome: "Mais clareza na entrada",
        name: "Juliana Alves",
        role: "Socia, escritorio de servicos",
        avatar: {
          src: "/images/home/testimonial-juliana.jpg",
          alt: "Juliana Alves",
          width: 1080,
          height: 1080,
        },
      },
    ] satisfies Testimonial[],
  },
  blog: {
    eyebrow: "CONTEÚDO E ESTRATÉGIA",
    title:
      "Aprenda a usar tecnologia para vender mais e operar com menos esforço.",
    body:
      "Uma área de conteúdo fortalece autoridade, SEO e educação do cliente antes da conversa comercial.",
    cta: {
      label: "Ver todos os artigos",
      href: "/blog",
      variant: "secondary",
      purpose: "content",
    } satisfies HomeCta,
    items: [
      {
        tag: "SEO",
        icon: "SearchCheck",
        title: "Como um site profissional gera leads todos os meses",
        summary:
          "Estrutura, performance, conteúdo e mensuração transformam uma página bonita em um canal de aquisição.",
        href: "/blog#site-profissional-gera-leads",
      },
      {
        tag: "AUTOMACAO",
        icon: "Workflow",
        title: "Quando automatizar o atendimento sem perder qualidade",
        summary:
          "Veja sinais de que sua empresa já pode ganhar tempo com WhatsApp, webhooks e fluxos inteligentes.",
        href: "/blog#automatizar-atendimento",
      },
      {
        tag: "IA",
        icon: "Bot",
        title: "Como aplicar IA em processos reais da empresa",
        summary:
          "Assistentes, classificação de mensagens e respostas com contexto podem reduzir gargalos operacionais.",
        href: "/blog#ia-em-processos-reais",
      },
    ] satisfies BlogCard[],
  },
  contact: {
    eyebrow: "CONTATO",
    title: "Vamos desenhar a próxima solução digital da sua empresa?",
    body:
      "Conte rapidamente o que você precisa. Podemos começar por um site, MVP, sistema interno, integração com WhatsApp, automação ou consultoria técnica.",
    bullets: [
      "Resposta inicial em até 24h úteis.",
      "Diagnóstico objetivo antes da proposta.",
      "Projetos com foco em performance, clareza e escala.",
    ],
    whatsappCta: {
      label: "Chamar no WhatsApp",
      href: buildWhatsAppHref(
        "Ola! Quero conversar sobre uma solucao digital da Ireix Solution."
      ),
      variant: "whatsapp",
      purpose: "support",
    } satisfies HomeCta,
    whatsappFallback:
      "WhatsApp comercial em configuração. Use o formulário ou contato@ireixsolution.com.",
    formTitle: "Solicite uma proposta",
    formNote: "contato@ireixsolution.com",
  },
  footer: {
    brandName: "Ireix Solution",
    body:
      "Sites, sistemas, automações e soluções com IA para empresas que querem vender mais, economizar tempo e crescer com tecnologia moderna.",
    ctas: [
      {
        label: "Falar no WhatsApp",
        href: buildWhatsAppHref(
          "Ola! Quero falar com a Ireix Solution sobre um novo projeto."
        ),
        variant: "primary",
        purpose: "support",
      },
      {
        label: "Solicitar proposta",
        href: "#contato",
        variant: "secondary",
        purpose: "conversion",
      },
    ] satisfies HomeCta[],
    services: [
      "Sites profissionais",
      "Sistemas web sob medida",
      "Automações e integrações",
      "WhatsApp Business API",
      "IA para empresas",
    ],
    company: ["Processo", "Blog", "Consultoria", "Manutenção mensal", "MVPs"],
    contact: [
      "contato@ireixsolution.com",
      "WhatsApp comercial",
      "Atendimento remoto para todo o Brasil",
    ],
    legal: "© 2026 Ireix Solution. Todos os direitos reservados.",
    stack: "Estratégia digital · Software sob medida · IA aplicada",
  },
} as const;

export type HomePageContent = typeof homePageContent;
