describe('Viewing a wizard\'s backpack', () => {
    it('Opens the wizard\'s backpack', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="navSelect"]')
        .click();

        cy.get('[data-testid="wizardLabel0"]')
        .click();

        cy.get('[data-testid="wizardShow"]')
        .click();

        cy.get('[data-testid="wizardBackpack"]')
        .click();
        cy.contains('Backpack');

        cy.get('[data-testid="backpackHats"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackRobes"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackBoots"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackWands"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackAthames"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackAmulets"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackRings"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackPets"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackMounts"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')

        cy.get('[data-testid="backpackDecks"]')
        .click();
        cy.get('.BackpackTable').should('be.visible')
    });
});