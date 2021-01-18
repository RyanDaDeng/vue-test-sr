describe('Show/Hide Locations Test', () => {
    it('Visits localhost', () => {
        cy.visit('/')
        cy.contains('Hide/Show Locations').click().get('#showLocations').check({force: true})
    })
})