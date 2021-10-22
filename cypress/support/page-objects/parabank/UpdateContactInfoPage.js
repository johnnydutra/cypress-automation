class UpdateContactInfoPage {

    updateContactInfoAppDiv = cy.get();
    updateContactInfoAppHeader = cy.get();

    firstNameLabel = cy.get();
    firstNameInput = cy.get("#customer.firstName");
    firstNameError = cy.get();

    lastNameLabel = cy.get();
    lastNameInput = cy.get("#customer.lastName");
    lastNameError = cy.get();

    addressLabel = cy.get();
    addressInput = cy.get("#customer.address.street");
    addressError = cy.get();

    cityLabel = cy.get();
    cityInput = cy.get("#customer.address.city");
    cityError = cy.get();

    stateLabel = cy.get();
    stateInput = cy.get("#customer.address.state");
    stateError = cy.get();

    zipCodeLabel = cy.get();
    zipCodeInput = cy.get("#customer.address.zipCode");
    zipCodeError = cy.get();

    phoneNumberLabel = cy.get();
    phoneNumberInput = cy.get("#customer.phoneNumber");

    updateProfileButton = cy.get();

    confirmationMessage = cy.get();

}
export default UpdateContactInfoPage