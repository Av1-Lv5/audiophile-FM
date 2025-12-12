import ProductContentContainer from "@/components/ProductContentContainer";
import type { Product } from "@/types/product";

async function HomeHero({ product }: { product: Product }) {
	return (
		<section id="hero" className="absolute top-0 w-full h-[650px]">
			{/* flex container */}
			<div className="container mx-auto px-4 flex items-center justify-center text-white lg:justify-start lg:px-20 h-full">
				{/* Content container */}
				<ProductContentContainer isHomePage={true} product={product} />
			</div>
		</section>
	);
}

export default HomeHero;
