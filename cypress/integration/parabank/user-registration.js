/// <reference types="Cypress" />

import { LandingPage } from "../../support/page-objects/parabank/LandingPage";
import { RegisterPage } from "../../support/page-objects/parabank/RegisterPage";
import { UserMenuPage } from "../../support/page-objects/parabank/UserMenuPage";


const landingPage = new LandingPage();
const registerPage = new RegisterPage();
const userMenuPage = new UserMenuPage();

context("User registration tests", () => {

    const newUser = {
        firstName: "Testy",
        lastName: "McTester",
        address: "25 S Halsted",
        city: "Chicago",
        state: "IL",
        zipCode: "60661",
        phoneNumber: "5551234555",
        socialSecurityNumber: "987654321",
        username: "testy",
        password: "auto1234"
    };

    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/");      
    });

    it("Register new user", () => {
        landingPage.clickRegisterLink();
        registerPage.getRegisterAppHeader().should("have.text", "Signing up is easy!");
        registerPage.fillAndSubmitForm(newUser.firstName, newUser.lastName, newUser.address, newUser.city, newUser.state, newUser.zipCode,
                                        newUser.phoneNumber, newUser.socialSecurityNumber, newUser.username, newUser.password, newUser.password);
        registerPage.getRegisterAppHeader().should("have.text", `Welcome ${newUser.username}`);
        registerPage.getConfirmationMessage().should("have.text", "Your account was created successfully. You are now logged in.");
        userMenuPage.getWelcomeMessageText().should("have.text", `Welcome ${newUser.firstName} ${newUser.lastName}`);
    });

    it("Registration attempt with unmatched passwords", () => {
        landingPage.clickRegisterLink();
        registerPage.getRegisterAppHeader().should("have.text", "Signing up is easy!");
        registerPage.fillAndSubmitForm(newUser.firstName, newUser.lastName, newUser.address, newUser.city, newUser.state, newUser.zipCode,
                                        newUser.phoneNumber, newUser.socialSecurityNumber, newUser.username, newUser.password, "zzzzzzzzz");
        registerPage.getConfirmPasswordError().should("have.text", "Passwords did not match.");
    });

    it("Registration attempt with blank form", () => {
        landingPage.clickRegisterLink();
        registerPage.clickRegisterButton();
        registerPage.getFirstNameError().should("have.text", "First name is required.");
        registerPage.getLastNameError().should("have.text", "Last name is required.");
        registerPage.getAddressError().should("have.text", "Address is required.");
        registerPage.getCityError().should("have.text", "City is required.");
        registerPage.getStateError().should("have.text", "State is required.");
        registerPage.getZipCodeError().should("have.text", "Zip Code is required.");
        registerPage.getSocialSecurityNumberError().should("have.text", "Social Security Number is required.");
        registerPage.getUsernameError().should("have.text", "Username is required.");
        registerPage.getPasswordError().should("have.text", "Password is required.");
        registerPage.getConfirmPasswordError().should("have.text", "Password confirmation is required.");
    });


});