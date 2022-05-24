describe('Selecting a wizard', () => {
    it('Opens the wizard\'s advanced stats', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="navSelect"]')
        .click();

        cy.get('[data-testid="wizardLabel0"]')
        .click();

        cy.get('[data-testid="wizardShow"]')
        .click();

        cy.get('[data-testid="statPagerAdvanced"]')
        .click();

        cy.contains('Level');
        cy.contains('Critical');
        cy.contains('Block');
        cy.contains('Armor');
        cy.contains('Stun');
        cy.contains('Healing');


        cy.get('[data-testid="statAdvanced2"]')
        .click();

        cy.contains('Conversion');
        cy.contains('Power');
        cy.contains('Shadow');


        cy.get('[data-testid="statAdvanced1"]')
        .click();

        cy.contains('Level');
        cy.contains('Critical');
        cy.contains('Block');
        cy.contains('Armor');
        cy.contains('Stun');
        cy.contains('Healing');
    });
});