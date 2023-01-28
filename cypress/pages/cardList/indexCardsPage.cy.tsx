import React from "react";
import CardsPage from "../../../pages/cards/index";
import { cardListMock } from "./_mock";

describe("<CardsPage />", () => {
	beforeEach(() => {
		cy.viewport(1280, 600);
		cy.intercept({ method: "GET", url: "**/list.json**" }, cardListMock).as("cardListMock");
	});

	it("renders", () => {
		cy.mount(<CardsPage />);
		cy.wait("@cardListMock");

		cy.get("[data-cy=]");
	});
});
