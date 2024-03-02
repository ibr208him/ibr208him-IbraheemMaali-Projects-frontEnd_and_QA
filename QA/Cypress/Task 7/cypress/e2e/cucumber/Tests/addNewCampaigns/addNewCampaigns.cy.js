/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to nopcommerce website", () => {
  cy.visit("/");
});

Given("The user logged in", () => {
  cy.Login();
});

When("The user navigated to Campaigns under promotions menu", () => {
  cy.contains(".nav-treeview li a p", "Campaigns").click({ force: true });
  cy.wait(3000);
});

When("The user clicked on Add new button", () => {
  cy.contains("a", "Add new").click();

  cy.wait(3000);
});

When("The user type {string} in the Name input field", (name) => {
  cy.get("#Name").clear().type(name);
});

When("The user type {string} in the Subject input field", (subject) => {
  cy.get("#Subject").clear().type(subject);
});

When("The user type {string} in the body input field", () => {
  cy.get("#Body").clear().type("hello");
});

When("The user clicked on Save button", () => {
  cy.get('[name="save"').click();
});

Then(
  "The success message {string} will be displayed on the top of webpage",
  (message) => {
    cy.get(".alert-success").should("contain", message);
  }
);

Then(
  "The campaign with name of {string} will appear in the campaigns table on the bottom of webpage",
  (name) => {
    cy.get("#campaigns-grid tbody tr td").contains(name).should("be.visible");
  }
);
