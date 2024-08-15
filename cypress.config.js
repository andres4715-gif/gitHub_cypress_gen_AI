const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },
  env: {
    GEN_AI_API_KEY: process.env.GEN_AI_API_KEY,
  },
});
