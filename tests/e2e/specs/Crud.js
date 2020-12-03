describe('Probando Input testint', () => {


  it('Login Web Testing', () => {
    cy.visit('/login')
    cy.get('#input-1').type('proyecto@gmail.com')
    cy.get('#input-2').type('123456')
    cy.get('#botonSesion').click()
  
   
    
  }) 

  it('AgregaCrud', () => {
    cy.visit('/trueque')

    cy.get('#inputImg').type('https://firebasestorage.googleapis.com/v0/b/proyectofinal-6fe4e.appspot.com/o/imagenes%2FIMG-20140422-WA0001.jpg?alt=media&token=04fe33ea-e449-4c3b-a37d-2f5e31b501e0')
    cy.get('#input_name').type('LUCIA')
    cy.get('#input_producto').type('Sonajeroaa')
    cy.get('#input_tiempo').type('3 año de uso.')
    cy.get('#input_causa').type('No le gusta a mi perro.')
    cy.get('#input_intercambio').type('Arboles nativos')
    cy.get('#input_ciudad').type('Talcahuano.')
    cy.get('#input_email').type('pedrina@gmail.com.')
    cy.get('#input_wsp').type('+56988223698')
    cy.get('#btnClick').click()
    cy.wait(5000)
    cy.get('#datosTrueques')
   }) 


      it('Editar trueque para publicar', () => {
        cy.get('#btnEditarTrueque').click()
        cy.get('#editnameModal').type(' Cienfuegos')
        cy.get('.cambiosBtn').click()
        cy.get('#datosTrueques')
      })


      it('Eliminar producto del trueque', () => {
        cy.get('#btnEliminarTrueque').click()
      })
   
  })


  