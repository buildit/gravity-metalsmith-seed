const parser = new DOMParser();
/**
 * The sitemap smoke test is essential as this generated sitemap is used by pa11y to determine which pages to test.
 */
describe("sitemap.xml", () => {
  it("should exist with at least one route", () => {
    cy.readFile("dist/sitemap.xml").then(xml => {
      const doc = parser.parseFromString(xml, "text/xml");
      const urls = doc.getElementsByTagName("url");
      expect(urls).to.have.length.of.at.least(1);
    });
  });
});
