import Link from "next/link";
import StyledButton from "./UI/Button";

export type Props = {
	isNew: boolean;
	isHomePage?: boolean;
	name: string;
	description: string;
	slug: string;
};

function ProductContentContainer(props: Props) {
	const { isNew, slug, isHomePage, name, description } = props;

	return (
		<div
			className={`${
				isHomePage ? "mt-20 max-w-[400px]" : "lg:max-w-[45%]"
			} flex gap-5 flex-col items-center text-center lg:items-start lg:text-start`}
		>
			{isNew && (
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
				{name}
			</h2>
			<p className="opacity-75 text-sm">{description}</p>
			{
				<Link href={`/products/${slug}`}>
					<StyledButton text="See product" bgColor="accent" />
				</Link>
			}
		</div>
	);
}

export default ProductContentContainer;
