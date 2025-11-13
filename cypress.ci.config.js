const { defineConfig } = require("cypress");
const { exec } = require("child_process");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/ui/**/*.spec.ts",

    env: {
      apiUrl: "http://localhost:3001"
    },

    setupNodeEvents(on, config) {
      on("task", {
        "db:seed"() {
          return new Promise((resolve, reject) => {
            exec("yarn db:seed", (err, stdout, stderr) => {
              if (err) {
                console.error("ERROR DB SEED:", stderr);
                return reject(err);
              }
              console.log(stdout);
              resolve(true);
            });
          });
        }
      });

      return config;
    }
  }
});
