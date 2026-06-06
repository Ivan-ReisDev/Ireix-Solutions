import type { Metadata } from "next";

import { HomePage } from "@/app/(pages)/(home)/_components/HomePage";

export const metadata: Metadata = {
  title: "Ireix Solution | Sites, sistemas, automações e IA",
  description:
    "Transforme sua presença digital em vendas, automação e crescimento previsível com soluções web sob medida.",
};

export default function Home() {
  return <HomePage />;
}
