// types
import {ProductCategories} from "@/types/productCategories";
export type Props = {
	headerTitle: ProductCategories | undefined;
};

function CommonHero({ headerTitle }: Props) {
	return (
		<section id="pageHeaderTitle">
			<div className="px-4 h-[250px] md:h-[300px] flex items-center justify-center bg-black">
				<p className="text-white uppercase text-3xl mt-20 font-semibold tracking-wider md:text-4xl">
					{headerTitle ? headerTitle : `404: Category does not exist`}
				</p>
			</div>
		</section>
	);
}

export default CommonHero;
