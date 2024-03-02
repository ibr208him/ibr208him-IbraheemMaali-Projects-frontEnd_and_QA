Feature: Add a new Affiliate functionality

    The user should be able to add a new Affiliate succcessfully

    Scenario:Verify that the user can add a new Affiliate succcessfully
        Given The user navigated to nopcommerce website
        And The user logged in
        When The user navigated to Affiliates under promotions menu
        And The user clicked on Add new button
        And The user type "xxx" in the First Name input field
        And The user type "yyy" in the Last Name input field
        And The user type "xxxyyy@gmail.com" in the Email input field
        And The user select "Palestine" in the Country select menu
        And The user type "Palestine" in the Country / region input field
        And The user type "www" in the City input field
        And The user type "qqq1" in the "Address1" input field
        And The user type "00970" in the Zip / postal code input field
        And The user type "05955555" in the Phone number input field
        And The user clicked on Save button
        Then The success message "The new affiliate has been added successfully." will be displayed on the top of webpage
        And The Affiliate with first name of "xxx" and last name of "yyy" will appear in the affiliates table on the bottom of webpage


