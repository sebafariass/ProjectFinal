// https://docs.cypress.io/api/introduction/api.html

describe('Probando Input', () => {
  it('Visits the app root url', () => {
    cy.visit('/login')
    cy.get('#input-1').type('proyecto@gmail.com')
    cy.get('#input-2').type('123456')
    cy.get('#botonSesion').click()
   
    cy.get('#redirigirBoton').click()
    cy.get('#botonGoogle').type('sfarias.arellano@gmail.com')
    
  })
  
})
