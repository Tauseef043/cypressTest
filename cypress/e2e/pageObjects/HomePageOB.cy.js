class HomePageOB{

    getNameEB()
    {
      return  cy.get("input[name='name']:nth-child(2)")
    }
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getEnterprenuer()
    {
      return  cy.get('#inlineRadio3')
    }
    getShopBtn()
    { 
        return cy.get(':nth-child(2) > .nav-link')
    }
    getCartBtn()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getCheckoutBtn()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }


}

export default HomePageOB;

//by using export keywrokd when we import this class we use any name keyword 