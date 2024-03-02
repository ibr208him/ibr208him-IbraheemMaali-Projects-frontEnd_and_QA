/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AddToCartPageActions from "../../pageObjects/addToCart/actions.cy.js";
import addToCartPageAssertions from "../../pageObjects/addToCart/assertions.cy.js";
import SharedActions from "./../../pageObjects/shared/actions.cy";
import SharedAssertions from "./../../pageObjects/shared/assertions.cy";

const sharedActions = new SharedActions();
const sharedAssertions = new SharedAssertions();
const addToCartActions = new AddToCartPageActions();
const addToCartAssertions = new addToCartPageAssertions();

Given("The user has navigated to Magento website", () => {
  sharedActions.openMagentoWebsite();
});

Given("The user searched for {string} product", (productName) => {
  addToCartActions.searchForProduct(productName);
});

When("The user choose the product X", () => {
  addToCartActions.chooseProduct();
});

When(
  "The user choose the size {string} and color {string} for product X",
  (size, color) => {
    addToCartActions.chooseSizeAndColorForProduct(size, color);
  }
);

When('The user Clicked on "Add to Cart" buuton', () => {
  addToCartActions.clickOnAddToCartButton();
});

Then(
  "The Product should be added to the cart successfully with message {string}",
  (message) => {
    sharedAssertions.checkAlerSuccessMessgae(message);
  }
);

Then("The counter of the cart should be visible", () => {
  addToCartAssertions.checkCounterVisibility();
});
