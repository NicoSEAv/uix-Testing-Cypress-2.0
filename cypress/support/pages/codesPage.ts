import { cli } from 'cypress';
import { PageTitleBar } from '../components/pageTitleBar';
import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PreviewHeader } from '../components/previewHeader';

// Function definition used in the code below
function buttonPreview(string) {
  PreviewHeader.get().getButton({ icon: string }).click();
  return cy.get('.page-title-bar');
}
function buttonTitle(string) {
  PageTitleBar.get().getButton({ label: string }).checkEnabled().click();
}
function selectTab(name: 'Options' | 'Grading' | 'ECC200' | 'QR') {
  cy.get('.mat-mdc-tab-labels .mdc-tab__content').contains(name).click();
  return cy.get('.page-title-bar');
}

export class CodesPage implements PageWithRoute {
  readonly url = '/desk/codes';

  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkCodesPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.notActiveWindowsManagement();
    uix.navBar.deskModule.activeCodes();
    uix.navBar.deskModule.notActiveFonts();
    uix.navBar.deskModule.notActiveProgrmmableMeasrue();

    return cy.get('sv-page-title').find('.main-title');
  }
  /**
   * It allows to access all the buttons of the section
   */
  button = {
    edit: () => buttonPreview('.fa-pencil'),
    copy: () => buttonPreview('.fa-copy'),
    delete: () => buttonPreview('.fa-trash'),
    linkedWindows(name) {
      cy.get('sv-grid table tr td').contains(name).parent().parent().parent().find('td sv-button').click();
    },
    createNew: () => buttonTitle('.fa-file-plus'),
    exit: () => buttonTitle('.fa-sign-out-alt'),
    save: () => buttonTitle('.fa-save'),
    redo: () => buttonTitle('.fa-redo'),
    undo: () => buttonTitle('.fa-undo'),
    discard: () => buttonTitle('.fa-times')
  };

  /**
   * It allows to reach the different tabs of the Codes page
   */
  tabs = {
    Options: () => selectTab('Options'),
    Grading: () => selectTab('Grading'),
    ECC200: () => selectTab('ECC200'),
    QR: () => selectTab('QR')
  };
}
