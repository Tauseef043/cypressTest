 export class CheckOutPageOB{


    getCartBtn()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getCheckoutBtn()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
        
    }
    getCountryAdd()
    {
        return  cy.get('#country')
    }
    getAgreeTOS(){
        return cy.get('.checkbox > label')
    }
    getPurchaseBtn()
    {
        return cy.get('form.ng-untouched > .btn')
    }
    getCountrySelect()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    get_PurcahseSuccess_AlertTXT()
    {
        return cy.get('.alert')
    }
    get_product_totalPrice(){
return cy.get('tr td:nth-child(4) strong')

    }

    get_Cart_TotalPrice()
    {
        return cy.get('h3 > strong')
    }
    






}

// export default CheckOutPageOB;

//by using export keywrokd when we import this class we use any name keyword 