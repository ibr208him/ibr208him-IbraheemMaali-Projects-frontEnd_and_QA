class addToCartPageAssertions {
  checkCounterVisibility() {
    cy.get(".counter-number").should("be.visible");
  }
}

export default addToCartPageAssertions;
