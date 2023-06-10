// Data
import products from "@/data/products";

// Components
import ProductBrief from "@/components/CategoryPage/ProductBrief";

// Types
import { ProductCategories } from "@/types/productCategories";
export type Props = {
	productCategory: ProductCategories;
};

function CategoryProductsList({ productCategory }: Props) {
	return (
		<section id="products">
			{products.map((product, index) => {
				if (product.category === productCategory)
					return (
						<ProductBrief
							key={index}
							slug={product.slug}
							name={product.name}
							description={product.description}
							images={product.categoryImage}
							isNew={product.new}
						/>
					);
			})}
		</section>
	);
}

export default CategoryProductsList;
