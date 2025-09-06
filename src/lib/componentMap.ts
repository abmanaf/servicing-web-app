import Page from "@/components/page";
import HeroSection from "@/components/molecules/home/hero";
import { ProviderSection } from "@/components/molecules/home/provider-section";
import WhyChooseUs from "@/components/molecules/home/why-choose-us";
import { OurServices } from "@/components/molecules/home/our-services.tsx";
import { HappyCustomer } from "@/components/molecules/home/happy-customer";
// import HeroSectionServices from "@/components/molecules/services/hero-section";

export const componentMap = {
  page: Page,
  heroSection: HeroSection,
  providerSection: ProviderSection,
  whyChooseUs: WhyChooseUs,
  ourSevices: OurServices,
  happyCustomer: HappyCustomer,
  // servicesHeroSection: HeroSectionServices,
};
