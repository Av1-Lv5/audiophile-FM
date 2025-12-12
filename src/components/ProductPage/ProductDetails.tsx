/* This component is only used inside ProductPageContent.tsx component */

import type { Product } from "@/types/product";

// Types
export type ProductDetailsProps = {
	product: Product;
};

function ProductDetails(props: ProductDetailsProps) {
	const { product } = props;
	return (
		<section id="product-details">
			{/* Flex container */}
			<div className="container mx-auto px-6 my-20 flex flex-col gap-20 items-start md:flex-row lg:px-20">
				{/* product-features */}
				<div className="md:w-[60%] md:max-w-lg">
					<h3 className="text-3xl mb-8 font-semibold tracking-wider uppercase">
						Features
					</h3>
					<p className="opacity-60 text-base">{product.features}</p>
				</div>
				{/* In the box */}
				<div>
					<h3 className="text-3xl mb-8 font-semibold tracking-wider uppercase">
						in the box
					</h3>
					<ul className="text-base">
						{product.includes?.map((included, key) => {
							if (!included?.item) return null;
							return (
								<li key={key} className="flex gap-5 my-2">
									<span className="font-bold text-[#d87d4a]">
										{included.quantity}x
									</span>
									<span className="opacity-60">
										{included.item.itemName}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default ProductDetails;
