const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 6000,
  responseTimeout: 30000,

  e2e: {
    baseUrl: "https://dev04/main/tetrapak",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      return config;
    },
  },
});
