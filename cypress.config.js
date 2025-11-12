module.exports = {
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      apiUrl: "http://localhost:3003"
    }
  }
}
// @ts-nocheck

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      apiUrl: "http://localhost:3000", 
    },
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/tests/**/*.spec.{js,ts}",
  },
  retries: {
    runMode: 2,
  },
});
