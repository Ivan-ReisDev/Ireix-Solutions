import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";

export function ProcessSection() {
  const { process } = homePageContent;

  return (
    <section id="processo" className="bg-white">
      <div className="irex-container irex-section grid gap-8 lg:grid-cols-[440px_minmax(0,1fr)]">
        <div className="max-w-[27.5rem]">
          <p className="irex-eyebrow">{process.eyebrow}</p>
          <h2 className="irex-section-title mt-2">{process.title}</h2>
          <p className="irex-section-body mt-3">{process.body}</p>
          <a
            href={process.cta.href}
            className="irex-button irex-button--secondary mt-6"
          >
            {process.cta.label}
          </a>
        </div>

        <div className="grid gap-3.5">
          {process.steps.map((step) => (
            <article
              key={step.number}
              className="flex gap-4 rounded-3xl bg-[var(--irex-surface)] p-[22px]"
            >
              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[var(--irex-ink)] text-[15px] font-bold text-white">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold leading-[1.25] text-[var(--irex-ink)]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-base leading-7 text-[var(--irex-muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
