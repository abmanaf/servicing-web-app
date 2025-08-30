import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import type { Page } from "@/types";

export default function Page({ blok }: { blok: Page }) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
