const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "d5eq79",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
