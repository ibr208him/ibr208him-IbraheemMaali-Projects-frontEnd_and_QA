export default class CreateNewCardTemplatePageActions{
    typeNewCardTemplateName(TemplateName){
        cy.get('[data-testid="create-template-card-composer"]').type(TemplateName);
    }
    clickAddNewTemplateButton(){
        cy.get('button[data-testid="new-template-card-submit-button"]').click(); 
    }
 
}