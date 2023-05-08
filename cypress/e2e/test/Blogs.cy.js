/// <reference types="cypress" />

it("Blogs", function (){

    cy.visit('http://jeel-admin-dev.us-east-1.elasticbeanstalk.com/admin/login')
    
      // Access to login page:
      cy.get('#inputEmail').type('sadmin@jeelapp.com')
      cy.get('#inputPassword').type('adminadmin')
      cy.get('.btn').click()

      cy.get('.mt-3 > :nth-child(6) > a').click()
      cy.get('.SongsButtons').click()

      cy.get(':nth-child(3) > :nth-child(1) > .new-items > .add-box')
  .attachFile("Image from iOS (1).png", { subjectType: 'label' })
      // const blogupload = 'Image from iOS (1).png';
      // cy.get(':nth-child(3) > :nth-child(1) > .new-items > .add-box').attachFile(blogupload).click;

      cy.get('.selection').click()
      cy.get('.text').contains('Mental').click()
      *
      cy.get('#title').type('Atumation_Blogs')

      cy.get('#exampleFormControlTextarea1').type('Description')

     cy.get('.tox-notification__dismiss').click()
      // cy.get('.tox tox-tinymce').type('test')
      // cy.get('.col > input').click 
    })