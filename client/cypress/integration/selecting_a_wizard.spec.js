describe('Selecting a wizard', () => {
    it('Opens the wizard\'s stats', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="navSelect"]')
        .click();

        cy.get('[data-testid="wizardLabel0"]')
        .click();

        cy.get('[data-testid="wizardShow"]')
        .click();

        cy.contains('Level');
    });
});