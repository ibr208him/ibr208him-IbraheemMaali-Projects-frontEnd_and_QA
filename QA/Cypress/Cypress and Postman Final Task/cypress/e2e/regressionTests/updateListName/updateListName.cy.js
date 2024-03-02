import {
  Given,
  When,
  After,
  Before,
} from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import UpdateListNamePageActions from "../../../pageObjects/updateListName/updateListNameActions.cy.js";
import UpdateListNamePageAssertions from "../../../pageObjects/updateListName/updateListNameAssertions.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";

const newBoardName = "Trello Testing";
const updatedDefaultListNames = [
  "To be Done_updated",
  "Doing_updated",
  "Done_updated",
];
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const updateListNameActions = new UpdateListNamePageActions();
const updateListNameAsseertions = new UpdateListNamePageAssertions();


Before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");
});

Given("The user navigated to the board", () => {
  cy.get("@requestBoardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When(
  "The user update the name of default list {string} with index {int}",
  (listName, index) => {
    updateListNameActions.typeListName(
      listName,
      updatedDefaultListNames[index]
    );
  }
);

Then("The list name with index {int} will be updated successfully", (index) => {
  updateListNameAsseertions.verifyUpdatedListName(
    index,updatedDefaultListNames[index]
  );
});

After(() => {
  //  cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
