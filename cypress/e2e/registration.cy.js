/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")
let randomInt = Math.floor(Math.random() * 100000) + 1
const username = "testertesteric" + randomInt
const email = "testertesteric2+" + randomInt + "@gmail.com"
const password = "Test1234"
let currency = ""

describe("Registration test", () => {
    before("Visit URL", () => {
        cy.visit("/")
    })

    it("Register user", () => {
        cy.get(locators.registration.signUpBtn).click()
        cy.get(locators.registration.email).focus().type(email)
        cy.get(locators.registration.username).focus().type(username)
        cy.get(locators.registration.password).focus().type(password)
        cy.get(locators.registration.currency).click().then(() => {
            cy.get(locators.registration.currencyList).children(locators.registration.currencyListItem).then(($list) => {
                const randomCurrency = Math.floor(Math.random() * $list.length - 1) + 1
                cy.get(locators.registration.currencyListItem).eq(randomCurrency).then(($item) => {
                    currency = $item.text()
                })
                cy.get(locators.registration.currencyListItem).eq(randomCurrency).click()
            })
        })
        cy.get(locators.registration.termsAndConditions).check({force:true})
        cy.get(locators.registration.submitBtn).click()
        cy.intercept({url:'https://bitstarz.com/api/bonuses/available_bonuses'}).as('bonusForm')
        cy.wait('@bonusForm', {timeout:50000})
        cy.get(locators.registration.noBonusBtn).click()
        cy.get(locators.registration.gamesModal).click()
        cy.get(locators.registration.backToHomePage).click()
        cy.get(locators.registration.headerUsername).should('have.text', username)
        cy.get(locators.registration.headerCurrency).should('contain.text', currency)
    })
})