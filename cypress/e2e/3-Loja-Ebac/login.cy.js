/// <reference types="cypress"/>

describe('Funcionalidade Login', () => {
    // BeforeEach- Aplicar apenas um vez o COD para todas as funções
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('lukinhascop1@gmail.com')
        cy.get('#password').type('superonze11')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, lukinhascop1 (não é lukinhascop1? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => { 
        cy.get('#username').type('lukinhascop@gmail.com')
        cy.get('#password').type('superonze11')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    })

    it('Deve exibit uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('lukinhascop1@gmail.com')
        cy.get('#password').type('superonze')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail lukinhascop1@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

})