export default class CreateNewCardTemplatePageAssertions{


checkCreatingTemplateSuccess(TemplateName){
    cy.get('#js-dialog-title').should('contain',TemplateName);
    cy.get('h3._Ex_mdzYTq8Rj3').should('contain','This is a Template card.');

}

}