"use client";
import { atom } from "nanostores";
import { closeCartOverviewModal } from "./cartOverviewModal";

export const $menu = atom<boolean>(false);

export function closeNavMenu() {
	$menu.set(false);
}

export function toggleNavMenu() {
	closeCartOverviewModal();
	$menu.set(!$menu.get());
}
