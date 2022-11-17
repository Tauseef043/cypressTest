/// <reference types="Cypress" />
import HomePageO from '../pageObjects/HomePageOB.cy.js'
import {CheckOutPageOB} from '../pageObjects/CheckOutPageOB.cy.js'
describe('My Second Test Suite', function() 
{

    before(function(){
        //run once before All methods in block

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
it('Cypress Framework part 1',function() {

   const homePage= new HomePageO()
    cy.visit('https://rahulshettyacademy.com/angularpractice')
/*
 cy.get("input[name='name']:nth-child(2)").type("Tauseef")
 cy.get('#exampleFormControlSelect1').select("Female")
*/
homePage.getNameEB().type(this.data.name)
homePage.getGender().select(this.data.gender)

 //verifing Two-way Data Binding example field
 
 homePage.getTwoWayDataBinding().should('have.value',this.data.name)

//cy.pause()
 //verifying min length of field
 homePage.getNameEB().should('have.attr','minlength','2')
 
 //verifying checkbox is disabled or not

 homePage.getEnterprenuer().should('be.disabled')

//building customize cypress command

homePage.getShopBtn().click() //shop  button

cy.productAddCart('Samsung Note 8')

/*

this.data.productName.forEach(element => {
    cy.productAddCart(element)

});

*/

this.data.ProductName.forEach(function(element){

    cy.productAddCart(element)
});


const CheckOutPage= new CheckOutPageOB()

CheckOutPage.getCartBtn().click()





} )


})
