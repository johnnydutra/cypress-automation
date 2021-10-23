class OpenNewAccountPage {

    addAccountAppDiv = cy.xpath("//*[@ng-controller='AddAccountCtrl']");
    addAccountAppHeader = cy.get("h1");

    newAccountTypeSelect = cy.get("#type");
    fromAccountSelect = cy.get("#fromAccountId");
    openNewAccountButton = cy.xpath("//input[@value='Open New Account']");

    newAccountConfirmationText = cy.xpath("(//div[@id='rightPanel']//p)[1]");
    newAccountDescriptionText = cy.xpath("(//div[@id='rightPanel']//p)[2]");
    newAccountNumber = cy.get("#newAccountId");

    selectAccountType(type) {
        this.newAccountTypeSelect.select(type.toUpperCase());
    };

    selectFromAccount(accountNumber) {
        this.fromAccountSelect.select(accountNumber);
    };

    clickOpenNewAccountButton() {
        this.openNewAccountButton.click();
    };

}
export default OpenNewAccountPage