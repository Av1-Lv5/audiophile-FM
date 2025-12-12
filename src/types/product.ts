import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface Product {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	slug: {
		_type: string;
		current: string;
	};
	name: string;
	shortName: string;
	category: string;
	cartImage: SanityImageObject;
	productImage: {
		mobile: SanityImageObject;
		tablet: SanityImageObject;
		desktop: SanityImageObject;
	};
	categoryImage: {
		mobile: SanityImageObject;
		tablet: SanityImageObject;
		desktop: SanityImageObject;
	};
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: {
		quantity: number;
		item: {
			itemName: string;
		};
	}[];
	gallery: {
		first: {
			mobile: SanityImageObject;
			tablet: SanityImageObject;
			desktop: SanityImageObject;
		};
		second: {
			mobile: SanityImageObject;
			tablet: SanityImageObject;
			desktop: SanityImageObject;
		};
		third: {
			mobile: SanityImageObject;
			tablet: SanityImageObject;
			desktop: SanityImageObject;
		};
	};
	youMayLike: Product[];
}
