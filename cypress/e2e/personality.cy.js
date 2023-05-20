describe('template spec', () => {
  
  it('passes', () => {
    
    cy.visit('http://localhost:5173/')
  })


  it('end to end test', function() {
    cy.viewport(1280,800)
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="modal-btn"').click()
    cy.get('[data-cy="cancel-modal-btn"').click()
    cy.get('[data-cy="start-btn"').click()
    cy.get('[data-cy="cancel-btn"').click()
    cy.get('[data-cy="start-btn"').click()
    cy.get('[data-cy="login-modal-btn"').click()
    // cy.get('[data-cy="signup"]').click();
    // cy.get('[data-cy="firstname"]').type('Kwame');
    // cy.get('[data-cy="lastname"]').type('Mills');
    // cy.get('[data-cy="email"]').type('kwame@mail.com');
    // cy.get('[data-cy="password"]').type('12345678');
    // cy.get('[data-cy="confirmPassword"]').type('12345678');
    // cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="email-login"]').type('kwame@mail.com');
    cy.get('[data-cy="password-login"]').type('12345678');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="start-btn"]').click();
    cy.get(':nth-child(2) > [data-cy="answer-select"] > .font-medium').click();
    cy.get('[data-cy="next-btn"]').click();
    cy.get(':nth-child(3) > [data-cy="answer-select"] > .font-medium').click();
    cy.get('[data-cy="next-btn"]').click();
    cy.get(':nth-child(3) > [data-cy="answer-select"] > .font-medium').click();
    cy.get('[data-cy="next-btn"]').click();
    cy.get('.pt-10 > :nth-child(2)').click();
    cy.get('[data-cy="next-btn"]').click();
    cy.get(':nth-child(2) > [data-cy="answer-select"] > .font-medium').click();
    cy.get('[data-cy="submit-btn"]').click();
    cy.get('[data-cy="home-btn"]').click();
    cy.get('.md\\:order-2 > .text-white').click();

  });
})