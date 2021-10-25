export class LandingPage {

    // Locators

    getUsernameInput = () => cy.get("[name=username");
    getPasswordInput = () => cy.get("[name=password");
    getLoginButton = () => cy.xpath("//input[@value='Log In']");
    getForgotLoginLink = () => cy.xpath("(//div[@id='loginPanel']//a)[1]");
    getRegisterLink = () => cy.xpath("(//div[@id='loginPanel']//a)[2]");
    getLoginErrorHeader = () => cy.get("h1");
    getLoginErrorText = () => cy.get(".error");

    // Actions

    fillUsername(username) {
        this.getUsernameInput().clear().type(username);
    };
    
    fillPassword(password) {
        this.getPasswordInput().clear().type(password);
    };

    clickLoginButton() {
        this.getLoginButton().click();
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
        this.getForgotLoginLink().click();
    };

    clickRegisterLink() {
        this.getRegisterLink().click();
    };

};