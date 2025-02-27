export class Login {
  login(user: string = 'EXPERT', password: string = null): Cypress.Chainable<any> {
    cy.get('sv-login').click();

    return cy.contains('sv-field', 'USER').then($userSvField => {
      if ($userSvField.find('.readonly-input').length) {
        cy.log(`User ${$userSvField.find('.readonly-input').val()} is logged in. Login skipped`);
        cy.get('.cdk-overlay-backdrop').click().should('not.exist');
        cy.get('.cdk-overlay-backdrop').should('not.exist');

        return;
      }

      // Login
      cy.wrap($userSvField).find('input').type(user);

      if (password) cy.contains('sv-field', 'PASSWORD').find('input').type(password);

      // afterAction(() =>
      cy.contains('sv-button', 'LOGIN').should('be.visible').click();

      cy.get('sv-login > div')
        .invoke('text')
        .then(loggedInUser => {
          if (loggedInUser !== user)
            throw new Error(`Something went wrong logging user in: ${loggedInUser} !== ${user}`);
          else cy.log(`User ${user} successfully logged in`);
        });
    });
  }

  loginNoUsrManagement(password: string = null): Cypress.Chainable<any> {
    const user = 'EXPERT';

    return cy.get('sv-login').then($loginControl => {
      if ($loginControl.text().toUpperCase().includes('EXPERT')) {
        cy.log(`User already logged in. Login skipped.`);
        return;
      }

      cy.wrap($loginControl).click();

      if (password) cy.contains('sv-field', 'PASSWORD').find('input').type(password);

      cy.contains('sv-button', 'LOGIN').should('be.visible').click();

      cy.get('sv-login').contains(user);
    });
  }

  logoutUser() {
    //this command allows to log out the current logged-in user if there is one
    cy.get('sv-login')
      .invoke('text')
      .then(user => {
        if (user == 'OPERATOR') {
          //Do nothing
          cy.log(`NO User  logged in. Logout skipped.`);
        } else {
          cy.get('sv-login').click();
          cy.get('sv-form-layout sv-field').should('contain.text', 'EXPERT');
          cy.get('sv-button[actionname="submit"]').should('contain.text', 'LOGOUT').click();
        }
      });
  }
}
