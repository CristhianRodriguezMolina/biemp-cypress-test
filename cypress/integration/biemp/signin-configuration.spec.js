describe('My First Test', () => {
    it('Visits biemp site', () => {
        cy.visit('https://biemp.herokuapp.com/');
        cy.get(':nth-child(5) > .nav-link').click()
        cy.get('.background-overlay').click();
        cy.get('.justify-content-between > .form-control').click();
        cy.get('.justify-content-between > .form-control').type('admin@localhost');
        cy.get('.justify-content-start > .form-control').click();
        cy.get('.justify-content-start > .form-control').type('12345');
        cy.get('.btn-primary').click();
        cy.get('form').submit();
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(9)').click();
        cy.get('.input-data-container:nth-child(3) > input').click();
        cy.get('.mb-5').click();
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-item:nth-child(10)').click();
    })
})
