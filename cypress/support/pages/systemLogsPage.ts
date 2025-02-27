import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';

export class SystemLogsPage implements PageWithRoute {
  readonly url = '/view/alarms';

  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns used in order to chain this command with .takeEvidence()
   */
  checkSysLogsPage() {
    cy.get('sv-page-title').find('.main-title');
    uix.navBar.viewModule.notActiveDashboardButton();
    uix.navBar.viewModule.notActiveCameraButton();
    uix.navBar.viewModule.notActiveCountersButton();
    uix.navBar.viewModule.activeAlarmsButton();

    return cy.get('sv-page-title').find('.main-title');
  }
  /**
   * It allows to verify that the alarm management is wroking properly.
   * @param comment : corresponds to the comment the user writes to reset the alarm.
   */
  resetAlarmComment(comment?: string) {
    cy.get('sv-alarm-dialog')
      .find('.confirmation-text')
      .should('contain', '(A066) Track and Trace: overrun operations (obj=20, SHIPPER SSCC)');
    cy.get('sv-button').contains('RESET').click().takeEvidence();
    uix.notification.closeError('The comment field cannot be empty');
    cy.get('sv-form-layout').find('sv-field').its('length');
    cy.get('sv-autocomplete-field').type(comment);
    cy.get('sv-button').contains('RESET').click();
  }

  /**
   *
   * @param comment
   * @param user
   * @param pswd
   */
  resetAlarmUsr(comment?: string, user?: string, pswd?: string) {
    cy.get('sv-alarm-dialog')
      .find('.confirmation-text')
      .should('contain', '(A066) Track and Trace: overrun operations (obj=20, SHIPPER SSCC)');
    cy.get('sv-form-layout').find('sv-field').its('length');
    cy.get('sv-text-field').eq(0).type('{selectall}{backspace}').type(user);
    cy.get('sv-text-field').eq(1).type('{selectall}{backspace}').type(pswd);
    cy.get('sv-autocomplete-field').type('{selectall}{backspace}').type(comment);
    cy.get('sv-button').contains('RESET').click().takeEvidence();
  }

  /**
   * It allows to go to Audits page
   */
  auditPage() {
    cy.get('.page-title-bar').children('sv-button').contains('Audit').click();
  }
  /**
   * It allows to go back to Alarms page from Audit page. You should be at '#/view/alarms/audits'
   */
  alarmsPage() {
    cy.get('.page-title-bar').children('sv-button').contains('Alarms').click();
  }

  filterAudit() {
    cy.get('sv-audits-page sv-select-field .form-control .fa-caret-down').eq(0).click();
    cy.wait(1000);
    cy.get('.cdk-overlay-pane').takeEvidence('Filtri Audit');
    cy.wait(1000);
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  exportAudit(mode: 'Export' | 'Cancel') {
    PageTitleBar.get().getButton({ icon: '.fa-download' }).checkEnabled().click();
    cy.get('sv-audits-export-modal').takeEvidence('Export Audit PDF');
    if (mode == 'Cancel') {
      cy.get('sv-audits-export-modal sv-button .action-button-wrapper .fa-times').click();
    } else {
      cy.get('sv-audits-export-modal sv-button').contains(mode).click();
    }
  }
}
