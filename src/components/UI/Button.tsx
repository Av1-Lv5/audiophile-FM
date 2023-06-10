export type Props = {
	text: string;
	bgColor: "accent" | "black" | "white";
};

// TODO: calc colors of button based on bgColor prop

function StyledButton({ text, bgColor }: Props) {
	return (
		<button className="bg-[#d87d4a] w-full uppercase hover:bg-[#fbaf85] mt-2 text-xs font-semibold px-6 py-3 text-white">
			{text}
		</button>
	);
}

export default StyledButton;
