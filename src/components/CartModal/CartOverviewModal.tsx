"use client";
import { useStore } from "@nanostores/react";
import { $cart, getTotalCartItems, removeAllCartItems } from "@/stores/cart";
import CartItem from "./CartItem";
import { closeCartOverviewModal } from "@/stores/cartOverviewModal";
import { toggleOverlay } from "@/stores/overlay";
import StyledButton from "../UI/Button";
import Link from "next/link";

function CartModal() {
	const cart = useStore($cart);
	const totalItems = getTotalCartItems();
	const isCartEmpty = cart.length === 0;

	return (
		<div className="container mx-auto px-6 lg:px-20">
			<div className="bg-white max-w-sm ml-auto px-6 py-8 rounded-md pointer-events-auto">
				{isCartEmpty ? (
					<div>
						<p className="flex items-center justify-center uppercase font-semibold text-lg h-36">
							Your Cart is Empty
						</p>
						<div
							onClick={() => {
								closeCartOverviewModal();
								toggleOverlay(false);
							}}
						>
							<StyledButton text="Continue shopping" />
						</div>
					</div>
				) : (
					<>
						<div className="flex justify-between">
							<p className="font-medium text-lg">
								CART ({totalItems})
							</p>
							<button
								onClick={() => {
									removeAllCartItems();
								}}
								className="underline"
							>
								Remove all
							</button>
						</div>
						<div className="my-6 flex flex-col gap-4">
							{cart.map((cartItem, key) => {
								return (
									<CartItem key={key} cartItem={cartItem} />
								);
							})}
						</div>
						<Link
							href="/checkout"
							onClick={() => {
								closeCartOverviewModal();
								toggleOverlay(false);
							}}
						>
							<StyledButton text="Checkout" />
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default CartModal;
