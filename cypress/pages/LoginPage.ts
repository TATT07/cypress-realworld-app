export class LoginPage {
  visit() {
    cy.visit("/signin");
  }

  fillUsername(username: any) {
    cy.get('[data-test="signin-username"]').type(username);
  }

  fillPassword(password: any) {
    cy.get('[data-test="signin-password"]').type(password);
  }

  submit() {
    cy.get('[data-test="signin-submit"]').click();
  }

  login(username: any, password: any) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export const loginPage = new LoginPage();
