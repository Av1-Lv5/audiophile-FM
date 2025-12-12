/* This component is used only at "/product/[productId]" route. */

// Components
import type { Product } from "@/types/product";

import ProductCard from "./ProductCard";

export type Props = {
	otherProducts: Product[];
};

function YouMayLike(props: Props) {
	const { otherProducts } = props;

	return (
		<>
			{
				<section id="you-may-like">
					<h2 className="uppercase text-center text-3xl font-semibold tracking-wide">
						You may also like
					</h2>
					{/* flex container */}
					<div className="container mx-auto items-center px-6 lg:px-20 mt-12 mb-20 flex flex-col sm:flex-row gap-10 justify-between">
						{otherProducts?.map((otherProduct, key) => {
							const { slug, name, productImage } = otherProduct;
							return (
								<ProductCard
									key={key}
									slug={slug.current}
									name={name}
									image={productImage}
								/>
							);
						})}
					</div>
				</section>
			}
		</>
	);
}

export default YouMayLike;
