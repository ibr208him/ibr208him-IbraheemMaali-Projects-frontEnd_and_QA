/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to nopcommerce website", () => {
  cy.visit("/");
});

Given("The user logged in", () => {
  cy.Login();
});

When('The user navigated to Affiliates under promotions menu', () => {
  cy.contains(".nav-treeview li a p", "Affiliates").click({ force: true });
  cy.wait(3000);
});

When('The user clicked on Add new button', () => {
  cy.contains("a", "Add new").click();
  cy.wait(3000);
});

When('The user type {string} in the First Name input field', (firstName) => {
  cy.get("#Address_FirstName").clear().type(firstName);
});

When('The user type {string} in the Last Name input field', (lastName) => {
  cy.get("#Address_LastName").clear().type(lastName);
});

When('The user type {string} in the Email input field', (email) => {
  cy.get("#Address_Email").clear().type(email);
});

 When('The user select {string} in the Country select menu', (country) => {
  cy.get("#Address_CountryId").select(country);
});

When('The user type "Palestine" in the Country / region input field', () => {
  cy.get("#Address_County").clear().type('l');
});

When('The user type {string} in the City input field', (city) => {
  cy.get("#Address_City").clear().type(city);
});

When('The user type {string} in the "Address1" input field', (address1) => {
  cy.get("#Address_Address1").clear().type(address1);
});

When('The user type {string} in the Zip / postal code input field', (zipCode) => {
  cy.get("#Address_ZipPostalCode").clear().type(zipCode);
});

When('The user type {string} in the Phone number input field', (phoneNumber) => {
  cy.get("#Address_PhoneNumber").clear().type(phoneNumber);
});

When('The user clicked on Save button', () => {
  cy.get('[name="save"').click();
});

Then('The success message {string} will be displayed on the top of webpage',(message) => {
    cy.get(".alert-success").should("contain",message);
  }
);

Then('The Affiliate with first name of {string} and last name of {string} will appear in the affiliates table on the bottom of webpage',(firstName,lastName) => {
    cy.get("#affiliates-grid tbody tr td").contains(firstName).should("be.visible");
    cy.get("#affiliates-grid tbody tr td").contains(lastName).should("be.visible");
  }
);
