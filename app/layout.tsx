import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { siteUrl } from "@/app/(pages)/(home)/_components/home-content";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ireix Solution | Soluções digitais para crescimento",
  description:
    "Sites, sistemas, automações, WhatsApp Business API, IA para empresas e SEO técnico com foco em performance e crescimento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ireix Solution | Soluções digitais para crescimento",
    description:
      "Transforme sua presença digital em vendas, automação e crescimento previsível.",
    url: siteUrl,
    siteName: "Ireix Solution",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ireix Solution - soluções digitais para crescimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ireix Solution | Soluções digitais para crescimento",
    description:
      "Sites, sistemas, automações, WhatsApp Business API, IA para empresas e SEO técnico com foco em performance e crescimento.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
