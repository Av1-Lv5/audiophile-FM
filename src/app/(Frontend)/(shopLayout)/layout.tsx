// Components
import AboutUs from "@/components/AboutUs";
import CategoriesMenu from "@/components/CategoriesMenu";

// types
export type Props = {
	children: React.ReactNode;
};
function ShopLayout(props: Props) {
	const { children } = props;

	return (
		<main>
			{children}
			<CategoriesMenu />
			<AboutUs />
		</main>
	);
}

export default ShopLayout;
