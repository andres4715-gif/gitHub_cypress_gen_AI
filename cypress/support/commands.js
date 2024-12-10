Cypress.Commands.add('login', (name, age, city) => {
  const data = {
    name: name,
    age: age,
    city: city
  };
  return `El nombre es: ${data.name} y tiene ${data.age} vive en ${data.city}`;
});