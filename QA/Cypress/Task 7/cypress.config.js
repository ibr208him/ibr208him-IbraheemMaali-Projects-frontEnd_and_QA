/// <reference types="Cypress" />
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    
    baseUrl:'https://admin-demo.nopcommerce.com/ ',
    experimentalStudio:true, // you can do the testing steps on cypress window ,then cypress will save it and also write the code in your testing file! but it is for self testing as the selectors used by cypress is not the best ones
    // viewportHeight:550,
    // viewportWidth:660
  },
  
});


