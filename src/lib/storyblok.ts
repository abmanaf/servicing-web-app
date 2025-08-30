import Page from "@/components/page";
import HeroSection from "@/components/molecule/hero";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

const isPreview = process.env.STORYBLOK_IS_PREVIEW === "true";
const accessToken = process.env.STORYBLOK_TOKEN || process.env.STORYBLOK_PUBLIC_TOKEN;

export const getStoryblokApi = storyblokInit({
  bridge: isPreview,
  accessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    heroSection: HeroSection,
  },
  apiOptions: {
    region: "eu",
  },
});
