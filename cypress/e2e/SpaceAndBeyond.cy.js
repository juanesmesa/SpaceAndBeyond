import bookingPage from "../Integration/pageObjects/bookingPage";
import checkoutPage from "../Integration/pageObjects/checkoutPage";
import loginPage from "../Integration/pageObjects/loginPage";



describe("Home page test", () => {

    it('open the url and verify the title', () => {
        loginPage.open();
        cy.title().should('eq', 'Space & Beyond | Testim.io demo')
    })




    it('login wit a valid user', () => {

        cy.fixture('credentials').then((user) => {


            loginPage.singInButton.click();
            loginPage.userName(user.cyusername);
            loginPage.password(user.cypassword);
            loginPage.loginButton.click();
        })
    })



    it('Customizing the travel', () => {

        bookingPage.depaertingDate()
        bookingPage.returningDate()
        bookingPage.selectingTravelers()
        bookingPage.destinationButton.click()
        cy.get('.Gallery__headline-2___3amRj').should("contain", "4 travelers")

    })




    it('Selecting planet', () => {

        cy.fixture('planets').then((planet) => {
            cy.log(planet.Madam)
            bookingPage.selectingPlanet(planet.cyMadam)
            bookingPage.bookButton.click()


        })
    })

    it('Booking planet selected', () => {

        bookingPage.bookButton.click()
        cy.wait(1000)
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2)').should("contain", "Checkout")

    })


    it('Filling checkout with wrong phone number', () => {
        cy.fixture('travelers').then((traveler) => {

            checkoutPage.travelerName(traveler.cyTravelerName);
            checkoutPage.travelerEmail(traveler.cyEmailAddres);
            checkoutPage.travelerSSN(traveler.cySSN);
            checkoutPage.travelerPhone(traveler.cyWrongPhoneNumber);
            checkoutPage.agreeTermAndConditions.click()
            cy.get('.theme__errored___3peD4').should("contain", "Enter a valid")
            cy.get('.flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo').should('be.disabled')

        })
    })


    it('Filling a valid phone number', () => {
        cy.fixture('travelers').then((traveler) => {

            checkoutPage.travelerPhone(traveler.cyPhoneNumber);
            cy.get('.flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo').should('not.be.disabled')
        })
    })


    it('Verify Terms and Conditions', () => {

        checkoutPage.verifyTermsAndConditions();
        cy.get('.theme__body___1_nNM > p').should("contain", "You must agree to the terms and conditions")
        cy.get('.theme__navigation___3eiS- > .theme__button___1iKuo').click()
        
    })
})

