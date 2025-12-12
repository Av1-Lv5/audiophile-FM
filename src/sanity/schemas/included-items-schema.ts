const includedItems = {
	name: "includedItems",
	title: "Included Items",
	type: "document",
	fields: [
		{
			name: "itemName",
			title: "Item name",
			type: "string",
		},
	],
	preview: {
		select: {
			title: "itemName",
		},
	},
};

export default includedItems;
