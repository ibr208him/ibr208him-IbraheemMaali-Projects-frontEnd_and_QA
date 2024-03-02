export default class deleteExistingCardPageActions{

clickArchiveButton(){
    cy.get('a[title="Archive"]').click();
}

clickDeleteCardButton(){
 cy.get('a[title="Delete"]').click();  
}

confirmDeleteCard(){
    cy.get('input[value="Delete"]').click();
}
}