import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import getVersion from "@/utils/getVersion";
import { notFound } from "next/navigation";
import { Navbar } from "@/shared/layout/nav-bar";
import { Footer } from "@/shared/layout/footer";
import { NavBar, FooterSection, ChatBot } from "@/types";
import { getSiteConfig } from "@/lib/fetch-data";
import ChatbotWidget from "@/shared/layout/chatbot-widget";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: Props) {
  const slugArray = (await params).slug ?? [];

  const availableLanguages = ["en", "fr", "de"];
  const firstSegment = slugArray[0];
  const isLanguage = firstSegment && availableLanguages.includes(firstSegment);

  const language = isLanguage ? firstSegment : "en";
  const pathSlug = isLanguage ? slugArray.slice(1) : slugArray;

  const fullSlug = pathSlug.length > 0 ? pathSlug.join("/") : "home";

  try {
    const [pageData, siteConfig] = await Promise.all([
      (async () => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
          version: getVersion(),
          language,
          cv: Date.now(),
          resolve_links: "url",
        });
        return data;
      })(),
      getSiteConfig(language),
    ]);

    if (!pageData?.story) {
      return notFound();
    }

    const navbarData = siteConfig?.content?.body?.find(
      (item: NavBar) => item.component === "navBar",
    ) as NavBar;

    const footerData = siteConfig?.content?.body?.find(
      (item: FooterSection) => item.component === "footerSection",
    ) as FooterSection;

    const chatbotData = siteConfig?.content?.body?.find(
      (item: ChatBot) => item.component === "chatBot",
    ) as ChatBot;

    return (
      <>
        {navbarData && <Navbar blok={navbarData} />}
        <StoryblokStory story={pageData.story} />
        {footerData && <Footer blok={footerData} />}
        {chatbotData && <ChatbotWidget blok={chatbotData} />}
      </>
    );
  } catch (error) {
    console.error("Error:", error);
    notFound();
  }
}
