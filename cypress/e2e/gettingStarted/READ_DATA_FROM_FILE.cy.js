/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
 
    const users = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'secret'
      }

      
    it("READ_DATA_FROM_JSON_FILE",function(){

        cy.fixture('testdata.json').then((data)=>{
            cy.log("username from file : ",data.username)
            cy.log("password from file : ",data.password)
        })
        
    })


    it("WRITE_DATA_IN_JSON_FILE",function(){
//single user data
     cy.writeFile("user.json",users)
     //multiple user data in array
     const employees = [
        {
          name: 'Tasueef Babu',
          email: 'johndoe@example.com',
          password: 'secret'
        },
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          password: 'password1'
        }
      ]
      cy.writeFile('cypress/fixtures/users/emplyees.json', employees)

        
    })

});
