/* Product cards in "you may also like" section.*/

import Link from "next/link";
import Button from "../UI/Button";

// Types
export type Props = {
	slug: string;
	name: string;
	image: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
};

function ProductCard(props: Props) {
	const { name, slug, image } = props;
	return (
		<div className="max-w-sm flex gap-4 flex-col items-center">
			<div>
				<picture>
					<source
						srcSet={`/${image.desktop}`}
						media="(min-width: 1080px)"
					/>
					<source
						srcSet={`/${image.tablet}`}
						media="(min-width: 640px)"
					/>
					<img
						src={`/${image.mobile}`}
						alt=""
						className="rounded-md"
					/>
				</picture>
			</div>
			<p className="md:text-2xl text-xl font-semibold tracking-wide uppercase">
				{name}
			</p>
			<Link href={`/products/${slug}`}>
				<Button text="See product" bgColor="accent" />
			</Link>
		</div>
	);
}

export default ProductCard;
