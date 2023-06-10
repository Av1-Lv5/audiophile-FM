import Image from "next/image";

export type Props = {
	image: string;
	name: string;
	price: number;
	quantity: number;
};

function CheckoutSummaryItem(props: Props) {
	const { image, name, price, quantity } = props;
	return (
		<div className="flex items-center gap-3">
			<div className="w-14 h-14">
				<Image
					src={`/assets/cart/${image}.jpg`}
					alt=""
					width="0"
					height="0"
					sizes="100vw"
					className="w-full rounded-md h-auto"
				/>
			</div>
			<div className="font-semibold flex grow justify-between items-start">
				<div>
					<p className="uppercase mb-1 text-sm">{name}</p>
					<p className="opacity-60 text-xs">${price}</p>
				</div>
				<p className="opacity-60 text-sm">x{quantity}</p>
			</div>
		</div>
	);
}

export default CheckoutSummaryItem;
