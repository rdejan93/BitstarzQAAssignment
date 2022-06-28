/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")
const user = require("../fixtures/user.json")

import { loginPom } from "../e2e/POM/loginPOM"
import {email, password} from "../e2e/registration.cy"

describe('Login', () => {
  beforeEach('Open URL', () => {
    cy.visit('/');
  })

  it.skip('Login POM', () => {
    /*
    This would be test written in POM design style,
    since I feel I would need a lot more time to do it like this,
    I will leave only one example and continue writing tests
    in a way I feel more comfortable
    */
    loginPom.login(user.username, user.password)
  })

  it('Login with valid user credentials', () => {
    cy.get(locators.login.username).type(email)
    cy.get(locators.login.password).type(password)
    cy.get(locators.login.loginBtn).click()
    cy.intercept('https://bitstarz.com/api/player/accounts').as("login")
    cy.wait("@login", {timeout: 10000})
    cy.get(locators.login.headerCashoutBtn).should('exist')
  })
})