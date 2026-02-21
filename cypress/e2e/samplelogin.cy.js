import {samplelogin} from "../fixtures/selector.cy.js"
describe('Sample Login Test', () => {
    beforeEach(() => {
    cy.visit('/')
})
    it('Verify user can login with a valid credentials', () => {
        cy.get(samplelogin.usernameField).type(samplelogin.usernameText)
        cy.get(samplelogin.passwordField).type(samplelogin.passwordTxt)
        cy.get(samplelogin.loginBtn).click()
    })
})