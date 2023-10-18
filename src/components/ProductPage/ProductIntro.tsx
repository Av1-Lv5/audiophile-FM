import { Product } from "@/types/product";

import AddToCart from "./AddToCart";

export type Props = {
	product: Product;
};

function ProductIntro(props: Props) {
	const { product } = props;

	return (
		<section id="product-intro">
			{/* Flex container */}
			<div className="container mx-auto px-6 my-12 flex flex-col gap-10 items-center sm:flex-row lg:gap-20 lg:px-20">
				{/* Image container */}
				<div className="w-full">
					<picture>
						<source
							srcSet={`/${product.image.desktop}`}
							media="(min-width: 1024px)"
							width={1080}
							height={1120}
						/>
						<source
							srcSet={`/${product.image.tablet}`}
							media="(min-width: 640px)"
							width={562}
							height={960}
						/>
						<img
							src={`/${product.image.mobile}`}
							alt=""
							className="rounded-xl"
							width={654}
							height={654}
						/>
					</picture>
				</div>
				<div className="flex gap-5 flex-col sm:max-w-[55%] lg:max-w-[45%]">
					{product.new && (
						<p className="text-[#d87d4a] font-light text-xs tracking-[0.5em]">
							NEW PRODUCT
						</p>
					)}
					<h2 className="text-3xl md:text-4xl uppercase font-semibold tracking-wide">
						{product.name}
					</h2>
					<p className="opacity-75 text-base">
						{product.description}
					</p>
					<p className="font-bold text-base tracking-wider">
						${product.price}
					</p>
					{/* Add to cart container */}
					<AddToCart product={product} />
				</div>
			</div>
		</section>
	);
}

export default ProductIntro;
