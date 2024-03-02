import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import moveCardTemplatePageActions from "../../../pageObjects/moveCardTemplate/moveCardTemplateActions.cy.js";
import moveCardTemplatePageAssertions from "../../../pageObjects/moveCardTemplate/moveCardTemplateAssertions.cy.js";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";

const newBoardName = "Trello Testing";
const newCardTemplateName = "CardTemplateForDeleteTesting";
const ListToMoveTo = "Doing";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const moveCardTemplateActions = new moveCardTemplatePageActions();
const moveCardTemplateAssertions = new moveCardTemplatePageAssertions();

before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");

  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.getBoardList(data.body.id).then((response) => {
      dataUtils
        .createNewCardTemplate(response.body[0].id, newCardTemplateName)
        .as("createNewCardTemplateResponse");
    });
  });
});

Given("The user navigated to the board", () => {
  cy.get("@requestBoardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("The user click on quick Template card editor button", () => {
  sharedActions.clickQuickCardEditorButton(newCardTemplateName);
});

When("The user click on move button from the edit menue", () => {
  sharedActions.clickAButton("Move");
});

When("The user select the list to move the card-template to", () => {
  sharedActions.selectOption("Doing");
});
When("The user click on move button", () => {
  moveCardTemplateActions.clickMoveButton();
  cy.wait(4000);
});

Then("The card will be moved to the selected list successfully", () => {
  moveCardTemplateAssertions.checkCardTemplateMove(
    ListToMoveTo,
    newCardTemplateName
  );
});

After(() => {
  // cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
