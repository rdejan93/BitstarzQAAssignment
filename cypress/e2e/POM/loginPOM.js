const locators = require("../../fixtures/locators.json")

export default class LoginPom {
    get email () {
        return cy.get(locators.login.username)
    }

    get password () {
        return cy.get(locators.login.password)
    }

    get loginBtn () {
        return cy.get(locators.login.loginBtn)
    }

    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.loginBtn.click()
    }
}

export const loginPom = new LoginPom()