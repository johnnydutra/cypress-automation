class CustomerLookupPage {

    customerLookupAppDiv = cy.get();
    customerLookupAppHeader = cy.get();

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

    socialSecurityNumberLabel = cy.get();
    socialSecurityNumberInput = cy.get("#ssn");
    socialSecurityNumberError = cy.get("#ssn.errors");

    findMyLoginInfoButton = cy.get();

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

    inputSocialSecurityNumber(socialSecurityNumber) {
        this.socialSecurityNumberInput.clear().type(socialSecurityNumber);
    };

    clickFindMyLoginInfoButton() {
        this.findMyLoginInfoButton.click();
    }

    fillForm(firstName, lastName, address, city, state, zipCode, socialSecurityNumber) {
        this.inputFirstName(firstName);
        this.inputLastName(lastName);
        this.inputAddress(address);
        this.inputCity(city);
        this.inputState(state);
        this.inputZipCode(zipCode);
        this.inputSocialSecurityNumber(socialSecurityNumber);
    };

    fillAndSubmitForm(firstName, lastName, address, city, state, zipCode, socialSecurityNumber) {
        this.fillForm(firstName, lastName, address, city, state, zipCode, socialSecurityNumber);
        this.clickFindMyLoginInfoButton();
    };

}
export default CustomerLookupPage