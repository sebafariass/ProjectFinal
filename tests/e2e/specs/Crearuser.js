

describe('test crear usuario', () => {
	it('Test de crear usuario', () => {
        cy.visit('/login')
      
	
		cy.visit('/iniciosesion')
		cy.get('#nombre_usuario').type('Giorgioaaa')
		cy.get('#email_usuario').type('holaaaaaaddssssaaaaaaaasssddaaaaaaaa@gmail.com')
		cy.get('#address_usuario').type('tegualda')
		cy.get('#add_Password').type('1234567')
        cy.get('#addUsuario').click()
        cy.get('#closeUsuario').click()
        
		
		
	})
})
