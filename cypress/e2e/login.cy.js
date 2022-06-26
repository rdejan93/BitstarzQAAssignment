/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")
const user = require("../fixtures/user.json")

import { loginPom, LoginPom } from "../e2e/POM/loginPOM"

describe('Login', () => {
  before('Open URL', () => {
    cy.visit('/');
  })

  it.skip('Login POM', () => {
    /*
    This would be test written in POM design style,
    since I feel I would need a lot more time to do it like this,
    I will leave only one example and continue writing tests
    in a way I feel more comfortable
    */
    cy.visit('/');
    loginPom.login(user.username, user.password)
  })

  it('Login with valid user credentials', () => {
    cy.get(locators.login.username).type(user.username)
    cy.get(locators.login.password).type(user.password)
    cy.get(locators.login.loginBtn).click()

  })
})