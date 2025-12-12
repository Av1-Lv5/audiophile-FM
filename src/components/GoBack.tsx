// Next components
import Link from "next/link";

// Types
type GoBackProps = {
	slug: string;
};

function GoBack({ slug }: GoBackProps) {
	return (
		<div className="container mx-auto mb-8 mt-12 px-6 lg:px-20">
			<Link
				href={`/${slug}`}
				className=" opacity-60 px-2 py-6 hover:opacity-100 hover:text-[rgb(216,125,74)]"
			>
				Go Back
			</Link>
		</div>
	);
}

export default GoBack;
