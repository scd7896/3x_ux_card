import React from "react";
import { CardSubTitleDescription } from "../../../lib/constant";
import CardsPage from "../../../pages/cards/index";
import { cardListMock } from "./_mock";

describe("<CardsPage />", () => {
	beforeEach(() => {
		cy.viewport(1280, 600);
		cy.intercept({ method: "GET", url: "**/list.json**" }, cardListMock).as("cardListMock");
	});

	it("프로세스별 보기에서 공감을 누르면 공감만 노출되어야 한다.", () => {
		cy.mount(<CardsPage />);
		cy.wait("@cardListMock");

		cy.get("[data-cy=process_filter]").click();
		cy.get('[data-cy="공감"]').click();

		cy.get("[data-cy=card_wrapper]")
			.find("[data-cy=card]")
			.should("have.length", cardListMock.filter((it) => it.data.process === "공감").length);
	});

	it("상황별 보기에서 개인작업을 누르면 개인작업만 노출되어야 한다.", () => {
		cy.mount(<CardsPage />);
		cy.wait("@cardListMock");

		cy.get("[data-cy=situation_filter]").click();
		cy.get('[data-cy="개인작업"]').click();

		cy.get("[data-cy=card_wrapper]")
			.find("[data-cy=card]")
			.should("have.length", cardListMock.filter((it) => it.data.situation === "개인작업").length);
	});

	it("상황별 보기에서 개인작업을 누르면 개인작업메 맞는 문구를 노출해야한다", () => {
		cy.mount(<CardsPage />);
		cy.wait("@cardListMock");

		cy.get("[data-cy=situation_filter]").click();
		cy.get('[data-cy="개인작업"]').click();

		cy.get("[data-cy=description]").should("have.text", CardSubTitleDescription.개인작업);
	});

	it("참여자에 있는 리스트를 클릭하면 and 조건으로 포함으로 필터링을 해야한다.", () => {
		cy.mount(<CardsPage />);
		cy.wait("@cardListMock");

		const members = ["UXUI 전문가", "누구나"];
		members.map((it) => cy.get(`[data-cy="${it}"]`).click());

		cy.get("[data-cy=card_wrapper]")
			.find("[data-cy=card]")
			.should(
				"have.length",
				cardListMock.filter((it) => {
					const dataMembers = it.data.members.split(", ");

					return members.reduce((acc, member) => {
						return acc && dataMembers.find((a) => a === member) !== undefined;
					}, true);
				}).length
			);
	});
});
