export default class Homepage {
	afterChangedPageTest(buttonSelctor, desiredResult) {
		cy.get(buttonSelctor).click();
		cy.get(".lds-roller", { timeout: 100 }).should("exist");
		cy.wait(2000).then(() => {
			cy.get(".lds-roller").should("not.exist");
			cy.get(".error").should("not.exist");
			cy.get(".movies").should("exist");
			cy.get(".pages > :nth-child(2)").should("have.text", desiredResult);
		});
	}

	typeAndSearch(query,cardsCount) {
		cy.get("input").clear().type(query);
		cy.get(".search_bar > img").click();
		cy.wait(2000).then(()=>{
            cy.get(".card").should("have.length", cardsCount);
        });
	}
	paginationElementTest(first,second,third){
		cy.get(".pages > :nth-child(1)").should(first);
		cy.get(".pages > :nth-child(2)").should("have.text", second);
		cy.get(".pages > :nth-child(3)").should(third);
	}
}
