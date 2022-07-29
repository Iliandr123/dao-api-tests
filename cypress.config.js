const { defineConfig } = require("cypress");

module.exports = defineConfig({

  baseUrl: 'http://localhost:3000',
  video: false,
  screenshotOnRunFailure: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },

  screenshotsFolder: 'cypress/fixtures/screenshots',

  // viewportWidth: 1920,
  // viewportHeight: 1080,
  projectId: "shr3v9",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
