class CustomerLookupPage {

    customerLookupAppDiv = cy.get("#rightPanel");
    customerLookupAppHeader = cy.get("h1");

    firstNameLabel = cy.xpath("(//table[@class='form2']//b)[1]");
    firstNameInput = cy.get("#firstName");
    firstNameError = cy.get("#firstName.errors");

    lastNameLabel = cy.xpath("(//table[@class='form2']//b)[2]");
    lastNameInput = cy.get("#lastName");
    lastNameError = cy.get("#address.street.errors");

    addressLabel = cy.xpath("(//table[@class='form2']//b)[3]");
    addressInput = cy.get("#address.street");
    addressError = cy.get("#address.street.errors");

    cityLabel = cy.xpath("(//table[@class='form2']//b)[4]");
    cityInput = cy.get("#address.city");
    cityError = cy.get("#address.city.errors");

    stateLabel = cy.xpath("(//table[@class='form2']//b)[5]");
    stateInput = cy.get("#address.state");
    stateError = cy.get("#address.state.errors");

    zipCodeLabel = cy.xpath("(//table[@class='form2']//b)[6]");
    zipCodeInput = cy.get("#address.zipCode");
    zipCodeError = cy.get("#address.zipCode.errors");

    socialSecurityNumberLabel = cy.xpath("(//table[@class='form2']//b)[7]");
    socialSecurityNumberInput = cy.get("#ssn");
    socialSecurityNumberError = cy.get("#ssn.errors");

    findMyLoginInfoButton = cy.xpath("//input[@value='Find My Login Info']");

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
    };

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