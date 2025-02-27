import { CameraViewer } from '../components/cameraViewer';
import { PageTitleBar } from '../components/pageTitleBar';
import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';

function extractComponent(name) {
  cy.get('sv-dashboard .grid-wrapper').find(name);
  return cy.get('sv-dashboard .grid-wrapper').find(name);
}

export class DashboardPage implements PageWithRoute {
  readonly url = '/view/dashboard';

  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   */
  checkDashboardPage(status: 'Idle' | 'Editing' | 'Ready' | 'Running' | 'Bereit' | 'Inactief') {
    uix.navBar.viewModule.activeDashboardButton();
    uix.navBar.viewModule.notActiveCameraButton();
    uix.navBar.viewModule.notActiveCountersButton();
    uix.navBar.viewModule.notActiveAlarmsButton();

    return cy.get('.page-title-bar');
  }

  /**
   * Allows to enter the DESIGNER mode of the Dashboard component.
   */
  configureDashboard() {
    PageTitleBar.get().getButton({ icon: '.fa-table-layout' }).click();
    return cy.get('.page-title-bar');
  }

  /**
   * It allows to click the snapshot button of the first camera component
   */
  snapshotButton(status: 'active' | 'disabled') {
    if (status == 'active') {
      cy.get('sv-camera-viewer sv-button .action-button-wrapper').children('.fa-camera-polaroid').eq(0).click();
    } else {
      cy.get('sv-button').contains('Snapshot').eq(0).closest('sv-button').should('have.class', 'disabled');
    }
  }

  changeCamera(num) {
    cy.get('sv-camera-monitoring .camera-select').eq(0).click();
    cy.get('.mdc-list button').contains(num).click();
  }

  zoomIn() {
    CameraViewer.get().getButton({ icon: '.fa-search-plus' }).click();
    return cy.get('.page-title-bar');
  }

  /**
   * It allows to zoom out once for a specific camera.
   * @param num : corresponds to the camera the user wants to zoom out.
   */
  zoomOut() {
    CameraViewer.get().getButton({ icon: '.fa-search-minus' }).click();
    return cy.get('.page-title-bar');
  }

  /**
   *It allows to go in running, it requires that the system status is Ready
   * @param stop : if true after 8s the running is stopped otherwise not
   */
  goInRunning(stop: boolean, screenshoot?: boolean) {
    PageTitleBar.get().getButton({ icon: '.fa-play' }).click();
    uix.notification.closeSuccess();
    if (stop) {
      cy.wait(8000);
      if (screenshoot == true) {
        cy.get('.page-title-bar').takeEvidence('Dashbaord Running');
      }
      PageTitleBar.get().getButton({ icon: '.fa-stop' }).click();
      uix.notification.closeSuccess();
    }
  }

  stopRun() {
    cy.get('.page-title-bar sv-runtime-button .action-button-wrapper .fa-stop').click();
    uix.notification.closeSuccess();
  }

  /**
   * It checks the right behaviour of the slider located in the Dashboad page when the batch is opened and when it is closed.
   * @param selected   can correspond to one of the three status 'idle', 'editing' and 'ready'.
   * @param batch      can assume two values 'open' or 'close'.
   */
  checkSlider(selected: string, batch: string) {
    if (selected == 'idle') {
      if (batch == 'open') {
        cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').should('not.be.empty');
        cy.get('.page-title-bar').children('sv-going-editing-toggle-field').should('not.exist');
        cy.get('.page-title-bar').find('sv-going-automatic-toggle-field .slider-lbl').contains('Idle');
      } else {
        cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').should('not.be.empty');
        cy.get('.page-title-bar').children('sv-going-editing-toggle-field').should('not.exist');
        cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').contains('Idle');
        cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').contains('The batch is closed');
      }
    } else if (selected == 'editing') {
      cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').should('be.empty');
      cy.get('.page-title-bar').children('sv-going-editing-toggle-field').should('not.be.empty');
      cy.get('.page-title-bar').children('sv-going-editing-toggle-field').contains('Editing');
    } else {
      cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').should('not.be.empty');
      cy.get('.page-title-bar').children('sv-going-editing-toggle-field').should('not.exist');
      cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').contains('Ready');
    }
  }

  /**
   * It allows to check the state of the toggle button in the Dashboard page or change it.
   * The System Status selected can be Idle, Editning, Ready. With the conditon of the batch opened or closed.
   */
  toggleFields = {
    checkIdleState(batchIsOpen: boolean) {
      cy.get('.page-title-bar').children('sv-going-editing-toggle-field').should('not.exist');
      cy.get('.page-title-bar').find('sv-going-automatic-toggle-field .slider-lbl').contains('Idle');
      if (!batchIsOpen)
        cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').contains('The batch is closed');
    },
    checkEditingState() {
      cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').should('be.empty');
      cy.get('.page-title-bar').find('sv-going-editing-toggle-field .slider-lbl').contains('Editing');
    },
    checkReadyState() {
      cy.get('.page-title-bar').children('sv-going-editing-toggle-field').should('not.exist');
      cy.get('.page-title-bar').find('sv-going-automatic-toggle-field .slider-lbl').contains('Ready');
    },
    changeToIdle() {
      cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').contains('Idle').click();
    },
    changeToEditing() {
      cy.get('.page-title-bar').children('sv-going-editing-toggle-field').contains('Editing').click();
    },
    changeToReady() {
      cy.get('.page-title-bar').children('sv-going-automatic-toggle-field').contains('Ready').click();
    }
  };

  configureNoArticleSelected() {
    cy.get('sv-enabled-if-badge').click();
    cy.get('.reasons-wrapper .reasons-header').should('contain', 'Disabled because:');
    cy.get('.reasons-wrapper .reason-entry').should('contain', 'No article selected');
    cy.get('.cdk-overlay-backdrop-showing').eq(0).click('center');
    cy.get('sv-go-to-article-selection-page-button sv-button').contains('Select Article').click();
  }
}
