import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";
import createNewListPageActions from "./../../../pageObjects/createNewList/createNewListActions.cy";
import createNewListPageAssertions from "../../../pageObjects/createNewList/createNewListAssertions.cy.js";

const newBoardName = "TaskBoard";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const createNewListActions = new createNewListPageActions();
const createNewListAssertions = new createNewListPageAssertions();
const listTitle = "maaliList";

before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");
});

Given("The user navigated to the board", () => {
  cy.get("@requestBoardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
  cy.wait(4000);
  cy.screenshot("openBoard", { capture: "fullPage" });
});

When("The user click on Add another list button", () => {
  // cy.contains('button', 'Add another list').click();
  sharedActions.clickAButton("Add another list");
});

When("Type the title in the list text field", () => {
  createNewListActions.typeListTitle(listTitle);
});

When("Click on Add list button", () => {
  sharedActions.clickAButton("Add list");
});

Then("The list will be created successfully", () => {
  createNewListAssertions.checkAddingList(listTitle);
});

After(() => {
  // cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
