class RequestLoanPage {

    requestLoanAppDiv = cy.get("[@name=contact]");
    requestLoanAppHeader = cy.get("h1");

    loanAmountLabel = cy.xpath("(//table[@class='form2']//b)[1]");
    loadAmountInput = cy.get("#amount");

    downPaymentLabel = cy.xpath("(//table[@class='form2']//b)[2]");
    downPaymentInput = cy.get("#downPayment");

    fromAccountLabel = cy.xpath("(//table[@class='form2']//b)[3]");
    fromAccountSelect = cy.get("#fromAccountId");

    applyNowButton = cy.xpath("//input[@value='Apply Now']");

    loanProviderLabel = cy.xpath("(//table[@class='form']//b)[1]");
    loanProviderValue = cy.get("#loanProviderName");
    
    dateLabel = cy.xpath("(//table[@class='form']//b)[2]");
    dateValue = cy.get("#responseDate");

    statusLabel = cy.xpath("(//table[@class='form']//b)[3]");
    statusValue = cy.get("loanStatus");

    confirmationMessage = cy.xpath("(//div[@id='rightPanel']//p)[1]");
    newAccountNumberLabel = cy.xpath("(//div[@id='rightPanel']//p)[4]");
    newAccountNumberLink = cy.get("#newAccountId");

    errorMessage = cy.get(".error");

    inputLoanAmount(amount) {
        this.loanAmountInput.clear().type(amount);
    };

    inputDownPayment(amount) {
        this.downPaymentInput.clear().input(amount);
    };

    selectAccountNumber(account) {
        this.fromAccountSelect.select(account);
    };

    clickApplyNowButton() {
        this.applyNowButton.click();
    };

    fillForm(loanAmount, downPayment, accountNumber) {
        this.inputLoanAmount(loanAmount);
        this.inputDownPayment(downPayment);
        this.selectAccountNumber(accountNumber);
    };

    fillAndSubmitForm(loanAmount, downPayment, accountNumber) {
        this.fillForm(loanAmount, downPayment, accountNumber);
        this.clickApplyNowButton();
    };

    clickNewAccountId() {
        this.newAccountNumberLink.click();
    };

}
export default RequestLoanPage