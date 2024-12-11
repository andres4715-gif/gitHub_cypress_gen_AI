/// <reference types="cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.log('Practicing cypress features');
  });

  it('Fixture', () => {
    cy.visit('https://www.roboform.com/filling-test-all-fields');
    cy.fixture('example').then(({ title, firstName, lastName, activities, pets, email, body }) => {
      cy.log(title);
      cy.log(firstName);
      cy.log(lastName);
      cy.log(activities);
      cy.log(pets[0].name);
      cy.log(pets[0].age);
      cy.log(email);
      cy.log(body);

      cy.get('[name="01___title"]').type(title);
      cy.get('[name="02frstname"]').type(firstName);
      cy.get('[name="04lastname"]').type(lastName);

      const data = pets.map(x => x.name);
      cy.log('😎😎😎 The pets names are:', data.join(', '));
    });
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
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('#email1').as('email');
    cy.get('@email').type('✅✅✅✅✅', { delay: 700 });
    cy.get('@email').should('have.value', '✅✅✅✅✅');
  });

  it('getting text() using a promise', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('[for="couponCode1"]').then(data => {
      const finalData = data.text();
      expect(finalData).to.equal('Coupon Code');
    });
  });

  it('getting text() using invoke()', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.banner').invoke('text').then(data2 => {
      cy.log(data2);
      expect(data2).to.include('Examples of actions being performed on DOM');
    });
  });

  it('.submit', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-form').as('submit');
    cy.get('@submit').find('[type="text"]').as('finalSubmit');
    cy.get('@finalSubmit').type('Rios ✅');
    cy.get('@finalSubmit').should('have.value', 'Rios ✅');
    cy.get('.action-form').as('submitAction');
    cy.get('@submitAction').submit();
    cy.get('.well > p').should('have.text', 'Your form has been submitted!');
  });

  it('.click() using canvas:', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('#action-canvas').as('canvas').click();
    cy.get('@canvas').click('topLeft');
    cy.get('@canvas').click('top');
  });

  it(' dblclick()', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    const addingData = 'checking double click';
    cy.get('.action-div').dblclick();
    cy.get('.action-input-hidden').clear().type(addingData);
    cy.wait(1000);
    cy.get('.action-input-hidden').should('have.value', addingData);
  });

  it('check()', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-checkboxes [type="checkbox"]').first().check({ force: true });
    cy.get('.action-checkboxes [type="checkbox"]').should('be.checked');
    cy.get('.action-checkboxes [type="checkbox"]').first().uncheck({ force: true });
    cy.get('.action-checkboxes [type="checkbox"]').first().should('not.be.checked');
    cy.get('#optionsRadios1').check({ force: true });
  });

  it('scroll bottom and top', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.scrollTo('bottom');
    cy.wait(1000);
    cy.scrollTo('top');
    cy.wait(1000);
    cy.get('#clear > a').scrollIntoView();
  });

  it('select', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-select').select('bananas');
  });

  it('scrollIntoView()', () => {
    cy.visit('https://example.cypress.io/commands/actions');
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

  it('get label with wrap();', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('[class="topic-block-title"] > h2').then((label) => {
      const finalData = label.text();
      cy.wrap(finalData).as('finalLabel');
      cy.log("🚀🚀🚀", finalData);
      cy.get('.ico-register').click();
      cy.get('@finalLabel').then(label => {
        cy.log("😻😻😻", label);
      });
    });
  });

  it('Get label from any attribute', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('#small-search-box-form ')
      .find('#small-searchterms')
      .invoke('attr', 'placeholder')
      .then((value) => {
        cy.log(value);
      });
  });

  it('click()', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('.ico-login').should('be.visible').click();
    cy.get('.email').type('andres8989@gmail.com');
    cy.get('#Password').type('123ABCD');
    cy.get('form > .buttons > .button-1').should('be.visible').click();
  });

  it('back', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.navbar-nav').contains('Commands').click();
    cy.get('.dropdown-menu').contains('Navigation').click();
    cy.go('back');
    cy.go('forward').contains('Navigation');
    cy.go(-1).contains('Assertions');
  });

  it('Checkbox', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('.ico-login').should('be.visible').click();
    cy.get('#RememberMe').should('be.visible').check({ force: true });
  });

  it('Radio button', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('.ico-register').should('be.visible').click();
    cy.get('#gender-female').should('be.visible').check({ force: true });
  });

  it('reload', () => {
    cy.visit('https://example.cypress.io');
    cy.reload();
  });

  it('press any key', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').as('login').type('Admin');
    cy.get('@login').type('{enter}');
    cy.get('.oxd-input-field-error-message').should('have.text', 'Required');
  });

  it('list', () => {
    let myArray = [];
    let filtering = [];
    cy.visit('https://www.roboform.com/filling-test-all-fields');
    cy.get('#newfootinner > div:nth-child(2) > ul > li').as('elementList').each(element => {
      myArray.push(element.text());
      filtering = myArray.filter(x => x.startsWith('B'));
      console.log(filtering);
    });
    cy.get('@elementList').should('contain.text', 'Pricing');
    cy.get('@elementList').its('length').should('be.gt', 2);
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

describe('session', () => {
  beforeEach(() => {
    cy.session('orangehrm-session', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('admin123');
      cy.get('[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  });

  it('Commands', () => {
    cy.login('Andres', 43, 'Medellin').then(x => {
      cy.log(x);
    });
  });
});
