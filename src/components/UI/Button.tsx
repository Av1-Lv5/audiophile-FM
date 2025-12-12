export type Props = {
	text: string;
};

function StyledButton({ text }: Props) {
	return (
		<button className="bg-[#d87d4a] w-full uppercase hover:bg-[#fbaf85] mt-2 text-xs font-semibold px-6 py-3 text-white">
			{text}
		</button>
	);
}

export default StyledButton;
