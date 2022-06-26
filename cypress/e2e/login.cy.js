const locators = require("../fixtures/locators.json")
const user = require("../fixtures/user.json")

import { loginPom, LoginPom } from "../e2e/POM/loginPOM"

describe('Login', () => {
  it('Login with valid user credentials', () => {
   cy.visit('/');
   cy.get(locators.login.username).type(user.username)
   cy.get(locators.login.password).type(user.password)
   cy.get(locators.login.loginBtn).click()
   
  })
})