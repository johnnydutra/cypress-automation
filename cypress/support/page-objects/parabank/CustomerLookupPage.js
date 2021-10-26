export class CustomerLookupPage {

    // Locators

    getCustomerLookupAppDiv = () => cy.get("#rightPanel");
    getCustomerLookupAppHeader = () => cy.get("h1");

    getFirstNameLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[1]");
    getFirstNameInput = () => cy.get("#firstName");
    getFirstNameError = () => cy.xpath("//span[@id='firstName.errors']");

    getLastNameLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[2]");
    getLastNameInput = () => cy.get("#lastName");
    getLastNameError = () => cy.xpath("//span[@id='lastName.errors']");

    getAddressLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[3]");
    getAddressInput = () => cy.xpath("//input[@id='address.street']");
    getAddressError = () => cy.xpath("//span[@id='address.street.errors']");

    getCityLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[4]");
    getCityInput = () => cy.xpath("//input[@id='address.city']");
    getCityError = () => cy.xpath("//span[@id='address.city.errors']");

    getStateLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[5]");
    getStateInput = () => cy.xpath("//input[@id='address.state']");
    getStateError = () => cy.xpath("//span[@id='address.state.errors']");

    getZipCodeLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[6]");
    getZipCodeInput = () => cy.xpath("//input[@id='address.zipCode']");
    getZipCodeError = () => cy.xpath("//span[@id='address.zipCode.errors']");

    getSocialSecurityNumberLabel = () => cy.xpath("(//form[@id='lookupForm']//b)[7]");
    getSocialSecurityNumberInput = () => cy.get("#ssn");
    getSocialSecurityNumberError = () => cy.xpath("//span[@id='ssn.errors']");

    getFindMyLoginInfoButton = () => cy.xpath("//input[@value='Find My Login Info']");

    getConfirmationMessage = () => cy.xpath("(//div[@id='rightPanel']//p)[1]");
    getRetrievedLoginData = () => cy.xpath("(//div[@id='rightPanel']//p)[2]");

    // Actions

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

    inputSocialSecurityNumber(socialSecurityNumber) {
        this.getSocialSecurityNumberInput().clear().type(socialSecurityNumber);
    };

    clickFindMyLoginInfoButton() {
        this.getFindMyLoginInfoButton().click();
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

};