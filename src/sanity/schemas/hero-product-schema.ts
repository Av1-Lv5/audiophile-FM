const heroProduct = {
	name: "heroProduct",
	title: "Featured product",
	type: "document",
	fields: [
		{
			name: "selectProduct",
			title: "Select Product",
			type: "reference",
			weak: "false",
			description: "Select the product to be featured",
			to: [{ type: "product" }],
			required: "true",
		},
		{
			name: "image",
			title: "Image",
			type: "object",
			fields: [
				{ name: "mobile", title: "Mobile", type: "image" },
				{ name: "tablet", title: "Tablet", type: "image" },
				{ name: "desktop", title: "Desktop", type: "image" },
			],
		},
		{
			name: "tagLine",
			title: "Tag Line",
			type: "text",
			description: "Describe all the products in a line",
			required: "true",
		},
	],
	preview: {
		select: {
			title: "selectProduct.name", // 👈 product title
			media: "image.mobile", // 👈 image shown in Studio
			fallbackMedia: "image.mobile",
		},
		prepare({ title, media, fallbackMedia }: any) {
			return {
				title: title ?? "No product selected",
				media: media ?? fallbackMedia,
			};
		},
	},
};

export default heroProduct;
