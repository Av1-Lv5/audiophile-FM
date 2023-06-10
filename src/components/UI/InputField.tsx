"use client";
import { useState } from "react";

export type Props = {
	id: string;
	label: string;
	placeholder: string;
};

function InputField(props: Props) {
	const { id, label, placeholder } = props;
	// const [formData, setFormData] = useState({
	// 	name: "",
	// 	email: "",
	// 	phoneNumber: "",
	// 	address: "",
	// 	zipcode: "",
	// 	city: "",
	// 	country: "",
	// });

	// function handleChange(event) {
	// 	let { value, name, type, checked } = event.target;

	// 	setFormData((prevFormData) => {
	// 		return {
	// 			...prevFormData,
	// 			[name]: type === "checkbox" ? checked : value,
	// 		};
	// 	});
	// }
	return (
		<div>
			<label
				htmlFor={id}
				className="block font-semibold text-xs capitalize mb-2 mt-6"
			>
				{label}
			</label>
			<input
				type="text"
				id={id}
				className="px-4 w-full font-semibold text-xs py-3 rounded-lg focus:border-[#d87d4a] focus:outline-none border border-[#cfcfcf] border-solid"
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputField;
