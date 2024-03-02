export default class SharedPageActions{
    loginToTrello(){
        cy.trelloLogin();
        return this;
    }
    openBoard(boardUrl){
        cy.visit(boardUrl);
    }

    clickAButton(buttonName){
        cy.contains('button', buttonName).click();
    }

    openCard(cardUrl){

        cy.visit(cardUrl);
    }
    clickQuickCardEditorButton(cardName){
        cy.contains('a[data-testid="card-name"]',cardName).parent('div.amUfYqLTZOvGsn').siblings('button').click({force:true});

    }
    selectOption(option){
        cy.get('[data-testid="move-card-popover-select-list-destination"]').select(option);
    }
}