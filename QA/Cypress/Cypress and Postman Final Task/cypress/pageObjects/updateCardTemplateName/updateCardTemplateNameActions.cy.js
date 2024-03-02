export default class updateCardTemplateNamePageActions{
    
    clickQuickTemplateCardEditorButton(cardTemplateName){
        cy.contains('a[data-testid="card-name"]',cardTemplateName).parent('div.amUfYqLTZOvGsn').siblings('button').click({force:true});

    }


editTemplateCardName(updatedTemplateName){
    cy.get('[data-testid="quick-card-editor-card-title"]').type(updatedTemplateName);
}
}