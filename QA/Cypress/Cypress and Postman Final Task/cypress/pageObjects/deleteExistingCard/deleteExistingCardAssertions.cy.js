export default class deleteExistingCardPageAssertions{

    CheckCardDeleteSuccess(){
        cy.get('h2[data-testid="list-name"]').first().should('not.contain','newCardName');
    }
}