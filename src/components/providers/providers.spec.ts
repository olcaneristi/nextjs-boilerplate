//
// Auth Providers Component
// E2E Tests
//

describe('Auth Component Providers Test', () => {
    it('Provider Buttons Test', () => {
        cy.visit(Cypress.env('signin_url'))
        cy.get('.ui-signin__action-btn').contains('Sign in with GitHub')
    })
})

export {}

//
// END
//
