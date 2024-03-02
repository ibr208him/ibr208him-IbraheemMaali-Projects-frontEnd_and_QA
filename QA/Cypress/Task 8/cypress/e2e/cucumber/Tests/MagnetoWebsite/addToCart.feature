Feature: Add product to cart functionality

    The user should be able to add products to cart

    @focus
    Scenario Outline: verify that the user can add products to cart successfully
        Given The user has navigated to Magento website
        And The user searched for "shirt" product
        When The user choose the product X
        And The user choose the size "<sizeData>" and color "<colorData>" for product X
        And The user Clicked on "Add to Cart" buuton
        Then The Product should be added to the cart successfully with message "You added Radiant Tee to your"
        And The counter of the cart should be visible

        Examples:
            | sizeData | colorData |
            | XS       | Blue      |
            | S        | Orange    |
            | M        | Purple    |
