export class RegisterPage {

    // Locators

    getRegisterAppDiv = () => cy.get("#customerForm");
    getRegisterAppHeader = () => cy.get("h1");

    getFirstNameLabel = () => cy.xpath("(//form[@id='customerForm']//b)[1]");
    getFirstNameInput = () => cy.xpath("//input[@id='customer.firstName']");
    getFirstNameError = () => cy.xpath("//span[@id='customer.firstName.errors']");

    getLastNameLabel = () => cy.xpath("(//form[@id='customerForm']//b)[2]");
    getLastNameInput = () => cy.xpath("//input[@id='customer.lastName']");
    getLastNameError = () => cy.xpath("//span[@id='customer.lastName.errors']");

    getAddressLabel = () => cy.xpath("(//form[@id='customerForm']//b)[3]");
    getAddressInput = () => cy.xpath("//input[@id='customer.address.street']");
    getAddressError = () => cy.xpath("//span[@id='customer.address.street.errors']");

    getCityLabel = () => cy.xpath("(//form[@id='customerForm']//b)[4]");
    getCityInput = () => cy.xpath("//input[@id='customer.address.city']");
    getCityError = () => cy.xpath("//span[@id='customer.address.city.errors']");

    getStateLabel = () => cy.xpath("(//form[@id='customerForm']//b)[5]");
    getStateInput = () => cy.xpath("//input[@id='customer.address.state']");
    getStateError = () => cy.xpath("//span[@id='customer.address.state.errors']");

    getZipCodeLabel = () => cy.xpath("(//form[@id='customerForm']//b)[6]");
    getZipCodeInput = () => cy.xpath("//input[@id='customer.address.zipCode']");
    getZipCodeError = () => cy.xpath("//span[@id='customer.address.zipCode.errors']");

    getPhoneNumberLabel = () => cy.xpath("(//form[@id='customerForm']//b)[7]");
    getPhoneNumberInput = () => cy.xpath("//input[@id='customer.phoneNumber']");

    getSocialSecurityNumberLabel = () => cy.xpath("(//form[@id='customerForm']//b)[8]");
    getSocialSecurityNumberInput = () => cy.xpath("//input[@id='customer.ssn']");
    getSocialSecurityNumberError = () => cy.xpath("//span[@id='customer.ssn.errors']");

    getUsernameLabel = () => cy.xpath("(//form[@id='customerForm']//b)[9]");
    getUsernameInput = () => cy.xpath("//input[@id='customer.username']");
    getUsernameError = () => cy.xpath("//span[@id='customer.username.errors']");

    getPasswordLabel = () => cy.xpath("(//form[@id='customerForm']//b)[10]");
    getPasswordInput = () => cy.xpath("//input[@id='customer.password']");
    getPasswordError = () => cy.xpath("//span[@id='customer.password.errors']");

    getConfirmPasswordLabel = () => cy.xpath("(//form[@id='customerForm']//b)[11]");
    getConfirmPasswordInput = () => cy.get("#repeatedPassword");
    getConfirmPasswordError = () => cy.xpath("//span[@id='repeatedPassword.errors']");

    getRegisterButton = () => cy.xpath("//input[@value='Register']");

    getConfirmationMessage = () => cy.xpath("(//div[@id='rightPanel']//p)[1]");

    // Actoions

    inputFirstName(firstName) {
        this.getFirstNameInput().clear().type(firstName);
    };

    inputLastName(lastName) {
        this.getLastNameInput().clear().type(lastName);
    };

    inputAddress(address) {
        this.getAddressInput().clear().type(address);
    };

    inputCity(city) {
        this.getCityInput().clear().type(city);
    };

    inputState(state) {
        this.getStateInput().clear().type(state);
    };

    inputZipCode(zipCode) {
        this.getZipCodeInput().clear().type(zipCode);
    };

    inputPhoneNumber(phoneNumber) {
        this.getPhoneNumberInput().clear().type(phoneNumber);
    };

    inputSocialSecurityNumber(socialSecurityNumber) {
        this.getSocialSecurityNumberInput().clear().type(socialSecurityNumber);
    };

    inputUsername(username) {
        this.getUsernameInput().clear().type(username);
    };

    inputPassword(password) {
        this.getPasswordInput().clear().type(password);
    };

    inputConfirmPassword(password) {
        this.getConfirmPasswordInput().clear().type(password);
    };

    clickRegisterButton() {
        this.getRegisterButton().click();
    };

    fillForm(firstName, lastName, address, city, state, zipCode, phoneNumber, socialSecurityNumber, username, password, passwordConfirmation) {
        this.inputFirstName(firstName);
        this.inputLastName(lastName);
        this.inputAddress(address);
        this.inputCity(city);
        this.inputState(state);
        this.inputZipCode(zipCode);
        this.inputPhoneNumber(phoneNumber);
        this.inputSocialSecurityNumber(socialSecurityNumber);
        this.inputUsername(username);
        this.inputPassword(password);
        this.inputConfirmPassword(passwordConfirmation);
    };

    fillAndSubmitForm(firstName, lastName, address, city, state, zipCode, phoneNumber, socialSecurityNumber, username, password, passwordConfirmation) {
        this.fillForm(firstName, lastName, address, city, state, zipCode, phoneNumber, socialSecurityNumber, username, password, passwordConfirmation);
        this.clickRegisterButton();
    };
    
};