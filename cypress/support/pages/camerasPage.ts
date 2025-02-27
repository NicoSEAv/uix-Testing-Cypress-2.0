import { PageWithRoute } from './pages.models';
import { uix } from '../test-client';
import { should } from 'chai';
import { PageTitleBar } from '../components/pageTitleBar';
import { CameraViewer } from '../components/cameraViewer';
import { ImageViewer } from '../components/imageViewer';

// Function definition used in the code below// Function definition used in the code below
function setDefaultAction(mode: RegExp) {
  PageTitleBar.get().getButton({ icon: '.fa-ellipsis' }).click();
  cy.get('.cdk-overlay-pane button').contains('Set default action').click();
  cy.get('.cdk-overlay-pane').eq(1).find('button').contains(mode).click();
}
function camerabuttons(icon: string, num?: number) {
  CameraViewer.get()
    .getButton({ icon: icon })
    .eq(num - 1)
    .click();
}

export class CamerasPage implements PageWithRoute {
  readonly url = 'view/tv';

  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns used in order to chain this command with .takeEvidence()
   */
  checkCamerasPage() {
    cy.get('sv-page-title').find('.main-title');
    uix.navBar.viewModule.notActiveDashboardButton();
    uix.navBar.viewModule.activeCameraButton();
    uix.navBar.viewModule.notActiveCountersButton();
    uix.navBar.viewModule.notActiveAlarmsButton();

    return cy.get('sv-page-title');
  }

  /**
   * It allows to click the button 'Image' specifying the type and the mode
   * @param type can assume the value Load or Save
   * @param mode can assume the value 'Work', 'Good', Empty', 'Defect', 'Measure Results', 'Local Archive'
   */
  imageButton(
    status: 'active' | 'disabled',
    type?: 'Load' | 'Save' | null,
    mode?: 'Work' | 'Good' | 'Empty' | 'Defect' | 'Measure Results' | 'Local Archive',
    disable?: boolean
  ) {
    if (status == 'active') {
      PageTitleBar.get().getButton({ label: 'Image' }).checkEnabled().click();
      if (type != null) {
        cy.get('[class = cdk-overlay-pane]').contains(type).click();
        if (disable == true) {
          cy.get('[class = cdk-overlay-pane]').contains(mode).takeEvidence();
          cy.get('.cdk-overlay-backdrop-showing').click('center');
        } else {
          cy.get('[class = cdk-overlay-pane]').contains(mode).click().takeEvidence();
        }
      } else {
        cy.get('.cdk-overlay-backdrop-showing').click('center');
      }
    } else {
      PageTitleBar.get().getButton({ label: 'Image' }).checkDisabled().click();
    }
    return cy.get('sv-camera-page');
  }

  /**
   * It allows to access all the buttons of the cameraviewer component
   */
  camerasButton = {
    expand: (num?) => camerabuttons('.fa-expand-arrows', num),
    collapse: () => camerabuttons('.fa-compress'),
    instantReplay: (num?) => camerabuttons('.fa-repeat', num),
    zoomIn: (num?) => camerabuttons('.fa-search-plus', num),
    zoomOut: (num?) => camerabuttons('.fa-search-minus', num)
  };

  button = {
    /**
     * It allows to enter the dialog Real time layout and disable the desired camera viewer
     */
    configure() {
      PageTitleBar.get().getButton({ icon: '.fa-tools' }).checkEnabled().click();
      cy.get('sv-dialog-layout').takeEvidence('Configure Cameras');
      cy.get('sv-button .action-button-wrapper .fa-times').click();
    },

    /**
     * It allows to change the view among the availble ones
     * @returns It allows to append the function .takeEvidence()
     */
    toggleViewButton() {
      PageTitleBar.get().getButton({ icon: '.icon-layout-thumbs' }).checkEnabled().click();
      return cy.get('sv-camera-page');
    },

    /**
     * It allows to interact with the acquisition button, depending on the funtion configured it can assume two status.
     * @param mode it refers to its default action.
     * @param status it refers to the two possible statuses of the button ACTIVE or DISABLED.
     * @returns
     */
    acquisitionButton(
      mode: 'Snapshot' | 'Snap and Measure' | 'Measure' | 'Continuous Snap',
      status: 'active' | 'disabled'
    ) {
      if (status == 'disabled') {
        cy.get('sv-acquisition-button sv-button')
          .children()
          .contains(mode)
          .closest('sv-button')
          .should('have.class', 'disabled')
          .children('sv-enabled-if-badge')
          .click();
      } else {
        cy.get('sv-acquisition-button sv-button').children().contains(mode).click();
      }
      return cy.get('sv-page-title');
    },

    /**
     * It allows to open the Measure Test Page, and it can verify if it is active or not.
     * @param status : it corresponds to the status of the button the user expects to be.
     * @returns : it allwos to chain a .takeEvidence() command in order to screenshoot the page if needed.
     */
    measureTest(status: 'active' | 'disabled') {
      if (status == 'active') {
        PageTitleBar.get().getButton({ icon: '.fa-list-check' }).checkEnabled().click();
      } else {
        PageTitleBar.get().getButton({ icon: '.fa-list-check' }).checkDisabled().click();
        return cy.get('sv-camera-page');
      }
    },

    /**
     * It allows to open the Measure results page by clicking on the corresponding button.
     */
    measureResultsButton(status: 'active' | 'disabled') {
      if (status == 'active') {
        PageTitleBar.get().getButton({ icon: '.fa-chart-bar' }).checkEnabled().click();
        return cy.get('sv-mf-measure-results-page');
      } else {
        PageTitleBar.get().getButton({ icon: '.fa-chart-bar' }).checkDisabled().click();
        return cy.get('sv-camera-page');
      }
    },
    /**
     * It allows to access the instant replay feature.
     * @param camera : corresponds to the camera that is opened for the instant replay
     */
    instantReplay(camera: number) {
      cy.get('sv-camera-viewer sv-button .action-button-wrapper .fa-repeat').eq(camera).click();
    }
  };

  /**
   * Depending on the command it allows to set the default action of the acquisition button
   */
  setDefaultAction = {
    Snapshot: () => setDefaultAction(/^Snapshot$/),
    Measure: () => setDefaultAction(/^Measure$/),
    SnapMeasure: () => setDefaultAction(/^Snap and Measure$/)
  };

  /**
   * It allows to use the continuos snap function, now it just opens it, takeEvidence() and then closes it.
   */
  continuousSnap() {
    cy.get('sv-acquisition-button .fa-ellipsis-v').click();
    cy.get('.cdk-overlay-pane').find('span .fa-camera-rotate').click();
    cy.wait(1000);
    cy.get('sv-continuous-snap-window').takeEvidence('Continuous Snap');
    cy.wait(500);
    cy.get('.close-dialog-btn').click();
  }

  /**
   * It allows to access all the buttons and actions related to the Instant Replay feature
   */
  instantReplayPage = {
    screenPage() {
      cy.get('.page-title-bar').takeEvidence('Instant Replay Page');
    },

    expand() {
      ImageViewer.get().getButton({ icon: '.fa-expand-arrows' }).click();
    },

    reloadFrames() {
      PageTitleBar.get().getButton({ icon: '.fa-repeat' }).click();
    },

    selectCamera(camera: number) {
      cy.get('sv-camera-navbar .page-link .camera-link .camera-number').contains(camera).click();
    },

    exit() {
      PageTitleBar.get().getButton({ icon: '.fa-sign-out-alt' });
    }
  };
}
