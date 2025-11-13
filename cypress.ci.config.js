const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Frontend en CI
    env: {
      apiUrl: "http://localhost:3001", // Backend correcto para db:seed
    },
    specPattern: "cypress/tests/ui/**/*.spec.ts",
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    requestTimeout: 8000,
    responseTimeout: 8000,
  },
});
