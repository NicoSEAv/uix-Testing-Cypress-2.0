import { uix } from '@sv/testing/uix';

context('Uix.Testing.Helpers', () => {
  it('can setup tests as expert user', function () {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

    uix.topBar.checkUser('EXPERT');
  });

  it('can setup tests as operator', function () {
    uix
      .setup()
      .asOperator()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

    uix.topBar.checkUser('OPERATOR');
  });

  it('can setup tests in Editing state', function () {
    uix
      .setup()
      .asOperator()
      .withStatus('Editing', '*', '*')
      .openPage('/index.html#view/dashboard', { takeEvidence: true });

    uix.topBar.checkCurrentStatus('Editing', { takeEvidence: true });
  });

  it('can setup tests in Idle state', function () {
    uix.setup().asOperator().withStatus('Idle', '*', '*').openPage('view/dashboard', { takeEvidence: true });

    uix.topBar.checkCurrentStatus('Idle', { takeEvidence: true });
  });

  it('can select article', function () {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

    uix.topBar.checkCurrentStatus('Idle');
    uix.topBar.checkProdInfo({ batchName: '*', articleName: 'TT3 LIVELLI ALT,' }).takeEvidence();

    uix
      .setup()
      .asExpertUser()
      .withStatus('Editing', 'NON SERIALISED', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

    uix.topBar.checkCurrentStatus('Editing');
    uix.topBar.checkProdInfo({ batchName: '*', articleName: 'NON SERIALISED' }).takeEvidence();
  });

  it('can start / stop batch', function () {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

    uix.topBar.checkCurrentStatus('Idle');
    uix.topBar.checkProdInfo({ batchName: 'Closed batch', articleName: 'TT3 LIVELLI ALT,' }).takeEvidence();

    uix
      .setup()
      .asExpertUser()
      .withStatus('Ready', 'NON SERIALISED', {
        name: 'LOTTO_123',
        configurationName: 'Configurazione',
        dataString: '%01%01234567890128%10%LOTTO_123%17%291212%37%1000'
      })
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

    uix.topBar.checkCurrentStatus('Ready');
    uix.topBar.checkProdInfo({ batchName: 'LOTTO_123', articleName: 'NON SERIALISED' }).takeEvidence();
  });

  // one can skip a test with it.skip(...) and focus run a test with it.only(...)
  it.skip('Simple Start / Close Batch', () => {
    cy.visit('/index.html');

    // cy.get('sv-login').should('have.length', 1).click();
    uix.login.loginNoUsrManagement();

    cy.get('.menu-top .production-info-panel').click();

    cy.get('.batch-mgmt-link').click();

    cy.get('sv-batch-management-page').contains('The batch is closed');

    cy.screenshot();

    cy.get('sv-button i.fa-play-circle').closest('sv-button').click();

    cy.get('.cfg-list').children().should('have.length', 1);

    cy.get('.cfg-list .cfg-label')
      .should('have.text', '1 - Configurazione')
      .closest('.cfg-item')
      .find('sv-button')
      .should('have.text', 'SELECT')
      .click();

    // TODO: test .submit-area input[placeholder=Data string]
    cy.get('.submit-area input').type('%01%12345678901231%10%98765%17%291212%37%1000%');

    cy.get('sv-button .dialog-action.primary-solid').should('not.have.class', 'disabled').takeEvidence().click();

    cy.get('sv-batch-management-page').contains('The batch is open');

    cy.get('sv-button.fab i.fa-stop').click();
    cy.get('sv-button .dialog-action.primary-solid')
      .should('not.have.class', 'disabled')
      .contains('CLOSE BATCH', { matchCase: false })
      .click();
    cy.get('sv-batch-management-page').contains('The batch is closed').takeEvidence();
  });
});
