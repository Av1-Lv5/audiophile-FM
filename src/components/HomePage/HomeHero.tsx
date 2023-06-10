import ProductContentContainer from "@/components/ProductContentContainer";

function HomeHero() {
	return (
		<section id="hero" className="absolute top-0 w-full h-[650px]">
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
		</section>
	);
}

export default HomeHero;
