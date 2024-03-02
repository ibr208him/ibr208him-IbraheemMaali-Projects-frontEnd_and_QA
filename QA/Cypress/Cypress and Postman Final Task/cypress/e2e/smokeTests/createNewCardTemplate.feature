Feature: Create New card Template

    The user should be able to create a new card template successfully

    Scenario: Verify that user can create a new card template successfully
        
        Given The user navigated to the board
        When The user click on template card icon
        And The user click on create a new template button
        And The user type a name for the new template
        And The user click on Add button
        Then The template will be created successfully
