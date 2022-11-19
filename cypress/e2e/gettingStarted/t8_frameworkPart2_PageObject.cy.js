/// <reference types="Cypress" />
import HomePageO from "../pageObjects/HomePageOB.cy.js";
import { CheckOutPageOB } from "../pageObjects/CheckOutPageOB.cy.js";
describe("My Second Test Suite", function () {
  before(function () {
    //run once before All methods in block

    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Cypress Framework part 1", function () {
    //Cypress.config('defaultCommandTimeout', 100000) it's like explicit wait but it wait to specific testcase only
    // is me js command k upar ye likho gy ye waha se start ho ga or end tak chalega jaha testcase end ho raha
    const homePage = new HomePageO();
    cy.visit(Cypress.env('URL'));
    /*
 cy.get("input[name='name']:nth-child(2)").type("Tauseef")
 cy.get('#exampleFormControlSelect1').select("Female")
*/
    homePage.getNameEB().type(this.data.name);
    homePage.getGender().select(this.data.gender);

    //verifing Two-way Data Binding example field

    homePage.getTwoWayDataBinding().should("have.value", this.data.name);

    //cy.pause()
    //verifying min length of field
    homePage.getNameEB().should("have.attr", "minlength", "2");

    //verifying checkbox is disabled or not

    homePage.getEnterprenuer().should("be.disabled");

    //building customize cypress command

    homePage.getShopBtn().click(); //shop  button

    cy.productAddCart("Samsung Note 8");

    /*

this.data.productName.forEach(element => {
    cy.productAddCart(element)

});

*/

    this.data.ProductName.forEach(function (element) {
      cy.productAddCart(element);
    });

    const CheckOutPage = new CheckOutPageOB();
var sum=0
    CheckOutPage.getCartBtn().click();
    //clicking on checkout button
    
    var sum=0
    CheckOutPage.get_product_totalPrice().each(($el,index, list) =>{


        const amount =$el.text()
        var res=amount.split(" ")  //split string into two parts before and after space
        res=res[1].trim()
        sum=Number(sum)+Number(res) //to convert string to integer

        // cy.log(amount)


    }).then(function(){

        cy.log(sum)
    })

   CheckOutPage.get_Cart_TotalPrice().then(function(element){


    const amount =element.text()
    var total=amount.split(" ")  //split string into two parts before and after space
    total=total[1].trim()

    expect(Number(total)).to.equal(sum)
    cy.log(total)
   })
cy.pause()











    CheckOutPage.getCheckoutBtn().click();

    CheckOutPage.getCountryAdd().type(this.data.country);

    Cypress.config("defaultCommandTimeout", 100000);

    CheckOutPage.getCountrySelect().click();
    CheckOutPage.getAgreeTOS().click();
    CheckOutPage.getPurchaseBtn().click();
    //CheckOutPage.get_PurcahseSuccess_AlertTXT().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

    CheckOutPage.get_PurcahseSuccess_AlertTXT().then(function (element) {
      const actualTXT = element.text();
      expect(actualTXT.includes("Success! Thank you!")).to.be.true;
    });
  });
});
