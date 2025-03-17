import { uix } from '@sv/testing/uix';
import { PageWithRoute } from './pages.models';
import { PageTitleBar } from '../components/pageTitleBar';

function buttonTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).click();
}

export class BatchManagementPage implements PageWithRoute {
  url = '/run/batchmgmt';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns used in order to chain this command with .takeEvidence()
   */
  checkBatchMgmtPage() {
    cy.get('sv-page-title[title]').find('.main-title');
    uix.navBar.runModule.activeBatchMgmtButton();

    // we return only to expose a chainable
    return cy.get('sv-page-title').find('.main-title');
  }

  /**
   * It allows to check if the batch is closed and open it inserting the data string
   * @param dataString : it should contain the string with all the fields used for the current batch
   */
  openBatch(dataString: string, screenshoot?: boolean) {
    cy.get('sv-button i.fa-play-circle').closest('sv-button').click();
    cy.get('.cfg-list .cfg-label')
      .contains('1 - Configurazione')
      .closest('.cfg-item')
      .find('sv-button')
      .should('have.text', 'SELECT')
      .click();
    cy.get('.submit-area input').type(dataString);
    if (screenshoot == true) {
      cy.wait(1000);
      cy.get('.submit-area input').takeEvidence();
    }
    cy.get('sv-button .dialog-action.primary-solid').should('not.have.class', 'disabled').click();
    uix.notification.closeSuccess();
  }
  /**
   * It allowws to check if the batch is closed and opens it using the MI
   * @param MI : Material Item of the article selected or that you want to use to open the batch
   * @param dataString : it should contain the string with all the fields used for the current batch
   * @param screenshoot : optional, if it is true screenshoot are taken
   */
  openBatchMI(MI: string, dataString: string, screenshoot?: boolean) {
    cy.get('sv-button i.fa-play-circle').closest('sv-button').click();
    if (screenshoot == true) {
      cy.wait(1000);
      cy.get('sv-select-material-item-step').takeEvidence('Batch Start Select MI');
    }
    //cy.get('sv-button i.fa-play-circle').closest('sv-button').click();
    cy.get('sv-select-material-item-step .material-item-entry .material-item-label')
      .contains(MI)
      .closest('.material-item-entry')
      .find('sv-button')
      .click();
    cy.get('sv-text-field .input-group input').type(dataString);
    if (screenshoot == true) {
      cy.wait(1000);
      cy.get('sv-button').takeEvidence();
    }
    cy.get('sv-button .dialog-action.primary-solid').should('not.have.class', 'disabled').click();
    uix.notification.closeSuccess();
  }
  /**
   * It allows to close the batch currently opened.
   * @param screenshoot : if it is true screenshoot are taken.
   */
  closeBatch(screenshoot: boolean) {
    if (screenshoot) {
      cy.get('sv-batch-management-page').takeEvidence();
    }
    cy.get('sv-button.fab i.fa-stop').click();
    cy.get('sv-button .dialog-action.primary-solid').should('not.have.class', 'disabled').click();
    uix.notification.closeSuccess();
    if (screenshoot) {
      cy.get('sv-batch-management-page').takeEvidence();
    }
  }

  batchReport() {
    buttonTitle('.fa-clipboard-list');
    cy.get('sv-dialog-layout').takeEvidence('Batch Report');
    cy.wait(1000);
    cy.get('sv-batch-report-modal sv-dialog-layout .dialog-title sv-button .fa-times');
  }
}
