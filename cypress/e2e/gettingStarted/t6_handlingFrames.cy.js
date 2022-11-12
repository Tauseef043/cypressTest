/// <reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe';
import { find } from 'cypress/types/lodash';

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.frameLoaded('courses-iframe')  //get knwoledge of frames and load into cy object

cy.iframe().find("a[href='mentorship]").eq(0).click()



}  )


})
