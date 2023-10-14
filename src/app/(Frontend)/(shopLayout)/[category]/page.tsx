// Components
import CategoryProductsList from "@/components/CategoryPage/CategoryProductsList";

export async function generateStaticParams() {
	const categories = ["headphones", "earphones", "speakers"];

	return categories.map((categoryTitle) => ({
		category: categoryTitle,
	}));
}

// types
import { ProductCategories } from "@/types/productCategories";
export type Props = {
	params: {
		category: ProductCategories;
	};
};

function CategoryPage({ params }: Props) {
	const { category } = params;

	return (
		<>
			<CategoryProductsList productCategory={`${category}`} />
		</>
	);
}

export default CategoryPage;
