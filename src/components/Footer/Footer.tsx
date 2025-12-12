// Next components
import Link from "next/link";
import Image from "next/image";

// images
import logo from "@/../public/assets/logo-audiophile.svg";
import NavItems from "@/components/NavItems";

// Components
import SocialIcons from "./SocialIcons";

function Footer() {
	return (
		<footer className="bg-black">
			<div className="container mx-auto py-6 px-4 flex flex-col gap-8 text-white lg:px-20">
				<div className="flex flex-col gap-6 sm:flex-row justify-between items-center">
					{/* LOGO */}
					<Link href={"/"}>
						<Image
							src={logo}
							alt="text based logo reading audiophile"
						/>
					</Link>
					<div className="flex gap-4 text-sm flex-col items-center sm:flex-row sm:items-start sm:gap-6">
						<NavItems />
					</div>
				</div>
				<p className="opacity-60 text-center sm:text-start text-base w-full lg:w-2/3">
					Audiophile is an all in one stop to fulfill your audio
					needs. We&apos;re a small team of music lovers and sound
					specialists who are devoted to helping you get the most out
					of personal audio. Come and visit our demo facility -
					we&apos;re open 7 days a week.
				</p>
				<div className="flex flex-col gap-6 items-center justify-between text-base sm:flex-row">
					<p className="opacity-60">
						Copyright 2021. All Rights Reserved
					</p>
					<SocialIcons />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
