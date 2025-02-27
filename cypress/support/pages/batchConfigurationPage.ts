import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';
import { PreviewHeader } from '../components/previewHeader';

// Function definition used in the code below
function buttonPreview(string) {
  PreviewHeader.get().getButton({ icon: string }).click();
  return cy.get('.page-title-bar');
}
function buttonTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).click();
  return cy.get('.page-title-bar');
}

/* ------------------ page object -----------------------*/
export class BatchConfigPage implements PageWithRoute {
  readonly url = '/desk/batchconfs';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkBatchConfigPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.activeBatchConfigurations();
    uix.navBar.deskModule.notActiveArticleParameters();
    uix.navBar.deskModule.notActiveArticleButton();

    return cy.get('sv-page-title').find('.main-title');
  }

  /**
   * It allows to select the Batch Configuration, the availble ones are '1 - Configurazione' | '2 - Configurazione2' and are related to the
   * current archive and article.
   * @returns: used in order to chain this command with .takeEvidence()
   */
  selectBatchConfig(batch) {
    cy.get('sv-grid tr td').contains(batch).click();
  }

  /**
   * It allows to access all the buttons of this section
   */
  button = {
    edit: () => buttonPreview('.fa-pencil'),
    copy: () => buttonPreview('.fa-copy'),
    delete: () => buttonPreview('.fa-trash'),
    createNew: () => buttonTitle('.fa-file-plus'),
    sort: () => buttonTitle('.fa-sort'),
    save: () => buttonTitle('.fa-save'),
    redo: () => buttonTitle('.fa-redo'),
    undo: () => buttonTitle('.fa-undo'),
    discard: () => buttonTitle('.fa-times'),
    exit: () => buttonTitle('.fa-sign-out-alt'),
    rules: () => buttonTitle('.fa-question')
  };

  /**
   * It allows to select one of the tabs of the Batch Configuration section
   * @param tab Windows'|'Printers'|'Standard AIs'|'Custom AIs'|'Internal AIs'|'External AIs'|'Variables'|'Material Items'
   */
  selectTab(
    tab:
      | 'Windows'
      | 'Printers'
      | 'Standard AIs'
      | 'Custom AIs'
      | 'Internal AIs'
      | 'External AIs'
      | 'Variables'
      | 'Material Items'
  ) {
    cy.get('.mat-mdc-tab-labels .mdc-tab .mdc-tab__content .mdc-tab__text-label').contains(tab).click();
    return cy.get('.page-title-bar');
  }

  //Experimental used for taking screenshoots for documentation
  windows = {
    textTemplate(line: number, text: string) {
      cy.get('sv-form-array-editor .table-grid sv-syntax-field')
        .eq(line - 1)
        .type('{selectall}{backspace}')
        .type(text);
      cy.wait(2000);
      cy.get('.page-title-bar').takeEvidence('Windows Autocomplete');
    }
  };
  printers = {
    selectPrinter(name: 'Wolke' | 'Zebra Case' | 'Zebra Case SCC' | 'Zebra Pallet') {
      cy.get('.printers-grid-wrapper sv-expansion-panel .card-title .printer-name-box').contains(name).click();
      return cy.get('.page-title-bar');
    },
    selectLine(line: number, text) {
      cy.get('.table-grid sv-syntax-field')
        .eq(line - 1)
        .type('{selectall}{backspace}');
      cy.get('.table-grid sv-syntax-field')
        .eq(line - 1)
        .find('sv-button .action-button-wrapper .fa-wand-magic-sparkles')
        //.contains('Autocomplete')
        .click();
      cy.wait(3000);
      cy.get('.autocomplete-list .autocomplete-option').contains('Windows').click();
      cy.wait(3000);
      cy.get('.page-title-bar').takeEvidence('Printer Autocomplete');
      cy.wait(1000);
      cy.get('.cdk-overlay-backdrop-showing').realClick({ x: 99, y: 140 });
      cy.wait(1000);
      cy.get('.table-grid sv-syntax-field')
        .eq(line - 1)
        .type(text);
    }
  };

  /* Commands in language for screenshoot */
  selectTabDE(tab: 'Drucker' | 'Standard-AIs' | 'Materialartikel') {
    cy.get('.mat-mdc-tab-labels .mdc-tab .mdc-tab__content .mdc-tab__text-label').contains(tab).click();
    return cy.get('.page-title-bar');
  }
  selectTabES(tab: 'Impresoras' | 'AIs estándares' | 'Material Item') {
    cy.get('.mat-mdc-tab-labels .mdc-tab .mdc-tab__content .mdc-tab__text-label').contains(tab).click();
    return cy.get('.page-title-bar');
  }
  selectTabFR(tab: 'Imprimantes' | 'AI Standard' | 'Codes des Materiaux') {
    cy.get('.mat-mdc-tab-labels .mdc-tab .mdc-tab__content .mdc-tab__text-label').contains(tab).click();
    return cy.get('.page-title-bar');
  }
  selectTabIT(tab: 'Stampanti' | 'AI Standard' | 'Material Item') {
    cy.get('.mat-mdc-tab-labels .mdc-tab .mdc-tab__content .mdc-tab__text-label').contains(tab).click();
    return cy.get('.page-title-bar');
  }
  selectTabNL(tab: 'Printers' | 'Aangepaste AI’s' | 'Materiaalitems') {
    cy.get('.mat-mdc-tab-labels .mdc-tab .mdc-tab__content .mdc-tab__text-label').contains(tab).click();
    return cy.get('.page-title-bar');
  }
}
