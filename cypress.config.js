const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 6000,
  responseTimeout: 30000,

  e2e: {
    baseUrl: "https://dev04/main/tetrapak",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
