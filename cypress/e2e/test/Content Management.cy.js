/// <reference types="cypress" />

it("Content Management", function (){

    cy.visit('http://jeel-admin-dev.us-east-1.elasticbeanstalk.com/admin/login')
  
    cy.get('#inputEmail').type('sadmin@jeelapp.com')
    cy.get('#inputPassword').type('adminadmin')
    cy.get('.btn').click()
  
    // Access to content managment page:
    cy.get('.mt-3 > :nth-child(4) > a').click()
  
     // Add Series 
    cy.get('[href="/admin/AddSeries"] > .seriesButtons').click()
  
    const iconUpload = 'Image from iOS (1).png';
    cy.get('[class="react-dropzone-s3-uploader"]').attachFile(iconUpload);
    
    cy.get('#name').type('Automation_Name')
    cy.get('#description').type('Automation_Description')
    
    cy.get('.col > input').click()
    
    // const witouthMusicuUpload = 'small1.mp4';
    // cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .new-items > .add-box').attachFile(iconupload);
  
    // const promowitMusicuUpload = 'small1.mp4';
    // cy.get(':nth-child(10) > :nth-child(1) > :nth-child(1) > .new-items > .add-box').attachFile(iconupload);
  
    // const promowitouthMusicuUpload = 'small1.mp4';
    // cy.get(':nth-child(13) > :nth-child(1) > :nth-child(1) > .new-items > .add-box').attachFile(iconupload);
    /* // Delete Epsiode
    // cy.wait(700)
    // cy.contains('الغابة السعيدة').click()
    // cy.wait(700)
     cy.get('.container > :nth-child(13)').find('.seriesCardButtons').click()
  */
  })
  