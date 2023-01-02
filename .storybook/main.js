module.exports = {
	stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-viewport/register",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
	staticDirs: [{ from: "../public", to: "/" }],
	webpackFinal: async (config, { configType }) => {
		if (config.mode === "production") {
			config.output.publicPath = "/storybook-static/";
		}
		return config;
	},
	managerWebpack: async (config) => {
		console.log(config.mode);
		if (config.mode === "production") {
			config.output.publicPath = "/storybook-static/";
		}
		return config;
	},
};
