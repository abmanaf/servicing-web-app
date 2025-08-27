export default function getVersion() {
  return process.env.STORYBLOK_IS_PREVIEW === "true" ? "draft" : "published";
}
