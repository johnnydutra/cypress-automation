class NewAccountPage {

    addAccountAppDiv = cy.get();
    addAccountAppHeader = cy.get();

    newAccountTypeSelect = cy.get("#type");
    fromAccountSelect = cy.get("#fromAccountId");
    openNewAccountButton = cy.get();

    newAccountConfirmationText = cy.get();
    newAccountDescriptionText = cy.get();
    newAccountNumber = cy.get("#newAccountId");

}
export default NewAccountPage