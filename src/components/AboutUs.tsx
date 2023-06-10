// Next components
import Image from "next/image";

// Images
import bestGearMob from "@/../public/assets/shared/mobile/image-best-gear.jpg";

function AboutUs() {
	return (
		<section id="about-us">
			{/* Flex container */}
			<div className="container mx-auto flex flex-col items-center justify-between px-6 my-20 lg:px-20 gap-8 lg:gap-20 lg:flex-row-reverse">
				<div className="lg:max-w-[45%]">
					<picture>
						<source
							srcSet="/assets/shared/desktop/image-best-gear.jpg"
							media="(min-width: 1024px)"
						/>
						<source
							srcSet="/assets/shared/tablet/image-best-gear.jpg"
							media="(min-width: 400px)"
						/>
						<Image
							src={bestGearMob}
							alt=""
							className="rounded-md"
						/>
					</picture>
				</div>
				<div className="lg:max-w-[45%] my-auto">
					<h3 className="text-center lg:text-start mb-8 font-bold text-3xl md:text-4xl uppercase">
						Bringing you the{" "}
						<span className="text-[#d87d4a]">best</span> audio gear
					</h3>
					<p className="text-sm text-center  lg:text-start opacity-60">
						Located at the heart of New York City, Audiophile is the
						premier store for high end headphones, earphones,
						speakers, and audio accessories. We have a large
						showroom and luxury demonstration rooms available for
						you to browse and experience a wide range of our
						products. Stop by our store to meet some of the
						fantastic people who make Audiophile the best place to
						buy your portable audio equipment.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
