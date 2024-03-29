// Components
import ProductPageContent from "@/components/ProductPage/ProductPageContent";
import GoBack from "@/components/GoBack";

// Data
import products from "@/data/products.json";

// Types
export type Props = {
	params: { productId: string };
};

export function generateStaticParams() {
	return products.map((eachProduct) => ({
		id: eachProduct.id,
	}));
}

async function ProductPage({ params }: Props) {
	const { productId } = params;

	const currentProduct = products.find((product) => {
		return product.slug === productId;
	});

	return (
		<main>
			<div className="h-20 bg-black"></div>
			{currentProduct !== undefined ? (
				<>
					<GoBack slug={currentProduct.category} />
					<ProductPageContent product={currentProduct} />
				</>
			) : (
				<h2 className="uppercase text-4xl bold text-center mt-20">
					404: Product does not exist
				</h2>
			)}
		</main>
	);
}

export default ProductPage;
