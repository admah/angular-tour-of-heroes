describe("Dashboard", () => {
  beforeEach(function () {
    cy.visit("/")
  });

  it("renders header, routes, a list of heroes, and a search box", () => {
    cy.location("pathname").should("eq", "/dashboard");
    cy.get("h1")
      .should("be.visible")
      .and("contain", "Tour of Heroes");
    cy.get("[routerlink]")
      .should("be.visible")
      .and("have.length", 2)
    cy.get(".hero")
      .should("be.visible")
      .and("have.length", 4)
    cy.get("h4")
      .should("be.visible")
      .and("contain", "Hero Search");
    cy.get("#search-box")
      .should("be.visible")
      .and("contain", "");
  });

  it("should correctly autofill search results as user types", () => {
    cy.get("#search-box").type("a")
    cy.get(".search-result")
      .should("be.visible")
      .and("have.length", 8)
    cy.get("#search-box").clear();
  })
})
