"use client";
import { useStore } from "@nanostores/react";

// Styles
import "@/app/globals.css";

// stores
import { $overlay } from "@/stores/overlay";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Overlay from "@/components/UI/Overlay";
import CartModal from "@/components/CartModal/CartOverviewModal";
import { $modal } from "@/stores/cartOverviewModal";

function RootLayout({ children }: { children: React.ReactNode }) {
	const isOverlayShown = useStore($overlay);
	const isModalShown = useStore($modal);
	return (
		<html lang="en">
			<body
				className={`${
					isOverlayShown ? "overflow-hidden" : "overflow-scroll"
				} bg-[#ececec]`}
			>
				<Header />
				{children}
				<Footer />
				{isModalShown && (
					<div className="fixed w-full h-full z-10 top-28 right-0 pointer-events-none">
						<CartModal />
					</div>
				)}
				<Overlay />
			</body>
		</html>
	);
}

export default RootLayout;
