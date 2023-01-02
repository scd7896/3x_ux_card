import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../components/Button/Button";

export default {
	title: "button/Button",
	component: Button,
	argTypes: {
		level: { size: "string", color: "string" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
	size: "default",
	children: "Button1",
	color: "line",
};
