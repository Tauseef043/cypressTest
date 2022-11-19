const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fe4n49',
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    reporter: 'mochawesome',


    //declaring custom global enviroment variable
    "env":
    {
      URL:"https://rahulshettyacademy.com/angularpractice",

    },


    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
