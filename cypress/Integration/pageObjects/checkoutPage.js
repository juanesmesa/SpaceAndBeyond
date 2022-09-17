class CheckoutPage {

    travelerName($pTravelerName) {
        cy.wait(500)
        cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').clear();
        cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type($pTravelerName);
    }

    travelerEmail($pTravelerEmail) {
        cy.wait(500)
        cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').clear();
        cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type($pTravelerEmail);
    }

    travelerSSN($pTravelerSSN) {
        cy.wait(500)
        cy.get(':nth-child(3) > .theme__inputElement___27dyY').clear();
        cy.get(':nth-child(3) > .theme__inputElement___27dyY').type($pTravelerSSN);
    }

    travelerPhone($pTravelerPhone) {
        cy.wait(500)
        cy.get(':nth-child(4) > .theme__inputElement___27dyY').clear()
        cy.get(':nth-child(4) > .theme__inputElement___27dyY').type($pTravelerPhone);
    }

    verifyTermsAndConditions() {
        cy.wait(500)
        cy.get('.theme__check___2B20W').click()
        cy.get('.theme__check___2B20W').should('not.be.checked')
        cy.get('.flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo').click();

    }

    get agreeTermAndConditions() {
        cy.wait(500)
        return cy.get('.theme__check___2B20W');
    }
}

export default new CheckoutPage();