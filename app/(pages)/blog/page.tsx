import Link from "next/link";

import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";

export default function BlogPage() {
  const { blog } = homePageContent;

  return (
    <main className="min-h-screen bg-[var(--irex-surface)] py-16">
      <div className="irex-container">
        <Link
          href="/"
          className="text-sm font-bold text-[var(--irex-accent)] transition-colors hover:text-[var(--irex-accent-strong)]"
        >
          Voltar para a home
        </Link>
        <header className="mt-6 max-w-4xl">
          <p className="irex-eyebrow">{blog.eyebrow}</p>
          <h1 className="irex-section-title mt-2">{blog.title}</h1>
          <p className="irex-section-body mt-3">{blog.body}</p>
        </header>

        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          {blog.items.map((post) => (
            <article
              key={post.title}
              id={post.href.split("#")[1]}
              className="rounded-3xl border border-[var(--irex-border)] bg-white p-6"
            >
              <p className="text-[11px] font-bold text-[var(--irex-accent)]">
                {post.tag}
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-[var(--irex-ink)]">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--irex-muted)]">
                {post.summary}
              </p>
              <p className="mt-6 text-sm leading-6 text-[var(--irex-text-subtle)]">
                Conteúdo editorial em expansão. Este teaser existe para manter a
                navegação da home íntegra enquanto a área completa de artigos
                evolui.
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
