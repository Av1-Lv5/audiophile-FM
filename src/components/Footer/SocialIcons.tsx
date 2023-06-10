// Next components
import Image from "next/image";

function SocialIcons() {
	return (
		<div className="flex items-center">
			<span className="cursor-pointer p-2">
				<Image
					width={24}
					height={24}
					src={"/assets/social-icons/facebook-logo.svg"}
					alt="facebook-logo"
				/>
			</span>
			<span className="cursor-pointer p-2">
				<Image
					width={24}
					height={24}
					src={"/assets/social-icons/twitter-logo.svg"}
					alt="facebook-logo"
				/>
			</span>
			<span className="cursor-pointer p-2">
				<Image
					width={24}
					height={24}
					src={"/assets/social-icons/insta-logo.svg"}
					alt="facebook-logo"
				/>
			</span>
		</div>
	);
}

export default SocialIcons;
