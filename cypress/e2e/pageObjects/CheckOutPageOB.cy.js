 export class CheckOutPageOB{


    getCartBtn()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getCheckoutBtn()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }


}

// export default CheckOutPageOB;

//by using export keywrokd when we import this class we use any name keyword 