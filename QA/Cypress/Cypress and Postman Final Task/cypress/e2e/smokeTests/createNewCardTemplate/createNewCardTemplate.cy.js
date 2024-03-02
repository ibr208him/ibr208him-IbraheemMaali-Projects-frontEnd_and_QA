import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import CreateNewCardTemplatePageActions from "../../../pageObjects/createNewCardTemplate/createNewCardTemplateActions.cy.js";
import CreateNewCardTemplatePageAssertions from "../../../pageObjects/createNewCardTemplate/createNewCardTemplateAssertions.cy.js";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";

const newBoardName = "Trello Testing";
const newCardTemplateName = "templateforTask";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const createNewCardTemplateActions = new CreateNewCardTemplatePageActions();
const createNewCardTemplateAssertions =new CreateNewCardTemplatePageAssertions();

before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");
});

Given("The user navigated to the board", () => {
  cy.get("@requestBoardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("The user click on template card icon", () => {
  cy.get('[data-testid="TemplateCardIcon"]').first().click();
});

When("The user click on create a new template button", () => {
  sharedActions.clickAButton("Create a new template");
});

When("The user type a name for the new template", () => {
  createNewCardTemplateActions.typeNewCardTemplateName(newCardTemplateName);
});

When("The user click on Add button", () => {
  createNewCardTemplateActions.clickAddNewTemplateButton();
  cy.wait(6000);
});

Then("The template will be created successfully", () => {
  createNewCardTemplateAssertions.checkCreatingTemplateSuccess(
    newCardTemplateName
  );
});

After(() => {
  // cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
