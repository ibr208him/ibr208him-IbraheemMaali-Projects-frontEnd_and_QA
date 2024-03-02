Feature: Add a new Campaign functionality

    The user should be able to add a new Campaign succcessfully

    Scenario:Verify that the user can add a new Campaign succcessfully
        Given The user navigated to nopcommerce website
        And The user logged in
        When The user navigated to Campaigns under promotions menu
        And The user clicked on Add new button
        And The user type "hhh" in the Name input field
        And The user type "vvv" in the Subject input field
        And The user type "hello" in the body input field
        And The user clicked on Save button
        Then The success message "The new campaign has been added successfully." will be displayed on the top of webpage
        And The campaign with name of "hhh" will appear in the campaigns table on the bottom of webpage


