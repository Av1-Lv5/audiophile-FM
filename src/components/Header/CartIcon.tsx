// Next components
import { $cart } from "@/stores/cart";
import { $modal, toggleCartOverviewModal } from "@/stores/cartOverviewModal";
import { toggleOverlay } from "@/stores/overlay";
import { useStore } from "@nanostores/react";

function CartIcon() {
	const isCartShown = useStore($modal);
	const cart = useStore($cart);

	function showCart() {
		toggleCartOverviewModal();
		toggleOverlay(!isCartShown);
	}

	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<div className="relative px-4 select-none">
			<span className="cursor-pointer" onClick={showCart}>
				<img
					width={24}
					height={24}
					src={"/assets/cart.svg"}
					alt="cart icon"
				/>
			</span>
			<div className="absolute -top-4 right-2 bg-[#d87d4a] text-xs px-1 rounded-md">
				{totalItems}
			</div>
		</div>
	);
}

export default CartIcon;
