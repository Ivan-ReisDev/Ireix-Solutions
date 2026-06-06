import Image from "next/image";

import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";

export function HeroSection() {
  const { hero } = homePageContent;

  return (
    <section className="border-b border-[var(--irex-border)] bg-white">
      <div className="irex-container grid gap-10 py-12 lg:min-h-[790px] lg:grid-cols-[minmax(0,660px)_minmax(0,1fr)] lg:items-stretch lg:py-14">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-wrap gap-2">
            <span className="irex-badge irex-badge--blue">{hero.chips[0]}</span>
            <span className="irex-badge irex-badge--gold">{hero.chips[1]}</span>
          </div>

          <h1 className="max-w-[15ch] text-[2.55rem] leading-[1.04] font-medium tracking-normal text-[var(--irex-ink)] sm:text-[3.3rem] lg:text-[3.625rem]">
            {hero.title}
          </h1>

          <p className="max-w-[38rem] text-base leading-7 text-[var(--irex-muted)]">
            {hero.body}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.ctas[0].href}
              className="irex-button irex-button--primary"
            >
              {hero.ctas[0].label}
            </a>
            <a
              href={hero.ctas[1].href}
              className="irex-button irex-button--secondary"
            >
              {hero.ctas[1].label}
            </a>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {hero.metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-2xl bg-[var(--irex-surface)] p-4"
              >
                <div className="text-[1.75rem] font-bold leading-none text-[var(--irex-ink)]">
                  {metric.value}
                </div>
                <div className="mt-2 text-[13px] leading-[1.35] text-[var(--irex-muted)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[24rem] overflow-hidden rounded-[32px] bg-[var(--irex-ink)] p-7 lg:min-h-full">
          <Image
            src={hero.visual.src}
            alt={hero.visual.alt}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,19,23,0.04)_0%,rgba(10,19,23,0.34)_100%)]" />
          <div className="absolute inset-x-7 bottom-7 rounded-3xl bg-[rgba(10,19,23,0.8)] p-[22px] text-white backdrop-blur-sm">
            <h2 className="text-2xl font-bold leading-[1.25]">
              {hero.overlayTitle}
            </h2>
            <p className="mt-2 text-base leading-7 text-white/92">
              {hero.overlayBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
