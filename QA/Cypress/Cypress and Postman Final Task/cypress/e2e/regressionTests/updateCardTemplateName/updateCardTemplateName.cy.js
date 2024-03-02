import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../pageObjects/shared/dataUtils.cy.js";
import updateCardTemplateNamePageActions from "../../../pageObjects/updateCardTemplateName/updateCardTemplateNameActions.cy.js";
import SharedPageActions from "./../../../pageObjects/shared/sharedActions.cy";
import updateCardTemplateNamePageAssertions from "./../../../pageObjects/updateCardTemplateName/updateCardTemplateNameAssertions.cy";

const newBoardName = "Trello Testing";
const newCardTemplateName = "CardTemplateForDeleteTesting";
const updatedCardTemplateName = "CardTemplateForDeleteTesting-updated";
const sharedActions = new SharedPageActions();
const dataUtils = new DataUtils();
const updateCardTemplateNameActions = new updateCardTemplateNamePageActions();
const updateCardTemplateNameAssertions =
  new updateCardTemplateNamePageAssertions();

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
  newCardTemplateName;
});

When("The user edit the name of the template card", () => {
  updateCardTemplateNameActions.editTemplateCardName(updatedCardTemplateName);
});

When("The user click on save button", () => {
  sharedActions.clickAButton("Save");
});

Then("The name of the template card will be updated successfully", () => {
  updateCardTemplateNameAssertions.checkUpdatingCardTemplateName(
    updatedCardTemplateName
  );
});

After(() => {
  //cy.pause();
  cy.get("@requestBoardResponse").then((data) => {
    dataUtils.deleteBoard(data.body.id);
  });
});
