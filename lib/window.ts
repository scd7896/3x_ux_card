const MAX_MOBILE_WIDTH = 450;

class WindowResizer {
	private callbackList: Function[] = [];

	constructor() {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", () => {
				this.callbackList.map((it) => it());
			});
		}
		this.subscribe.bind(this);
		this.getState.bind(this);
	}

	subscribe = (callback: any) => {
		this.callbackList.push(callback);

		return () => {
			this.callbackList = this.callbackList.filter((it) => it !== callback);
		};
	};

	getState = () => {
		const currentWindowSize = typeof window === "undefined" ? 1920 : window.outerWidth;

		return currentWindowSize <= MAX_MOBILE_WIDTH;
	};
}

export const windowResizer = new WindowResizer();
