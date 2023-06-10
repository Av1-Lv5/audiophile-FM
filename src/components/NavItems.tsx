"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItems() {
	const currentPath = usePathname();
	return (
		<>
			<Link
				href={"/"}
				className="hover:text-orange-400 lg:p-2 tracking-widest"
			>
				HOME
			</Link>
			<Link
				href={"/headphones"}
				className={`${
					currentPath === "/headphones" ? "current" : ""
				} hover:text-orange-400 lg:p-2 tracking-widest`}
			>
				HEADPHONES
			</Link>
			<Link
				href={"/speakers"}
				className={`${
					currentPath === "/speakers" ? "current" : ""
				} hover:text-orange-400 lg:p-2 tracking-widest`}
			>
				SPEAKERS
			</Link>
			<Link
				href={"/earphones"}
				className={`${
					currentPath === "/earphones" ? "current" : ""
				} hover:text-orange-400 lg:p-2 tracking-widest`}
			>
				EARPHONES
			</Link>
		</>
	);
}

export default NavItems;
