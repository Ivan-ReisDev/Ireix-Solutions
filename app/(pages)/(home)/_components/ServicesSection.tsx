import {
  Bot,
  Code2,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  Rocket,
  SearchCheck,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import {
  homePageContent,
  type ServiceItem,
} from "@/app/(pages)/(home)/_components/home-content";

const iconMap: Record<ServiceItem["icon"], LucideIcon> = {
  Monitor,
  LayoutDashboard,
  Code2,
  ServerCog,
  Workflow,
  Bot,
  MessageCircle,
  SearchCheck,
  Rocket,
};

export function ServicesSection() {
  const { services } = homePageContent;

  return (
    <section id="solucoes" className="bg-[var(--irex-surface)]">
      <div className="irex-container irex-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[47.5rem]">
            <p className="irex-eyebrow">{services.eyebrow}</p>
            <h2 className="irex-section-title mt-2">{services.title}</h2>
            <p className="irex-section-body mt-3">{services.body}</p>
          </div>
          <a
            href={services.cta.href}
            className="irex-button irex-button--primary"
          >
            {services.cta.label}
          </a>
        </div>

        <div className="mt-7 grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.title}
                className="flex min-h-[210px] flex-col gap-3.5 rounded-2xl border border-[var(--irex-border)] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--irex-accent-soft)]">
                  <Icon className="h-[21px] w-[21px] text-[var(--irex-accent)]" />
                </div>
                <h3 className="text-lg font-bold leading-[1.25] text-[var(--irex-ink)]">
                  {service.title}
                </h3>
                <p className="text-base leading-7 text-[var(--irex-muted)]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
