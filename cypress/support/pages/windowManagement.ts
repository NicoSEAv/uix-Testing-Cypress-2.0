import { PageTitleBar } from '../components/pageTitleBar';
import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { SvButton } from '../components/button';
import { CameraViewer } from '../components/cameraViewer';

function buttonTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).click();
}
function clickButtonCamera(string) {
  CameraViewer.get().getButton({ icon: string }).click();
}
function clickButtonWindow(btn: string) {
  cy.get('sv-mf-window-editor .window-title sv-button .action-button-wrapper').children(btn).click();
}

export class WindowManagPage implements PageWithRoute {
  readonly url = '/desk/winmgmt';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkWindowManagPage() {
    cy.get('sv-page-title');

    uix.navBar.deskModule.activeWindowsManagement();
    uix.navBar.deskModule.notActiveCodes();
    uix.navBar.deskModule.notActiveFonts();
    uix.navBar.deskModule.notActiveProgrmmableMeasrue();

    return cy.get('sv-page-title');
  }

  button = {
    windowManagement: () => buttonTitle('.fa-gears'),
    undo: () => buttonTitle('.fa-undo'),
    redo: () => buttonTitle('.fa-redo'),
    discard: () => buttonTitle('.fa-times'),
    save: () => buttonTitle('.fa-save'),
    issueList: () => buttonTitle('.fa-exclamation-triangle'),
    snapshot: () => clickButtonCamera('.fa-camera-polaroid'),
    expand: () => clickButtonCamera('.fa-expand-arrows'),
    image: () => clickButtonCamera('.fa-image'),
    zoomIn: () => clickButtonCamera('.fa-search-plus'),
    zoomOut: () => clickButtonCamera('.fa-search-minus'),
    copy: () => clickButtonWindow('.fa-copy'),
    duplicate: () => clickButtonWindow('.fa-files'),
    delete: () => clickButtonWindow('.fa-trash'),
    precentTool: () => clickButtonWindow('.fa-arrows-to-dot'),
    multipleSelection() {
      cy.get('sv-mf-window-editor .preview-title sv-button .action-button-wrapper .fa-object-group').click();
      return cy.get('.page-title-bar');
    }
  };

  editingWindow = {
    selectWindow(number) {
      cy.get('sv-mf-window-editor .window-line .window-number').contains(number).click();
    },

    changeWindowName(name: string) {
      cy.get('sv-mf-window-editor .window-title sv-text-field .input-group input').type('{selectall}{backspace}');
      if (name != '') {
        cy.get('sv-mf-window-editor .window-title sv-text-field .input-group input').type(name);
      }
    },

    changeWindowControlType(type: 'Characters' | 'Codes' | 'Programmable measure' | '') {
      cy.get('sv-form-layout sv-select-field').eq(0).click();
      cy.wait(1000);
      cy.get('.cdk-overlay-backdrop-showing').takeEvidence('Manage Control Type of the selected Window');
      if (type != '') {
        cy.get('.cdk-overlay-pane mat-option').contains(type);
      } else {
        cy.get('.cdk-overlay-backdrop-showing').click('center');
      }
    },
    /**
     * It allows to perfomr the camera selection in the camera viewer.
     * @param camera : contains the name of the camera that can be selected
     */
    selectCamera(camera: 'Camera 1' | 'Camera 2' | 'Camera 3') {
      cy.get('sv-camera-selector').click();
      cy.get('.mdc-list button').contains(camera).click();
    },

    addWindow(
      controlType:
        | 'Characters'
        | 'Codes'
        | 'Programmable measure'
        | 'Zeichen'
        | 'Caracteres'
        | 'Caractères'
        | 'Caratteri'
        | 'Tekens',
      controlID: string,
      name: string,
      screeenshot: boolean
    ) {
      cy.get('sv-mf-window-editor .preview-title sv-button .action-button-wrapper .fa-file-plus').click();
      cy.wait(1000);
      CameraViewer.get().getButton({ icon: '.fa-camera-polaroid' }).click();
      if (screeenshot == true) {
        cy.get('.frame-wrapper').takeEvidence('Add Window - Step 1');
      }
      cy.get('.frame-wrapper').click('center');
      cy.wait(1000);
      if (screeenshot == true) {
        cy.get('sv-dialog-layout').takeEvidence('Add Window - Step 2');
      }
      cy.get('sv-dialog-layout .control-types sv-button').contains(controlType).click();
      cy.wait(1000);
      if (screeenshot == true) {
        cy.get('sv-dialog-layout').takeEvidence('Add Window - Step 3');
      }
      cy.get('sv-dialog-layout .control-types sv-button').contains(controlID).click();
      cy.wait(1000);
      if (screeenshot == true) {
        cy.get('sv-dialog-layout').takeEvidence('Add Window - Step 4');
      }
      cy.get('sv-dialog-layout .dialog-body sv-field sv-text-field .input-group input').type(name);
      cy.get('sv-dialog-layout sv-button .dialog-action .fa-file-plus').click();
    }
  };
}
