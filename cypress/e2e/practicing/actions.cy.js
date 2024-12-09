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
    cy.get('@finalSubmit').type('Rios ✅');
    cy.get('@finalSubmit').should('have.value', 'Rios ✅');
    cy.get('.action-form').as('submitAction');
    cy.get('@submitAction').submit();
    cy.get('.well > p').should('have.text', 'Your form has been submitted!');

    // .click() using canvas:
    cy.get('#action-canvas').as('canvas').click();
    cy.get('@canvas').click('topLeft');
    cy.get('@canvas').click('top');

    // dblclick()
    const addingData = 'checking double click';
    cy.get('.action-div').dblclick();
    cy.get('.action-input-hidden').clear().type(addingData);
    cy.wait(1000);
    cy.get('.action-input-hidden').should('have.value', addingData);

    // check()
    cy.get('.action-checkboxes [type="checkbox"]').first().check({ force: true });
    cy.get('.action-checkboxes [type="checkbox"]').should('be.checked');
    cy.get('.action-checkboxes [type="checkbox"]').first().uncheck({ force: true });
    cy.get('.action-checkboxes [type="checkbox"]').first().should('not.be.checked');
    cy.get('#optionsRadios1').check({ force: true });

    // select()
    cy.get('.action-select').select('bananas');

    // scrollIntoView()
    cy.get('#scroll-horizontal button').as('scrollIntoViewButton').scrollIntoView();
    cy.get('@scrollIntoViewButton').click();

    // invoke()
    cy.visit('https://on.cypress.io/and');
    cy.get('.headerWrapper_tu51').first().invoke('text').then(data => {
      cy.log('🚀🚀🚀🚀🚀', data);
    });
  });
});