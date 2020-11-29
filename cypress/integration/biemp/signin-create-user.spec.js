describe('My First Test', () => {
    it('Visits biemp site', () => {
        cy.visit('https://biemp.herokuapp.com/'); //Entramos al inicio de la pagina
        cy.get('.nav-item:nth-child(5) > .nav-link').click(); //Se da en el boton ingresar
        cy.get('.justify-content-between > .form-control').click(); //Se da click en el input de email
        cy.get('.justify-content-between > .form-control').type('admin@localhost'); //Se escribe el correo del admin        
        cy.get('.justify-content-start > .form-control').click(); //Se da en click en el input de contraseña
        cy.get('.justify-content-start > .form-control').type('12345'); //Se escribe la contraseña del admin
        cy.get('.btn-primary').click(); //Se da click en el boton de signin
        cy.get('.dropdown-toggle').click(); //Se da click en el boton de usuario
        cy.visit('https://biemp.herokuapp.com/users/manage'); //Se redirige a la pagina de gestion de usuarios (Ya que el boton que redirige a esta sección presenta fallas)
        
        //CREACIÓN DE USUARIO
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click(); 
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Anita'); //Se ingresa el nombre de usuario
        cy.get('form > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.get('form > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Rodriguez'); //Se ingresa el apellido de usuario
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('anita@gmail.com'); //Se ingresa el correo de usuario
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('12345'); //Se ingresa la contraseña de usuario
        cy.get('form > :nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.get('form > :nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('12345'); //Se ingresa la confirmación de contraseña de usuario
        cy.get(':nth-child(6) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click(); //
        cy.get(':nth-child(6) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type("user{downarrow}{enter}"); //Se ingresa el rol de usuario
        cy.get('.btn-lg').click();
        cy.get('form:nth-child(1)').submit(); //Se hace submit al formulario

        cy.get(':nth-child(6) > .justify-content-between > .flex-column > .btn-group-vertical > .btn-danger').click(); //Se da click en el boton borrar de la tarjeta de usuario
        cy.get('.modal-footer > .btn-danger').click(); //Se da en el boton borrar del modal del usuario
        cy.wait(2000)
        cy.reload()

        
    })
})
