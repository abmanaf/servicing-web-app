import Page from "@/components/page";
import HeroSection from "@/components/molecules/home/hero";
import { ProviderSection } from "@/components/molecules/home/provider-section";
import WhyChooseUs from "@/components/molecules/home/why-choose-us";
import { OurServices } from "@/components/molecules/home/our-services.tsx";
import { HappyCustomer } from "@/components/molecules/home/happy-customer";
import { ServicesHeroSection } from "@/components/molecules/services/hero-section";
import { ServicesSection } from "@/components/molecules/services/services-section";
import { WorkProcess } from "@/components/molecules/services/work-process";

export const componentMap = {
  page: Page,
  heroSection: HeroSection,
  providerSection: ProviderSection,
  whyChooseUs: WhyChooseUs,
  ourSevices: OurServices,
  happyCustomer: HappyCustomer,
  servicesHeroSection: ServicesHeroSection,
  servicesSection: ServicesSection,
  workProcess: WorkProcess,
};
