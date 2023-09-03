/// <reference types='Cypress'/>

describe('setup', () => {


    it('E2E COMPRA', () => {
        cy.visit("https://www.demoblaze.com/");
        cy.viewport(1920, 1080);
        cy.location("protocol").should("eq", "https:");

        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
        cy.get('.name');
//producto 1
        cy.get('.row > #tbodyid > .row > .col-sm-12 > .btn').click();
        cy.get('.container > #navbarExample > .navbar-nav > .active > .nav-link').click()
//producto 2
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#tbodyid > .col-lg-4:nth-child(2) > .card > a > .card-img-top').click()

        cy.visit('https://www.demoblaze.com/prod.html?idp_=2')

        cy.get('.row > #tbodyid > .row > .col-sm-12 > .btn').click();

//visualización del carrito de compras

        cy.get('.container > #navbarExample > .navbar-nav > .nav-item > #cartur').click();
        cy.wait(3000)
        cy.visit('https://www.demoblaze.com/cart.html')
        cy.get('body > #page-wrapper > .row > .col-lg-1 > .btn').click();

        cy.get('.modal-content > .modal-body > form > .form-group > #name').click();

//Diligenciamiento del formulario

        cy.get("input#name").type("Carlos");
        cy.get("input#country").type("Ecuador");
        cy.get("input#city").type("Quito");
        cy.get("input#card").type("454500001234556");
        cy.get("input#month").type("06");
        cy.get("input#year").type("27");

//orden de pago
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(3000)
        cy.get('.modal-open > .sweet-alert > .sa-button-container > .sa-confirm-button-container > .confirm').click()


    });


})