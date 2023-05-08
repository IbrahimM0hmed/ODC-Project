/// <reference types="cypress" />





  

    it("file Upload ", function (){

      cy.visit('https://fineuploader.com/demos.html')
    
      const fileupload = 'Image from iOS (1).png';
      cy.get('[name="qqfile"]').attachFile(fileupload);
    })