it.only("task", () => {
    
    // adding a product
    cy.visit("/");
    cy.Login(); // see command.js file
    cy.wait(3000)
    cy.get("#nopSideBarPusher").click();
    cy.contains("p", "Catalog").parent().click({ force: true });
    cy.contains("p", "Products").parent().click({ force: true });
    cy.contains("Add new").click();
    cy.get("#Name").type("Laptop_51990");
    cy.get("#SelectedCategoryIds_taglist").next().type("Computers", { force: true }).trigger("keydown", {key: "Enter",});
    cy.get("#product-price-area div:last-child span span input:first-child").type("3000");
    cy.get('[name="save"]').click();
    cy.wait(5000);
    
    // delete the added product
    cy.get('.search-text').click();
    cy.get("#SearchProductName").type("Laptop_51990");
    cy.get("#search-products").click({ force: true });
    cy.get(".sorting_disabled >.mastercheckbox").click();
    cy.wait(2000);
    cy.get("#delete-selected").click();
    cy.wait(5000);
    cy.get("#delete-selected-action-confirmation-submit-button").click();
    cy.wait(5000)
    cy.get("#SearchProductName").type("Laptop_51990", { force: true });
    cy.get("#search-products").click({force: true });
    cy.wait(5000);
     cy.get("#products-grid tbody tr").should("not.contain", "Laptop_51990");
   });