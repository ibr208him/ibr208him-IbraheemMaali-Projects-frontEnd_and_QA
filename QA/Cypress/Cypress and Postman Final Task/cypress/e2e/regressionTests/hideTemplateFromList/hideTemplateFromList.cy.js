import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import HideTemplateFromListPageAssertions from "../../../pageObjects/hideTemplateFromList/hideTemplateFromListAssertions.cy.js";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";

const newBoardName = "Trello Testing";
const newCardTemplateName = "CardTemplateForDeleteTesting";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const hideTemplateFromListAssertions = new HideTemplateFromListPageAssertions();
let ListToMoveFrom;


before(() => {
  sharedActions.loginToTrello();
  dataUtils.createNewBoard(newBoardName).as("requestBoardResponse");

  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.getBoardList(data.body.id).then((response) => {
      ListToMoveFrom = response.body[0].name;
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

When(
  "The user click on quick Template card editor button for a card-template in a list",
  () => {
    sharedActions.clickQuickCardEditorButton(newCardTemplateName);
  }
);

When("The user click on hide from list button from the edit menue", () => {
  sharedActions.clickAButton("Hide from list");
});

Then("The card-template will be hided successfully from the list", () => {
  hideTemplateFromListAssertions.checkCardTemplateHide(
    ListToMoveFrom,
    newCardTemplateName
  );
});

After(() => {
  // cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
