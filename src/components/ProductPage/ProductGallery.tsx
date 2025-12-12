/* This component is used only in ProductPageContent.tsx component */

import type { Product } from "@/types/product";
import { urlFor } from "@/utils/sanity-client";

export type Props = {
	product: Product;
};

function ProductGallery({ product }: Props) {
	const { gallery } = product;

	return (
		<section id="product-gallery">
			<div className="container px-6 lg:px-20 mx-auto my-12 lg:my-20 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
				{/* First image */}
				<picture>
					<source
						srcSet={urlFor(gallery.first.desktop.asset).url()}
					/>
					<source srcSet={urlFor(gallery.first.tablet.asset).url()} />
					<img
						src={urlFor(gallery.first.mobile.asset).url()}
						className="object-cover w-full rounded-lg"
						alt=""
					/>
				</picture>
				{/* Second image */}
				<picture className="col-start-1 row-start-2">
					<source
						srcSet={urlFor(gallery.second.desktop.asset).url()}
					/>
					<source
						srcSet={urlFor(gallery.second.tablet.asset).url()}
					/>
					<img
						src={urlFor(gallery.second.mobile.asset).url()}
						className="object-cover w-full rounded-lg"
						alt=""
					/>
				</picture>
				{/* third image */}
				<picture className="row-span-2">
					<source
						srcSet={urlFor(gallery.third.desktop.asset).url()}
					/>
					<source srcSet={urlFor(gallery.third.tablet.asset).url()} />
					<img
						src={urlFor(gallery.third.mobile.asset).url()}
						className="object-cover h-full w-full rounded-lg"
						alt=""
					/>
				</picture>
			</div>
		</section>
	);
}

export default ProductGallery;
