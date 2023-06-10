"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// next Components
import Image from "next/image";
import Link from "next/link";

// Components
import NavItems from "../NavItems";
import MobileNavMenu from "./MobileNavMenu";

// images
import logo from "@/../public/assets/logo-audiophile.svg";
import CartIcon from "./CartIcon";

function Header() {
	const [headerBgOpacity, setHeaderBgOpacity] = useState(0);
	const currentPageURL = usePathname();

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		function handleScroll() {
			setHeaderBgOpacity(
				Math.min(document.documentElement.scrollTop / 40, 1)
			);
		}

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className="fixed z-10 w-full"
			style={{
				backgroundColor: `rgba(0,0,0,${
					currentPageURL === "/" ? headerBgOpacity : 1
				})`,
			}}
		>
			{/* flex container */}
			<div className="container mx-auto py-6 px-4 flex justify-between items-center text-white h-20 lg:px-20">
				<div className="flex gap-8 items-center">
					<MobileNavMenu />
					{/* LOGO */}
					<Link href={"/"}>
						<Image
							src={logo}
							alt="text based logo reading audiophile"
						/>
					</Link>
				</div>
				{/* Desk Nav */}
				<nav className="max-lg:hidden">
					<div className="flex gap-3 text-xs">
						<NavItems />
					</div>
				</nav>
				{/* Cart icon */}
				<CartIcon />
			</div>
			{/* Divider */}
			<div
				className="container mx-auto px-4 lg:px-16 text-white/20"
				style={{ opacity: Math.max(0.3 - (headerBgOpacity % 5), 0) }}
			>
				<hr />
			</div>
		</header>
	);
}

export default Header;
