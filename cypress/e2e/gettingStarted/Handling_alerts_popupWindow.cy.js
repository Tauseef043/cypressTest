/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#alertbtn').click()
cy.on('window:alert',(str)=>{

    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.get('#confirmbtn').click()


cy.on('window:confirm',(str)=>{

    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

// Handling Multiple tabs

// Cypress cannot handle multiple tabs so we have to amnage it on same tabs by removing target element


cy.get('#opentab').invoke('removeAttr','target').click()




cy.url().should('include','rahulshettyacademy')



//cy.go('back')

})

  
}  )



