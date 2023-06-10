/* This component is used only in ProductPageContent.tsx component */

import { Product } from "@/types/product";

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
					<source srcSet={`/${gallery.first.desktop}`} />
					<source srcSet={`/${gallery.first.tablet}`} />
					<img
						src={`/${gallery.first.mobile}`}
						className="object-cover w-full rounded-lg"
					/>
				</picture>
				{/* Second image */}
				<picture className="col-start-1 row-start-2">
					<source srcSet={`/${gallery.second.desktop}`} />
					<source srcSet={`/${gallery.second.tablet}`} />
					<img
						src={`/${gallery.second.mobile}`}
						className="object-cover w-full rounded-lg"
					/>
				</picture>
				{/* third image */}
				<picture className="row-span-2">
					<source srcSet={`/${gallery.third.desktop}`} />
					<source srcSet={`/${gallery.third.tablet}`} />
					<img
						src={`/${gallery.third.mobile}`}
						className="object-cover h-full w-full rounded-lg"
					/>
				</picture>
			</div>
		</section>
	);
}

export default ProductGallery;
