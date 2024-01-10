import adminData from "../fixtures/adminData";
import seats from "../fixtures/seats";

describe("Booking movie", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Booking a movie with the title from the admin panel", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.get('[data-film-id="119"] > .conf-step__movie-title ').then(($el) => $el.textContent).should('have.text','Унесенные ветром.');
    cy.get('[data-film-id="119"] ').invoke('text').then((text) => {
    cy.visit("/");
    cy.get(':nth-child(2) > .movie__info > .movie__description > .movie__title').should('have.text', 'Унесенные ветром.');
    cy.get('a.page-nav__day:nth-of-type(6)').click();
    cy.get(':nth-child(2) > .movie-seances__hall > .movie-seances__list > .movie-seances__time-block > .movie-seances__time').click();
    cy.get('.buying__info-title').contains('Унесенные ветром.');
    cy.get('.buying__info-start').contains('Начало сеанса: 14:00');
    cy.get(':nth-child(6) > :nth-child(6)').click();
    cy.get('.acceptin-button').click();
    cy.get('.ticket__check-title').contains('Вы выбрали билеты:');
    cy.get('.acceptin-button').click();
    cy.get('.ticket__info-qr').should("be.visible");
      
   
  });

  }) 
  })
