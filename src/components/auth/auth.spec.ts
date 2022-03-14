//
// Auth Component
// E2E Tests
//

describe('Auth Component Test', () => {
    it('Sign-in Button Test', () => {
        cy.visit(Cypress.env('index_url'))
        cy.get('.ui-signin__action-btn').contains('Sign In')
    })
})

export {}

//
// END
//
