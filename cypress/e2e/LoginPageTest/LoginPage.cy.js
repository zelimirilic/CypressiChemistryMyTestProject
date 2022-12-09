import { img, titles, form } from "../../support/pom_files/loginPage";
import { header } from "../../support/pom_files/homePage";
const login_data = require("../../fixtures/login_data.json")

beforeEach(function () {
  let url = Cypress.config().baseUrl;
  cy.visit(url);
  cy.fixture("credentials").then(function (testdata) {
    this.testdata = testdata;
  });
  cy.getByData(titles.introTxt).should('have.attr', 'data-test', 'intro-text');
  cy.getByData(titles.infoTxt).should('have.attr', 'data-test', 'info-text');
});

describe("Login page tests", function () {

  it("Login with wrong username ", function () {
    cy.getByData(form.username).type(this.testdata.wrongUser);
    cy.getByData(form.password).type(this.testdata.passwordUser);
    cy.getByData(form.signIn).click();
    cy.getByData(form.loginAlertMesage).should('have.attr', 'data-test', 'login-alert-message');
  });

  it("Login with empty username", function () {
    cy.getByData(form.username).type(this.testdata.usernameAdmin);
    cy.getByData(form.password).type(this.testdata.passwordUser);
    cy.getByData(form.signIn).click();
    cy.getByData(form.loginAlertMesage).should('have.attr', 'data-test', 'login-alert-message');
  });

  it("Login with empty username and password", function () {
    cy.getByData(form.username).type(this.testdata.usernameAdmin);
    cy.getByData(form.password).type(this.testdata.passwordAdmin);
    cy.getByData(form.signIn).click();
    cy.getByData(form.loginAlertMesage).should('have.attr', 'data-test', 'login-alert-message');
  });

  it("Verify if the data in the password field is either visible as an asterisk or bullet sign.", function () {
    cy.getByData(form.username).type(this.testdata.usernameUser).should('have.attr', 'id', 'user');
    cy.getByData(form.password).type(this.testdata.passwordUser).should('have.attr', 'type', 'password');
    cy.getByData(form.signIn).click();
    cy.get('head').contains('iChemistry © Copyright Intersolia');
  });

  it("Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.", function () {
    cy.getByData(form.username).type(this.testdata.usernameUser);
    cy.getByData(form.password).type(this.testdata.passwordUser);
    cy.getByData(form.signIn).type("{enter}");
    cy.get('head').contains('iChemistry © Copyright Intersolia');
  });

  it("Verify the 'Forgot Password' page", function () {
    cy.getByData(form.forgotPassword).should('have.attr', 'data-test', 'forgot-password').click();
    cy.getByData(titles.introTxtForgotPsw).should('have.attr', 'data-test', 'intro-text-forgotpsw');
    cy.getByData(titles.infoTxtForgotPsw).should('have.attr', 'data-test', 'info-text-forgotpsw');
  })

  it("Verify the 'Forgot Password' functionality - wrong User Name and the message for invalid login.", function () {
    cy.getByData(form.forgotPassword).should('have.attr', 'data-test', 'forgot-password').click();
    cy.getByData(form.usernameforgot).type(this.testdata.wrongUser);
    cy.getByData(form.sendPassword).click();
    cy.getByData(form.alertMesage).should('have.attr', 'data-test', 'alert-message');
    cy.getByData(titles.introTxtForgotPsw).should('have.attr', 'data-test', 'intro-text-forgotpsw');
    cy.getByData(titles.infoTxtForgotPsw).should('have.attr', 'data-test', 'info-text-forgotpsw');
  })
  
  it("Verify the 'Forgot Password' functionality - proper User Name and the message for sent email.", function () {
    cy.getByData(form.forgotPassword).should('have.attr', 'data-test', 'forgot-password').click();
    cy.getByData(form.usernameforgot).type(this.testdata.usernameUser);
    cy.getByData(form.email).type(this.testdata.email);
    cy.getByData(form.sendPassword).click();
    cy.getByData(titles.introTxtForgotPsw).should('have.attr', 'data-test', 'intro-text-forgotpsw');
    cy.getByData(titles.infoTxtForgotPsw).should('have.attr', 'data-test', 'info-text-forgotpsw');
    cy.getByData(form.alertMesage).should('have.attr', 'data-test', 'alert-message');
  })
});
