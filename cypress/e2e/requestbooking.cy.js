describe('BookingForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/requestbooking');
  });

  it('renders form fields correctly', () => {
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="address"]').should('exist');
    cy.get('input[name="city"]').should('exist');
    cy.get('input[name="state"]').should('exist');
    cy.get('input[name="zipCode"]').should('exist');
    cy.get('input[name="numberOfAdults"]').should('exist');
    cy.get('input[name="numberOfChildren"]').should('exist');
    cy.get('input[name="preferredHotel"]').should('exist');
    cy.get('input[name="secondHotelPreference"]').should('exist');
    cy.get('textarea[name="specialRequests"]').should('exist');
  });

  it('displays errors when required fields are empty', () => {
    cy.get('input:invalid').should('have.length', 11)
  });
})