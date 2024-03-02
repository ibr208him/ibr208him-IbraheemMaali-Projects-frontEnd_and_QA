Feature: Create New card

    The user should be able to create a new card successfully
@focus 
    Scenario: Verify that user can create a new card successfully
        
        Given The user navigated to the board
        When The user click on Add a card button
        And Type the title  in the card text field
        And Click on Add card button
        Then The card will be added to the card list
