class loginPageAssertions {
  checkAlertMessageContainValue(alertMessage) {
    cy.get(".panel.header .header .greet.welcome .logged-in").should(
      "contain",
      "Ibraheem Maali"
    );
  }
}

export default loginPageAssertions;
