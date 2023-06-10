import ProductContentContainer from "../ProductContentContainer";

export type Props = {
	slug: string;
	name: string;
	description: string;
	images: {
		desktop: string;
		tablet: string;
		mobile: string;
	};
	isNew: boolean;
};
function ProductBrief({ slug, images, name, description, isNew }: Props) {
	return (
		<div className="container mx-auto lg:even:flex-row-reverse lg:flex-row gap-10 md:gap-20 px-6 my-20 w-full flex flex-col justify-between items-center lg:px-20">
			<div className="max-w-screen-sm">
				<picture>
					<source
						srcSet={`/${images.desktop}`}
						media="(min-width: 1024px)"
					/>
					<source
						srcSet={`/${images.tablet}`}
						media="(min-width: 480px)"
					/>
					<img
						src={`/${images.mobile}`}
						alt=""
						className="rounded-xl"
					/>
				</picture>
			</div>
			<ProductContentContainer
				isNew={isNew}
				name={name}
				description={description}
				slug={slug}
			/>
		</div>
	);
}

export default ProductBrief;
