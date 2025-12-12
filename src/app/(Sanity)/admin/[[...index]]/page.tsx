"use client";

const metadata = {
	title: "Sanity studio",
	description:
		"Sanity studio for admins, editors to modify content displayed on the site",
};

import { NextStudio } from "next-sanity/studio";
import sanityConfig from "@/../sanity.config";

export default function Admin() {
	return <NextStudio config={sanityConfig} />;
}
