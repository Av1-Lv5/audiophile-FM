// Components
import AboutUs from "@/components/AboutUs";
import CategoriesMenu from "@/components/CategoriesMenu";
import CategoryProductsList from "@/components/CategoryPage/CategoryProductsList";
import CommonHero from "@/components/CategoryPage/CommonHero";

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
		<main>
			{category === "earphones" ||
			category === "headphones" ||
			category === "speakers" ? (
				<CommonHero headerTitle={`${category}`} />
			) : (
				<CommonHero headerTitle={undefined} />
			)}
			<CategoryProductsList productCategory={`${category}`} />
			<CategoriesMenu />
			<AboutUs />
		</main>
	);
}

export default CategoryPage;
