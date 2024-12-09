/// <reference types="cypress" />

describe.skip('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('typing', () => {
    const email = 'andres798@gmail.com';
    const validEmail = 'andres4715@gmail.com';
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('#email1').type(email);
    cy.get('#email1').should('have.value', email);
    cy.get('#email1').type('{selectall}{backspace}');
    cy.get('#email1').type(validEmail, { delay: 50 });
    cy.get('#email1').clear();
    cy.get('#email1').should('have.value', '');
  });

  it('.as', () => {
    cy.get('#email1').as('email');
    cy.get('@email').type('✅✅✅✅✅');
    cy.get('@email').should('have.value', '✅✅✅✅✅');
  });

  it('getting text() using a promise', () => {
    cy.get('[for="couponCode1"]').then(data => {
      const finalData = data.text();
      expect(finalData).to.equal('Coupon Code');
    });
  });

  it('getting text() using invoke()', () => {
    cy.get('.banner').invoke('text').then(data2 => {
      cy.log(data2);
      expect(data2).to.include('Examples of actions being performed on DOM');
    });
  });

  it('.submit', () => {
    cy.get('.action-form').as('submit');
    cy.get('@submit').find('[type="text"]').as('finalSubmit');
    cy.get('@finalSubmit').type('Rios ✅');
    cy.get('@finalSubmit').should('have.value', 'Rios ✅');
    cy.get('.action-form').as('submitAction');
    cy.get('@submitAction').submit();
    cy.get('.well > p').should('have.text', 'Your form has been submitted!');
  });

  it('.click() using canvas:', () => {
    cy.get('#action-canvas').as('canvas').click();
    cy.get('@canvas').click('topLeft');
    cy.get('@canvas').click('top');
  });

  it(' dblclick()', () => {
    const addingData = 'checking double click';
    cy.get('.action-div').dblclick();
    cy.get('.action-input-hidden').clear().type(addingData);
    cy.wait(1000);
    cy.get('.action-input-hidden').should('have.value', addingData);
  });

  it('check()', () => {
    cy.get('.action-checkboxes [type="checkbox"]').first().check({ force: true });
    cy.get('.action-checkboxes [type="checkbox"]').should('be.checked');
    cy.get('.action-checkboxes [type="checkbox"]').first().uncheck({ force: true });
    cy.get('.action-checkboxes [type="checkbox"]').first().should('not.be.checked');
    cy.get('#optionsRadios1').check({ force: true });
  });

  it('select', () => {
    cy.get('.action-select').select('bananas');
  });

  it('scrollIntoView()', () => {
    cy.get('#scroll-horizontal button').as('scrollIntoViewButton').scrollIntoView();
    cy.get('@scrollIntoViewButton').click();
  });

  it('invoke()', () => {
    cy.visit('https://on.cypress.io/and');
    cy.get('.headerWrapper_tu51').first().invoke('text').then(data => {
      cy.log('🚀🚀🚀🚀🚀', data);
    });
  });

  it('invoke_2', () => {
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.get('.connectors-div').should('be.hidden')
      .invoke('show')
      .should('be.visible');
    cy.get('.col-xs-5 .well .connectors-div').invoke('text').then(item => {
      cy.log('--- Obtained text', item);
    });
  });

  it('invoke_3', () => {
    cy.origin('https://opensource-demo.orangehrmlive.com', () => {
      cy.visit('/web/index.php/auth/login'); // La ruta después del dominio
      cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5')
        .invoke('text')
        .then((data) => {
          cy.log(data);
        });
    });
  });

  it('Connectors', () => {
    cy.visit('https://example.cypress.io/commands/connectors');
    let myData = [];
    cy.get('.connectors-each-ul>li')
      .each(function ($el, index, $list) {
        const data = $el[0].innerText;
        myData.push(data);

        const newData = myData.filter(x => x.startsWith('L'));
        console.log(newData);
        if (newData.length > 0) {
          console.log("✈️");
        }
      });
  });

  it('Connectors 2', () => {
    cy.visit('https://example.cypress.io/commands/connectors');
    let myArray = [];
    cy.get('.connectors-each-ul>li').each(element => {
      const newData = element[0].innerText;
      myArray.push(newData);
      console.log("Array of names:", myArray);
    });
  });

  it('its()', () => {
    let myArray = [];
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.get('.connectors-its-ul > li').its('length').should('be.gt', 2);
  });

  it('get cookie', () => {
    cy.visit('https://example.cypress.io/commands/cookies');
    cy.get('#getCookie .set-a-cookie').click();
    cy.getCookie('token').then((cookie) => {
      const cookie2 = cookie.value;
      cy.log(cookie2);
    });
  });

  it('get cookies', () => {
    cy.visit('https://example.cypress.io/commands/cookies');
    cy.get('#getCookie .set-a-cookie').click();
    cy.getCookies().should('have.length', 1);
  });

  it('Get url', () => {
    cy.url().then((url) => {
      cy.log('--- 😎 The current URL is: ', `${url}`);
    });
  });

  it('back', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.navbar-nav').contains('Commands').click();
    cy.get('.dropdown-menu').contains('Navigation').click();
    cy.go('back');
    cy.go('forward').contains('Navigation');
    cy.go(-1).contains('Assertions');
  });

  it('reload', () => {
    cy.visit('https://example.cypress.io');
    cy.reload();
  });
});

describe('Traversal', () => {
  it('Traversal element in the DOM - .children()', () => {
    cy.visit('https://example.cypress.io/commands/traversal#');
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Data').click();
  });

  it('Traversal element in the DOM - .closest()', () => {
    cy.visit('https://example.cypress.io/commands/traversal#');
    cy.get('.traversal-badge')
      .closest('ul')
      .should('have.class', 'list-group');
  });

  it('Traversal element in the DOM - eq()', () => {
    cy.visit('https://example.cypress.io/commands/traversal#');
    cy.get('.traversal-list>li').eq(3).should('have.text', 'sphynx');
    });
});