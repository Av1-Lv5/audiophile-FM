"use client";

import { atom } from "nanostores";
import { closeNavMenu } from "./menu";

export const $modal = atom<boolean>(false);

export function closeCartOverviewModal() {
	$modal.set(false);
}

export function toggleCartOverviewModal() {
	closeNavMenu();
	$modal.set(!$modal.get());
}
