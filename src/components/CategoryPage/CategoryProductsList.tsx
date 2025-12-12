// Components
import ProductBrief from "@/components/CategoryPage/ProductBrief";

// Types
import { ProductCategories } from "@/types/productCategories";
import { Product } from "@/types/product";
import { getAllProducts } from "@/utils/sanity-utils";

export type Props = {
	productCategory: ProductCategories;
};

async function CategoryProductsList({ productCategory }: Props) {
	const products = await getAllProducts();

	return (
		<section id="products">
			{products.map((product: Product) => {
				if (product.category === productCategory)
					return <ProductBrief product={product} key={product._id} />;
			})}
		</section>
	);
}

export default CategoryProductsList;
