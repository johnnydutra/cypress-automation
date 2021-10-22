class TransferFundsPage {

    transferFundsAppDiv = cy.get();
    transferFundsAppHeader = cy.get();

    transferAmountInput = cy.get("#amount");
    fromAccountSelect = cy.get("#fromAccountId");
    toAccountSelect = cy.get("#toAccountId");
    transferButton = cy.get();

    inputTransferAmount(amount) {
        this.transferAmountInput.clear().type(amount);
    };

    selectFromAccount(accountNumber) {
        this.fromAccountSelect.select(accountNumber);
    }

    selectToAccount(accountNumber) {
        this.toAccountSelect.select(accountNumber);
    };

    clickTransferButton() {
        this.transferButton.click();
    };


}
export default TransferFundsPage