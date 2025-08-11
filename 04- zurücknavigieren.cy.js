describe('ARD Mediathek Suche - Tagesschau Link Test', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://www.ardmediathek.de');
    cy.get('a[href="/suche"]').first().click({ force: true });
  });

  it('Suche Tagesschau, wähle Vorschlag aus und prüfe exakte URL', () => {
    cy.get('#SearchInputWidget').type('Tagesschau') 
    cy.get('#SearchInputWidget_searchSuggestions').should('be.visible');
    cy.wait(3000);

  

     cy.get('ul[role="listbox"] [role="option"] span').each(($el) => {
      if ($el.text().trim().toLowerCase() === 'tagesschau') {
        cy.wrap($el).click();
        return false; 
      }
          });


   cy.get('img[title="Sendungsbild der tagesschau・Bild: ARD-aktuell"]', { timeout: 10000 })
  .should('be.visible')
  .first()          
  .click();
   

    const expectedUrl= 'https://www.ardmediathek.de/sendung/tagesschau/Y3JpZDovL2Rhc2Vyc3RlLmRlL3RhZ2Vzc2NoYXU';
    cy.url().should('eq', expectedUrl);

    cy.get('img[title="Sendungsbild der tagesschau・Bild: ARD-aktuell"]').should('be.visible');

    cy.get('h1, h2').contains(/tagesschau/i).should('be.visible');

   cy.contains('h2', 'Alle Videos') 
  .parent()                     
  .within(() => {               
    cy.get('div[itemprop="itemListElement"]') 
      .should('have.length.gte', 1);          
  });

  cy.go('back');

cy.get('#SearchInputWidget')
  .invoke('val')
  .then(value => {
    expect(value.trim()).to.eq('tagesschau');
  });

  
 
  });

});
 