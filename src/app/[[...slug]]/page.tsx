import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import getVersion from "@/utils/getVersion";
import { notFound } from "next/navigation";
import { Navbar } from "@/shared/layout/nav-bar";
import { Footer } from "@/shared/layout/footer";
import { NavBar, FooterSection } from "@/types";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

async function getSiteConfig() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/site-config`, {
      version: getVersion(),
      cv: Date.now(),
    });
    
    return data?.story;
  } catch (error) {
    console.error("Error fetching site config:", error);
    return null;
  }
}

export default async function Page({ params }: Props) {
  const { slug = [] } = await params;

  const availableLanguages = ["en", "fr", "de"];
  const firstSegment = slug?.[0] || '';
  const language = availableLanguages.includes(firstSegment) ? firstSegment : "en";

  const pathSlug = [...slug];
  if (language && pathSlug.length > 0) {
    pathSlug.shift();
  }

  const fullSlug = pathSlug.length > 0 ? pathSlug.join("/") : "home";
  
  try {
    const [pageData, siteConfig] = await Promise.all([
      (async () => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
          version: getVersion(),
          language,
          cv: Date.now(),
          resolve_links: 'url'
        });
        return data;
      })(),
      getSiteConfig()
    ]);

    if (!pageData?.story) {
      return notFound();
    }

    const navbarData = siteConfig?.content?.body?.find(
      (item: any) => item.component === "navBar"
    ) as NavBar;
    
    const footerData = siteConfig?.content?.body?.find(
      (item: any) => item.component === "footerSection"
    ) as FooterSection;

    return (
      <>
        {navbarData && <Navbar blok={navbarData} />}
        <StoryblokStory story={pageData.story} />
        {footerData && <Footer blok={footerData} />}
      </>
    );
  } catch (error) {
    console.error("Error:", error);
    notFound();
  }
}