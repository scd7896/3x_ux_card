import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Cardview from "../../components/Card/Cardview";
import Link from "../../components/Link/Link";

export default {
	title: "card/Cardview",
	component: Cardview,
	argTypes: {
		title: { control: "string" },
		contents: { control: "string" },
		footer: { control: "string" },
	},
} as ComponentMeta<typeof Cardview>;

const Template: ComponentStory<typeof Cardview> = (args) => <Cardview {...args} />;

export const Cardview1 = Template.bind({});
Cardview1.args = {
	title: "리뉴얼/고도화 하세요?",
	contents: "기존 서비스를 어떻게 분석하고 고쳐야 할 지 알아내기 어려워요.",
	footer: <Link>바로 가기</Link>,
};
