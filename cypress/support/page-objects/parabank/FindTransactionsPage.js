class FindTransactionsPage {

    findTransactionsAppDiv = cy.get(".ng-scope");
    findTransactionsAppHeader = cy.get("h1");

    accountSelect = cy.get("#accountId");

    transactionIdInput = cy.get("#criteria.transactionId");
    findByTransactionIdButton = cy.xpath("(//button)[1]");

    exactDateInput = cy.get("#criteria.onDate");
    findByDateButton = cy.xpath("(//button)[2]");

    fromDateInput = cy.get("#criteria.fromDate");
    toDateInput = cy.get("#criteria.toDate");
    findByDateRangeButton = cy.xpath("(//button)[3]");

    amountInput = cy.get("#criteria.amount");
    findByAmountButton = cy.xpath("(//button)[4]");

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