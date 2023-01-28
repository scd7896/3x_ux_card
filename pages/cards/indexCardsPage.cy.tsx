import React from "react";
import CardsPage from "./index";

describe("<CardsPage />", () => {
	beforeEach(() => {
		cy.viewport(1280, 600);
	});

	it("renders", () => {
		cy.mount(<CardsPage />);
	});
});
