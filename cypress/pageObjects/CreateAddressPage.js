export class CreateAddressPage {
    static get country() {
        return cy.get("input[placeholder='Please provide a country.']");
    }

    static get name() {
        return cy.get("input[placeholder='Please provide a name.']");
    }

    static get mobileNumber() {
        return cy.get("input[placeholder='Please provide a mobile number.']");
    }

    static get zipCode() {
        return cy.get("mat-label").contains("ZIP Code");
    }

    static get address() {
        return cy.get("#address");
    }

    static get city() {
        return cy.get("input[placeholder='Please provide a city.']");
    }

    static get state() {
        return cy.get("input[placeholder='Please provide a state.']");
    }
    
    static get submitButton() {
        return cy.get("#submitButton");
    }
}