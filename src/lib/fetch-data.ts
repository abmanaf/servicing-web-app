import { getStoryblokApi } from "@/lib/storyblok";
import getVersion from "@/utils/getVersion";

export async function getSiteConfig(language: string) {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/site-config`, {
      version: getVersion(),
      language,
      cv: Date.now(),
    });

    return data?.story;
  } catch (error) {
    console.error("Error fetching site config:", error);
    return null;
  }
}
