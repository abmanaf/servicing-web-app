import Page from "@/components/page";
import HeroSection from "@/components/molecules/home/hero";
import { ProviderSection } from "@/components/molecules/home/provider-section";
import WhyChooseUs from "@/components/molecules/home/why-choose-us";
import { OurServices } from "@/components/molecules/home/our-services.tsx";
import { HappyCustomer } from "@/components/molecules/home/happy-customer";
import { SharedHeroSection } from "@/components/molecules/shared/hero";
import { ServicesSection } from "@/components/molecules/services/services-section";
import { WorkProcess } from "@/components/molecules/services/work-process";
import { StatsSection } from "@/components/molecules/about/stats-section";
import { AboutSummary } from "@/components/molecules/about/summary";
import { OurTeam } from "@/components/molecules/about/our-team";

export const componentMap = {
  page: Page,
  heroSection: HeroSection,
  providerSection: ProviderSection,
  whyChooseUs: WhyChooseUs,
  ourSevices: OurServices,
  happyCustomer: HappyCustomer,
  otherHeroSection: SharedHeroSection,
  servicesSection: ServicesSection,
  workProcess: WorkProcess,
  statsSection: StatsSection,
  aboutSummary: AboutSummary,
  ourTeam: OurTeam,
};
