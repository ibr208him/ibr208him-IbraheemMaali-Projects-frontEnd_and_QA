import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import createNewCardPageActions from "../../../pageObjects/createNewCard/createNewCardActions.cy.js";
import createNewCardPageAssertions from "../../../pageObjects/createNewCard/createNewCardAssertions.cy.js";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";

const newBoardName = "Trello Testing";
const cardTitle = "Card1";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const createNewCardActions = new createNewCardPageActions();
const createNewCardAssertions = new createNewCardPageAssertions();


before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");
});

Given("The user navigated to the board", () => {
  cy.get("@requestBoardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("The user click on Add a card button", () => {
  sharedActions.clickAButton("Add a card");
});

When("Type the title  in the card text field", () => {
  createNewCardActions.typeInCardTextField(cardTitle);
});

When("Click on Add card button", () => {
  sharedActions.clickAButton("Add card");
});

Then("The card will be added to the card list", () => {
  createNewCardAssertions.checkAddingCard(cardTitle);
});

After(() => {
  // cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
