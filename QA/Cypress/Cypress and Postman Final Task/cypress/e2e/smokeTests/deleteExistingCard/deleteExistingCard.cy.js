import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import deleteExistingCardPageActions from "../../../pageObjects/deleteExistingCard/deleteExistingCardactions.cy.js";
import deleteExistingCardPageAssertions from "../../../pageObjects/deleteExistingCard/deleteExistingCardAssertions.cy.js";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";

const newBoardName = "Trello Testing";
const newCardName = "CardForDeleteTesting";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const deleteExistingCardActions = new deleteExistingCardPageActions();
const deleteExistingCardAssertions = new deleteExistingCardPageAssertions();

before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");

  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.getBoardList(data.body.id).then((response) => {
      dataUtils
        .createNewCard(response.body[0].id, newCardName)
        .as("createNewCardResponse");
    });
  });
});

Given("The user navigated to the board", () => {
  cy.get("@requestBoardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("The user navigated to an existing card in an existing list", () => {
  cy.get("@createNewCardResponse").then((response) => {
    sharedActions.openCard(response.body.url);
    cy.wait(8000);
  });
});

When("The user click on Archive button", () => {
  deleteExistingCardActions.clickArchiveButton();
});

When("The user click on Delete button", () => {
  deleteExistingCardActions.clickDeleteCardButton();
});

When("The user confirm the delete", () => {
  deleteExistingCardActions.confirmDeleteCard();
});

Then("The Card will be deleted successfully from the list", () => {
  deleteExistingCardAssertions.CheckCardDeleteSuccess();
});

After(() => {
  // cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
