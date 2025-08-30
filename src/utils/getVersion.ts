export default function getVersion() {
  if (process.env.NODE_ENV === 'development' || process.env.STORYBLOK_IS_PREVIEW === 'true') {
    return 'draft';
  }
  return 'published';
}
