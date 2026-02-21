const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.saucedemo.com/",
    "defaultCommandTimeout":8000,
    "pageLoadTimeout":90000,
    "viewportHeight":900,
    "viewportWidth":1440
  },
});
