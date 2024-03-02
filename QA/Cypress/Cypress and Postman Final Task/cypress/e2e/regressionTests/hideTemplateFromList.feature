Feature: Hide card-template from list

    The user should be able to hide card-template from list successfully

    Scenario: Verify that user can hide card-template from list successfully

        Given The user navigated to the board
         When The user click on quick Template card editor button for a card-template in a list
         And The user click on hide from list button from the edit menue
         Then The card-template will be hided successfully from the list