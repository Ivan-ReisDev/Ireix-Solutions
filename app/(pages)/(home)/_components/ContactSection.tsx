import { Check, MessageCircle } from "lucide-react";

import {
  hasConfiguredWhatsApp,
  homePageContent,
} from "@/app/(pages)/(home)/_components/home-content";
import { ContactForm } from "@/app/(pages)/(home)/_components/ContactForm";

export function ContactSection() {
  const { contact } = homePageContent;

  return (
    <section id="contato" className="bg-[var(--irex-surface)]">
      <div className="irex-container irex-section grid gap-8 lg:grid-cols-[500px_minmax(0,1fr)]">
        <div className="max-w-[31.25rem]">
          <p className="irex-eyebrow">{contact.eyebrow}</p>
          <h2 className="irex-section-title mt-2">{contact.title}</h2>
          <p className="irex-section-body mt-3">{contact.body}</p>

          <ul className="mt-5 space-y-2.5">
            {contact.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <Check className="mt-1 h-[18px] w-[18px] shrink-0 text-[var(--irex-whatsapp)]" />
                <span className="text-base leading-7 text-[var(--irex-muted)]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={contact.whatsappCta.href}
            className="irex-button irex-button--whatsapp mt-6"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            {contact.whatsappCta.label}
          </a>

          {!hasConfiguredWhatsApp ? (
            <p className="mt-3 text-sm leading-6 text-[var(--irex-muted)]">
              {contact.whatsappFallback}
            </p>
          ) : null}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
