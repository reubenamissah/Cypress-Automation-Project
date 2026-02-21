describe('Dropdown Test', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/dropdown')
})
    it('Verify user can select dropdown options', () => {
        cy.get('#dropdown').select('Option 2')
    })
})