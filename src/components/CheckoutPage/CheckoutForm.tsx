import CheckoutDetails from "./CheckoutDetails";
import CheckoutSummary from "./CheckoutSummary";

function CheckoutForm() {
	return (
		<form action="">
			<div className="flex flex-col gap-12 lg:flex-row lg:gap-3">
				<CheckoutDetails />
				<CheckoutSummary />
			</div>
		</form>
	);
}

export default CheckoutForm;
