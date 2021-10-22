class FindTransactionsPage {

    findTransactionsAppDiv = cy.get();
    findTransactionsAppHeader = cy.get();

    accountSelect = cy.get();

    transactionIdInput = cy.get();
    findByTransactionIdButton = cy.get();

    exactDateInput = cy.get();
    findByDateButton = cy.get();

    fromDateInput = cy.get();
    toDateInput = cy.get();
    findByDateRangeButton = cy.get();

    amountInput = cy.get();
    findByAmountButton = cy.get();

    selectAccount(account) {
        this.accountSelect.select(account);
    };

    inputTransactionId(transactionId) {
        this.transactionIdInput.clear().type(transactionId);
    };

    inputExactDate(date) {
        this.exactDateInput.clear().type(date);
    };

    inputFromDate(date) {
        this.fromDateInput.clear().type(date);
    };

    inputToDate(date) {
        this.toDateInput.clear().type(date);
    };

    inputAmount(amount) {
        this.amountInput.clear().type(amount);
    };

    clickFindByTransactionIdButton() {
        this.findByTransactionIdButton.click();
    };

    clickFindByExactDateButton() {
        this.findByDateButton.click();
    };

    clickFindByDateRangeButton() {
        this.findByDateRangeButton.click();
    };

    clickFindByAmountButton() {
        this.findByAmountButton.click();
    };

    searchByTransactionId(transactionId) {
        this.inputTransactionId(transactionId);
        this.clickFindByTransactionIdButton();
    };

    searchByExactDate(date) {
        this.inputExactDate(date);
        this.clickFindByExactDateButton();
    };

    searchByDateRange(fromDate, toDate) {
        this.inputFromDate(fromDate);
        this.inputToDate(toDate);
        this.clickFindByDateRangeButton();
    };

    searchByAmount(amount) {
        this.inputAmount(amount);
        this.clickFindByAmountButton();
    };
       
}
export default FindTransactionsPage