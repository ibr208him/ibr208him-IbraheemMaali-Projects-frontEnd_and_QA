export default class moveCardTemplatePageAssertions{

    checkCardTemplateMove(ListToMoveTo,cardTemplateName){
cy.contains('li[data-testid="list-wrapper"] h2[data-testid="list-name"]',ListToMoveTo).parents('[data-testid="list-wrapper"]').get('li[data-testid="list-card"]').should('contain',cardTemplateName);

    }
}