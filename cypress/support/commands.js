// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {
    img,
    titles,
    form
} from "../support/pom_files/loginPage"

import {
    header
} from "../support/pom_files/homePage"

const login_data = require('../fixtures/login_data.json')

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('loginToPage', () => {
    cy.getByData(form.username)
          .clear()
          .type('ATestAdmin');
    cy.getByData(form.password)
          .clear()
          .type('ATestAdmin');
    cy.getByData(form.signIn).click({
          force: true
    });
});

Cypress.Commands.add('logOut', () => {
    cy.get(header.avatar).click({
          force: true
    })
    cy.get(header.logOut).click({
          force: true
    })
})