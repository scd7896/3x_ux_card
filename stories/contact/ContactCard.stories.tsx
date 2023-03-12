import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactCard, { ContactEmptyCard } from "../../components/services/contact/ContactCard";

export default {
	title: "contact/ContactCard",
	component: ContactCard,
	argTypes: {},
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (args) => <ContactCard {...args} />;

export const ContactCard1 = Template.bind({});

ContactCard1.args = {
	member: "server",
};

const EmptyTemplate = () => <ContactEmptyCard />;

export const ContactEmptyCard1 = EmptyTemplate.bind({});
