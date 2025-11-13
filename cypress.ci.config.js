const { defineConfig } = require("cypress");
const axios = require("axios");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",

    env: {
      apiUrl: "http://localhost:3001",
    },

    specPattern: "cypress/tests/ui/**/*.spec.ts",

    setupNodeEvents(on, config) {
      on("task", {
        async "db:seed"() {
          try {
            await axios.post(`${config.env.apiUrl}/testData/seed`);
            return true;
          } catch (error) {
            console.error("❌ ERROR en db:seed:", error);
            throw error;
          }
        },
      });

      return config;
    },
  },
});
