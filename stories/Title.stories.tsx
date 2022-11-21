import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "../components/text/Title";

export default {
	title: "Typho/Title",
	component: Title,
	argTypes: {
		level: { control: "number" },
	},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Title1 = Template.bind({});
Title1.args = {
	level: 1,
	children: "Title1",
};

export const Title2 = Template.bind({});
Title2.args = {
	level: 2,
	children: "Title2",
};

export const Title3 = Template.bind({});
Title3.args = {
	level: 3,
	children: "Title3",
};
