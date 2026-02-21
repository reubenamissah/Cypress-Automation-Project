describe('File Upload Test', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/upload')
})
    it('User should be able to upload an image successfully', () => {
        cy.get('[name="file"]')
        .selectFile('cypress/fixtures/my_image.jpg')

        cy.wait(2000)

        // cy.get('#file-submit').click()

        // //ASSERTION to CONFIRM THAT THE UPLOAD WAS SUCCESSFUL
        // cy.contains('File Uploaded!').should('be.visible')
        // cy.contains('my_image.jpg').should('be.visible')
    })
})