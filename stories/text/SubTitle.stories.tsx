import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SubTitle from "../../components/text/SubTitle";

export default {
	title: "Typho/SubTitle",
	component: SubTitle,
	argTypes: {
		level: { control: "number" },
	},
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle {...args} />;

export const SubTitle1 = Template.bind({});
SubTitle1.args = {
	level: 1,
	children: "SubTitle1",
};

export const SubTitle2 = Template.bind({});
SubTitle2.args = {
	level: 2,
	children: "SubTitle2",
};

export const SubTitle3 = Template.bind({});
SubTitle3.args = {
	level: 3,
	children: "SubTitle3",
};

export const SubTitle4 = Template.bind({});
SubTitle4.args = {
	level: 4,
	children: "SubTitle4",
};
