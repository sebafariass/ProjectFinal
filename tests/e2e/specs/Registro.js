
describe('Probando Input', () => {
  
    //Crear Usuario
    it('Test de crear usuario', () => {
         
          cy.visit('/iniciosesion')
          cy.get('#nombre_usuario').type('Sebastians')
          cy.get('#email_usuario').type('uuuuu@gmail.com')
          cy.get('#address_usuario').type('Los lirios')
          cy.get('#add_Password').type('1234567')
          cy.get('#addUsuario').click()
          cy.get('#closeUsuario').click()
          cy.visit('/login')
          
          
      })
    
  })
  