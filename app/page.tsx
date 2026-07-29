import { HeroSection } from "@/components/sections/HeroSection";
import { TechBar } from "@/components/sections/TechBar";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhySection } from "@/components/sections/WhySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechBar />
      <ShowcaseSection />
      <PortfolioSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}