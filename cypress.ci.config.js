// cypress.ci.config.js
import { defineConfig } from "cypress";
import axios from "axios";
import Promise from "bluebird";
import _ from "lodash";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/ui/**/*.spec.ts",

    env: {
      apiUrl: "http://localhost:3001", // <--- ESTA LÍNEA ES LA CLAVE
    },

    setupNodeEvents(on, config) {
      const testDataApiEndpoint = `${config.env.apiUrl}/testData`;

      const queryDatabase = ({ entity, query }, callback) => {
        const fetchData = async (attrs) => {
          const { data } = await axios.get(`${testDataApiEndpoint}/${entity}`);
          return callback(data, attrs);
        };

        return Array.isArray(query)
          ? Promise.map(query, fetchData)
          : fetchData(query);
      };

      on("task", {
        async "db:seed"() {
          const { data } = await axios.post(`${testDataApiEndpoint}/seed`);
          return data;
        },
        "filter:database"(queryPayload) {
          return queryDatabase(queryPayload, (data, attrs) =>
            _.filter(data.results, attrs)
          );
        },
        "find:database"(queryPayload) {
          return queryDatabase(queryPayload, (data, attrs) =>
            _.find(data.results, attrs)
          );
        },
      });

      return config;
    },
  },
});
