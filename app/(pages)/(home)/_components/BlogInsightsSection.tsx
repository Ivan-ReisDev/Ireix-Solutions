import Link from "next/link";
import {
  ArrowRight,
  Bot,
  SearchCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import {
  homePageContent,
  type BlogCard,
} from "@/app/(pages)/(home)/_components/home-content";

const iconMap: Record<BlogCard["icon"], LucideIcon> = {
  SearchCheck,
  Workflow,
  Bot,
};

export function BlogInsightsSection() {
  const { blog } = homePageContent;

  return (
    <section className="bg-white">
      <div className="irex-container irex-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[47.5rem]">
            <p className="irex-eyebrow">{blog.eyebrow}</p>
            <h2 className="irex-section-title mt-2">{blog.title}</h2>
            <p className="irex-section-body mt-3">{blog.body}</p>
          </div>
          <Link
            href={blog.cta.href}
            className="irex-button irex-button--secondary"
          >
            {blog.cta.label}
          </Link>
        </div>

        <div className="mt-7 grid gap-[18px] xl:grid-cols-3">
          {blog.items.map((post) => {
            const Icon = iconMap[post.icon];

            return (
              <article
                key={post.title}
                className="flex min-h-[278px] flex-col rounded-3xl border border-[var(--irex-border)] bg-white p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-[var(--irex-accent-soft)] px-[10px] py-[5px] text-[11px] font-bold text-[var(--irex-accent)]">
                    {post.tag}
                  </span>
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[var(--irex-surface)]">
                    <Icon className="h-[18px] w-[18px] text-[var(--irex-text-soft)]" />
                  </span>
                </div>

                <h3 className="mt-5 text-[1.375rem] leading-[1.2] font-bold text-[var(--irex-ink)]">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.48] text-[var(--irex-muted)]">
                  {post.summary}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--irex-ink)]"
                >
                  Ler artigo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
