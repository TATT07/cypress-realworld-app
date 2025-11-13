import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/tests/ui/**/*.spec.ts",
    baseUrl: "http://localhost:3000",
    video: false
  }
});
