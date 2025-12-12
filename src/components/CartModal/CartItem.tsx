import { addCartItem, removeCartItem } from "@/stores/cart";
import type { CartItem } from "@/types/cartItem";
import { urlFor } from "@/utils/sanity-client";
import Image from "next/image";

export type Props = {
	cartItem: CartItem;
};
function CartItem(props: Props) {
	const { cartItem } = props;
	return (
		<div className="flex items-start gap-3">
			<div className="w-14 h-14 shrink-0">
				<img
					src={urlFor(cartItem.product.cartImage).url()}
					alt=""
					className="rounded-lg h-full w-full object-cover object-center"
				/>
			</div>
			<div className="font-semibold flex grow justify-between items-start">
				<div>
					<p className="uppercase mb-1 text-sm">
						{cartItem.product.shortName}
					</p>
					<p className="opacity-60 text-xs">
						${cartItem.product.price}
					</p>
				</div>
				<div className="bg-[#f1f1f1] mt-2 font-bold flex items-center">
					<button
						className="py-2 px-4 text-sm opacity-40 hover:text-[#d87d4a] hover:opacity-100"
						onClick={() => {
							removeCartItem(cartItem);
						}}
					>
						-
					</button>
					<p className="w-6 text-center text-xs">
						{cartItem.quantity}
					</p>
					<button
						className="py-2 px-4 text-sm opacity-40 hover:text-[#d87d4a] hover:opacity-100"
						onClick={() => {
							addCartItem({
								product: cartItem.product,
								quantity: 1,
							});
						}}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
