"use client";
import { atom } from "nanostores";

import type { CartItem } from "@/types/cartItem";

export const $cart = atom<CartItem[]>([]);

export function addCartItem(newCartItem: CartItem) {
	let isAlreadyExist = false;

	$cart.get().forEach((cartItem) => {
		if (cartItem.product.id === newCartItem.product.id) {
			isAlreadyExist = true;
		}
	});

	let updatedCart: CartItem[] = [];

	// if newItem already exist we have to update the count. else just add newItem to end
	if (isAlreadyExist) {
		updatedCart = $cart.get().map((cartItem) => {
			if (cartItem.product.id === newCartItem.product.id) {
				cartItem.quantity += newCartItem.quantity;
			}

			return cartItem;
		});
	} else {
		updatedCart = [...$cart.get(), newCartItem];
	}

	$cart.set(updatedCart);
}

export function removeCartItem(cartItem: CartItem) {
	let updatedCart: CartItem[];
	const cart = $cart.get();
	if (cartItem.quantity > 1) {
		updatedCart = cart.map((item) => {
			if (item.product.id === cartItem.product.id) {
				item.quantity--;
			}
			return item;
		});
	} else {
		const indexOfItemToDelete = cart.indexOf(cartItem);
		cart.splice(indexOfItemToDelete, 1);
		updatedCart = [...cart];
		console.log(cart);
	}

	$cart.set(updatedCart);
}

export function removeAllCartItems() {
	$cart.set([]);
}

export function getTotalCartItems(): number {
	let totalItems = 0;
	$cart.get().forEach((cartItem: CartItem) => {
		totalItems += cartItem.quantity;
	});
	return totalItems;
}

export function getTotalPrice(): number {
	let totalPrice: number = 0;
	$cart.get().forEach((cartItem) => {
		totalPrice += cartItem.product.price * cartItem.quantity;
	});
	return totalPrice;
}
