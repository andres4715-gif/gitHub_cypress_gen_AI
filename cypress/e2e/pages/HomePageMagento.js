import { HomePageMagentoLocators } from './locators/homePageMagentoLocators';

export class HomeMagentoPage {
  addNewSearch(search) {
    cy.get(HomePageMagentoLocators.searchBox).should('be.visible').type(search);
    cy.get(HomePageMagentoLocators.searchBox).type('{enter}');
  }

  chooseProduct() {
    cy.contains('Balboa').click({force: true});
  }

  chooseSize() {
    cy.get(HomePageMagentoLocators.size).first().click({force: true});
  }

  chooseColor() {
    cy.get(HomePageMagentoLocators.color).first().click({force: true});
  }

  clickAddToCartButton() {
    cy.get(HomePageMagentoLocators.addToCartButton).should('be.visible').click();
  }
}
