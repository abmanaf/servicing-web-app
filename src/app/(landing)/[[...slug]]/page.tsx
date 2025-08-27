import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import getVersion from "@/utils/getVersion";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const availableLanguages = ["en", "fr", "de"];
  const language = availableLanguages.includes(slug[0]) ? slug[0] : "en";

  if (language) {
    slug.shift();
  }

  const fullSlug = slug ? slug.join("/") : "home";
  try {
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(
      `${process.env.STORYBLOK_BASE_URL}/${fullSlug}`,
      {
        version: getVersion(),
        language,
      }
    );
    return <StoryblokStory story={data.story} />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}
