import {createImageUrlBuilder, type SanityImageSource} from "@sanity/image-url";

import {sanityClient} from "./client";

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForSanityImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}
