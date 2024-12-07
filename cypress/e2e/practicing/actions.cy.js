/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });
  it('.type() - type into a DOM element', () => {
    const email = 'andres798@gmail.com';
    const validEmail = 'andres4715@gmail.com';

    // typing
    cy.get('#email1').type(email);
    cy.get('#email1').should('have.value', email);
    cy.get('#email1').type('{selectall}{backspace}');
    cy.get('#email1').type(validEmail, { delay: 50 });
    cy.get('#email1').clear();
    cy.get('#email1').should('have.value', '');

    // .as()
    cy.get('#email1').as('email');
    cy.get('@email').type('✅✅✅✅✅');
    cy.get('@email').should('have.value', '✅✅✅✅✅');

    // getting text() using a promise
    cy.get('[for="couponCode1"]').then(data => {
      const finalData = data.text();
      expect(finalData).to.equal('Coupon Code');
    });

    // getting text() using invoke();
    cy.get('.banner').invoke('text').then(data2 => {
      cy.log(data2);
      expect(data2).to.include('Examples of actions being performed on DOM');
    });

    // .submit()
    cy.get('.action-form').as('submit');
    cy.get('@submit').find('[type="text"]').as('finalSubmit');
    cy.get('@finalSubmit').type('Rios ✅')
    cy.get('@finalSubmit').should('have.value', 'Rios ✅');
    cy.get('.action-form').as('submitAction');
    cy.get('@submitAction').submit();
    cy.get('.well > p').should('have.text', 'Your form has been submitted!')
  });
});