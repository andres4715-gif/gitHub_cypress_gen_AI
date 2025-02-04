import { magnetoHomePageLocators } from './locators/magentoHomePageLocators';

export class MagnetoHomePage {
  addNewSearch(search) {
    cy.get(magnetoHomePageLocators.searchBox).should('be.visible').type(search);
    cy.get(magnetoHomePageLocators.searchBox).type('{enter}');
  }

  chooseProduct() {
    cy.contains('Balboa').click({force: true});
  }

  chooseSize() {
    cy.get(magnetoHomePageLocators.size).first().click({force: true});
  }

  chooseColor() {
    cy.get(magnetoHomePageLocators.color).first().click({force: true});
  }

  clickAddToCartButton() {
    cy.get(magnetoHomePageLocators.addToCartButton).should('be.visible').click();
  }
}
