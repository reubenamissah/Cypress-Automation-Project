describe('JavaScript Alerts', () => {

  it('handles a simple alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.on('window:alert', (text) => {
      expect(text).to.equal('I am a JS Alert')
    })

    cy.contains('Click for JS Alert').click()
  })

  it('handles a confirm alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.on('window:confirm', () => true)

    cy.contains('Click for JS Confirm').click()

    cy.get('#result').should('contain.text', 'You clicked: Ok')
  })
})
