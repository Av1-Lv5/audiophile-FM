// Next components
import Image from "next/image";

// images
import homeHeroImg from "@/../../public/assets/home/mobile/image-header.jpg";
import ProductContentContainer from "@/components/ProductContentContainer";

export default function Home() {
	return (
		<section id="hero" className="h-[650px]">
			{/* Hero background image container */}
			<div className="absolute top-0 w-full h-[650px] bg-[#191919]">
				<picture>
					<source
						srcSet="/assets/home/desktop/image-hero.jpg"
						media="(min-width: 1024px)"
					/>
					<source
						srcSet="/assets/home/tablet/image-header.jpg"
						media="(min-width: 400px)"
					/>
					<Image
						src={homeHeroImg}
						className="object-cover w-auto mx-auto h-full"
						alt="Image of a black headphone"
					/>
				</picture>
			</div>
			{/* Hero section */}
			<div className="absolute top-0 w-full h-[650px]">
				{/* flex container */}
				<div className="container mx-auto px-4 flex items-center justify-center text-white lg:justify-start lg:px-20 h-full">
					{/* Content container */}
					<ProductContentContainer
						isHomePage={true}
						isNew={true}
						name="XX99 MARK II HEADPHONE"
						description="Experience natural life like auido and exceptional built quality made for the passionate music enthusiast"
						slug="xx99-mark-two-headphones"
					/>
				</div>
			</div>
		</section>
	);
}
