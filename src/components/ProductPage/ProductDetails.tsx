/* This component is only used inside ProductPageContent.tsx component */

import { Product } from "@/types/product";

// Types
export type Props = {
	product: Product;
};

function ProductDetails(props: Props) {
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
					<p className="opacity-60 text-sm">{product.features}</p>
				</div>
				{/* In the box */}
				<div>
					<h3 className="text-3xl mb-8 font-semibold tracking-wider uppercase">
						in the box
					</h3>
					<ul className="text-sm">
						{product.includes.map((item) => {
							return (
								<li className="flex gap-5 my-2">
									<span className="font-bold text-[#d87d4a]">
										{item.quantity}x
									</span>
									<span className="opacity-60">
										{item.item}
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
