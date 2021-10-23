class LandingPage {

    usernameInput = cy.get("[name=username");
    passwordInput = cy.get("[name=password");
    loginButton = cy.xpath("//input[@value='Log In']");
    forgotLoginLink = cy.xpath("(//div[@id='loginPanel']//a)[1]");
    registerLink = cy.xpath("(//div[@id='loginPanel']//a)[2]");

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

    clickForgotLoginLink() {
        this.forgotLoginLink.click();
    };

    clickRegisterLink() {
        this.registerLink.click();
    };

};
export default LandingPage