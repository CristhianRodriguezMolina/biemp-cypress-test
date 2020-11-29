describe('Test que realiza el signin, verifica la configuración y hace logout', () => {
    it('Visits biemp site', () => {
        cy.visit('https://biemp.herokuapp.com/course/all-courses');
        cy.get('.nav-item:nth-child(5) > .nav-link').click();
        cy.get('.justify-content-between > .form-control').click();
        cy.get('.justify-content-between > .form-control').type('admin@localhost');
        cy.get('.justify-content-start > .form-control').click();
        cy.get('.justify-content-start > .form-control').type('12345');
        cy.get('.btn-primary').click();
        cy.get('form').submit();
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(9)').click();
        cy.get('.mb-5').click();
        cy.wait(2000) //espera mientras carga el video
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(10)').click();
    })
})
