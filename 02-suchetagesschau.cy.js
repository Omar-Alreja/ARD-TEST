describe('ARD Mediathek Suche - Schritt 2', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    cy.visit('https://www.ardmediathek.de');
    cy.get('a[href="/suche"]').first().click({ force: true });
  });

  it('Gebe „Tagesschau“ in Suchleiste ein und kontrolliere die Ergebnissen', () => {
    cy.get('#SearchInputWidget').type('Tagesschau');

    cy.get('#SearchInputWidget_searchSuggestions').should('be.visible');

    cy.wait(3000);

    cy.contains('Sendungen, Themen, Livestreams').should('be.visible');
    cy.contains('Videos').should('be.visible');
  });
});
