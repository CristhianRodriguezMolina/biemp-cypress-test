describe('Bugs found', () => {

    it('bug al entrar en la opcion de gestionar usuarios', () => {
        cy.visit('http://biemp.herokuapp.com/')
        //LOGIN
        cy.get(':nth-child(5) > .nav-link').click() //boton de ingresar
        cy.get(':nth-child(1) > .box > .form-control')
            .type('admin@localhost') //ingrese el usuario
        cy.get(':nth-child(2) > .box > .form-control')
            .type('12345') // ingrese la contraseña
        cy.get(':nth-child(3) > .form-control').click() // click en el boton ingresar

        cy.get(':nth-child(2) > .button-transparent').click() //click en las funciones del usuario
        cy.get('[href="/users/manage"]').click()
        cy.get('form:nth-child(1)').submit(); //click en el boton de crear dentro de gestionar usuarios
    })

    it('Slider del incio no funciona correctamente', () => {
        cy.visit('http://biemp.herokuapp.com/')
        cy.get('.css-18jevlw').click() //click en la flecha derecha del slider
        cy.wait(500)
        cy.get('.css-18jevlw').click() //click en la flecha derecha del slider
        cy.wait(500)
        cy.get('.css-18jevlw').click() //click en la flecha derecha del slider  
        cy.wait(500)
        cy.get('.css-18jevlw').click() //click en la flecha derecha del slider
        cy.wait(500)
    })

    it('No se cargan las imagenes en la página de cursos', () => {
        cy.visit('http://biemp.herokuapp.com/')
        //LOGIN
        cy.get(':nth-child(5) > .nav-link').click() //boton de ingresar
        cy.get(':nth-child(1) > .box > .form-control')
            .type('admin@localhost') //ingrese el usuario
        cy.get(':nth-child(2) > .box > .form-control')
            .type('12345') // ingrese la contraseña
        cy.get(':nth-child(3) > .form-control').click() // click en el boton ingresar

        cy.get('.unstyled-a > .btn').click() //click en ver mas cursos en la página principal
        cy.get('.courses-container > .btn').click() //click en cargar mas cursos en la página de cursos
        cy.wait(2000)
        cy.scrollTo(0, 500) //baja 500 pixeles
    })

    it('Cambio de correo por un ya existente', () => {
        cy.visit('http://biemp.herokuapp.com/')
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
        cy.get('[type="email"]').type('poper@gmail.com') //Se escribe el nuevo email
        cy.get('.modal-body > .input-data-container > [type="password"]').type("12345") //Se escribe la contraseña actual
        cy.get('.modal-footer > .mt-3').click() //click en cambiar correo
        cy.wait(5000) //Espera de 5 segundos
        cy.reload() // Recarga la pagina

    })

    
  })
