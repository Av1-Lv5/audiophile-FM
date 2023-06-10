/* This component is used only at "/product/[productId]" route. */

// Components
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export type Props = {
	// alikeProducts: {
	// 	slug: string;
	// 	name: string;
	// 	image: {
	// 		mobile: string;
	// 		tablet: string;
	// 		desktop: string;
	// 	};
	// }[];
	product: Product;
};

function YouMayLike(props: Props) {
	const { product } = props;
	return (
		<section id="you-may-like">
			<h2 className="uppercase text-center text-3xl font-semibold tracking-wide">
				You may also like
			</h2>
			{/* flex container */}
			<div className="container mx-auto items-center px-6 lg:px-20 mt-12 mb-20 flex flex-col sm:flex-row gap-10 justify-between">
				{product.others.map((product, key) => {
					const { slug, name, image } = product;
					return (
						<ProductCard
							key={key}
							slug={slug}
							name={name}
							image={image}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default YouMayLike;
