/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('log')
      },
    })
    
  })
   

describe("Basic scripts", () => {

    it("Check", () => {
       
        cy.get('[href="/checkboxes"]').click();
        cy.get('[type="checkbox"]').then(checkbox => {
            cy.get(checkbox).eq(0).check().invoke("prop", "checked").then(zaznaczony => {
                cy.log(zaznaczony);
            cy.get(checkbox).eq(1).uncheck().invoke("prop", "checked").then(zaznaczony => {
                cy.log(zaznaczony);
                })
             })
        })
    })
    it("loading", () => {
        cy.get('[href="/dynamic_loading"]').click();
        cy.get('[href="/dynamic_loading/1"]').click();
        cy.get('button').click();
        cy.wait(6000);
        cy.get('#finish > h4')
           .should('be.visible')
               
    })
    it("Login", () => {
        cy.get('[href="/login"]').click();
        cy.get('[id="username"]').type("ffsdfsdf", { delay:50} );
        cy.get('[id="password"]').type("fdsfsdf", { delay:50} );
        cy.get('.fa').click();
        cy.get('[id="flash"]')
            .should("be.visible")
            .contains("Your username is invalid!")
            .should('have.class', 'error')
        cy.get('[id="username"]').type("tomsmith", { delay:50} );
        cy.get('[id="password"]').type("SuperSecretPassword!", { delay:50} );
        cy.get('.fa').click();
        cy.get("#flash")
            .contains("You logged into a secure area!")
            .should("be.visible")
            .should("have.class", "success");
        cy.get(".button").click();
        cy.get("#flash")
            .contains("You logged out of the secure area!")
            .should("be.visible")
            .should("have.class", "success")
            
           
    })
 })

    
    
   

    
  
    

            
        
     
        
    

   

