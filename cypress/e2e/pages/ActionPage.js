import { ActionsLocators } from './locators/actionsLocator';

export class ActionPage {
  addEmail(text) {
    cy.get(ActionsLocators.email).type(`${text}`);
  }
}
