import { LoremIpsum } from "lorem-ipsum";


//opciones para generar nombres aleatiorios
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

describe('Profile manage test', () => {

    it('Change password test', () => {
        cy.visit('http://biemp.herokuapp.com/')
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
        cy.get('[placeholder="Escribe la contraseña actual"]').type("12345")
        cy.get('[placeholder="Escribe la nueva contraseña"]').type("12345")
        cy.get('[placeholder="Confirma la nueva contraseña"]').type("12345")
        cy.get('.mb-5').click()
        cy.wait(7000)
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(10)').click();
        cy.wait(1000)
    })

    it('Change email test', () => {
        cy.visit('http://biemp.herokuapp.com/')

        cy.get(':nth-child(5) > .nav-link').click() //boton de ingresar
        cy.get(':nth-child(1) > .box > .form-control')
            .type('admin@localhost') //ingrese el usuario
        cy.get(':nth-child(2) > .box > .form-control')
            .type('12345') // ingrese la contraseña
        cy.get(':nth-child(3) > .form-control').click() // click en el boton ingresar
        cy.get(':nth-child(2) > .button-transparent').click() //click en las funciones del usuario
        cy.get('[href="/settings/profile"]').click() //click en la configuracion del usuario
        cy.get('[href="/settings/security"]').click() //click para configuracion de seguridad
        cy.get('.change-email > a').click()
        cy.wait(1000)
        cy.get('[type="email"]').type('test@mail.com')
        cy.get('.modal-body > .input-data-container > [type="password"]').type("12345")
        cy.get('.modal-footer > .mt-3').click()
        cy.wait(5000)
        cy.reload()
        cy.get('.change-email > a').click()
        cy.wait(1000)
        cy.get('input[type="email"]').type('admin@localhost')
        cy.get('.modal-body > .input-data-container > [type="password"]').type("12345")
        cy.get('.modal-footer > .mt-3').click()
        cy.wait(5000)
        cy.reload()

    })
  })
