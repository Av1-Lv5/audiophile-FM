import { ProductCategories } from "@/types/productCategories";
import Link from "next/link";

export type Props = {
	title: ProductCategories;
};

function CategoryCard({ title }: Props) {
	return (
		<Link href={`/${title}`} className="group w-full">
			<div className="relative flex justify-center w-full h-32 md:h-36">
				<img
					src={`/assets/shared/desktop/image-category-thumbnail-${title}.png`}
					width={220}
					height={220}
					alt=""
					className="absolute top-4 h-full object-contain "
				/>
			</div>
			<div className="relative flex items-center justify-center py-6 px-8">
				<div className="text-center font-semibold tracking-wider before:content-[''] before:h-40 before:rounded-lg before:w-full before:bottom-0 before:bg-[#f1f1f1] before:left-0 before:-z-10 before:absolute">
					<p className="uppercase text-sm md:text-base">{title}</p>
					<p className="group-hover:text-[#d87d4a] flex items-center justify-center gap-1 text-xs mt-3 opacity-70 uppercase after:content-[url('/assets/right-arrow.svg')]">
						Shop
					</p>
				</div>
			</div>
		</Link>
	);
}

export default CategoryCard;
