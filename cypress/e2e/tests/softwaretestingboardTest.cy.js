import {HomeMagentoPage} from '../pages/HomePageMagento'
const homeMagentoPage = new HomeMagentoPage();

describe('Should be able to search a remera', () => {
  beforeEach(() => {
    cy.log("🚀🚀🚀🚀 Starting tests");
    cy.openUrl('/');
  });

  it('Find remera in the official page', () => {
    homeMagentoPage.addNewSearch('shirt');
    homeMagentoPage.chooseProduct();
    homeMagentoPage.chooseSize();
    homeMagentoPage.chooseColor();
    homeMagentoPage.clickAddToCartButton();
  });
});
