"use client";

// Next components
import Image from "next/image";

// Components
import NavItems from "../NavItems";

// Icons
import hamIcon from "@/../public/assets/burger-icon.svg";

// styles
import "@/styles/mobileNavMenu.css";
import { useStore } from "@nanostores/react";
import { $menu, toggleNavMenu } from "@/stores/menu";
import { toggleOverlay } from "@/stores/overlay";

function MobileNavMenu() {
	const isMenuShown = useStore($menu);

	function showNavMenu() {
		toggleNavMenu();
		toggleOverlay(!isMenuShown);
	}
	return (
		<nav className="lg:hidden">
			{/* hamIcon */}
			<div className="cursor-pointer" onClick={showNavMenu}>
				<Image src={hamIcon} alt="menu icon" />
			</div>

			<div
				id="mobileNavMenuItemsContainer"
				className={`${
					isMenuShown ? "flex" : "hidden"
				} absolute top-20 text-black font-semibold text-sm w-full justify-center items-center z-10 py-6 left-0 flex-col bg-white gap-3 sm:flex-row sm:gap-8`}
			>
				<NavItems />
			</div>
		</nav>
	);
}

export default MobileNavMenu;
