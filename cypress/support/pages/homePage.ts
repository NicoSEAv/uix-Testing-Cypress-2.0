import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';

function selectLink(link: string) {
  cy.get('sv-home-page').children('.main-l-section').find('li').contains(link).click();
}
export class HomePage implements PageWithRoute {
  readonly url = '/desk/home';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkHomePage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.activeHomeButton();
    uix.navBar.deskModule.notActiveMultifunctionControls();
    uix.navBar.deskModule.notActiveArticleManagement();
    uix.navBar.deskModule.notActiveSystemManagement();

    return cy.get('sv-home-page');
  }

  navigateTo = {
    windowManagPage: () => selectLink('Window Management'),
    codesPage: () => selectLink('Codes'),
    fontsPage: () => selectLink('Fonts'),
    progMeasuresPage: () => selectLink('Progr. Measures'),
    batchConfigPage: () => selectLink('Batch Configurations'),
    articleParamPage: () => selectLink('Article Parameters'),
    articlePage: () => selectLink('Articles'),
    systemParamPage: () => selectLink('System Parameters'),
    usersPage: () => selectLink('Users')
  };

  ///////// Varianti dipendenti dalla lingua selezionata ///////////////////////////
  navigateToDE = {
    windowManagPage: () => selectLink('Fensterverwaltung')
  };
  navigateToES = {
    windowManagPage: () => selectLink('Gestión de Ventana')
  };
  naviagteToFR = {
    windowManagPage: () => selectLink('Gestion des fenêtres')
  };
  navigateToIT = {
    windowManagPage: () => selectLink('Gestione Finestre')
  };
  navigateToNL = {
    windowManagPage: () => selectLink(' Vensterbeheer ')
  };
}
