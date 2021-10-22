class LandingPage {

    usernameInput = cy.get("[name=username");
    passwordInput = cy.get("[name=password");
    loginButton = cy.get("");
    forgotLoginLink = cy.get("");
    registerLink = cy.get("");

    fillUsername(username) {
        this.usernameInput.clear().type(username)
    };
    
    fillPassword(password) {
        this.passwordInput.clear().type(password);
    };

    clickLoginButton() {
        this.loginButton.click();
    };

    inputUserCredentials(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
    };

    logUserIn(username, password) {
        this.inputUserCredentials(username, password);
        this.clickLoginButton();
    };

};
export default LandingPage