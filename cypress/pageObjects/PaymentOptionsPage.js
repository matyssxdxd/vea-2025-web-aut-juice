export class PaymentOptionsPage {
    static get matRow() {
        return cy.get("mat-row");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to review']");
    }

    static get idk() {
        return cy.get("mat-radio-button[id='mat-radio-66']");
    }
}