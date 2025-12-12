const product = {
	name: "product",
	title: "Products",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "shortName",
			title: "Short Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "cartImage",
			title: "Cart Image",
			type: "image",
		},
		{
			type: "object",
			name: "productImage",
			title: "Product Image",
			fields: [
				{
					name: "mobile",
					title: "mobile Image",
					type: "image",
				},
				{
					name: "tablet",
					title: "tablet Image",
					type: "image",
				},
				{
					name: "desktop",
					title: "desktop Image",
					type: "image",
				},
			],
		},
		{
			name: "category",
			title: "Category",
			type: "string",
			options: { list: ["headphones", "earphones", "speakers"] },
		},
		{
			type: "object",
			name: "categoryImage",
			title: "cateogry image",
			fields: [
				{
					name: "mobile",
					title: "mobile Image",
					type: "image",
				},
				{
					name: "tablet",
					title: "tablet Image",
					type: "image",
				},
				{
					name: "desktop",
					title: "desktop Image",
					type: "image",
				},
			],
		},
		{
			name: "new",
			title: "New",
			type: "boolean",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "features",
			title: "Features",
			type: "text",
		},
		{
			name: "includes",
			title: "Includes",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "quantity",
							title: "Quantity",
							type: "number",
						},
						{
							name: "item",
							title: "Item",
							type: "reference",
							to: [{ type: "includedItems" }],
						},
					],
					preview: {
						select: {
							title: "item.itemName",
							quantity: "quantity",
						},
						prepare({ title, quantity }: any) {
							return {
								title: `${quantity} × ${title}`,
							};
						},
					},
				},
			],
		},
		{
			name: "gallery",
			title: "Gallery",
			type: "object",
			fields: [
				{
					name: "first",
					title: "First",
					type: "object",
					fields: [
						{ name: "mobile", title: "Mobile", type: "image" },
						{ name: "tablet", title: "Tablet", type: "image" },
						{ name: "desktop", title: "Desktop", type: "image" },
					],
				},
				{
					name: "second",
					title: "Second",
					type: "object",
					fields: [
						{ name: "mobile", title: "Mobile", type: "image" },
						{ name: "tablet", title: "Tablet", type: "image" },
						{ name: "desktop", title: "Desktop", type: "image" },
					],
				},
				{
					name: "third",
					title: "Third",
					type: "object",
					fields: [
						{ name: "mobile", title: "Mobile", type: "image" },
						{ name: "tablet", title: "Tablet", type: "image" },
						{ name: "desktop", title: "Desktop", type: "image" },
					],
				},
			],
		},
		{
			name: "youMayLike",
			title: "You May Like",
			description: "Select 3 products",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "product" }],
					options: {
						disableNew: true,
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: "shortName",
			media: "cartImage",
		},
		prepare(selection: any) {
			return {
				title: selection.title,
				media: selection.media,
			};
		},
	},
};

export default product;
