// https://docs.cypress.io/api/introduction/api.html

describe('Probando Input', () => {
  it('Login Web Testing', () => {
    cy.visit('/login')
    cy.get('#input-1').type('proyecto@gmail.com')
    cy.get('#input-2').type('123456')
    cy.get('#botonSesion').click()
    cy.get('#redirigirBoton').click()
    cy.visit('/login')
    
  })

  
})
