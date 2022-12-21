import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Row, Col } from "../../components/layout/Layout";

export default {
	title: "Layout",
	component: Col,
	argTypes: {
		level: { col: "number", row: "number" },
	},
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args) => (
	<Row>
		<Col {...args} />
		<Col {...args} />
		<Col {...args} />
		<Col {...args} />
	</Row>
);

export const Col1 = Template.bind({});
Col1.args = {
	col: 1,
	children: "Col1",
	style: { backgroundColor: "skyblue", textAlign: "center", color: "white" },
};

export const Col2 = Template.bind({});
Col2.args = {
	col: 2,
	children: "Col2",
	style: { backgroundColor: "skyblue", textAlign: "center", color: "white" },
};
