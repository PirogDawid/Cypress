/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('log')
      },
    })
    
  })
  
  afterEach(() => {
    cy.window().then((win) => {
      win.location.href = 'about:blank'
    })
  })

describe("Checking if the element exist", () => {

    it("Check the promo block", () => {

        
        cy.get('[class="block-promo home-main"]')
          .should("be.visible");
        cy.get('[class="block-promo home-pants"]')
          .should("be.visible")          
        cy.get('[class="block-promo home-t-shirts"]')
          .should("be.visible");
        cy.get('[class="block-promo home-erin"]')
          .should("be.visible");
        cy.get('[class="block-promo home-performance"]')
          .should("be.visible");
        cy.get('[class="block-promo home-eco"]')
          .should("be.visible");
        
    
            })
    it("Check the hot seller block", () => {
        cy.get('[class="content-heading"]')
          .contains("Hot Sellers")
          .should("be.visible");
        cy.get('[class="product-items widget-product-grid"]').should("be.visible");
                
            })
    it("check the menu block", () => {
        cy.get('[class="ui-menu ui-widget ui-widget-content ui-corner-all"]')
          .should("be.visible");
        cy.get('[id="ui-id-3"]')
          .should("be.visible");
        cy.get('[id="ui-id-4"]')
          .should("be.visible");
        cy.get('[id="ui-id-5"]')
          .should("be.visible");
        cy.get('[id="ui-id-6"]')
          .should("be.visible");
        cy.get('[id="ui-id-7"]')
          .should("be.visible");
        cy.get('[id="ui-id-8"]')
          .should("be.visible");
   })
})
        

    
