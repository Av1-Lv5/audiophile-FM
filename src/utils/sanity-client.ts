import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_DATASET,
	apiVersion: "2023-05-10",
	useCdn: false,
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
