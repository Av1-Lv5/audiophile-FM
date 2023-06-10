"use client";
import { Dispatch, SetStateAction } from "react";

export type Props = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
};

function Counter(props: Props) {
	const { count, setCount } = props;

	function decrementCount() {
		setCount((prev) => {
			if (prev > 1) return prev - 1;
			else return prev;
		});
	}

	function incrementCount() {
		setCount((prev) => prev + 1);
	}

	return (
		<div className="bg-[#f1f1f1] mt-2 font-bold flex items-center">
			<button
				className="py-3 px-4 text-sm opacity-40 hover:text-[#d87d4a] hover:opacity-100"
				onClick={() => {
					if (count > 1) decrementCount();
				}}
			>
				-
			</button>
			<p className="w-6 text-center text-xs">{count}</p>
			<button
				className="py-3 px-4 text-sm opacity-40 hover:text-[#d87d4a] hover:opacity-100"
				onClick={incrementCount}
			>
				+
			</button>
		</div>
	);
}

export default Counter;
