"use client";
import { closeNavMenu } from "@/stores/menu";
import { closeCartOverviewModal } from "@/stores/cartOverviewModal";
import { $overlay, toggleOverlay } from "@/stores/overlay";
import { useStore } from "@nanostores/react";

function Overlay() {
	const isOverlayShown = useStore($overlay);
	return (
		<div
			id="overlay"
			className={`${
				isOverlayShown ? "block" : "hidden"
			} fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-50`}
			onClick={() => {
				closeNavMenu();
				closeCartOverviewModal();
				toggleOverlay(false);
			}}
		></div>
	);
}

export default Overlay;
