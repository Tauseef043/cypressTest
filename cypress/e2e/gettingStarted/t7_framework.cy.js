/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

    before(function(){
        //run once before All methods in block

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
it('Cypress Framework part 1',function() {

    cy.visit('https://rahulshettyacademy.com/angularpractice')
/*
 cy.get("input[name='name']:nth-child(2)").type("Tauseef")
 cy.get('#exampleFormControlSelect1').select("Female")
*/
cy.get("input[name='name']:nth-child(2)").type(this.data.name)
 cy.get('#exampleFormControlSelect1').select(this.data.gender)

} )


})
