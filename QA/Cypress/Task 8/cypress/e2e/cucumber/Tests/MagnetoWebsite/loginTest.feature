Feature: Verify the log in functionality
    The user should be able to log in to Magneto website successfully


Scenario: Verify that the user can log in to Magneto website successfully
    Given The user has navigated to Magento website login Page
    When The user enter his email address "maaliibrahim2022@gmail.com"
    And The user enter his password  "Aa12345678"
    And The user clicked on "Sign In" button
    Then The user will be redirected to the Account page
    And The welcome message "Welcome, Ibraheem Maali!" will be displayed on top right corner

    
         