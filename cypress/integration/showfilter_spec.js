describe('Show/Hide Locations Test', () => {
    it('Visits localhost', () => {
        cy.visit('http://localhost:8081/')
        cy.contains('Hide/Show Locations').click().get('#showLocations').check({force: true})
    })
})