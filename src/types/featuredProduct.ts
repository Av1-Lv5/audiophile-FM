import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { Product } from "./product";

export interface FeaturedProduct {
	_id: string;
	_type: "heroProduct";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	selectProduct: Product;
	image: {
		mobile: SanityImageObject;
		tablet: SanityImageObject;
		desktop: SanityImageObject;
	};
	tagLine: string;
}
