class AddToCartPageActions {
  searchForProduct(productName) {
    cy.get("#search").type(`${productName}{enter}`);
  }

  chooseProduct() {
    cy.get(".product-item:nth-of-type(1)").first().click();
  }

  chooseSizeAndColorForProduct(size, color) {
    cy.get('[attribute-code="size"]>div>div').contains(size).click();
    cy.get(`[attribute-code="color"]>div>div[aria-label=${color}]`).click();
  }

  clickOnAddToCartButton() {
    cy.get("#product-addtocart-button").click();
    cy.wait(5000);
  }
}

export default AddToCartPageActions;
