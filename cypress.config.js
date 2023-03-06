const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')



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
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 0
    },

      async  setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      


return config;



    },
    
 
  },
});
