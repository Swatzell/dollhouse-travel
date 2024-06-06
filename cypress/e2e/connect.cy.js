describe('Connect Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/connect');
  });

  it('should display the Connect with Dollhouse header', () => {
    cy.contains('h1', 'Connect with Dollhouse').should('be.visible');
  });

  it('should display the Facebook section', () => {
    cy.contains('h2', 'Facebook').should('be.visible');
    cy.get('iframe[src*="facebook.com"]').should('be.visible');
  });

  it('should display the Instagram section', () => {
    cy.contains('h2', 'Instagram').should('be.visible');
    cy.get('iframe[src*="instagram.com"]').should('be.visible');
  });
});