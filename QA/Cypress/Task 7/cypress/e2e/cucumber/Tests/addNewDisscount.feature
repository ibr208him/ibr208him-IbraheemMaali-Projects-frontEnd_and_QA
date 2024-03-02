Feature: Add a new discount functionality

    The user should be able to add a new discount succcessfully

    Scenario:Verify that the user can add a new discount succcessfully
        Given The user navigated to nopcommerce website
        And The user logged in
        When The user navigated to Discounts under promotions menu
        And The user clicked on Add new button
        And The user type the name of "Maali-discount" in the Name input field
        And The user type "50" in the Discount amount input field
        And The user clicked on "Save" button
        Then The success message "The new discount has been added successfully." will be displayed on the top of webpage
        And the discount name "Maali-discount" will appear in the disscounts table on the bottom of webpage
        And The discount amount "50" will appear in the disscounts table on the bottom of webpage

