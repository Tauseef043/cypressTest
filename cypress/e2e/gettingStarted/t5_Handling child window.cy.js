/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//cypress me child windows or tabs ko do tariqo se handle kr skty hain ek removeAttr se or dustra us ka
//heref link get kr k direct us ko hit kr k

//.prop() is non cypress method
//The prop() method sets or returns properties and values of the selected elements. 
//method 1 for varyufying attributes
cy.get('#openwindow').then(function(e1){


const url2=e1.prop('href')
cy.log(url2)
//ncy.visit(url2)
})
//method 2 for varyufying attributes
//cy.get('#openwindow').should('have.attr','href')








//second method remove tab

cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','rahulshettyacademy')





}  )


})
