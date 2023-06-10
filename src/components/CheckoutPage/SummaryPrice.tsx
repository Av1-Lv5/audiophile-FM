export type Props = {
	name: string;
	price: number;
	accent?: boolean;
};

function SummaryPrice(props: Props) {
	const { name, price, accent } = props;
	return (
		<div className="flex justify-between uppercase text-sm">
			<p className="opacity-60">{name}</p>
			<p className={`${accent ? "text-[#d87d4a]" : ""} font-bold`}>
				$ {price}
			</p>
		</div>
	);
}

export default SummaryPrice;
