
Cypress.Commands.add('trelloLogin',()=>{
  cy.visit('/login');
  cy.fixture('loginCredentials.json').then((loginData)=>{
  cy.get('#user').clear().type(loginData.email);
  cy.get('#login').click();
  cy.wait(6000);
  const password=loginData.password;
  cy.origin('https://id.atlassian.com',{args:password},(password)=>{
  cy.get('#password').clear().type(password);
  cy.get('#login-submit').click();
  cy.wait(6000);
})     
}) 
}) 

