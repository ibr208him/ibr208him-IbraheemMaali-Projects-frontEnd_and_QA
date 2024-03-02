class LoginPageActions {
  openMagentoWebsiteLoginPage() {
    cy.visit("/customer/account/login/");
    return this;
  }

  typeInEmailInputField(email) {
    cy.get("#email").clear().type(email);
    return this;
  }

  typeinPasswordInputField(password) {
    cy.get("#pass").clear().type(password);
    return this;
  }

  clickOnSignInButton() {
    cy.get("#send2").click();
  }
}
export default LoginPageActions;
