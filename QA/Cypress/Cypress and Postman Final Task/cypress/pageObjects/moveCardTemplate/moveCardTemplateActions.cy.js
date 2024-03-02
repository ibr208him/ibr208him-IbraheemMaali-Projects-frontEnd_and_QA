export default class moveCardTemplatePageActions{
    clickMoveButton(){
cy.get('input[type="submit"][value="Move"]').click();
    }
}