
export default class createNewCardPageActions{
    // clickAddACardButton(){
    //     cy.contains("button", "Add a card").click();
    // }

    typeInCardTextField(cardTitle){
        cy.get('[placeholder="Enter a title for this card…"]').clear().type(cardTitle);
    }

    // clickAddCardButton(){
    //     cy.contains("button", "Add card").click();
    // }


}