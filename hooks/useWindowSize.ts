import { useSyncExternalStore } from "react";
import { windowResizer } from "../lib/window";

export default function useWindowSize() {
	const { isMobile, clientSize } = useSyncExternalStore(
		windowResizer.subscribe,
		typeof window === undefined ? windowResizer.serverSnapshot : windowResizer.getState,
		windowResizer.serverSnapshot
	);

	return { isMobile, clientSize };
}
