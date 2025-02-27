import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';

export class CountersPage {
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns used in order to chain this command with .takeEvidence()
   */
  checkCountersPage() {
    cy.get('sv-page-title').find('.main-title');
    uix.navBar.viewModule.notActiveDashboardButton();
    uix.navBar.viewModule.notActiveCameraButton();
    uix.navBar.viewModule.activeCountersButton();
    uix.navBar.viewModule.notActiveCameraButton();

    return cy.get('sv-page-title');
  }

  /**
   * It allows to enter the Desinger mode of the counters page
   */
  configureCounters() {
    PageTitleBar.get().getButton({ icon: '.fa-table-layout' }).click();
    //Check the title of the module
    cy.get('sv-page-title').find('.main-title');
  }

  /**
   * It allows to select and apply a template for the Counters page
   * @param templateName can assume the values 'Default' and 'No Track and Trace'
   */
  selectTemplate(templateName: 'Default' | 'No Track and Trace') {
    this.configureCounters();
    cy.get('.dashboard-edit-panel')
      .children('.library-wrapper')
      .children('.dashboard-template')
      .contains(templateName)
      .click();
    cy.get('button').should('contain.text', 'Load').click();
    cy.get('.page-title-bar')
      .children('sv-button')
      .find('.fa-check')
      .parent('.action-button-wrapper')
      .find('span[class="ng-star-inserted"]')
      .should('contain.text', 'Apply')
      .click();
  }

  configCounterGauge() {
    cy.get('.editing-overlay .open-editor-btn .fa-cog').eq(0).click();
    cy.wait(500);
    cy.get('sv-dialog-layout').takeEvidence('Counters Gauge Config.');
    cy.wait(1000);
    cy.get('sv-dialog-layout sv-button .action-button-wrapper .fa-times').click();
  }

  buttons = {
    apply() {
      PageTitleBar.get().getButton({ icon: '.fa-check' }).click();
    },
    discard() {
      PageTitleBar.get().getButton({ icon: '.fa-times' }).click();
    },
    undo() {
      PageTitleBar.get().getButton({ icon: '.fa-undo' }).click();
    },
    redo() {
      PageTitleBar.get().getButton({ icon: '.fa-redo' }).click();
    }
  };
}
