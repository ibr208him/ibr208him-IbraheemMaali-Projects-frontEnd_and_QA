/// <reference types="Cypress" />
const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
  specPattern: "**/*.feature",
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },
   baseUrl:'https://trello.com',
      experimentalStudio:true,
      experimentalSessionAndOrigin: true,
    //  experimentalRunAllSpecs	:true,
      
 },
 screenshotsFolder:'cypress/myScreenshots',
 video:true,
});
