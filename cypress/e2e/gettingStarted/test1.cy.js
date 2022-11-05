/// ＜reference types="cypress" /＞

describe("this is test suit, describe mean suit",function(){
    it('google test',function(){
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
  
      cy.wait(2000)
  
  //    cy.get(".product").should('have.length',4) //should use for assertion
  
     // cy.get(".product:visible").should('have.length',4) // :visible is liye lagaya k ek hidden element b tha
      //agar hum sirf wo element required hain jo sirf visbile hain to us liye ye likhty
  
      //or
  
       cy.get(".products").find('.product').should('have.length',4)
  
       //eq used for indexing in web elements
       cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()
  
  
  
  
       cy.get(".products").find(".product").each(($e1, index,$list)=>{
  
  
        const title=$e1.find("h4.product-name").text()
        if(title.includes('Cashews '))
        {
          $e1.find('button').click()
        }
  
  
  
  
  
       })
// //alias is use to reused locatores i.e

// cy.get('.brand').as('productLocator')
// cy.get('@productLocator').find('.product').should('have.length',4)

//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())

})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())











    })
  
  
  
  })