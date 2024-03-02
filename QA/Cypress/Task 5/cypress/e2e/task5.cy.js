/// <reference types="Cypress" />

describe('task 5',() => {

it('assertions-test1',() => {

    cy.visit('/');
    cy.get('a').contains('Create an Account').click().wait(3000);

    cy.get('#search').should('be.visible');
    cy.get('#firstname').should('be.visible');
    cy.get('#lastname').should('be.visible');
    cy.get('#email_address').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#password-confirmation').should('be.visible');
    cy.get('button[title="Create an Account"]').find('span').should('be.visible');
});

it('assertions-test1',() => {

    cy.visit('/');
    cy.get('a').contains('Create an Account').click().wait(3000);

    cy.get('#firstname').type('Ibraheem');
    cy.get('#lastname').type('Maali');
    cy.get('#email_address').type('ibra2008hh@gmail.com');
    cy.get('#password').type('Aa12345678');
    cy.get('#password-confirmation').type('Aa12345678');
    cy.get('button[title="Create an Account"]').find('span').click().wait(7000);
    cy.get('[data-ui-id="message-success"]>div').should('be.visible').and('have.text','Thank you for registering with Main Website Store.');
});


});
