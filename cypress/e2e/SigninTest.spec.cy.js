describe("TEST FOR ALADIA ", () => {
  it("Test for server to start", () => {
    cy.visit("http://localhost:3000");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Test for already existing user ", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("place@holder.com");
    cy.get("#email-field").type("place@holder.com");
    cy.get(".gap-4 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Test to register a new user", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("new");
    cy.get("#email-field").type("new@gmail.com");
    cy.get(".gap-4 > .gradient").click();
    cy.get(".justify-between > .relative > .flex").click();
    cy.get("#terms-checkbox").check();
    cy.get("#name").clear("A");
    cy.get("#name").type("Bilen Mehalek");
    cy.get("#surname").click();
    cy.get("#name").clear("Bilen");
    cy.get("#name").type("Bilen");
    cy.get("#surname").clear("Mehalek");
    cy.get("#surname").type("Mehalek");
    cy.get(":nth-child(6) > .group > #password").clear("s");
    cy.get(":nth-child(6) > .group > #password").type("string");
    cy.get(":nth-child(7) > .group > #password").clear("s");
    cy.get(":nth-child(7) > .group > #password").type("string");
    cy.get(".py-1\\.5 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });
});
