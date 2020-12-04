describe('VIEW Mercado', () => {
  //COMPROBANDO BOTONES DE MERCADITO
  it('Login y Mercado', () => {
     cy.visit('/login')
     cy.get('#input-1').type('proyecto@gmail.com')
     cy.get('#input-2').type('123456')
     cy.get('#botonSesion').click()
    
     cy.visit('/mercado')
     cy.wait(5000)
     cy.get('#btnAceptando').click()
     cy.get('#cerrarMercado').click() 
    
    
  }) 
    


   
  })