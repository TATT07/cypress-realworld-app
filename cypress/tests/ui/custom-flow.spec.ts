import { loginPage } from "../../pages/LoginPage";

describe("Flujo personalizado", () => {
  it("Inicia sesión correctamente", () => {
    loginPage.login("Katharina_Bernier", "s3cret");
    cy.url().should("include", "/");
    cy.contains("Katharina").should("exist");
  });
});
