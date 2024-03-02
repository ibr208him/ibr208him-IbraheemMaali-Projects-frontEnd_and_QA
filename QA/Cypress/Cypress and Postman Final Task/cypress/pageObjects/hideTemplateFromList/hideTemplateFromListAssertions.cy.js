export default class HideTemplateFromListPageAssertions{

    checkCardTemplateHide(ListToMoveFrom,cardTemplateName){
        cy.contains('li[data-testid="list-wrapper"] h2[data-testid="list-name"]',ListToMoveFrom).parents('[data-testid="list-wrapper"]').should('not.contain',cardTemplateName);
        
            }
}