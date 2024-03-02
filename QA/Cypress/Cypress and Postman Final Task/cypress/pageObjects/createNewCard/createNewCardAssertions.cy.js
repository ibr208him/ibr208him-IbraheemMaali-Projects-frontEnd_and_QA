
export default class createNewCardPageAssertions{
    checkAddingCard(cardTitle){
    cy.get("ol.RD2CmKQFZKidd6 li").should("contain", `${cardTitle}`);

    }
    
}