class SharedAssertions {
  checkPageTitleContainValue(pageTitle) {
    cy.get("h1.page-title span").should("contain", pageTitle);
    return this;
  }

  checkUrlEqualValue(url) {
    cy.url().should("contain", url);
    return this;
  }

  checkAlerSuccessMessgae(successMessage) {
    cy.get('[role="alert"]').should("contain", successMessage);
  }
}

export default SharedAssertions;
