/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "./../../pageObjects/loginPage/actions.cy";
import loginPageAssertions from "./../../pageObjects/loginPage/assertions.cy";
import SharedAssertions from "./../../pageObjects/shared/assertions.cy";

const loginActions = new LoginPageActions();
const loginAssertions = new loginPageAssertions();
const sharedAssertions = new SharedAssertions();

Given("The user has navigated to Magento website login Page", () => {
  loginActions.openMagentoWebsiteLoginPage();
});

When('The user enter his email address "maaliibrahim2022@gmail.com"', () => {
  loginActions.typeInEmailInputField("maaliibrahim2022@gmail.com");
});

When('The user enter his password  "Aa12345678"', () => {
  loginActions.typeinPasswordInputField("Aa12345678");
});

When('The user clicked on "Sign In" button', () => {
  loginActions.clickOnSignInButton();
});

Then("The user will be redirected to the Account page", () => {
  sharedAssertions.checkPageTitleContainValue("Account");
  sharedAssertions.checkUrlEqualValue("/customer/account/");
});

Then(
  'The welcome message "Welcome, Ibraheem Maali!" will be displayed on top right corner',
  () => {
    loginAssertions.checkAlertMessageContainValue("Ibraheem Maali");
  }
);
