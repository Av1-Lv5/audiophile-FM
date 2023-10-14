// Components
import CommonHero from "@/components/CategoryPage/CommonHero";

// types
import { ProductCategories } from "@/types/productCategories";
export type Props = {
	params: {
		category: ProductCategories;
	};
	children: React.ReactNode;
};
function CategoryLayout(props: Props) {
	const { params, children } = props;
	const { category } = params;

	return (
		<>
			{category === "earphones" ||
			category === "headphones" ||
			category === "speakers" ? (
				<CommonHero headerTitle={`${category}`} />
			) : (
				<CommonHero headerTitle={undefined} />
			)}
			{children}
		</>
	);
}

export default CategoryLayout;
