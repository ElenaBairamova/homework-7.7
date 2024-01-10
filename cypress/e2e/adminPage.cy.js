
import adminData from "../fixtures/adminData";


describe('The correctness of the main page display', () => {   
      
    it('successful login admin', () => {
         cy.visit('/admin');
         cy.login(adminData.validEmail, adminData.validPassword);
         cy.contains("Управление залами").should("be.visible");
         cy.contains("Конфигурация залов").should("be.visible");
         cy.contains("Конфигурация цен").should("be.visible");
         cy.contains("Сетка сеансов").should("be.visible");
         cy.contains("Открыть продажи").should("be.visible");    
    });

    it('unsuccessful login admin', () => {
         cy.visit('/admin');
         cy.login(adminData.inValidEmail, adminData.inValidPassword);
         cy.contains("Ошибка авторизации!").should("be.visible");
          
   });

   it('unsuccessful login admin with email empty', () => {
    cy.visit('/admin');
    cy.login(adminData.emptyEmail, adminData.inValidPassword);
    cy.get('[for="email"] > .login__input').then((elements)=>{
        expect(elements[0].checkValidity()).to.be.false
      });
    });

  

  })