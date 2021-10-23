class UpdateContactInfoPage {

    updateContactInfoAppDiv = cy.get("[@name=contact]");
    updateContactInfoAppHeader = cy.get("h1");

    firstNameLabel = cy.xpath("(//table[@class='form2']//b)[1]");
    firstNameInput = cy.get("#customer.firstName");
    firstNameError = cy.xpath("(//span[contains(@class, 'error')])[1]");

    lastNameLabel = cy.xpath("(//table[@class='form2']//b)[2]");
    lastNameInput = cy.get("#customer.lastName");
    lastNameError = cy.xpath("(//span[contains(@class, 'error')])[2]");

    addressLabel = cy.xpath("(//table[@class='form2']//b)[3]");
    addressInput = cy.get("#customer.address.street");
    addressError = cy.xpath("(//span[contains(@class, 'error')])[3]");

    cityLabel = cy.xpath("(//table[@class='form2']//b)[4]");
    cityInput = cy.get("#customer.address.city");
    cityError = cy.xpath("(//span[contains(@class, 'error')])[4]");

    stateLabel = cy.xpath("(//table[@class='form2']//b)[5]");
    stateInput = cy.get("#customer.address.state");
    stateError = cy.xpath("(//span[contains(@class, 'error')])[5]");

    zipCodeLabel = cy.xpath("(//table[@class='form2']//b)[6]");
    zipCodeInput = cy.get("#customer.address.zipCode");
    zipCodeError = cy.xpath("(//span[contains(@class, 'error')])[6]");

    phoneNumberLabel = cy.xpath("(//table[@class='form2']//b)[7]");
    phoneNumberInput = cy.get("#customer.phoneNumber");

    updateProfileButton = cy.xpath("//input[@value='Update Profile']");

    confirmationMessage = cy.get("#rightPanel p");

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

    inputPhoneNumber(phoneNumber) {
        this.phoneNumberInput.clear().type(phoneNumber);
    };

    clickUpdateProfileButton() {
        this.updateProfileButton.click();
    };

    fillForm(firstName, lastName, address, city, state, zipCode, phoneNumber) {
        this.inputFirstName(firstName);
        this.inputLastName(lastName);
        this.inputAddress(address);
        this.inputCity(city);
        this.inputState(state);
        this.inputZipCode(zipCode);
        this.inputPhoneNumber(phoneNumber);
    };

    fillAndSubmitForm(firstName, lastName, address, city, state, zipCode, phoneNumber) {
        this.fillForm(firstName, lastName, address, city, state, zipCode, phoneNumber);
        this.clickUpdateProfileButton();
    };

}
export default UpdateContactInfoPage