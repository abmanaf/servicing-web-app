import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  bridge: process.env.STORYBLOK_IS_PREVIEW === "true" ? true : false,
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});
