/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to nopcommerce website", () => {
  cy.visit("/");
});

Given("The user logged in", () => {
  cy.Login();
});

When("The user navigated to Discounts under promotions menu", () => {
  cy.contains(".nav-treeview li a p", " Discounts").click({ force: true });
  cy.wait(3000);
});

When("The user clicked on Add new button", () => {
  cy.contains("a", "Add new").click();
  cy.wait(3000);
});

When("The user type the name of {string} in the Name input field", (name) => {
  cy.get("#Name").clear().type(name);
});

When(
  "The user type {string} in the Discount amount input field",
  (disscount) => {
    cy.get("#pnlDiscountAmount input:first-child").type(
      `{backspace}${disscount}`
    );
  }
);

When('The user clicked on "Save" button', () => {
  cy.get('[name="save"').click();
});

Then(
  "The success message {string} will be displayed on the top of webpage",
  (message) => {
    cy.get(".alert-success").should("contain", message);
  }
);

Then(
  "the discount name {string} will appear in the disscounts table on the bottom of webpage",
  (disscountName) => {
    cy.get("#discounts-grid tbody td")
      .contains(disscountName)
      .should("be.visible");
  }
);

Then(
  "The discount amount {string} will appear in the disscounts table on the bottom of webpage",
  (disscountAmount) => {
    cy.get("#discounts-grid tbody td")
      .contains(disscountAmount)
      .should("be.visible");
  }
);
