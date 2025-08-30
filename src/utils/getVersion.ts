export const isInVisualEditor = typeof window !== 'undefined' && window.location !== window.parent.location;

export default function getVersion() {
  if (process.env.NODE_ENV === 'development' || 
      process.env.STORYBLOCK_IS_PREVIEW === 'true' || 
      isInVisualEditor) {
    return 'draft';
  }
  return 'published';
}
