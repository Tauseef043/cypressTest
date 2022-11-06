/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//checkboxes
// .and() is for multiple assertion
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get("input[id='checkBoxOption1']").uncheck().should('not.be.checked')

cy.get("input[type='checkbox']").check(['option2','option3'])

//static dropdown

cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

//dynamic dropdown

cy.get('#autocomplete').type('ind').as('country')
// parrent to child travers me space tag name

cy.get('li[class="ui-menu-item"] div').each(($e1, index,$list) =>{


    if($e1.text()=='India')
    {
        $e1.click()
    }

})

cy.get('@country').should('have.value','India')



//visiblity of attributes

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()

cy.get('#displayed-text').should('be.visible')

//radio button

cy.get('[for="radio2"] > .radioButton').check().should('have.value','radio2')


})



//fixture

}  )



