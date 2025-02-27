import { uix } from '../test-client';
import { ClickScreen } from '../test-client/clickScreen';

function mrButton(
  mode?: 'Cancel' | 'Load Image' | 'Previous defect' | 'Next defect' | 'Previous result' | 'Next result',
  icon?: 'fal fa-times'
) {
  if (icon != null) {
    cy.get('.cdk-drag-handle sv-button').children().children().should('have.class', icon).click();
  } else {
    cy.get('sv-dialog-layout sv-button').contains(mode).click();
  }
}
function mrFilter(
  mode: 'Sorting' | 'Refresh' | 'Good objects' | 'Defective objects' | 'Window',
  option?: 'All windows' | 'DMg' | 'GTIN' | 'EXP' | 'LOT' | 'SN' | 'check' | 'uncheck'
) {
  if (mode == 'Window') {
    cy.get('.list-mode sv-select-field').click();
    cy.get('.cdk-overlay-pane mat-option').contains(option).click();
  } else if (mode == 'Sorting') {
    cy.get('.list-mode .inline-filters sv-button').click();
  } else if (mode == 'Good objects' && option == 'check') {
    cy.get('.list-mode .inline-filters sv-checkbox-field')
      .contains(mode)
      .siblings('.styled-checkbox')
      .find('[type="checkbox"]')
      .check({ force: true });
  } else if (mode == 'Good objects' && option == 'uncheck') {
    cy.get('.list-mode .inline-filters sv-checkbox-field')
      .contains(mode)
      .siblings('.styled-checkbox')
      .find('[type="checkbox"]')
      .uncheck({ force: true });
  } else if (mode == 'Defective objects' && option == 'check') {
    cy.get('.list-mode .inline-filters sv-checkbox-field')
      .contains(mode)
      .siblings('.styled-checkbox')
      .find('[type="checkbox"]')
      .check({ force: true });
  } else if (mode == 'Defective objects' && option == 'uncheck') {
    cy.get('.list-mode .inline-filters sv-checkbox-field')
      .contains(mode)
      .siblings('.styled-checkbox')
      .find('[type="checkbox"]')
      .uncheck({ force: true });
  } else if (mode == 'Refresh') {
    cy.get('.list-mode sv-button.refresh-btn').click();
  }
  return cy.get('sv-load-image-from-mf-result-dialog');
}

function mrTable(camera: number) {
  cy.get('table tr td.col-tv').contains(camera).first().click();
  return cy.get('sv-load-image-from-mf-result-dialog');
}

function mrImage(
  mode:
    | 'Collapse'
    | 'Expand'
    | 'Zoom In'
    | 'Zoom Out'
    | 'Overlay Drawings'
    | 'Previous Defect'
    | 'Next Defect'
    | 'Previous Result'
    | 'Next Result'
) {
  if (mode == 'Collapse') {
    cy.get('.preview-wrapper .viewer-toolbar sv-button').contains('Collapse').click();
  } else if (mode == 'Overlay Drawings') {
    cy.get('.preview-wrapper .viewer-toolbar sv-button').contains('Overlay Drawings').click();
  } else if (mode == 'Zoom In') {
    cy.get('.preview-wrapper .viewer-toolbar sv-button').contains('Zoom In').click();
  } else if (mode == 'Zoom Out') {
    cy.get('.preview-wrapper .viewer-toolbar sv-button').contains('Zoom Out').click();
  } else if (mode == 'Next Defect') {
    cy.get('.preview-wrapper .preview-toolbar sv-button').contains('Next Defect').click();
  } else if (mode == 'Previous Defect') {
    cy.get('.preview-wrapper .preview-toolbar sv-button').contains('Previous Defect').click();
  } else if (mode == 'Previous Result') {
    cy.get('.preview-wrapper .preview-toolbar sv-button').contains('Previous Result').click();
  } else if (mode == 'Next Result') {
    cy.get('.preview-wrapper .preview-toolbar sv-button').contains('Next Result').click();
  }
  return cy.get('sv-load-image-from-mf-result-dialog');
}

