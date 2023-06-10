import CategoryCard from "@/components/CategoryCard";
function CategoriesMenu() {
	return (
		<section id="categories">
			<div className="container px-6 my-20 lg:px-20 mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
				<CategoryCard title="headphones" />
				<CategoryCard title="earphones" />
				<CategoryCard title="speakers" />
			</div>
		</section>
	);
}

export default CategoriesMenu;
