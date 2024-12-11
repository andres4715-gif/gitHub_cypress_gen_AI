import {HomePage} from '../pages/HomePage';
import {ActionPage} from '../pages/ActionPage';

const homePage = new HomePage();
const actionPage = new ActionPage();

describe('Check elements on cypress official page', () => {
  beforeEach(() => {
    cy.log("🚀🚀🚀🚀 Starting tests");
    cy.openUrl('/');
  });

  it('Should verify the Header Text adding new Email', () => {
    homePage.verifyHeaderText('cypress.io');
    homePage.clickGetStartedButton();
    cy.url().should('include', '/commands/actions');
    actionPage.addEmail('Cypress@cypress.com');
  });
});
