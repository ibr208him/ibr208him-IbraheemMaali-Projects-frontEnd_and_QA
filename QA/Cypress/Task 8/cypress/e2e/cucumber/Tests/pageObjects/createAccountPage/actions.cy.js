class CreateAccountPageActions {
  navigateToAccountPage() {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
  }

  typeInFirstNameInputField(firstName) {
    cy.get("#firstname").clear().type(firstName);
  }

  typeInLastNameInputField(LastName) {
    cy.get("#lastname").clear().type(LastName);
  }

  typeInEmailAddressInputField(emailAddress) {
    cy.get("#email_address").clear().type(emailAddress);
  }

  typeInPasswordInputField(password) {
    cy.get("#password").clear().type(password);
  }

  typeInConfirmPasswordInputField(confirmPassword) {
    cy.get("#password-confirmation").clear().type(confirmPassword);
  }

  clickOnCreatAccountButton() {
    cy.get(".submit.primary").click();
  }
}

export default CreateAccountPageActions;
