describe("index.html", () => {
  it("should exist on web server", () => {
    cy.visit("/");
  });
});
