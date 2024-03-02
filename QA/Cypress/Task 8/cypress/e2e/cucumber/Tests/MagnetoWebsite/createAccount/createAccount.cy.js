import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CreateAccountPageActions from "../../pageObjects/createAccountPage/actions.cy.js";
import SharedActions from "./../../pageObjects/shared/actions.cy";
import SharedAssertions from "./../../pageObjects/shared/assertions.cy";

const sharedActions = new SharedActions();
const sharedAssertions = new SharedAssertions();
const createAccountActions = new CreateAccountPageActions();

let currentTime = new Date();

let hours = currentTime.getUTCHours();
let minutes = currentTime.getUTCMinutes();
let seconds = currentTime.getUTCSeconds();
let initSeconds = seconds;
let time = `${hours}${minutes}${seconds}${initSeconds}`;

const firstName = "Razan";
const lastName = "user";
const email = time + "razanUsser55@gmail.com";
const password = "test@123%6";
const confirmPassword = "test@123%6";

Given("The user navigated to create account page", () => {
  createAccountActions.navigateToAccountPage();
});

When("Type {string} in the field", (fieldName) => {
  switch (fieldName) {
    case "firstName":
      createAccountActions.typeInFirstNameInputField(firstName);
      break;
    case "lastName":
      createAccountActions.typeInLastNameInputField(lastName);
      break;
    case "email":
      createAccountActions.typeInEmailAddressInputField(email);
      break;
    case "password":
      createAccountActions.typeInPasswordInputField(password);
      break;
    case "confirmPassword":
      createAccountActions.typeInConfirmPasswordInputField(confirmPassword);
      break;
  }
});

When("Clicks on Create an account button", () => {
  createAccountActions.clickOnCreatAccountButton();
});

Then("The Account should be created successfully", () => {
  sharedAssertions.checkUrlEqualValue(
    "https://magento.softwaretestingboard.com/customer/account/"
  );
  sharedAssertions.checkPageTitleContainValue("Account");
});

Then("{string} message will be shown", (successMessage) => {
  sharedAssertions.checkAlerSuccessMessgae(successMessage);
});
