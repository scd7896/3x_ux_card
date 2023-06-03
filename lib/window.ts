const MAX_MOBILE_WIDTH = 450;

class WindowResizer {
	private callbackList: Function[] = [];
	private state: {
		clientSize?: number;
		isMobile?: boolean;
	} = {};

	constructor() {
		if (typeof window !== "undefined") {
			let canExcute = true;
			window.addEventListener("resize", () => {
				if (canExcute) {
					this.callbackList.map((it) => it());
					canExcute = false;
					setTimeout(() => {
						canExcute = true;
					}, 500);
				}
			});
		}
		this.subscribe.bind(this);
		this.getState.bind(this);
		this.serverSnapshot.bind(this);
	}

	subscribe = (callback: any) => {
		this.callbackList.push(callback);

		return () => {
			this.callbackList = this.callbackList.filter((it) => it !== callback);
		};
	};

	getState = () => {
		const currentWindowSize = typeof window === "undefined" ? 1920 : window.outerWidth;

		if (this.state?.clientSize === currentWindowSize) {
			return this.state;
		}
		this.state = {
			clientSize: currentWindowSize,
			isMobile: currentWindowSize <= MAX_MOBILE_WIDTH,
		};

		return {
			...this.state,
		};
	};

	serverSnapshot = () => {
		return this.state;
	};
}

export const windowResizer = new WindowResizer();
