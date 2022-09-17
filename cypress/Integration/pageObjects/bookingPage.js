class BookinPage {


    depaertingDate() {
        cy.wait(500)
        cy.get(':nth-child(1) > [data-react-toolbox="date-picker"] > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
        const dayjs = require('dayjs')
        let departingDay = parseInt(dayjs().format('DD'))+2
        if(departingDay==28)
        {
            departingDay=1
        }
        else
        {
            cy.log(departingDay)
            cy.get(':nth-child(' + departingDay +') > span').click();
            cy.get('.theme__navigation___3eiS- > :nth-child(2)').click();
        }
      
    }

    returningDate() {
        cy.wait(500)
        cy.get(':nth-child(2) > [data-react-toolbox="date-picker"] > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
        const dayjs = require('dayjs')
        let returningDay = parseInt(dayjs().format('DD'))+4
        if(returningDay==28)
        {
            returningDay=2
        }
        else
        {
            cy.log(returningDay)
            cy.get(':nth-child(' + returningDay +') > span').click();
            cy.get('.theme__navigation___3eiS- > :nth-child(2)').click();
        }
    }


    selectingTravelers()
    {
        cy.get('.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click()
        cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click()
        
    }

    get destinationButton() {
        cy.wait(500)
        return cy.get('.Hero__hero___1FDXn > :nth-child(4) > .theme__button___1iKuo')
    }


    selectingPlanet($pPlanet){
       
        cy.get(':nth-child(1) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.wait(2000)
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(' + $pPlanet +')').click()
    
    }

    get bookButton() {
        cy.wait(500)
        return     cy.get('.theme__cardActions___1aHjq > .theme__button___1iKuo')
    }


}

export default new BookinPage();