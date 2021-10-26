/// <reference types="Cypress" />

import { CustomerLookupPage } from "../../support/page-objects/parabank/CustomerLookupPage";
import { LandingPage } from "../../support/page-objects/parabank/LandingPage";
import { RegisterPage } from "../../support/page-objects/parabank/RegisterPage";
import { UserMenuPage } from "../../support/page-objects/parabank/UserMenuPage";

const customerLookupPage = new CustomerLookupPage();
const landingPage = new LandingPage();
const registerPage = new RegisterPage();
const userMenuPage = new UserMenuPage();

context("User access recovery tests", () => {

    const user = {
        firstName: "Testy",
        lastName: "McTester",
        address: "25 S Halsted",
        city: "Chicago",
        state: "IL",
        zipCode: "60661",
        phoneNumber: "5551234555",
        socialSecurityNumber: "987654321",
        username: "testy2",
        password: "auto1234"
    };

    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/");      
    });

    it("Empty lookup form submission", () => {
        landingPage.clickForgotLoginLink();
        customerLookupPage.clickFindMyLoginInfoButton();
        customerLookupPage.getFirstNameError().should("have.text", "First name is required.");
        customerLookupPage.getLastNameError().should("have.text", "Last name is required.");
        customerLookupPage.getAddressError().should("have.text", "Address is required.");
        customerLookupPage.getCityError().should("have.text", "City is required.");
        customerLookupPage.getStateError().should("have.text", "State is required.");
        customerLookupPage.getZipCodeError().should("have.text", "Zip Code is required.");
        customerLookupPage.getSocialSecurityNumberError().should("have.text", "Social Security Number is required.")
    });

    it("Lookup form submission with invalid user data", () => {
        landingPage.clickForgotLoginLink();
        customerLookupPage.fillAndSubmitForm(user.firstName, "a", user.address, user.city, "z", user.zipCode, "f");
    });

    it("Lookup form submission with newly created user data", () => {
        landingPage.clickRegisterLink();
        registerPage.getRegisterAppHeader().should("have.text", "Signing up is easy!");
        registerPage.fillAndSubmitForm(user.firstName, user.lastName, user.address, user.city, user.state, user.zipCode,
                                        user.phoneNumber, user.socialSecurityNumber, user.username, user.password, user.password);
        userMenuPage.logUserOut();
        landingPage.clickForgotLoginLink();
        customerLookupPage.fillAndSubmitForm(user.firstName, user.lastName, user.address, user.city, user.state, user.zipCode, user.socialSecurityNumber);
        customerLookupPage.getConfirmationMessage().should("have.text", "Your login information was located successfully. You are now logged in");
        customerLookupPage.getRetrievedLoginData().should("have.text", `Username: ${user.username}`);
        customerLookupPage.getRetrievedLoginData().should("have.text", `Password: ${user.password}`);
    });

});