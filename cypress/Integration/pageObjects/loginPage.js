class LoginPage {

    open() {
        cy.visit("https://demo.testim.io/");
    }


    get singInButton() {
        cy.wait(500)
        return cy.get('.NavButton__nav-button___34wHC');
    }

    get loginButton() {
        cy.wait(500)
        return cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6');
    }

    userName($pUsername) {

        cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').type($pUsername);
    }

    password($pPassword) {

        cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').type($pPassword);
    }
}


export default new LoginPage();