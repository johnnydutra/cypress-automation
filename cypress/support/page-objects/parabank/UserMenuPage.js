class UserMenuPage {

    welcomeMessageText = cy.get(".smallText");
    menuHeaderText = cy.get("h2");
    
    openNewAccountLink = cy.xpath("//div[@id='leftPanel']//a[text()='Open New Account']");
    accountOverviewLink = cy.xpath("//div[@id='leftPanel']//a[text()='Accounts Overview']");
    transferFundsLink = cy.xpath("//div[@id='leftPanel']//a[text()='Transfer Funds']");
    billPayLink = cy.xpath("//div[@id='leftPanel']//a[text()='Bill Pay']");
    findTransactionsLink = cy.xpath("//div[@id='leftPanel']//a[text()='Find Transactions']");
    updateContactInfoLink = cy.xpath("//div[@id='leftPanel']//a[text()='Update Contact Info']");
    requestLoanLink = cy.xpath("//div[@id='leftPanel']//a[text()='Request Loan']");
    logOutLink = cy.xpath("//div[@id='leftPanel']//a[text()='Log Out']");

    accessOpenNewAccount() {
        this.openNewAccountLink.click();
    };

    accessAccountsOverview() {
        this.accountOverviewLink.click();
    };

    accessTransferFunds() {
        this.transferFundsLink.click();
    };

    accessBillPay() {
        this.billPayLink.click();
    };

    accessFindTransactions() {
        this.findTransactionsLink.click();
    };

    accessUpdateContactInfo() {
        this.updateContactInfoLink.click();
    };

    accessRequestLoan() {
        this.requestLoanLink.click();
    };

    logUserOut() {
        this.logOutLink.click()
    };

}
export default UserMenuPage