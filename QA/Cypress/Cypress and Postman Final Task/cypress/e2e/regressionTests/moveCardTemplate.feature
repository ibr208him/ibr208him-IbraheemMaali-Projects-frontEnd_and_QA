Feature: Move card-template to other list

    The user should be able to move card-template to other list successfully

    Scenario: Verify that user can move card-template to other list successfully

        Given The user navigated to the board
         When The user click on quick Template card editor button
         And The user click on move button from the edit menue
         And The user select the list to move the card-template to
         And The user click on move button
         Then The card will be moved to the selected list successfully