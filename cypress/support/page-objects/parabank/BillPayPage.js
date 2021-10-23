class BillPayPage {

    billPayAppDiv = cy.get(".ng-scope");
    billPayAppHeader = cy.get("h1");

    payeeNameLabel = cy.xpath("(//table[@class='form2']//b)[1]");
    payeeNameInput = cy.get("#payee.name");
    payeeNameError = cy.xpath("(//span[@class='error'])[1]");

    addressLabel = cy.xpath("(//table[@class='form2']//b)[2]");
    addressInput = cy.get("#payee.address.street");
    addressError = cy.xpath("(//span[@class='error'])[2]");

    cityLabel = cy.xpath("(//table[@class='form2']//b)[3]");
    cityInput = cy.get("#payee.address.city");
    cityError = cy.xpath("(//span[@class='error'])[3]");

    stateLabel = cy.xpath("(//table[@class='form2']//b)[4]");
    stateInput = cy.get("#payee.address.state");
    stateError = cy.xpath("(//span[@class='error'])[4]");

    zipCodeLabel = cy.xpath("(//table[@class='form2']//b)[5]");
    zipCodeInput = cy.get("#payee.address.zipCode");
    zipCodeError = cy.xpath("(//span[@class='error'])[5]");

    phoneNumberLabel = cy.xpath("(//table[@class='form2']//b)[6]");
    phoneNumberInput = cy.get("#payee.phoneNumber");
    phoneNumberError = cy.xpath("(//span[@class='error'])[6]");

    accountNumberLabel = cy.xpath("(//table[@class='form2']//b)[7]");
    accountNumberInput = cy.get("#payee.accountNumber");
    accountNumberError = cy.xpath("(//span[@class='error'])[7]");

    verifyAccountLabel = cy.xpath("(//table[@class='form2']//b)[8]");
    verifyAccountInput = cy.get("[@name=verifyAccount]");
    verifyAccountError = cy.xpath("(//span[@class='error'])[8]");

    amountLabel = cy.xpath("(//table[@class='form2']//b)[9]");
    amountInput = cy.get("[@name=amount]");
    amountError = cy.xpath("(//span[@class='error'])[9]");  

    fromAccountLabel = cy.xpath("(//table[@class='form2']//b)[10]");
    fromAccountSelect = cy.get("[@name=fromAccountId");

    sendPaymentButton = cy.xpath("//input[@value='Send Payment']");

    inputPayeeName(payeeName) {
        this.payeeNameInput.clear().type(payeeName);
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

    inputAccountNumber(account) {
        this.accountNumberInput.clear().type(account);
    };

    inputVerifyAccount(account) {
        this.verifyAccountInput.clear().type(account);
    };

    inputAmount(amount) {
        this.amountInput.clear().type(amount);
    };

    clickSendPaymentButton() {
        this.sendPaymentButton.click();
    };

    fillForm(payeeName, address, city, state, zipCode, phoneNumber, accountNumber, verifyAccount, amount) {
        this.inputPayeeName(payeeName);
        this.inputAddress(address);
        this.inputCity(city);
        this.inputState(state);
        this.inputZipCode(zipCode);
        this.inputPhoneNumber(phoneNumber);
        this.inputAccountNumber(accountNumber);
        this.inputVerifyAccount(verifyAccount);
        this.inputAmount(amount);
    };

    fillAndSubmitForm(payeeName, address, city, state, zipCode, phoneNumber, accountNumber, verifyAccount, amount) {
        this.fillForm(payeeName, address, city, state, zipCode, phoneNumber, accountNumber, verifyAccount, amount);
        this.clickSendPaymentButton();
    };

}
export default BillPayPage