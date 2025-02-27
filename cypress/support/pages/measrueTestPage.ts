import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';
import { CameraViewer } from '../components/cameraViewer';

export class MeasureTestPage {
  checkMeasureTestPage() {
    cy.get('sv-measure-test-page').takeEvidence('Measure Test Page');
  }

  selectWindow(camera: number, windowNum: number) {
    cy.get('.result-wrapper .tv-card')
      .eq(camera - 1)
      .find('.window-data')
      .eq(windowNum - 1)
      .click('center');
    return cy.get('sv-measure-test-page');
  }

  button = {
    exit() {
      PageTitleBar.get().getButton({ icon: '.fa-sign-out-alt' }).click();
    },
    discard() {
      PageTitleBar.get().getButton({ icon: '.fa-times' }).click();
    },
    undo() {
      PageTitleBar.get().getButton({ icon: '.fa-undo' }).click();
    },
    redo() {
      PageTitleBar.get().getButton({ icon: '.fa-redo' }).click();
    },
    snapshot() {
      CameraViewer.get().getButton({ icon: '.fa-camera-polaroid' }).click();
    },
    expand() {
      CameraViewer.get().getButton({ icon: '.fa-expand-arrows' }).click();
    },
    image() {
      CameraViewer.get().getButton({ icon: '.fa-image' }).click();
    },
    zoomIn() {
      CameraViewer.get().getButton({ icon: '.fa-search-plus' }).click();
    },
    zoomOut() {
      CameraViewer.get().getButton({ icon: '.fa-search-minus' }).click();
    },
    reload() {
      CameraViewer.get().getButton({ icon: '.fa-sync' }).click();
    },
    moveWindow() {
      cy.get('.window-detail .window-header sv-button .fa-arrows-up-down-left-right').click();
      return cy.get('sv-camera-test-detail');
    },
    quickAdjust() {
      cy.get('.window-detail .ctrl-header sv-button .fa-sliders-up').click();
    },
    helpTxtQuickAdj(n: number) {
      cy.get('sv-prog-measure-adjustment .value-block')
        .eq(n - 1)
        .find('.quick-adj-help-wrapper')
        .click();
      return cy.get('.popover-box');
    }
  };
}
