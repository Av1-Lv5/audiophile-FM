"use client";
import { atom } from "nanostores";

export const $overlay = atom<boolean>(false);

export function toggleOverlay(explicitValue: boolean) {
	$overlay.set(explicitValue);
}
