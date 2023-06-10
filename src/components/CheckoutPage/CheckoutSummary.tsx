"use client";
import Button from "@/components/UI/Button";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import SummaryPrice from "./SummaryPrice";
import { useStore } from "@nanostores/react";
import { $cart, getTotalCartItems, getTotalPrice } from "@/stores/cart";

function CheckoutSummary() {
	const cart = useStore($cart);

	return (
		<div className="bg-white max-w-lg sticky top-24 lg:self-start grow min-w-[320px] p-6 rounded-md">
			<h3 className="uppercase font-semibold tracking-wider">Summary</h3>
			<div className="my-8 flex flex-col gap-5">
				{cart.map((cartItem) => {
					const { product, quantity } = cartItem;

					return (
						<CheckoutSummaryItem
							name={product.name}
							key={product.id}
							image={`image-${product.slug}`}
							price={product.price}
							quantity={quantity}
						/>
					);
				})}
			</div>
			<div className="mb-6">
				<SummaryPrice name={"Total"} price={getTotalPrice()} />
				<SummaryPrice
					name={"Shipping"}
					price={getTotalCartItems() !== 0 ? 50 : 0}
				/>
				<SummaryPrice
					name={"vat (included)"}
					price={(getTotalPrice() / 100) * 20}
				/>
			</div>
			<SummaryPrice
				name={"grand total"}
				price={
					getTotalCartItems() !== 0
						? (getTotalPrice() / 100) * 20 + getTotalPrice() + 50
						: 0
				}
				accent={true}
			/>

			<div className="w-full mt-6">
				<Button text="Continue & pay" bgColor="accent" />
			</div>
		</div>
	);
}

export default CheckoutSummary;
