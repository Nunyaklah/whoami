import Login from './Login.vue'
import { setActivePinia, createPinia } from "pinia";


beforeEach(() => {
  setActivePinia(createPinia());
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('<Login />', () => {
  it('renders', () => {
    cy.mount(Login)
  })

  it('test submit button', () => {
    cy.mount(Login)
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-error"]').should('have.text','Email is required')
    cy.get('[data-cy="password-error"]').should('have.text','Password must be at least 6 characters')
  })

  it('test submit button with email', () => {
    cy.mount(Login)
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-error"]').should('have.text','Email is required')
    cy.get('[data-cy="email-login"]').type('kwame@mail.com');
    cy.get('[data-cy="submit"]').click();
  })

  it('test submit button with password', () => {
    cy.mount(Login)
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="password-error"]').should('have.text','Password must be at least 6 characters')
    cy.get('[data-cy="password-login"]').type('12345678');
    cy.get('[data-cy="submit"]').click();
  })

  it('password should be more than 6 characters', () => {
    cy.mount(Login)
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="password-error"]').should('have.text','Password must be at least 6 characters')
    cy.get('[data-cy="password-login"]').type('1234');
    cy.get('[data-cy="submit"]').click();
  })

  it('test submit button with all fields', () => {
    cy.mount(Login)
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-login"]').type('kwame@mail.com');
    cy.get('[data-cy="password-login"]').type('12345678');
    cy.get('[data-cy="submit"]').click();
  })
})