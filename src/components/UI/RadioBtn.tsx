export type Props = {
	id: string;
	label: string;
	isDefault?: true;
	radioGroup: string;
};

function RadioBtn(props: Props) {
	const { id, label, isDefault, radioGroup } = props;
	return (
		<label className="flex items-center gap-3 px-4 cursor-pointer hover:border-[#d87d4a] text-xs font-medium py-4 border border-[#cfcfcf] rounded-lg">
			<input
				type="radio"
				defaultChecked={isDefault ? true : false}
				name={radioGroup}
				value={id}
				className="before:cursor-pointer cursor-pointer appearance-none m-0 w-4 h-4 rounded-full grid place-content-center border-2 border-[#cfcfcf] checked:border-[#d87d4a] before:content-[''] before:w-2 before:h-2 before:rounded-full before:scale-0 before:transition-transform before:shadow-[#d87d4a] before:shadow-inner checked:before:scale-100"
			/>
			{label}
		</label>
	);
}

// [#d87d4a] [#cfcfcf]

export default RadioBtn;
