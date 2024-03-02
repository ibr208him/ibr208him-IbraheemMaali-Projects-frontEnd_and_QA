
export default class createNewListPageAssertions{

    checkAddingList(listTitle){
        cy.get('li[data-testid="list-wrapper"] [data-testid="list-header"] h2[data-testid="list-name"]').should('contain',listTitle);

    }
    
}