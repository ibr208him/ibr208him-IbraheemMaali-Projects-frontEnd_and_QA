Feature: Delete Exisitng Card

    The user should be able to delete exisitng card successfully

    Scenario: Verify that user can create a new card successfully

        Given The user navigated to the board
        When The user navigated to an existing card in an existing list
        And The user click on Archive button
        And The user click on Delete button
        And The user confirm the delete
        Then The Card will be deleted successfully from the list
