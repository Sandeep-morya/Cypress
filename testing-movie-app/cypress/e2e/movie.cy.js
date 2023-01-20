/// <reference types= "cypress" />
import axios from "axios";
import Homepage from "./pom_example/homepage";
const homepage = new Homepage; //Page object Model

it("All Elements are present ?", () => {
	cy.get(".lds-roller").should("exist");
	cy.get(".main").contains("h1", "MoviesLand");
	cy.get(".search_bar").should("exist");
	cy.get(".search_bar > input").should("exist");
	cy.get(".search_bar > img").should(
		"have.attr",
		"src",
		"/src/components/search-outline.svg",
	);
	// cy.wait(4000) used to pause the running for given time
	cy.get(".pages > :nth-child(1)").should("have.html", "Prev");
	cy.get(".pages > :nth-child(3)").should("have.html", "Next");
	cy.get(".pages > :nth-child(2)").should("have.text", 1);
	/* Using Children */

	// cy.wait(2000);
	// cy.get(".lds-roller").should("not.exist");
	// cy.get(".movies").should("exist");

	/* Or More Preferable */
	cy.wait(2000).then(() => {
		cy.get(".lds-roller").should("not.exist");
		cy.get(".error").should("not.exist");
		cy.get(".movies").should("exist");
	});
});

it("Search Functionaliy is working", () => {
	cy.get("input").clear();
	cy.get("input").type("fhdsajhajshfkjshdak");
	cy.get(".search_bar > img").click();

	cy.wait(2000);
	cy.get(".error").should("exist");
	cy.get(".movies").should("not.exist");
	/* Superman */
	homepage.typeAndSearch("Superman",20);
	/* Ratsasan */
	homepage.typeAndSearch("Ratsasan",1);

	cy.get(".card").should(
		"contain.html",
		'<img src="https://image.tmdb.org/t/p/original/mruUFlrVKiL994y3vvQBT8R2Vnf.jpg" alt="movie">',
	);
	/* .invoke('hover').should('contain.html','h6'); */
	cy.get(".title").should("contain", "ராட்சசன்");
	cy.get(".genre")
		.should("contain", "Action")
		.and("contain", "Crime")
		.and("contain", "Thriller");
	/* Pagination on this stage */
	homepage.paginationElementTest("be.disabled", 1, "be.disabled");
});

it("Pagination & Header are working", () => {
	cy.get("h1").click();
	cy.get(".lds-roller").should("not.exist");
	homepage.paginationElementTest("be.disabled", 1, "be.enabled");
	/* Click */

	homepage.afterChangedPageTest(".pages > :nth-child(3)", 2);
	/* args: (which-button-want-to-click, value of page after click) */


	cy.get(".pages > :nth-child(3)").click();
	homepage.paginationElementTest("be.enabled", 3, "be.disabled");
	homepage.afterChangedPageTest(".pages > :nth-child(1)", 2);

	cy.get(".pages > :nth-child(3)").click();
	homepage.paginationElementTest("be.enabled", 3, "be.disabled");
	homepage.afterChangedPageTest("h1", 1);
});

it("Result Comparison", () => {
	cy.fixture("example").then(async ({ url, key }) => {
		const options = {
			params: { api_key: key, query: "Avengers", page: 1 },
		};
		const {
			data: { results },
		} = await axios.get(url, options);

		homepage.typeAndSearch("Avengers", results.length);

		results.map((movie, i) => {
			cy.get(".title").eq(i).should("contain", movie.original_title);
		});
	});
});

/* it.skip("Score is Generated", () => {
	cy.writeFile("Score.txt", `Total Marks are: ${score} out of 64`);
}); */
// last line is 151