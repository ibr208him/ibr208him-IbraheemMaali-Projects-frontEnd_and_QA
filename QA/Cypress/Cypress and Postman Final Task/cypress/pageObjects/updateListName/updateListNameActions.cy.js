
export default class UpdateListNamePageActions{

    typeListName(listName,updatedListName){
        cy.contains('h2[data-testid="list-name"]',`${listName}`).type(updatedListName+'{enter}');

    }
}