// https://docs.cypress.io/api/introduction/api.html

describe('Probando Input', () => {
  it('Login Web Testing', () => {
    cy.visit('/login')
    cy.get('#input-1').type('proyecto@gmail.com')
    cy.get('#input-2').type('123456')
    cy.get('#botonSesion').click()
    cy.get('#redirigirBoton').click()
   
    
  })
  it('Test de crear usuario', () => {
       
		cy.visit('/iniciosesion')
		cy.get('#nombre_usuario').type('Giorgioaaa')
		cy.get('#email_usuario').type('holaaaaaaddosssssssssssssssssooooooosssssooaaaa@gmail.com')
		cy.get('#address_usuario').type('tegualda')
		cy.get('#add_Password').type('1234567')
        cy.get('#addUsuario').click()
        cy.get('#closeUsuario').click()
        
		
		
	})
  
})
