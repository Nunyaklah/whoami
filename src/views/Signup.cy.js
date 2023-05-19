import Signup from './Signup.vue'
import { setActivePinia, createPinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe('<Signup />', () => {
  it('renders', () => {
    cy.mount(Signup)
  })

  it('test submit button', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
  })

  it('test submit button with firstname', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="firstname"]').type('Kwame');
    cy.get('[data-cy="submit"]').click()
  })

  it('test submit button with lastname', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="lastname"]').type('Mills')
    cy.get('[data-cy="submit"]').click()
  })

  it('test submit button with email', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="email"]').type('kwame@mail.com');
    cy.get('[data-cy="submit"]').click()
  })

  it('test submit button with password', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="password"]').type('12345678');
    cy.get('[data-cy="submit"]').click()
  })

  it('test submit button with confirm password', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="confirmPassword"]').type('12345678');
    cy.get('[data-cy="submit"]').click()
  })

  it('test submit button with all fields', () => {
    cy.mount(Signup)
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="firstname"]').type('Kwame');
    cy.get('[data-cy="lastname"]').type('Mills')
    cy.get('[data-cy="email"]').type('kwame@mail.com');
    cy.get('[data-cy="password"]').type('12345678');
    cy.get('[data-cy="confirmPassword"]').type('12345678');
    cy.get('[data-cy="submit"]').click()
  })
})