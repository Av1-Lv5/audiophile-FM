import { urlFor } from "@/utils/sanity-client";

export type Props = {
	image: string;
	name: string;
	price: number;
	quantity: number;
};

function CheckoutSummaryItem(props: Props) {
	const { image, name, price, quantity } = props;
	return (
		<div className="flex items-start gap-3">
			<div className="w-14 h-14">
				<img
					src={urlFor(image).url()}
					alt=""
					className="rounded-lg object-cover w-full h-full object-center"
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
