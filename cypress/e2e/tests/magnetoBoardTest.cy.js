import {MagnetoHomePage} from '../pages/MagnetoHomePage'
const magnetoHomePage = new MagnetoHomePage();

describe('Should be able to search a remera', () => {
  beforeEach(() => {
    cy.log("🚀 Starting tests");
    cy.openUrl('https://magento.softwaretestingboard.com');
  });

  it('Find remera in the official page', () => {
    magnetoHomePage.addNewSearch('shirt');
    magnetoHomePage.chooseProduct();
    magnetoHomePage.chooseSize();
    magnetoHomePage.chooseColor();
    magnetoHomePage.clickAddToCartButton();
  });
});
