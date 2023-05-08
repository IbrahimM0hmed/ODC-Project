/// <reference types="cypress" />

it("User Management", function (){

    cy.visit('http://jeel-admin-dev.us-east-1.elasticbeanstalk.com/admin/login')
    
      // Access to login page:
      cy.get('#inputEmail').type('sadmin@jeelapp.com')
      cy.get('#inputPassword').type('adminadmin')
      cy.get('.btn').click()
    
      // Access to User Management Page
      cy.get(':nth-child(2) > a > span').click()
    
      // ADD Admin
      /*cy.get('.seriesButtons').click()
      cy.get('#userName').type('Automation_Name')
      cy.get('#email').type('Atumoation_Email@mobidevlabs.com')
      cy.get('#password').type('Automation_Password')
      cy.get('#episode_series_id').click()
      cy.get('.item').contains('ADMIN').click()
      cy.get('#btn-add').click()
    */
      // Delete Admin
      // cy.get(':nth-child(7) > .rt-tr > [style="flex: 100 0 auto; width: 100px; max-width: 100px;"] > div > :nth-child(3) > .trash > i > .svg-inline--fa > path').click()
      // cy.get('.primary').click()
    
      // Edit Role
      // cy.get(':nth-child(1) > .rt-tr > [style="flex: 100 0 auto; width: 100px; max-width: 100px;"] > div > :nth-child(4) > i > .svg-inline--fa').click();
      // cy.get('.form-group > .ui').click();
      // cy.get('.item').contains('Analyst').click();
      // cy.get('#saveButton').click();
    
      // Block Role
      // cy.get('.user-lock').click();
      cy.get(':nth-child(2) > .rt-tr > [style="flex: 100 0 auto; width: 100px; max-width: 100px;"] > div > :nth-child(2) > .user-lock > i > .svg-inline--fa > path').click();
      // cy.get(':nth-child(1) > .rt-tr > [style="flex: 100 0 auto; width: 100px; max-width: 100px;"] > div > :nth-child(2) > .user-lock > i').click();
      cy.wait(3000); 
      cy.get('.actions > :nth-child(1)').click();
     
    })