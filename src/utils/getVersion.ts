export default function getVersion() {
  if (process.env.NODE_ENV === 'development') {
    return 'draft';
  }
  if (process.env.NODE_ENV === 'test') {
    return 'draft';
  }
  return 'published';
}
