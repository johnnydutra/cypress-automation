class RegisterPage {

    firstNameLabel = cy.get();
    firstNameInput = cy.get("#firstName");
    firstNameError = cy.get("#firstName.errors");

    lastNameLabel = cy.get();
    lastNameInput = cy.get("#lastName");
    lastNameError = cy.get("#address.street.errors");

    addressLabel = cy.get();
    addressInput = cy.get("#address.street");
    addressError = cy.get("#address.street.errors");

    cityLabel = cy.get();
    cityInput = cy.get("#address.city");
    cityError = cy.get("#address.city.errors");

    stateLabel = cy.get();
    stateInput = cy.get("#address.state");
    stateError = cy.get("#address.state.errors");

    zipCodeLabel = cy.get();
    zipCodeInput = cy.get("#address.zipCode");
    zipCodeError = cy.get("#address.zipCode.errors");

    phoneNumberLabel = cy.get();
    phoneNumberInput = cy.get("#customer.phoneNumber");

    socialSecurityNumberLabel = cy.get();
    socialSecurityNumberInput = cy.get("#ssn");
    socialSecurityNumberError = cy.get("#ssn.errors");

    usernameLabel = cy.get();
    usernameInput = cy.get("#customer.username");
    usernameError = cy.get("#customer.username.errors");

    passwordLabel = cy.get();
    passwordInput = cy.get("#customer.password");
    passwordError = cy.get("#customer.password.errors");

    confirmPasswordLabel = cy.get();
    confirmPasswordInput = cy.get("#repeatedPassword");
    confirmPasswordError = cy.get("#repeatedPassword.errors");

    registerButton = cy.get();

    inputFirstName(firstName) {
        this.firstNameInput.clear().type(firstName);
    };

    inputLastName(lastName) {
        this.lastNameInput.clear().type(lastName);
    };

    inputAddress(address) {
        this.addressInput.clear().type(address);
    };

    inputCity(city) {
        this.cityInput.clear().type(city);
    };

    inputState(state) {
        this.stateInput.clear().type(state);
    };

    inputZipCode(zipCode) {
        this.zipCodeInput.clear().type(zipCode);
    };

    inputSocialSecurityNUmber(socialSecurityNumber) {
        this.socialSecurityNumberInput.clear().type(socialSecurityNumber);
    };

    inputUsername(username) {
        this.usernameInput.clear().type(username);
    };

    inputPassword(password) {
        this.passwordInput.clear().input(password);
    };

    inputConfirmPassword(password) {
        this.confirmPasswordInput.clear().input(password);
    };

    clickRegisterButton() {
        this.registerButton.click();
    };

    fillForm(firstName, lastName, address, city, state, zipCode, socialSecurityNumber, username, password, passwordConfirmation) {
        this.inputFirstName(firstName);
        this.inputLastName(lastName);
        this.inputAddress(address);
        this.inputCity(city);
        this.inputState(state);
        this.inputZipCode(zipCode);
        this.inputSocialSecurityNumber(socialSecurityNumber);
        this.inputUsername(username);
        this.inputPassword(password);
        this.inputConfirmPassword(passwordConfirmation);
    };

    fillAndSubmitForm(firstName, lastName, address, city, state, zipCode, socialSecurityNumber, username, password, passwordConfirmation) {
        this.fillForm(firstName, lastName, address, city, state, zipCode, socialSecurityNumber, username, password, passwordConfirmation);
        this.clickRegisterButton();
    };
    
};
export default RegisterPage