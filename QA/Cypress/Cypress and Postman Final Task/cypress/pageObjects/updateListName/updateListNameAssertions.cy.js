
export default class UpdateListNamePageAssertions{

    verifyUpdatedListName(index,updatedListName){
        cy.get('h2[data-testid="list-name"]').eq(index).should('contain',updatedListName);

    }
}