describe('Page use test', () => {

    it('visiting all pages', () => {
        cy.get('.nav-item:nth-child(5) > .nav-link').click();
        cy.get('.justify-content-between > .form-control').click();
        cy.get('.justify-content-between > .form-control').type('admin@localhost');
        cy.get('.justify-content-start > .form-control').click();
        cy.get('.justify-content-start > .form-control').type('12345');
        cy.get('.btn-primary').click();
        cy.get('form').submit();
        cy.wait(2000)
        cy.get('.button-transparent .MuiSvgIcon-root').click();
        cy.get('.dropdown-item:nth-child(7)').click();
        cy.wait(2000)
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(9)').click();        
        cy.get('.list-group-item:nth-child(2)').click();
        cy.get('.list-group-item:nth-child(1)').click();
        cy.wait(2000)
        cy.visit('https://biemp.herokuapp.com/users/manage'); //Se redirige a la pagina de gestion de usuarios (Ya que el boton que redirige a esta sección presenta fallas)
        cy.get('.list-group-item:nth-child(2) .btn-primary').click();
        cy.get('#userDetail .btn-primary').click();
        cy.wait(1000)
        cy.get('#editUser > .modal-dialog > .modal-content > .modal-footer > .btn-dark').click();
        cy.wait(1000)
        cy.get('#userDetail > .modal-dialog > .modal-content > .modal-footer > .btn-dark').click()
        cy.get('.active').click();
        cy.get('.btn-block').click();
        cy.url().should('contains', 'https://biemp.herokuapp.com/courses');
        cy.wait(1000)
        cy.get('.btn-block').click();
        cy.get('.button-transparent .MuiSvgIcon-root').click();
        cy.get('.dropdown-item:nth-child(10)').click();
    })
})