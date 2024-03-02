Feature: Update List Name

    The user should be able to update List Name successfully

    Scenario Outline: Verify that user can update list name successfully
        
        Given The user navigated to the board
        When The user update the name of default list "<list name>" with index <index>
        Then The list name with index <index> will be updated successfully

    Examples:
    |list name|index|
    |To Do|0|
    |Doing|1|
    |Done|2|
