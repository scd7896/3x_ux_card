import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProcessTab from "../../components/Tab/ProcessTab";

export default {
	title: "tab/ProcessTab",
	component: ProcessTab,
	argTypes: {},
} as ComponentMeta<typeof ProcessTab>;

const Template: ComponentStory<typeof ProcessTab> = (args) => {
	return <ProcessTab {...args} />;
};

export const ProcessTab1 = Template.bind({});
ProcessTab1.args = {
	process: [
		{ key: "전체" },
		{ key: "공감" },
		{ key: "아이디어" },
		{ key: "프로토타입" },
		{ key: "테스트" },
		{ key: "출시" },
	],
	arrowStartIndex: 1,
};
