export class SavedAddressesPage {
    static get addNewAddress() {
        return cy.get("[aria-label='Add a new address']");
    }

    static get matRow() {
        return cy.get("mat-row");    
    }
    
}