Cypress.Commands.add('signUp', (username, password) => {
    cy.visit('/signup');
    cy.get("input[type='username']").type(username)
    cy.get(".sc-pVTFL.fpjaXA").eq(1).type(password)
    cy.get(".sc-pVTFL.fpjaXA").eq(2).type(password)
    cy.get(".sc-kDTinF.bzvhtv").click()
})

Cypress.Commands.add('signIn', (username, password) => {
    cy.visit("/login")
    cy.get("input[type='username']").type(username)
    cy.get("input[type='password']").type(password)
    cy.get(".sc-kDTinF.bzvhtv").click()
})

export {}