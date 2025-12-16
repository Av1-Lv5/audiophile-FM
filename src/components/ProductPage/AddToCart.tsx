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
	const [isAdded, setIsAdded] = useState(false);

	function handleAddToCart() {
		if (isAdded) return;
		addCartItem({ product: product, quantity: count });
		setCount(1);
		setIsAdded(true);
		setTimeout(() => {
			setIsAdded(false);
		}, 2000);
	}

	return (
		<div className="flex gap-5 items-center flex-wrap">
			<Counter count={count} setCount={setCount} />
			<div onClick={handleAddToCart}>
				<StyledButton text="Add to cart" />
			</div>
			{isAdded && (
				<div className="flex items-center gap-2 text-[#d87d4a] transition-opacity duration-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					<span className="text-xs font-bold">Added</span>
				</div>
			)}
		</div>
	);
}

export default AddToCart;
