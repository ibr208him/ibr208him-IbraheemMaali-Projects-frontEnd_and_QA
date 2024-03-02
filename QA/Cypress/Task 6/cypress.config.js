/// <reference types="Cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://admin-demo.nopcommerce.com/ ',
    experimentalStudio:true, // you can do the testing steps on cypress window ,then cypress will save it and also write the code in your testing file! but it is for self testing as the selectors used by cypress is not the best ones
    // viewportHeight:550,
    // viewportWidth:660
  },
  
});


