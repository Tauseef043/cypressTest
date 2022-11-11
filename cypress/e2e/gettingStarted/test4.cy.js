/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>{


    const textt=$e1.text()
    if(textt.includes('Appium '))
    {//agar text me appium hai to us k next colmn me le k jana price waly
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(priceVar){
  //eq is a funtion in cypress for indexing
            const priceTXt=priceVar.text()
            expect(priceTXt).to.equal('30')
        })

    }
})
//mouse hover
/*
cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')
*/
// ye chez cypress me withoyt hover kiye force click se bhandle ki ja sktu hai
cy.contains('Top').click({force: true})
cy.url().should('include','top')

})



//fixture

}  )



