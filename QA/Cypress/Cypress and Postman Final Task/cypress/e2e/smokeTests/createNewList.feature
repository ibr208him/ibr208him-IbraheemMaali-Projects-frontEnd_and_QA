Feature: Create New list

    The user should be able to create a new list successfully

    Scenario: Verify that user can create a new list successfully
        
        Given The user navigated to the board
        When The user click on Add another list button
        And Type the title in the list text field
        And Click on Add list button
        Then The list will be created successfully
