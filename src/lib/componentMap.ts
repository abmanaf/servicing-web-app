import Page from "@/components/page";
import HeroSection from "@/components/molecules/home/hero";
import { ProviderSection } from "@/components/molecules/home/provider-section";
import WhyChooseUs from "@/components/molecules/home/why-choose-us";
import { OurServices } from "@/components/molecules/home/our-services.tsx";
// import HeroSectionServices from "@/components/molecules/services/hero-section";

export const componentMap = {
  page: Page,
  heroSection: HeroSection,
  providerSection: ProviderSection,
  whyChooseUs: WhyChooseUs,
  ourSevices: OurServices,
  // servicesHeroSection: HeroSectionServices,
};