function locarcSelectImage(camera: '.im0' | '.im1' | '.im2') {
  cy.get('sv-local-archive-modal .list-scroller .local-archive-img-row .file-name').contains(camera).eq(0).click();
  cy.wait(500);
  return cy.get('sv-local-archive-modal');
}

function locarcButton(btn: 'Close' | 'Zoom In' | 'Zoom Out') {
  if (btn == 'Close') {
    cy.get('sv-local-archive-modal .dialog-title sv-button')
      .children()
      .children()
      .should('have.class', 'fal fa-times')
      .click();
  }

  return cy.get('sv-page-title');
}

export class dialog {
  loadImageMeasureResults = {
    cancel: () => mrButton('Cancel'),
    loadImage: () => mrButton('Load Image'),
    close: () => mrButton(null, 'fal fa-times'),
    filter: option => mrFilter('Window', option),
    sorting: () => mrFilter('Sorting'),
    goodCheck: () => mrFilter('Good objects', 'check'),
    goodUncheck: () => mrFilter('Good objects', 'uncheck'),
    badCheck: () => mrFilter('Defective objects', 'check'),
    badUncheck: () => mrFilter('Defective objects', 'uncheck'),
    refreshButton: () => mrFilter('Refresh'),
    table: (camera: number) => mrTable(camera),
    collapse: () => mrImage('Collapse'),
    nextDefect: () => mrImage('Next Defect'),
    prevDefect: () => mrImage('Previous Defect'),
    nextResult: () => mrImage('Next Result'),
    prevResult: () => mrImage('Previous Result'),
    expand: () => mrImage('Expand'),
    zoomIn: () => mrImage('Zoom In'),
    zoomOut: () => mrImage('Zoom Out'),
    overlayDrawings: () => mrImage('Overlay Drawings')
  };

  localArchive = {
    loadImage: (camera: '.im0' | '.im1' | '.im2') => locarcSelectImage(camera),
    close: () => locarcButton('Close')
  };

  issueList() {
    cy.get('sv-dialog-layout').takeEvidence('IssueList');
    cy.wait(1000);
    cy.get('.sv-dialog .dialog-title sv-button').click();
    cy.wait(1000);
  }

  windowManagement() {
    cy.get('sv-dialog-layout').takeEvidence('Dialog Window Management');
    cy.get('sv-dialog-layout .sv-dialog .dialog-title sv-button').click();
  }

  unsavedChanges(mode: 'Yes' | 'No') {
    if (mode == 'Yes') {
      cy.get('sv-dialog-layout sv-button .action-button-wrapper .fa-trash-alt').click();
    } else {
      cy.get('sv-dialog-layout sv-button .action-button-wrapper .fa-xmark').click();
    }
  }

  changePrecenter(mode: string) {
    cy.get('sv-dialog-layout').takeEvidence('Change Precenter');
    cy.get('sv-dialog-layout sv-button .action-button-wrapper .fa-times').click();
  }

  linkedWindows() {
    cy.get('sv-dialog-layout').takeEvidence('Linked Windows');
    cy.get('sv-dialog-layout .dialog-title sv-button .action-button-wrapper .fa-times').click();
  }

  ruleDialog() {
    cy.get('sv-batch-conf-rules-metadata-modal sv-window-layout sv-button').eq(0).click();
    cy.wait(500);
    cy.get('sv-window-layout').takeEvidence('Rules dialog');
    cy.wait(2000);
    cy.get('sv-batch-conf-rules-metadata-modal sv-window-layout sv-button').children().find('.fa-times').click();
  }

  reworkDialog() {
    cy.get('sv-dialog-layout').takeEvidence('Track and Trace Detail view of an object');
    cy.get('sv-rework-dialog-detail sv-rework-dialog-object-history').click();
    cy.get('.dialog-body .action-menu').click();
    cy.wait(1000);
    cy.get('.dialog-body .action-menu-list').takeEvidence('Rework Operations');
    uix.clcikScreen.realClick();
    cy.get('.dialog-title sv-button').click();
  }
}
