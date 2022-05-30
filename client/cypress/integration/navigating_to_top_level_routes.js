describe('Navigating to top-level routes', () => {
    it('Shows the home page by default', () => {
        cy.visit('http://localhost:3000');

        cy.contains('Welcome');
    });

    it('Shows the home page when explicitly requested', () => {
        cy.visit('http://localhost:3000/home');

        cy.contains('Welcome');
    });

    it('Shows the wizard select', () => {
        cy.visit('http://localhost:3000/select');

        cy.contains('Show');
        cy.contains('Edit');
    });

    it('Shows a no route page', () => {
        cy.visit('http://localhost:3000/foo/bar');

        cy.contains('Page not Found');
    });
});