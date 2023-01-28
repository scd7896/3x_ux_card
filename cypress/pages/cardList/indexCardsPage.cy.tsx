import React from "react";
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
});
