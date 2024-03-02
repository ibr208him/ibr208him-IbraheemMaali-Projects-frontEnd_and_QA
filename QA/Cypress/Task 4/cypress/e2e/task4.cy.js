/// <reference types="Cypress" />

describe('task 4',() => {

it('actions',() => {

    cy.visit('/');
    cy.get('#search').type('shirt');
    cy.get('.product-item').first().click();
    cy.wait(5000);
    cy.get('[option-tooltip-value="M"]').click();
    cy.get('.swatch-option.color').eq(2).click();
    cy.get('#qty').clear().type(3);
    cy.get('button[title="Add to Cart"]').click();

  
});
});
