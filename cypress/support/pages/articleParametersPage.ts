import { CameraViewer } from '../components/cameraViewer';
import { PageTitleBar } from '../components/pageTitleBar';
import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';

export class ArticleParametersPage implements PageWithRoute {
  readonly url = '/desk/article-params';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkArticleParamPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.notActiveBatchConfigurations();
    uix.navBar.deskModule.activeArticleParameters();
    uix.navBar.deskModule.notActiveArticleButton();

    return cy.get('sv-page-title').find('.main-title');
  }
  /**
   * Includes all the main buttons of the current section
   */
  button = {
    /**
     * It allows to access the multiple editing of the exposure time of the cameras
     * @returns the sv-article-params-page object in order to takeEvidence()
     */
    mutlipleEditing() {
      cy.get('sv-button .action-button-wrapper .fa-ellipsis-v').click();
      cy.get('button .mat-mdc-menu-item-text .fa-circle-check').click();
      return cy.get('sv-article-params-page');
    },
    /**
     * It allows to use the button snapshot of the cameraviewer component on the right
     */
    snapshot() {
      CameraViewer.get().getButton({ icon: '.fa-camera-polaroid' }).click();
    },
    /**
     * It allows to access the configuration page of the warnings and takeEvidence() of it and then closes it.
     */
    configureWarnings() {
      PageTitleBar.get().getButton({ icon: '.fa-message-exclamation' }).click();
      cy.get('sv-dialog-layout').takeEvidence('Configure Warnings');
      cy.get('sv-dialog-layout .dialog-title sv-button .action-button-wrapper .fa-times').click();
    },

    ImagesParameters() {
      cy.get('.mat-mdc-tab .mdc-tab__text-label').contains('Images').click();
    }
  };
}
