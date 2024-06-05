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
  it('displays results after search', () => {
    cy.intercept('GET', 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination*', {
        statusCode: 200,
        body: { status: true, data: [{ dest_id: '1', label: 'Paris', image_url: 'https://example.com/paris.jpg' }] }
    }).as('getSearchResults');

    cy.get('input[type="text"]').type('Paris');
    cy.get('button').contains('Search').click();
    cy.wait('@getSearchResults');
    cy.get('.destination-item').should('have.length', 1);
    cy.get('.destination-item').contains('Paris').should('exist');
});

it('displays error message on API failure', () => {
    cy.intercept('GET', 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination*', {
        statusCode: 500,
        body: {}
    }).as('getSearchResultsFailure');

    cy.get('input[type="text"]').type('Paris');
    cy.get('button').contains('Search').click();
    cy.wait('@getSearchResultsFailure');
    cy.get('.error').contains('An error occurred while fetching data.').should('exist');
});

it('adds and removes favorites', () => {
    cy.intercept('GET', 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination*', {
        statusCode: 200,
        body: { status: true, data: [{ dest_id: '1', label: 'Paris', image_url: 'https://example.com/paris.jpg' }] }
    }).as('getSearchResults');

    cy.get('input[type="text"]').type('Paris');
    cy.get('button').contains('Search').click();
    cy.wait('@getSearchResults');

    cy.get('.destination-item').contains('Add to Favorites').click();
    cy.get('.favorites-container .destination-item').should('have.length', 1);
    cy.get('.favorites-container .destination-item').contains('Paris').should('exist');

    cy.get('.favorites-container .destination-item').contains('Remove from Favorites').click();
    cy.get('.favorites-container .destination-item').should('have.length', 0);
});
});