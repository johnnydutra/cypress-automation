export class UserMenuPage {

    // Locators

    getWelcomeMessageText = () => cy.get(".smallText");
    getMenuHeaderText = () => cy.get("h2");
    
    getOpenNewAccountLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Open New Account']");
    getAccountOverviewLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Accounts Overview']");
    getTransferFundsLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Transfer Funds']");
    getBillPayLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Bill Pay']");
    getFindTransactionsLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Find Transactions']");
    getUpdateContactInfoLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Update Contact Info']");
    getRequestLoanLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Request Loan']");
    getLogOutLink = () => cy.xpath("//div[@id='leftPanel']//a[text()='Log Out']");

    // Actions

    accessOpenNewAccount() {
        this.getOpenNewAccountLink().click();
    };

    accessAccountsOverview() {
        this.getAccountOverviewLink().click();
    };

    accessTransferFunds() {
        this.getTransferFundsLink().click();
    };

    accessBillPay() {
        this.getBillPayLink().click();
    };

    accessFindTransactions() {
        this.getFindTransactionsLink().click();
    };

    accessUpdateContactInfo() {
        this.getUpdateContactInfoLink().click();
    };

    accessRequestLoan() {
        this.getRequestLoanLink().click();
    };

    logUserOut() {
        this.getLogOutLink().click();
    };

};