describe('SearchDestinations', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/searchdestinations');
  });

  it('displays search input and button', () => {
      cy.get('input[type="text"]').should('exist');
      cy.get('button').contains('Search').should('exist');
  });

  it('shows loading state when searching', () => {
      cy.get('input[type="text"]').type('Paris');
      cy.get('button').contains('Search').click();
      cy.get('button').contains('Searching...').should('exist');
  });
  