describe('Dynamic Content Automation - Herokuapp', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_content');
  });

  it('should detect changes in dynamic content after refresh', () => {

    // Capture the first dynamic text block
    cy.get('#content .row .large-10')
      .first()
      .invoke('text')
      .then((initialText) => {

        // Reload the page
        cy.reload();

        // Capture the text again
        cy.get('#content .row .large-10')
          .first()
          .invoke('text')
          .then((newText) => {

            // Assert that content has changed
            expect(newText).to.not.equal(initialText);
          });
      });
  });
});
