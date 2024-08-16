/// <reference types="cypress" />
const csvtojson = require('csvtojson');

it('Get data from a .csv file and convert it to json file', () => {
  cy.readFile('cypress/files/Locations_import_template_1_records.csv', 'utf8').then((csvData) => {
    csvtojson().fromString(csvData).then((data) => {
      const fullData = data;
      console.log(fullData);
      const obtainedCity = data[0].city;

      if(obtainedCity === "Bogotá") {
        console.log("✅");
      } else {
        console.error("🔥");
      }
    });
  });
})