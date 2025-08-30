import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { componentMap } from "./componentMap";

const isPreview = process.env.STORYBLOK_IS_PREVIEW === "true" ? true : false;
const accessToken = process.env.STORYBLOK_TOKEN || process.env.STORYBLOK_PUBLIC_TOKEN;

export const getStoryblokApi = storyblokInit({
  bridge: isPreview,
  accessToken,
  use: [apiPlugin],
  components: componentMap,
  apiOptions: {
    region: "eu",
  },
});
