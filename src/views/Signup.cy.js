import Signup from "./Signup.vue";
import { setActivePinia, createPinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe("<Signup />", () => {
  it("renders", () => {
    cy.mount(Signup);
  });

  it("test submit button", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="firstname-error"]').should(
      "have.text",
      "First Name is required"
    );
    cy.get('[data-cy="lastname-error"]').should(
      "have.text",
      "Last name is required"
    );
    cy.get('[data-cy="email-error"]').should("have.text", "Email is required");
    cy.get('[data-cy="password-error"]').should(
      "have.text",
      "Password must be at least 6 characters"
    );
    cy.get('[data-cy="confirm-password-error"]').should(
      "have.text",
      "Confirm Password is required"
    );
  });

  it("test submit button with firstname", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="firstname-error"]').should(
      "have.text",
      "First Name is required"
    );
    cy.get('[data-cy="firstname"]').type("Kwame");
    cy.get('[data-cy="submit"]').click();
  });

  it("test submit button with lastname", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="lastname-error"]').should(
      "have.text",
      "Last name is required"
    );
    cy.get('[data-cy="lastname"]').type("Mills");
    cy.get('[data-cy="submit"]').click();
  });

  it("test submit button with email", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-error"]').should("have.text", "Email is required");
    cy.get('[data-cy="email"]').type("kwame@mail.com");
    cy.get('[data-cy="submit"]').click();
  });

  it("test for invalid email", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-error"]').should("have.text", "Email is required");
    cy.get('[data-cy="email"]').type("kwame.mail.com");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-error"]').should("have.text", "Email is invalid");
  });

  it("test submit button with password", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="password-error"]').should(
      "have.text",
      "Password must be at least 6 characters"
    );
    cy.get('[data-cy="password"]').type("12345678");
    cy.get('[data-cy="submit"]').click();
  });

  it("test for invalid password match", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="password-error"]').should(
      "have.text",
      "Password must be at least 6 characters"
    );
    cy.get('[data-cy="password"]').type("12345678");
    cy.get('[data-cy="confirmPassword"]').type("12345679334");
    cy.get('[data-cy="confirm-password-error"]').should(
      "have.text",
      "Passwords must match"
    );
  });

  it("test submit button with confirm password", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="confirm-password-error"]').should(
      "have.text",
      "Confirm Password is required"
    );
    cy.get('[data-cy="confirmPassword"]').type("12345678");
    cy.get('[data-cy="submit"]').click();
  });

  it("test submit button with all fields", () => {
    cy.mount(Signup);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="firstname"]').type("Kwame");
    cy.get('[data-cy="lastname"]').type("Mills");
    cy.get('[data-cy="email"]').type("kwame@mail.com");
    cy.get('[data-cy="password"]').type("12345678");
    cy.get('[data-cy="confirmPassword"]').type("12345678");
    cy.get('[data-cy="submit"]').click();
  });
});
