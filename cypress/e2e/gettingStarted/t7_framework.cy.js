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

 //verifing Two-way Data Binding example field
 
 cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)


 //verifying min length of field
 cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
 
 //verifying checkbox is disabled or not

 cy.get('#inlineRadio3').should('be.disabled')

//building customize cypress command

cy.get(':nth-child(2) > .nav-link').click()

cy.productAddCart('Samsung Note 8')

/*

this.data.productName.forEach(element => {
    cy.productAddCart(element)

});

*/

this.data.ProductName.forEach(function(element){

    cy.productAddCart(element)
});







} )


})
