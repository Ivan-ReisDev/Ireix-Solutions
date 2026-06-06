import { BlogInsightsSection } from "@/app/(pages)/(home)/_components/BlogInsightsSection";
import { ContactSection } from "@/app/(pages)/(home)/_components/ContactSection";
import { HeroSection } from "@/app/(pages)/(home)/_components/HeroSection";
import { ProcessSection } from "@/app/(pages)/(home)/_components/ProcessSection";
import { ProfessionalFooter } from "@/app/(pages)/(home)/_components/ProfessionalFooter";
import { ServicesSection } from "@/app/(pages)/(home)/_components/ServicesSection";
import { TestimonialsSection } from "@/app/(pages)/(home)/_components/TestimonialsSection";
import { TopNavigation } from "@/app/(pages)/(home)/_components/TopNavigation";
import { WhatsAppSpotlight } from "@/app/(pages)/(home)/_components/WhatsAppSpotlight";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[var(--irex-ink)]">
      <TopNavigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhatsAppSpotlight />
        <TestimonialsSection />
        <BlogInsightsSection />
        <ContactSection />
      </main>
      <ProfessionalFooter />
    </div>
  );
}
