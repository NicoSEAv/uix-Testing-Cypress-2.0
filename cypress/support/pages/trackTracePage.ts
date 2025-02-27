import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';

function button(btn) {
  PageTitleBar.get().getButton({ icon: btn }).checkEnabled().click();
  return cy.get('.page-title-bar');
}

function selectComponent(
  oldComponent: 'Empty' | 'FIFOs diagram' | 'Scanner output' | 'SVM messages' | 'Image',
  newComponent: RegExp | string
) {
  cy.get('.editor-toolbar sv-button').contains('Library').click();
  cy.get('sv-dashboard-cell');
  cy.get('sv-select-field').contains(oldComponent).click();
  cy.get('.cdk-overlay-pane mat-option').contains(newComponent).click();
}

export class TrackTracePage implements PageWithRoute {
  readonly url = '/view/tt';

  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns used in order to chain this command with .takeEvidence()
   */
  checkTrackPage() {
    cy.get('sv-page-title').find('.main-title').should('contain.text', 'TRACK AND TRACE');
    uix.navBar.viewModule.notActiveDashboardButton();
    uix.navBar.viewModule.notActiveCameraButton();
    uix.navBar.viewModule.activeTtButton();
    uix.navBar.viewModule.notActiveCountersButton();
    uix.navBar.viewModule.notActiveAlarmsButton();

    return cy.get('sv-page-title');
  }

  /**
   * It allows to click the following buttons:
   * - table
   * - home
   * - configure
   * - start (if eneabled)
   * - stop (if enabled)
   */
  button = {
    table: () => button('.fa-table'),
    home: () => button('.fa-barcode-read'),
    configure: () => button('.fa-table-layout'),
    start: () => button('.fa-play'),
    stop: () => button('.fa-stop'),
    apply: () => button('.fa-check'),
    discard: () => button('.fa-times'),
    undo: () => button('.fa-undo'),
    redo: () => button('.fa-redo')
  };

  configure = {
    selectLayout(layoutName: ' Single cell ' | ' 2 cells ' | ' 2 + 1 cells ') {
      cy.get('.editor-toolbar sv-button').contains('Layout').click();
      cy.get('.layout-editor .grid-template').contains(layoutName).click();
    },
    Empty: oldcomponent => selectComponent(oldcomponent, /^Empty $/),
    FIFOs: oldcomponent => selectComponent(oldcomponent, /^FIFOs diagram $/),
    ScannerOutput: oldcomponent => selectComponent(oldcomponent, /^Scanner output $/),
    SVMMessages: oldcomponent => selectComponent(oldcomponent, /^SVM messages $/),
    Image: oldcomponent => selectComponent(oldcomponent, /^Image $/),

    configureDisabled() {
      PageTitleBar.get().getButton({ label: 'Configure' }).checkDisabled().click();
      return cy.get('.reasons-wrapper .reasons-header');
    },

    saveTemplate(tempName: string) {
      cy.get('sv-button').contains('Save template...').click();
      cy.get('sv-text-field').type(tempName);
      cy.get('sv-button').contains('SAVE').click();
      uix.notification.closeSuccess('Template saved');
      return cy.get('.page-title-bar');
    },

    deleteTemplate(tempName: string) {
      cy.get('.template-name').contains(tempName).click();
      cy.get('button').contains('Delete').click();
      cy.get('sv-dialog-layout sv-button').contains('Delete').click();
      uix.notification.closeSuccess('Template deleted');
      return cy.get('.page-title-bar');
    },

    selectTemplate(templateName: string) {
      cy.get('.dashboard-edit-panel')
        .children('.library-wrapper')
        .children('.dashboard-template')
        .children('.template-name')
        .contains(templateName)
        .click();
      cy.get('button').should('contain.text', 'Load').click();
    }
  };

  //TODO: FIX THE TAB OF THE ID FINDING
  tablePage = {
    selectId(id: string, state?: string) {
      cy.get('sv-tt-table-page .list-tools sv-select-field').eq(0).click();
      cy.get('.cdk-overlay-pane .cdk-listbox .cdk-option').contains(id).click();
      if (state != null) {
        cy.get('sv-tt-table-page .list-tools sv-select-field').eq(1).click();
        cy.get('.cdk-overlay-pane .cdk-listbox .cdk-option').contains(state).click();
      }
    },
    search(id: string) {
      cy.get('sv-text-field input').type(id);
      return cy.get('sv-tt-table-page');
    },

    view(row: number) {
      cy.get('table tr').eq(row).find('sv-button .action-button-wrapper .fa-eye').click();
    }
  };
}
