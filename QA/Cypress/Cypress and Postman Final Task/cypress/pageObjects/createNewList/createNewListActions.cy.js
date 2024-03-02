export default class createNewListPageActions{

    typeListTitle(listTitle){
        cy.get('[name="Enter list title…"]').clear().type(listTitle);
    }


}