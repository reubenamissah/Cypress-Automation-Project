import { draganddrop } from "../fixtures/selector.cy"
describe('Drop and Drop Test', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
})
    it('Verify user can Drag and Drop item', () => {
        cy.get(draganddrop.dragA).drag(draganddrop.dragB)
    })
})