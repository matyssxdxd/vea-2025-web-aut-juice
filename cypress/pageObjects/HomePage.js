import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchQuery() {
    return cy.get("#searchQuery");
  }

  static get searchBox() {
    return cy.get("#mat-input-0");
  }
  
  static get matCard() {
    return cy.get("mat-card");
  }

  static get matDialogContainer() {
    return cy.get("mat-dialog-container");
  }

  static get productCloseButton() {
    return cy.get("[aria-label='Close Dialog']")
  }

  static get reviews() {
    return cy.get("mat-expansion-panel").contains("Reviews");
  }
  
  static get reviewPanel() {
    return cy.get(".mat-expansion-panel-content");
  }

  static get reviewTextarea() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get reviewSubmitButton() {
    return cy.get("#submitButton");
  }

  static get matSelect() {
    return cy.get("mat-select");
  }

  static get matOption() {
    return cy.get("mat-option");
  }

  static get addToCart() {
    return cy.get("[aria-label='Add to Basket']");
  }

  static get cartButton() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get orderAndPayments() {
    return cy.get("button").contains("Orders & Payment");
  }

  static get mySavedAddresses() {
    return cy.get("[aria-label='Go to saved address page']");
  }

  static get myPayments() {
    return cy.get("button").contains("My Payment Options");
  }
}
