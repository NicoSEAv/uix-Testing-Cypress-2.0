import { uix } from '@sv/testing/uix';

/**
 * Uncomment the row below in order to disable all the takeEvidence in the test
 */
cy.takeEvidence['disabled'] = true;

//Variable to change in order to enable/disable all the takeEvidence after the setUp()
const screen = false;

it('Verify the change of the language checking specific string values', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
  //Verify the translation of some components in English
  cy.get('.production-info .production-info-row').eq(0).should('contain', 'BATCH:');
  cy.get('.production-info .production-info-row').eq(1).should('contain', 'ARTICLE:');
  cy.get('.navigation-sidebar').find('[href="#/view/dashboard"]').should('contain', 'Dashboard');
  cy.get('.page-title-bar').find('sv-button').should('contain', 'Configure');
  cy.get('.page-title-bar').should('contain.text', 'Idle').takeEvidence();
  //Change language to Italian and verify the translation of some components
  uix.appNavigation.language.useItalian();
  cy.get('.production-info .production-info-row').eq(0).should('contain', 'LOTTO:');
  cy.get('.production-info .production-info-row').eq(1).should('contain', 'ARTICOLO:');
  cy.get('.navigation-sidebar').find('[href="#/view/dashboard"]').should('contain', 'Cruscotto');
  cy.get('.page-title-bar').find('sv-button').should('contain', 'Configura');
  cy.get('.page-title-bar').should('contain.text', 'Idle').takeEvidence();
  //Change language to Deutsch and verify the translation of some components
  uix.appNavigation.language.useDeutsch();
  cy.get('.production-info .production-info-row').eq(0).should('contain', 'CHARGE:');
  cy.get('.production-info .production-info-row').eq(1).should('contain', ' ARTIKEL:');
  cy.get('.navigation-sidebar').find('[href="#/view/dashboard"]').should('contain', 'Instrumententafel');
  cy.get('.page-title-bar').find('sv-button').should('contain', 'Konfigurieren');
  cy.get('.page-title-bar').should('contain.text', 'Leerlauf').takeEvidence();
  uix.appNavigation.language.useEspañol();
  cy.get('.production-info .production-info-row').eq(0).should('contain', 'LOTE:');
  cy.get('.production-info .production-info-row').eq(1).should('contain', 'ARTÍCULO:');
  cy.get('.navigation-sidebar').find('[href="#/view/dashboard"]').should('contain', 'Dashboard');
  cy.get('.page-title-bar').find('sv-button').should('contain', 'Configurar');
  cy.get('.page-title-bar').should('contain.text', 'Desconectado').takeEvidence();
  uix.appNavigation.language.useFrançais();
  cy.get('.production-info .production-info-row').eq(0).should('contain', 'LOT:');
  cy.get('.production-info .production-info-row').eq(1).should('contain', 'ARTICLE:');
  cy.get('.navigation-sidebar').find('[href="#/view/dashboard"]').should('contain', 'Dashboard');
  cy.get('.page-title-bar').find('sv-button').should('contain', 'Configurer');
  cy.get('.page-title-bar').should('contain.text', ' Hors ligne ').takeEvidence();
  //Restore to English
  uix.appNavigation.language.useEnglish();
});
