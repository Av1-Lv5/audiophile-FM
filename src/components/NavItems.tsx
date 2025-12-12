"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVITEMS = [
	{ href: "/", name: "HOME" },
	{ href: "/headphones", name: "HEADPHONES" },
	{ href: "/speakers", name: "SPEAKERS" },
	{ href: "/earphones", name: "EARPHONES" },
];

function NavItems() {
	const currentPath = usePathname();
	return (
		<>
			{NAVITEMS.map((eachNavItem) => {
				return (
					<Link
						key={eachNavItem.name}
						href={eachNavItem.href}
						className={`hover:text-orange-400 lg:p-2 tracking-widest ${
							currentPath === eachNavItem.href &&
							"text-orange-400"
						}`}
					>
						{eachNavItem.name}
					</Link>
				);
			})}
		</>
	);
}

export default NavItems;
