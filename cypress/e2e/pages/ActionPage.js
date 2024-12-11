import { HomePageLocators } from './locators/homePageLocators';

export class ActionPage {
  addEmail(text) {
    cy.get(HomePageLocators.email).type(`${text}`);
  }
}
