import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import StepTab from "../../components/Tab/StepTab";

export default {
	title: "tab/StepTab",
	component: StepTab,
	argTypes: {},
} as ComponentMeta<typeof StepTab>;

const Template: ComponentStory<typeof StepTab> = (args) => {
	return <StepTab {...args} />;
};

export const StepTab1 = Template.bind({});
StepTab1.args = {
	steps: [
		{ key: "전체" },
		{ key: "공감" },
		{ key: "아이디어" },
		{ key: "프로토타입" },
		{ key: "테스트" },
		{ key: "출시" },
	],
	arrowStartIndex: 1,
};
