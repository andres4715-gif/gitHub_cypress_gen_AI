import { HomePageLocators } from './locators/homePageLocators';

export class HomePage {
  verifyHeaderText(expectedText) {
    cy.get(HomePageLocators.header).should('have.text', expectedText);
  }

  clickGetStartedButton() {
    cy.get(HomePageLocators.getStartedButton).first().click();
  }

  addEmail(text) {
    cy.get(HomePageLocators.email).type(`${text}`);
  }
}
