import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
const builder = createImageUrlBuilder({
  projectId: 'wmzu9qlt',
  dataset: 'production',
});
export function imageUrl(source: SanityImageSource) {
  return builder.image(source).width(1400).fit('max').auto('format').url();
}
