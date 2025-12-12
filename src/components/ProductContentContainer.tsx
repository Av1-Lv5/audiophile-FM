import Link from "next/link";
import StyledButton from "./UI/Button";
import type { Product } from "@/types/product";

export type Props = {
	product: Product;
	isHomePage?: boolean;
};

function ProductContentContainer({ product, isHomePage }: Props) {
	return (
		<div
			className={`${
				isHomePage ? "mt-20 max-w-[400px]" : "lg:max-w-[45%]"
			} flex gap-5 flex-col items-center text-center lg:items-start lg:text-start`}
		>
			{product.new && (
				<p
					className={`${
						isHomePage ? "opacity-80" : "text-[#d87d4a]"
					} font-light text-xs tracking-[0.5em]`}
				>
					NEW PRODUCT
				</p>
			)}
			<h2
				className={`${
					isHomePage ? "sm:text-5xl text-4xl" : "text-3xl md:text-4xl"
				} uppercase font-semibold tracking-wide `}
			>
				{product.name}
			</h2>
			<p className="opacity-75 text-base">{product.description}</p>

			<Link href={`/products/${product.slug?.current}`}>
				<StyledButton text="See product" />
			</Link>
		</div>
	);
}

export default ProductContentContainer;
