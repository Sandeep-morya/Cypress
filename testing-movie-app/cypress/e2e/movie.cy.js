const main = '[data-testid="main"]';

describe("Website able to load properly", () => {
	it("All solid tags are present ?", () => {
		cy.get(main).contains("h1", "MoviesLand");
		cy.get(".search_bar")
			.should("have.descendants", "input")
			.and("have.text", "");
		cy.get(".search_bar > img").should(
			"have.attr",
			"src",
			"/src/components/search-outline.svg",
		);
	});

	it("Checking for Pagination Component", () => {
		// cy.wait(4000) used to pause the running for given time
		cy.get(".prev_btn").should("have.html", "Prev");
		cy.get(".next_btn").should("have.html", "Next");
		cy.get(".pages").children('[data-testid="crnt_p"]').should("have.text", 1);
		/* Using Children */
	});

	
});
