import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
	PC1600: {
		name: "PC 1600",
		styles: {
			width: "1600px",
			height: "963px",
		},
	},
	PC2400: {
		name: "PC 2400",
		styles: {
			width: "2400px",
			height: "1000px",
		},
	},
};

addParameters({
	viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } },
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
