import CheckoutForm from "@/components/CheckoutPage/CheckoutForm";
import GoBack from "@/components/GoBack";

function CheckoutPage() {
	return (
		<div>
			<div className="h-20 bg-black"></div>
			<GoBack slug="/" />
			<div className="container mx-auto px-6 lg:px-20 mb-20">
				<CheckoutForm />
			</div>
		</div>
	);
}

export default CheckoutPage;
