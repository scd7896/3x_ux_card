import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import UxCardview from "../../components/Card/UXCardview";
import { EProcess } from "../../types/card.d";

export default {
	title: "card/UxCardview",
	component: UxCardview,
	argTypes: {},
} as ComponentMeta<typeof UxCardview>;

const Template: ComponentStory<typeof UxCardview> = (args) => <UxCardview {...args} />;

export const UxCardview1 = Template.bind({});
UxCardview1.args = {
	title: "방법론명",
	enTitle: "Methodology name",
	process: EProcess.EMPATHY,
	members: ["UIUX 전문가", "팀 구성원", "사용자", "고객사", "누구나"],
};
