export default class updateCardTemplateNamePageAssertions{
    
    checkUpdatingCardTemplateName(cardTemplateNewName){
        cy.get('a[data-testid="card-name"]').should('contain',cardTemplateNewName);

    }
}