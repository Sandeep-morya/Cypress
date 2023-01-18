describe("Testing Counter App", () => {
	it("All elements are present ?", () => {
		/* By some text contains */
		cy.contains("-").should("be.disabled");

		/* By Html tag name */
		cy.get("h2").should("have.text", "0");

		/* By data-testid */
		cy.get('[data-testid="inc-btn"]')
			.should("be.enabled")
			.and("have.text", "+");

		/* By ClassName */
		cy.get(".counter").contains("h2", 0);
		cy.get(".counter").contains("button", "-");
		cy.get(".counter").contains("button", "+");
	});

	it("Functionality is working", () => {
		/* definig variables */
		const inc_btn = '[data-testid="inc-btn"]';

		/* if we are checking for html the numeber things are converted to string in browser */
		cy.get(inc_btn).click();
		cy.get("h2").should("have.html", "1");
		cy.get(inc_btn).click();
		cy.get("h2").should("have.html", "2");
		cy.get(inc_btn).click();
		cy.get("h2").should("have.html", "3");

		// But now istead of repeating same code again & agian we will use function
		const haveCountValue = (n) => {
			cy.contains("-").click();
			cy.get("h2").should("have.text", n);
		};

		haveCountValue(2);
		haveCountValue(1);
		haveCountValue(0);
    cy.contains("-").should("be.disabled");
	});
});
