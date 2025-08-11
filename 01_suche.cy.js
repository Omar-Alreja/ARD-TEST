describe('ARD Mediathek Suche - Schritt 1', () => {
  
  it('Navigiere von der Hauptseite zur Suche', () => {
    cy.visit('https://www.ardmediathek.de');
    cy.get('a[href="/suche"]').first().click({ force: true });
    cy.url().should('include', '/suche');
    cy.get('input[type="search"]').should('be.visible');
  });
  
});
