

describe('the correctness of the main page display', () => {
    beforeEach(() => {
        cy.visit('/');
      });

    it('title page', () => {
        cy.get('.page-header__title').should("contain", "Идёмвкино");
    });

    it('show seven days', () => {
        cy.get('.page-nav__day').should("have.length", 7);
    });

    it('Show section of movies', () => {
        cy.get(".movie").should("be.visible");;
    });
  })