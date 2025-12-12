// Next components

function SocialIcons() {
	return (
		<div className="flex items-center">
			<a
				href="https://www.facebook.com/"
				target="_blank"
				className="cursor-pointer p-2"
			>
				<img
					width={24}
					height={24}
					src={"/assets/social-icons/facebook-logo.svg"}
					alt="facebook-logo"
				/>
			</a>
			<a
				href="https://www.x.com/"
				target="_blank"
				className="cursor-pointer p-2"
			>
				<img
					width={24}
					height={24}
					src={"/assets/social-icons/twitter-logo.svg"}
					alt="facebook-logo"
				/>
			</a>
			<a
				href="https://www.instagram.com/"
				target="_blank"
				className="cursor-pointer p-2"
			>
				<img
					width={24}
					height={24}
					src={"/assets/social-icons/insta-logo.svg"}
					alt="facebook-logo"
				/>
			</a>
		</div>
	);
}

export default SocialIcons;
