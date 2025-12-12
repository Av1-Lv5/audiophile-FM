import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { visionTool } from "@sanity/vision";

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID!;
const DATASET = process.env.NEXT_PUBLIC_DATASET!;

const sanityConfig = defineConfig({
	title: "e-commerce-sanity-nextjs",

	projectId: PROJECT_ID,
	dataset: DATASET,

	apiVersion: "2023-05-10", // current date yyyy-mm-dd

	basePath: "/admin",
	plugins: [structureTool(), visionTool()],

	schema: { types: schemas },
});

export default sanityConfig;
