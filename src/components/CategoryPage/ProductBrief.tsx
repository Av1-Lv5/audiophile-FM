import { Product } from "@/types/product";
import ProductContentContainer from "../ProductContentContainer";
import { urlFor } from "@/utils/sanity-client";
export type Props = {
	product: Product;
};

function ProductBrief({ product }: Props) {
	return (
		<div className="container mx-auto lg:even:flex-row-reverse lg:flex-row gap-10 md:gap-20 px-6 my-20 w-full flex flex-col justify-between items-center lg:px-20">
			<div className="max-w-screen-sm">
				<picture>
					<source
						srcSet={urlFor(
							product.categoryImage.desktop.asset,
						).url()}
						media="(min-width: 1024px)"
						width={1080}
						height={1120}
					/>
					<source
						srcSet={urlFor(
							product.categoryImage.tablet.asset,
						).url()}
						media="(min-width: 480px)"
						width={1378}
						height={704}
					/>
					<img
						width={654}
						height={704}
						src={urlFor(product.categoryImage.mobile.asset).url()}
						alt=""
						className="rounded-xl"
					/>
				</picture>
			</div>
			<ProductContentContainer product={product} />
		</div>
	);
}

export default ProductBrief;
