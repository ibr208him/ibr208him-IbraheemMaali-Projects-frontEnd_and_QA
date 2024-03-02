///<reference types="cypress"/>

describe('task 3',() => {

it('test log in page',() => {

    cy.visit('/login').wait(3000);

    cy.contains('h1','Sign in');
    cy.contains('Need an account?');
    cy.get('input[placeholder="Email"]');
    cy.get('input[placeholder="Password"]');
    cy.contains('.btn','Sign in');
  
});

it('test home page',() => {

    cy.visit('/').wait(3000);

    cy.get('.navbar-brand');
    cy.get('.navbar-nav li:first-child').contains('Home');
    cy.get('.navbar-nav li:last-child').contains('Sign up');
    cy.contains('.logo-font','conduit');
    cy.contains('.logo-font','conduit').next();
    cy.get('.nav-pills li:nth-of-type(2) a');
    cy.get('article-list article-preview:first-child .preview-link span').contains('Read more...');
    cy.get('article-list article-preview:first-child').find('favorite-btn');
    cy.contains('.sidebar p','Popular Tags');
    cy.contains('.sidebar .tag-list a','codebaseShow');
    cy.contains('.sidebar .tag-list a','deserunt');
   

});


it('test article details page',() => {

    cy.visit('/');
    cy.get('article-list article-preview:first-child .preview-link').click().wait(3000);

    cy.get('[ng-bind="::$ctrl.article.title"]');
    cy.get('.banner .article-meta img');
    cy.get('.banner .info a').contains('Anah Benešová');
    cy.get('.banner .info a').contains('Anah Benešová').next();
    cy.get('.banner follow-btn').find('button');
    cy.get('.banner favorite-btn').find('button');
    cy.get('.article-content [ng-bind-html="::$ctrl.article.body"]').find('p');
    cy.get('.tag-list li').first();
    cy.get('.tag-list li').last();
  
});

});