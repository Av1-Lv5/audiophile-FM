"use client";
import StyledButton from "@/components/UI/Button";
import Counter from "./Counter";
import { Product } from "@/types/product";
import { useState } from "react";
import { addCartItem } from "@/stores/cart";

export type Props = {
	product: Product;
};
function AddToCart({ product }: Props) {
	const [count, setCount] = useState(1);

	function handleAddToCart() {
		addCartItem({ product: product, quantity: count });
		setCount(1);
	}

	return (
		<div className="flex gap-5 items-center flex-wrap">
			<Counter count={count} setCount={setCount} />
			<div onClick={handleAddToCart}>
				<StyledButton text="Add to cart" />
			</div>
		</div>
	);
}

export default AddToCart;
