describe('Profile manage test', () => {

    it('Change password test', () => {

        //LOGIN
        cy.get(':nth-child(5) > .nav-link').click() //boton de ingresar
        cy.get(':nth-child(1) > .box > .form-control')
            .type('admin@localhost') //ingrese el usuario
        cy.get(':nth-child(2) > .box > .form-control')
            .type('12345') // ingrese la contraseña
        cy.wait(2000)
        cy.get(':nth-child(3) > .form-control').click() // click en el boton ingresar

        cy.get(':nth-child(2) > .button-transparent').click() //click en las funciones del usuario
        cy.get('[href="/settings/profile"]').click() //click en la configuracion del usuario
        cy.get('[href="/settings/security"]').click() //click para configuracion de seguridad
        cy.get('[placeholder="Escribe la contraseña actual"]').type("12345") //Se escribe la contraseña actual
        cy.get('[placeholder="Escribe la nueva contraseña"]').type("12345") //Se escribe la contrseña nueva
        cy.get('[placeholder="Confirma la nueva contraseña"]').type("12345") // Se confirma la contraseña nueva
        cy.get('.mb-5').click() //click en guardar contraseña
        cy.wait(7000) // Espera 7 segundos mientras muestra el mensaje al usuario
        //LOGOUT
        cy.get('.dropdown-toggle').click(); 
        cy.get('.dropdown-item:nth-child(10)').click();
        cy.wait(1000)
    })

    it('Change email test', () => {

        //LOGIN
        cy.get(':nth-child(5) > .nav-link').click() //boton de ingresar
        cy.get(':nth-child(1) > .box > .form-control')
            .type('admin@localhost') //ingrese el usuario
        cy.get(':nth-child(2) > .box > .form-control')
            .type('12345') // ingrese la contraseña
        cy.get(':nth-child(3) > .form-control').click() // click en el boton ingresar
        
        cy.get(':nth-child(2) > .button-transparent').click() //click en las funciones del usuario
        cy.get('[href="/settings/profile"]').click() //click en la configuracion del usuario
        cy.get('[href="/settings/security"]').click() //click para configuracion de seguridad
        cy.get('.change-email > a').click() //click para cambiar de correo electronico
        cy.wait(1000) // Espera de 1 segundo
        cy.get('[type="email"]').type('test@mail.com') //Se escribe el nuevo email
        cy.get('.modal-body > .input-data-container > [type="password"]').type("12345") //Se escribe la contraseña actual
        cy.get('.modal-footer > .mt-3').click() //click en cambiar correo
        cy.wait(5000) //Espera de 5 segundos
        cy.reload() // Recarga la pagina

        /**
         * Se cambia el correo, por el correo original
         */
        cy.get('.change-email > a').click() //click para cambiar de correo electronico
        cy.wait(1000)  // Espera de 1 segundo
        cy.get('input[type="email"]').type('admin@localhost') //Se escribe el nuevo email
        cy.get('.modal-body > .input-data-container > [type="password"]').type("12345") //Se escribe la contraseña actual
        cy.get('.modal-footer > .mt-3').click() //click en cambiar correo
        cy.wait(5000) //Espera de 5 segundos
        cy.reload() // Recarga la pagina
 
    })
  })
