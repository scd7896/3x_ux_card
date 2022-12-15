import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Body from "../../components/text/Body";

export default {
	title: "Typho/Body",
	component: Body,
	argTypes: {
		level: { control: "number" },
	},
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Body1 = Template.bind({});
Body1.args = {
	level: 1,
	children: "Body1",
};
