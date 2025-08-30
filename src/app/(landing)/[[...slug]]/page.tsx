import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import getVersion from "@/utils/getVersion";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug?: string[] }>;
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
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
      version: getVersion(),
      language,
      resolve_relations: ["heroSection", "providerSection", "whyChooseUs"],
      cv: Date.now(),
      resolve_links: 'url'
    });
    
    if (!data?.story) {
      return notFound();
    }
    
    return <StoryblokStory story={data.story} />;
  } catch (error) {
    notFound();
  }
}
