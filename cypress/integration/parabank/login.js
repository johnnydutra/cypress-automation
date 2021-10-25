/// <reference types="cypress" />

import { LandingPage } from "../../support/page-objects/parabank/LandingPage";
import { UserMenuPage } from "../../support/page-objects/parabank/UserMenuPage";

const landingPage = new LandingPage();
const userMenuPage = new UserMenuPage();

context("Login flow tests", () => {

    const defaultUser = "testy";
    const defaultPassword = "auto1234";
    const errorHeaderText = "Error!";
    const loginErrorText = "Please enter a username and password.";

    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/");      
    });
  
    it("Valid login", () => {
        landingPage.logUserIn(defaultUser, defaultPassword);
        userMenuPage.getWelcomeMessageText().should("have.text", "Welcome Testy McTester");
        userMenuPage.getMenuHeaderText().should("have.text", "Account Services");
    });

    it("Login attempt with invalid credentials", () => {
        landingPage.logUserIn("abczzz", "12eadw");
        landingPage.getLoginErrorHeader().should("have.text", errorHeaderText);
        landingPage.getLoginErrorText().should("have.text", "The username and password could not be verified.");
    });

    it("Login attempt without username", () => {
        landingPage.fillPassword(defaultPassword);
        landingPage.clickLoginButton();
        landingPage.getLoginErrorHeader().should("have.text", errorHeaderText);
        landingPage.getLoginErrorText().should("have.text", loginErrorText);
    });

    it("Login attempt without password", () => {
        landingPage.fillUsername(defaultUser);
        landingPage.clickLoginButton();
        landingPage.getLoginErrorHeader().should("have.text", errorHeaderText);
        landingPage.getLoginErrorText().should("have.text", loginErrorText);
    });

    it("Blank login attempt", () => {
        landingPage.clickLoginButton();
        landingPage.getLoginErrorHeader().should("have.text", errorHeaderText);
        landingPage.getLoginErrorText().should("have.text", loginErrorText);
    });

});
  
