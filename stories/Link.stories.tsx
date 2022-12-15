import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link from "../components/Link/Link";

export default {
	title: "Typho/Link",
	component: Link,
	argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Link1 = Template.bind({});
Link1.args = {
	children: "Link1",
};
