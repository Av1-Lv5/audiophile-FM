"use client";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import { useStore } from "@nanostores/react";
import { $cart, getTotalCartItems, getTotalPrice } from "@/stores/cart";
import StyledButton from "@/components/UI/Button";

type SummaryPriceProps = {
	name: string;
	price: number;
	accent?: boolean;
};

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
							name={product.shortName}
							key={product.slug.current}
							image={product.cartImage.asset._ref}
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
				<StyledButton text="Continue & pay" />
			</div>
		</div>
	);
}

function SummaryPrice(props: SummaryPriceProps) {
	const { name, price, accent } = props;
	return (
		<div className="flex justify-between uppercase text-sm">
			<p className="opacity-60">{name}</p>
			<p className={`${accent ? "text-[#d87d4a]" : ""} font-bold`}>
				$ {price.toFixed(2)}
			</p>
		</div>
	);
}

export default CheckoutSummary;
