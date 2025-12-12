import type { Product } from "@/types/product";
import { client } from "./sanity-client";
import { groq } from "next-sanity";
import { FeaturedProduct } from "@/types/featuredProduct";

export async function getAllProducts(): Promise<Product[]> {
	const products: Product[] = await client.fetch(groq`*[_type == "product"]{
        ...,
        includes[]{
            quantity,
            item->{
                itemName
            }
        },
        youMayLike[]->{
            ...
        }
    }`);

	return products;
}

export async function getFeaturedProduct(): Promise<FeaturedProduct[]> {
	const featuredProducts = await client.fetch(
		groq`*[_type == "heroProduct"]{
            selectProduct->{
                ...,
                includes[]{
                    quantity,
                    item->{
                        itemName
                    }
                },
                youMayLike[]->{
                    ...
                }
            },
            tagLine,
            image,
        }`
	);

	return featuredProducts;
}

export async function getProductsByCategory(category: string) {
	const products = await client.fetch(
		groq`*[_type == "product" && category == "${category}"]{
            ...
        }`
	);

	return products;
}

export async function getProduct(productSlug: string) {
	const product = await client.fetch(
		groq`*[_type == "product" && slug.current == "${productSlug}"]{
            ...,
            includes[]{
                quantity,
                item->{
                    itemName
                }
            },
            youMayLike[]->{
                ...
            }
        }`
	);

	return product;
}
