class BillPayPage {

    billPayAppDiv = cy.get();
    billPayAppHeader = cy.get();

    payeeNameLabel = cy.get();
    payeeNameInput = cy.get("#payee.name");
    payeeNameError = cy.get();

    addressLabel = cy.get();
    addressInput = cy.get("#payee.address.street");
    addressError = cy.get();

    cityLabel = cy.get();
    cityInput = cy.get("#payee.address.city");
    cityError = cy.get();

    stateLabel = cy.get();
    stateInput = cy.get("#payee.address.state");
    stateError = cy.get();

    zipCodeLabel = cy.get();
    zipCodeInput = cy.get("#payee.address.zipCode");
    zipCodeError = cy.get();

    phoneNumberLabel = cy.get();
    phoneNumberInput = cy.get("#payee.phoneNumber");
    phoneNumberError = cy.get();

    accountNumberLabel = cy.get();
    accountNumberInput = cy.get("#payee.accountNumber");
    accountNumberError = cy.get();

    verifyAccountLabel = cy.get();
    verifyAccountInput = cy.get("[@name=verifyAccount]");
    verifyAccountError = cy.get();

    amountLabel = cy.get();
    amountInput = cy.get("[@name=amount]");
    amountError = cy.get();  

    fromAccountLabel = cy.get();
    fromAccountInput = cy.get("[@name=fromAccountId");
    fromAccountError = cy.get();

}
export default BillPayPage