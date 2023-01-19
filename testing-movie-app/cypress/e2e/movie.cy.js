/// <reference types= "cypress" />
import axios from "axios";
let score = 0;
it("All Elements are present ?", () => {
	cy.get(".lds-roller").should("exist");
	score++;
	cy.get(".main").contains("h1", "MoviesLand");
	score++;
	cy.get(".search_bar").should("exist");
	score++;
	cy.get(".search_bar > input").should("exist");
	score++;
	cy.get(".search_bar > img").should(
		"have.attr",
		"src",
		"/src/components/search-outline.svg",
	);
	score++;
	// cy.wait(4000) used to pause the running for given time
	cy.get(".pages > :nth-child(1)").should("have.html", "Prev");
	score++;
	cy.get(".pages > :nth-child(3)").should("have.html", "Next");
	score++;
	cy.get(".pages > :nth-child(2)").should("have.text", 1);
	score++;
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
	score = score + 3;
});

it("Search Functionaliy is working", () => {
	cy.get("input").clear();
	cy.get("input").type("fhdsajhajshfkjshdak");
	cy.get(".search_bar > img").click();
	cy.wait(2000);
	cy.get(".error").should("exist");
	cy.get(".movies").should("not.exist");
	score = score + 5;
	/* Superman */
	cy.get("input").clear();
	cy.get("input").type("Superman");
	cy.get(".search_bar > img").click();
	cy.wait(1000).then(() => {
		cy.get(".card").should("have.length", 20);
	});
	score = score + 5;
	/* Ratsasan */
	cy.get("input").clear();
	cy.get("input").type("Ratsasan");
	cy.get(".search_bar > img").click();
	cy.wait(1000).then(() => {
		cy.get(".card").should("have.length", 1);
	});
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
	score = score + 10;

	cy.get(".pages > :nth-child(1)").should("be.disabled");
	cy.get(".pages > :nth-child(2)").should("have.text", 1);
	cy.get(".pages > :nth-child(3)").should("be.disabled");
	score = score + 5;
});

it("Pagination & Header are working", () => {
	cy.get("h1").click();
	cy.get(".lds-roller").should("not.exist");
	cy.get(".movies", { timeout: 1 }).should("exist");
	score = score + 3;
	cy.get(".pages > :nth-child(1)").should("be.disabled");
	cy.get(".pages > :nth-child(2)").should("have.text", 1);
	cy.get(".pages > :nth-child(3)").should("be.enabled").click();
	/* Click */
	cy.get(".lds-roller").should("exist");
	cy.wait(2000).then(() => {
		cy.get(".lds-roller").should("not.exist");
		cy.get(".error").should("not.exist");
		cy.get(".movies").should("exist");
		cy.get(".pages > :nth-child(2)").should("have.text", 2);
	});
	score = score + 5;
	cy.get(".pages > :nth-child(3)").click();
	cy.get(".pages > :nth-child(2)").should("have.text", 3);
	cy.get(".pages > :nth-child(3)").should("be.disabled");

	cy.get(".pages > :nth-child(1)").click();
	cy.wait(1000).then(() => {
		cy.get(".lds-roller").should("not.exist");
		cy.get(".error").should("not.exist");
		cy.get(".movies").should("exist");
		cy.get(".pages > :nth-child(2)").should("have.text", 2);
	});
	score = score + 5;
	cy.get(".pages > :nth-child(3)").click();
	cy.get(".pages > :nth-child(2)").should("have.text", 3);
	cy.get(".pages > :nth-child(3)").should("be.disabled");

	cy.get("h1").click();
	cy.get(".lds-roller", { timeout: 100 }).should("exist");
	cy.wait(2000).then(() => {
		cy.get(".lds-roller").should("not.exist");
		cy.get(".error").should("not.exist");
		cy.get(".movies").should("exist");
		cy.get(".pages > :nth-child(2)").should("have.text", 1);
	});
	score = score + 5;
});

it("Result Comparison", () => {
	cy.fixture("example").then(async ({ url, key }) => {
		const options = {
			params: { api_key: key, query: "Avengers", page: 1 },
		};
		const {
			data: { results },
		} = await axios.get(url, options);
		cy.get("input").clear().type("Avengers");
		cy.get(".search_bar > img").click();
		cy.wait(2000);

		cy.get(".card").should("have.length", results.length);

		results.map((movie, i) => {
			cy.get(".title").eq(i).should("contain", movie.original_title);
		});
	});
	score = score + 10;
});

it("Score is Generated", () => {
	cy.writeFile("Score.txt", `Total Marks are: ${score} out of 64`);
});
