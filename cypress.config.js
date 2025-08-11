const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.ardmediathek.de', // Basis-URL für cy.visit('/')
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}', // Suchmuster für Tests
    supportFile: false, // keine extra Support-Datei für den Anfang
    viewportWidth: 1366, // Bildschirmbreite
    viewportHeight: 768, // Bildschirmhöhe
    setupNodeEvents(on, config) {
      // hier kann man später Plugins oder Event-Listener einbauen
    },
  },
});
