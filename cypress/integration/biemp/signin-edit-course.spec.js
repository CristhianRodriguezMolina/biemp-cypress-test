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

describe('Course manage', () => {
    it('creacion, modificacion y eliminacion de un curso', () => {
        cy.get(':nth-child(5) > .nav-link').click() //boton de ingresar
        cy.get(':nth-child(1) > .box > .form-control')
            .type('admin@localhost') //ingrese el usuario
        cy.get(':nth-child(2) > .box > .form-control')
            .type('12345') // ingrese la contraseña
        cy.get(':nth-child(3) > .form-control').click() // click en el boton ingresar
        cy.get(':nth-child(2) > .button-transparent').click() //click en las funciones del usuario
        cy.get('[href="/course/all-courses"]').click() //click en la configuracion de un curso
        cy.get('.justify-content-end > .btn').click() //click en el boton de crear curso
        cy.get('.d-flex > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(`0${lorem.generateWords(5)}`) //coloca un nombre aleatorio al curso colocando un cero al principio para asegurar que sea el primero de la lista
        cy.get('[rows="1"]').type("esto es un curso") //coloca la descricion del curso
        cy.get('[placeholder="Categorias"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root')
            .type("Prototipos{downarrow}{enter}") //coloca categorias de tipo prototipos
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root')
            .type("Principiante{downarrow}{enter}") //Coloca de nivel principiante
        cy.get('.btn-primary').click() //click en crear curso
        cy.wait(2000) //espera mientras crea
        cy.reload() //recarga la pagina
        cy.get('.course-card:nth-child(3) .btn-outline-primary').click();
        cy.get('.btn-primary').click();
        cy.get('.mr-sm-2').click();
        cy.get('.mr-sm-2').type('https://www.youtube.com/watch?v=Dsgegf15ccA&ab_channel=BasaratAli'); //Coloca la direccion del video
        cy.get('.btn-primary').click();        
        cy.get('.MuiFab-label > .MuiSvgIcon-root').click();
        cy.wait(2000) //espera mientras carga el video
        cy.get('.button-transparent > .MuiAvatar-root').click();
        cy.get('.dropdown-item:nth-child(7)').click();
        cy.get('.course-card:nth-child(3) .btn-outline-danger').click();
        cy.get('.modal-footer > .btn-danger').click(); //Se da en el boton borrar del modal del curso   

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(10)').click();
        cy.wait(1000)

    })
})