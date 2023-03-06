/// ＜reference types="cypress" /＞

//step 1

//runn command npm install --save-dev cypress-file-upload
// step 2

// To be able to use any custom command you need to add it to cypress/support/commands.js like this:
// import 'cypress-file-upload';
describe("this is test suit, describe mean suit", function () {
  const filePath = "thumbnail.png";
  it("FILE_UPLOAD", function () {
    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.get("#file-upload").attachFile(filePath);
    cy.get("#file-submit").click();

    cy.get("#uploaded-files").should("contain.text", filePath);
  });

  it("FILE_UPLOAD", function () {
    cy.visit("https://the-internet.herokuapp.com/download");

    cy.downloadFile(
      "https://the-internet.herokuapp.com/download/2.png",
      "mydownloads",
      "example.jpg"
    )
  });
});
