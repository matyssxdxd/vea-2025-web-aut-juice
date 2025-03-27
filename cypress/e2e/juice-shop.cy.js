import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetACustomerButton.click();
      // Find - how to generate random number in JS
      const rndInt = Math.floor(Math.random() * 9999) + 1000
      let email = "email_" + rndInt + "@inbox.lv"
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      LoginPage.emailControl.type(email);
      // Fill in password field and repeat password field with same password
      LoginPage.passwordControl.type("Danis12345!");
      LoginPage.repeatPasswordControl.type("Danis12345!");
      // Click on Security Question menu
      LoginPage.securityQuestion.click();
      // Select  "Name of your favorite pet?"
      LoginPage.favoritePet.click();
      // Fill in answer
      LoginPage.securityAnswerControl.type("rudolfs");
      // Click Register button
      LoginPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email)
      // Set password value to previously used password value
      LoginPage.passwordField.type("Danis12345!")
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click()
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search 500ml and validate Lemon", () => {
      // Create scenario - Search 500ml and validate Lemon, while having multiple cards
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for 500ml
      HomePage.searchBox.type("500ml").type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.matCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogContainer.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate cards", () => {
      // Create scenario - Search 500ml and validate cards
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for 500ml
      HomePage.searchBox.type("500ml").type("{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.matCard.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.matDialogContainer.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.productCloseButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.matCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogContainer.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.productCloseButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.matCard.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.matDialogContainer.should("contain.text", "Sweet & tasty!");
    });

    it("Read a review", () => {
      // Create scenario - Read a review
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for King
      HomePage.searchBox.type("King").type("{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.matCard.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviews.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewPanel.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
    });

    it("Add a review", () => {
      // Create scenario - Add a review
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for Raspberry
      HomePage.searchBox.type("Raspberry").type("{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.matCard.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.reviewTextarea.click().type("Tastes like metal")
      // Click Submit
      HomePage.reviewSubmitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviews.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviewPanel.should("contain.text", "Tastes like metal")
    });

    it("Validate product card amount", () => {
      // Create scenario - Validate product card amount
      HomePage.matCard.should("have.length", 12);
      // Validate that the default amount of cards is 12
      // Change items per page (at the bottom of page) to 24
      HomePage.matSelect.click();
      HomePage.matOption.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.matCard.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.matSelect.click();
      HomePage.matOption.contains("36").click();
      // Validate that the amount of cards is 35
      HomePage.matCard.should("have.length", 36);
    });

    it("Buy Girlie T-shirt", () => {
      // Create scenario - Buy Girlie T-shirt
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for Girlie
      HomePage.searchBox.type("Girlie").type("{enter}");
      // Add to basket "Girlie"
      HomePage.addToCart.click();
      // Click on "Your Basket" button
      HomePage.cartButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.matRow.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery svpeed Standard Delivery
      DeliveryMethodPage.standardDelivery.click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.matRow.contains("************5678").get(".mat-radio-button").click();
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeYourOrderAndPay.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.matCard.should("contain.text","Thank you for your purchase!");
    });

    it("Add address", () => {
      // Create scenario - Add address
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.orderAndPayments.click();
      // Click on My saved addresses
      HomePage.mySavedAddresses.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddress.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.country.type("Test");
      CreateAddressPage.name.type("Test");
      CreateAddressPage.mobileNumber.type("12345678");
      CreateAddressPage.zipCode.type("3604");
      CreateAddressPage.address.type("Ventspils");
      CreateAddressPage.city.type("Ventspils");
      CreateAddressPage.state.type("Ventspils");
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SavedAddressesPage.matRow.should("contain.text", "Ventspils");
    });

    it("Add payment option", () => {
      // Create scenario - Add payment option
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.orderAndPayments.click();
      // Click on My payment options
      HomePage.myPayments.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCard.click();
      // Fill in Name
      SavedPaymentMethodsPage.name.click().type("Matiss");
      // Fill in Card Number
      SavedPaymentMethodsPage.cardNumber.click().type("1234567890000000");
      // Set expiry month to 7
      SavedPaymentMethodsPage.month.select("7");
      // Set expiry year to 2090
      SavedPaymentMethodsPage.year.select("2090");
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      HomePage.accountButton.click();
      HomePage.orderAndPayments.click();
      HomePage.myPayments.click();
      SavedPaymentMethodsPage.matRow.should("contain.text", "0000");
    });
  });
});
