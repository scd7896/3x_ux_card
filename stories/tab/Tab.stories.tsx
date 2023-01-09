import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tab from "../../components/Tab/Tab";

export default {
	title: "tab/Tab",
	component: Tab,
	argTypes: {},
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
	return <Tab {...args} />;
};

export const Tab1 = Template.bind({});
Tab1.args = {
	steps: [{ key: "프로세스별 보기" }, { key: "상황별 보기" }],
};
