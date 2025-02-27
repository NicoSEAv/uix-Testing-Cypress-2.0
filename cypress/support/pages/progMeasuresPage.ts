import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PreviewHeader } from '../components/previewHeader';
import { PageTitleBar } from '../components/pageTitleBar';
import { ProgMeasureBar } from '../components/progMeasureBar';
import { CameraViewer } from '../components/cameraViewer';

function buttonTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).click();
}
function buttonPreview(string) {
  PreviewHeader.get().getButton({ icon: string }).click();
  return cy.get('.page-title-bar');
}
function selectMode(string) {
  ProgMeasureBar.get().getButton({ icon: string }).click();
  return cy.get('.page-title-bar');
}

//TODO: Change function
function buttonCamera(string) {
  CameraViewer.get().getButton({ icon: string }).click();
}

export class ProgMeasurePage implements PageWithRoute {
  readonly url = '/desk/prog-measures';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkProgMeasurePage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.notActiveWindowsManagement();
    uix.navBar.deskModule.notActiveCodes();
    uix.navBar.deskModule.notActiveFonts();
    uix.navBar.deskModule.activeProgrmmableMeasrue();

    return cy.get('sv-page-title').find('.main-title');
  }

  selectProgMeasure(string: 'Precen' | 'PRECENT TV1' | 'Precent. TV2' | 'PRECENT TV1 W') {
    cy.get('sv-grid .grid-content-wrapper tr td ').contains(string).click();
  }

  selectOperations(num, edit?: boolean) {
    cy.get('sv-prog-measure-operations-list .operation-row')
      .eq(num - 1)
      .click();
    if (edit == true) {
      cy.get('sv-prog-measure-operations-list .operation-row')
        .eq(num - 1)
        .find('sv-button .action-button-wrapper .fa-pencil')
        .click();
    }
    return cy.get('.page-title-bar');
  }

  interactiveEditor(option) {
    cy.get('sv-prog-measure-interactive-editor .parameter-row').eq(option).find('.fa-pencil').click();
    cy.wait(1000);
    cy.get('.popover-box .scenario-A input').type('{selectall}{backspace}').type('200').click();
    cy.get('.popover-box .scenario-C input').type('{selectall}{backspace}').type('10').click();
    cy.get('.popover-box .scenario-B input').type('{selectall}{backspace}').type('100').click();
    cy.wait(1000);
    return cy.get('.page-title-bar');
  }

  button = {
    edit: () => buttonPreview('.fa-pencil'),
    copyProgMeasure: () => buttonPreview('.fa-copy'),
    delete: () => buttonPreview('.fa-trash'),
    linkedWindows(name) {
      cy.get('sv-grid table tr td').contains(name).parent().parent().parent().find('td sv-button').click();
    },
    editOperations: () => selectMode('.fa-plus-minus'),
    preview: () => selectMode('.fa-image'),
    interactiveEditor: () => selectMode('.fa-wand-magic-sparkles'),
    reload: () => buttonCamera('.fa-sync'),
    expand: () => buttonCamera('.fa-expand-arrows'),
    snapshot: () => buttonCamera('.fa-camera-polaroid'),
    image: () => buttonCamera('.fa-image'),
    copyOperation() {
      cy.get('sv-prog-measure-operations-list-editor .operation-toolbar sv-button').click();
      cy.get('sv-prog-measure-operations-list-editor sv-select-field').click();
      cy.get('.cdk-overlay-pane').takeEvidence('Copy operation from other Programmble Measaue');
    },
    createNew: () => buttonTitle('fa-file-plus'),
    save: () => buttonTitle('.fa-save'),
    redo: () => buttonTitle('.fa-redo'),
    undo: () => buttonTitle('.fa-undo'),
    discard: () => buttonTitle('.fa-times'),
    exit: () => buttonTitle('.fa-sign-out-alt')
  };
}
