Cypress.Commands.add('login', (name, age, city) => {
  const data = {
    name: name,
    age: age,
    city: city
  };
  return `The name is: ${data.name} with ${data.age} and ${data.city}`;
});

Cypress.Commands.add('openUrl', (_url) => {
  cy.visit(_url);
});