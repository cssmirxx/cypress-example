// Descreve o grupo de testes
describe('Meu Primeiro Teste', () => {
  
  // Define um caso de teste
  it('Acessa, digita e verifica', () => {
    
    // Visita o site de exemplo do Cypress
    cy.visit('https://example.cypress.io')

    // Procura por um botão ou link com o texto 'type' e clica nele
    cy.contains('type').click()

    // Verifica se a URL mudou e agora contém '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Pega o campo de e-mail e digita um e-mail falso
    cy.get('#email1').type('fake@email.com')

    // Verifica se o valor digitado realmente foi inserido no campo
    cy.get('#email1').should('have.value', 'fake@email.com')

      // Pega o campo de passowrd e digita um passowrd falso
    cy.get('#password1').type('fake@password')

    // Verifica se o valor digitado realmente foi inserido no campo
    cy.get('#password1').should('have.value', 'fake@password')
    
  })
})
