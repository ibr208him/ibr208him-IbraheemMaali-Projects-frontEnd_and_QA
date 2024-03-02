///<reference types="cypress"/>

it("task",()=>{

  
    cy.visit("/checkout/#shipping");

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-167').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click();
    cy.wait(5000);
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.wait(9000);
    /* ==== End Cypress Studio ==== */
   //  start writing your code from here
    
    cy.get('#customer-email-fieldset #customer-email'); // using the Id selector to select the email address input field
    cy.get('#customer-email-fieldset #tooltip');// using the Id selector to select the info ('?') button near email address input field
    cy.get('#shipping-new-address-form [name="firstname"]'); // using the Id selector and attribute name &value to select the first name input field
    cy.get('#shipping-new-address-form [name="lastname"]'); // using the Id selector and attribute name &value to select the last name input field
    cy.get('#shipping-new-address-form [name="company"]'); // using the Id selector and attribute name &value to select the company input field
    cy.get('.street.admin__control-fields [name="shippingAddress.street.0"]');// using the class name and attribute name &value to select the 1st input field of street address
    cy.get('.street.admin__control-fields [name="shippingAddress.street.1"]');// using the class name and attribute name &value to select the 2nd input field of street address
    cy.get('.street.admin__control-fields [name="shippingAddress.street.2"]');// using the class name and attribute name &value to select the 3rd input field of street address
    cy.get('#shipping-new-address-form [name="city"]'); // using the Id selector and attribute name &value to select the city input field
    cy.get('#shipping-new-address-form [name="region_id"]'); // using the Id selector and attribute name &value to select the state/province input field
    cy.get('#shipping-new-address-form [name="postcode"]'); // using the Id selector and attribute name &value to select the ZIP/Postal code input field
    cy.get('#shipping-new-address-form [name="country_id"]'); // using the Id selector and attribute name &value to select the country input field
    cy.get('#shipping-new-address-form [name="telephone"]'); // using the Id selector and attribute name &value to select the Phone Number input field
    cy.get('#shipping-new-address-form #tooltip'); // using the Id selector to select the select the info ('?') button near the Phone Number input field
    cy.get('.table-checkout-shipping-method [name="ko_unique_1"]'); // using the class name and attribute name &value to select the 1st Shipping Methods
    cy.get('.table-checkout-shipping-method [name="ko_unique_2"]');// using the class name and attribute name &value to select the end Shipping Methods
    cy.get('#shipping-method-buttons-container .button'); //using the class name to select the Next button at the bottom page
    cy.get('.authentication-wrapper .action-auth-toggle');//using the class name to select the Sign In button at the top right corner of the page
    cy.get('.opc-block-summary .items-in-cart .title'); // using the class sname to select the Order summery-item1
    cy.get('[class="product options"] .toggle span');// using the class sname to select the details of Order summery-item1

})

