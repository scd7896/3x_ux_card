import { useSyncExternalStore } from "react";
import { windowResizer } from "../lib/window";

export default function useWindowSize() {
	const isMobile = useSyncExternalStore(windowResizer.subscribe, windowResizer.getState, windowResizer.getState);

	return { isMobile };
}
