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
});
