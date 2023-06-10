import InputField from "@/components/UI/InputField";
import RadioBtn from "../UI/RadioBtn";

function CheckoutDetails() {
	return (
		<div className="bg-white grow p-6 flex flex-col gap-8 rounded-md">
			<h3 className="text-3xl uppercase font-semibold tracking-wider">
				Checkout
			</h3>
			<div>
				<p className="uppercase text-xs font-semibold text-[#d87d4a]">
					Billing details
				</p>
				<div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
					<InputField
						id="name"
						label="name"
						placeholder="Alexie Ward"
					/>
					<InputField
						id="email"
						label="email"
						placeholder="alexie@mail.com"
					/>
					<InputField
						id="phoneNumber"
						label="Phone Number"
						placeholder="+1 202-555-0136"
					/>
				</div>
			</div>
			<div>
				<p className="uppercase text-xs font-semibold text-[#d87d4a]">
					Shipping info
				</p>
				<InputField
					id="address"
					label="address"
					placeholder={"1137 Williams Avenue"}
				/>
				<div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
					<InputField
						id="zipcode"
						label="Zip code"
						placeholder={"10001"}
					/>
					<InputField
						id="city"
						label="city"
						placeholder={"New York"}
					/>
					<InputField
						id="country"
						label="country"
						placeholder={"United States"}
					/>
				</div>
			</div>
			<div>
				<p className="uppercase text-xs font-semibold text-[#d87d4a]">
					payment details
				</p>
				<div className="mt-6 text-xs font-semibold">Payment Method</div>
				<div className="mt-6 grid gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4">
					<div></div>
					<RadioBtn
						id="e-Money"
						label="e-Money"
						radioGroup="payment-option"
						isDefault={true}
					/>
					<div></div>
					<RadioBtn
						id="cash"
						label="Cash on Delivery"
						radioGroup="payment-option"
					/>
				</div>
				<div id="payment-method-details" className="my-4">
					{/* Content here changes based on choosen payment option */}
					<div>
						<div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
							<InputField
								id="e-money-number"
								label="e-Money number"
								placeholder={"2385242134"}
							/>
							<InputField
								id="e-money-pin"
								label="e-Money pin"
								placeholder={"6891"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutDetails;
