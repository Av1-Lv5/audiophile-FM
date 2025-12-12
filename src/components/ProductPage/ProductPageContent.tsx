// components
import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";
import ProductIntro from "./ProductIntro";
import YouMayLike from "./YouMayLike";

// Types
import { Product } from "@/types/product";
export type Props = {
	product: Product;
};

function ProductPageContent({ product }: Props) {
	return (
		<div>
			<ProductIntro product={product} />
			<ProductDetails product={product} />
			<ProductGallery product={product} />
			<YouMayLike otherProducts={product.youMayLike} />
		</div>
	);
}

export default ProductPageContent;
