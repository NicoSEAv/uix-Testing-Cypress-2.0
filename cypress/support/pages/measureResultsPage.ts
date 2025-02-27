import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';
import { ImageViewer } from '../components/imageViewer';
import { FilterResults } from '../components/filtersBar';

/**
 * It allows to select the controls to visualize and so filter the results
 * @param control it corresponds to the available controls that can be selected
 */
function selectControlType(control: 'All control types' | 'Code' | 'Characters' | 'Programmable measure') {
  cy.get('.grid-toolbar sv-select-field').eq(0).click();
  cy.get('.cdk-overlay-pane mat-option').children().contains(control).click();
  return cy.get('sv-mf-measure-results-page');
}

function selectTV(tv: string) {
  cy.get('.grid-toolbar sv-select-field').eq(1).click();
  cy.get('.cdk-option').children().contains(tv).click();
  return cy.get('sv-mf-measure-results-page');
}

function selectWindow(window: 'All windows' | '1 -' | '2 -' | '3 -' | '4 -' | '5 -' | '6 -' | '7 -' | '8 -' | '9 -') {
  cy.get('.grid-toolbar sv-select-field').eq(2).click();
  cy.get('.cdk-overlay-pane mat-option').children().contains(window).click();
  return cy.get('sv-mf-measure-results-page');
}

function moveResults(type: 'Defect' | 'Result', mode: 'Previous' | 'Next') {
  cy.get('.preview-wrapper .preview-toolbar sv-button').children().contains(`${mode} ${type}`).click();
  return cy.get('sv-mf-measure-results-page');
}

function button(
  type: '.fa-expand-arrows' | '.fa-compress' | '.fa-search-plus' | '.fa-search-minus ' | '.fa-draw-square'
) {
  ImageViewer.get().getButton({ icon: type }).checkEnabled().click();
  return cy.get('sv-image-viewer');
}

function loadImage(status: 'active' | 'disabled') {
  if (status == 'disabled') {
    cy.get('sv-image-viewer sv-button')
      .children()
      .contains('Load Image')
      .closest('sv-button')
      .should('have.class', 'disabled');
  } else {
    cy.get('sv-image-viewer sv-button').children().contains('Load Image').click();
  }
  return cy.get('sv-image-viewer');
}

export class MeasureResultsPage {
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns used in order to chain this command with .takeEvidence()
   */
  checkMeasureResultsPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.viewModule.notActiveDashboardButton();
    uix.navBar.viewModule.activeCameraButton();
    uix.navBar.viewModule.notActiveCountersButton();
    uix.navBar.viewModule.notActiveAlarmsButton();

    return cy.get('sv-page-title');
  }

  /**
   * It allows to access the Detail Mode of the Measure results page
   */
  goToDetail() {
    FilterResults.get().getButton({ icon: '.fa-memo-circle-info' }).click();
    return cy.get('sv-mf-measure-results-page');
  }

  /**
   * It allows to access the List Mode of the Measure results page
   */
  goToList() {
    FilterResults.get().getButton({ icon: '.fa-ballot' }).click();
    return cy.get('sv-mf-measure-results-page');
  }

  /**
   * It allows to select a certain row of the table of Measure Results
   * @param row it is a number corresponding to the results we want to select
   * @returns it allows to append the function .takeEvidence
   */
  selectMeasureResult(row: number) {
    cy.get('sv-mf-measure-results-page cdk-virtual-scroll-viewport table tr').eq(row).click();
    return cy.get('sv-mf-measure-results-page');
  }

  /**
   * It allows to expand the details of the measure results selected in the Detail mode
   * @returns it allows to append the function .takeEvidence
   */
  expandInfoDetail() {
    cy.get('sv-expansion-panel').click();
    return cy.get('sv-page-title');
  }

  /**
   * It allows to exit from the Measure Results section going back to Cameras
   */
  exit() {
    PageTitleBar.get().getButton({ icon: '.fa-sign-out-alt' });
  }

  /**
   * It allows to refresh the Measure Results table using the corresponding button
   * @returns it allows to append the function .takeEvidence
   */
  refershButton() {
    cy.get('sv-button.refresh-btn').click();
    return cy.get('sv-mf-measure-results-page');
  }

  /**
   * It allows to empty the table of the Measure Results
   * @returns it allows to append the function .takeEvidence
   */
  resetButton() {
    PageTitleBar.get().getButton({ icon: '.fa-trash' }).checkEnabled().click();
    return cy.get('sv-page-title');
  }

  /**
   * It allows to sort the Measure results in the table
   * @param mode can assume two values depending on the sorting we want to obatin
   * @returns it allows to append the function .takeEvidence
   */
  sortingButton(mode: 'up' | 'down') {
    if (mode == 'up') {
      cy.get('.grid-toolbar sv-button').find('.fa-arrow-up').click();
    } else {
      cy.get('.grid-toolbar sv-button').find('.fa-arrow-down').click();
    }
    return cy.get('sv-mf-measure-results-page');
  }

  /**
   * It allows to use the 'Good objects' filter
   * @param force true to check the filter, false to uncheck it
   * @returns it allows to append the function .takeEvidence
   */
  goodObjFilter(force: boolean) {
    if (force == true) {
      cy.get('.grid-toolbar sv-checkbox-field')
        .contains('Good objects')
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    } else {
      cy.get('.grid-toolbar sv-checkbox-field')
        .contains('Good objects')
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .uncheck({ force: false });
    }
    return cy.get('sv-mf-measure-results-page');
  }

  /**
   * It allows to use the 'Defective objects' filter
   * @param force true to check the filter, false to uncheck it
   * @returns it allows to append the function .takeEvidence
   */
  defectiveObjFilter(force: boolean) {
    if (force == true) {
      cy.get('.grid-toolbar sv-checkbox-field')
        .contains('Defective objects')
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    } else {
      cy.get('.grid-toolbar sv-checkbox-field')
        .contains('Defective objects')
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .uncheck({ force: false });
    }
    return cy.get('sv-mf-measure-results-page');
  }

  controlType = {
    AllControlTypes: () => selectControlType('All control types'),
    Code: () => selectControlType('Code'),
    Characters: () => selectControlType('Characters'),
    ProgrammableMeasure: () => selectControlType('Programmable measure')
  };

  tv = {
    AllTV: () => selectTV('All TV'),
    Camera1: () => selectTV('Camera 1'),
    Camera2: () => selectTV('Camera 2'),
    Camera3: () => selectTV('Camera 3'),
    Kamera3: () => selectTV('Kamera 3'),
    Càmara3: () => selectTV('Cámara 3'),
    Caméra3: () => selectTV('Caméra 3')
  };

  window = {
    AllWindows: () => selectWindow('All windows'),
    Window1: () => selectWindow('1 -'),
    Window2: () => selectWindow('2 -'),
    Window3: () => selectWindow('3 -'),
    Window4: () => selectWindow('4 -'),
    Window5: () => selectWindow('5 -'),
    Window6: () => selectWindow('6 -'),
    Window7: () => selectWindow('7 -'),
    Window8: () => selectWindow('8 -'),
    Window9: () => selectWindow('9 -')
  };

  detail = {
    NextDefect: () => moveResults('Defect', 'Next'),
    PrevDefect: () => moveResults('Defect', 'Previous'),
    NextResult: () => moveResults('Result', 'Next'),
    PrevResult: () => moveResults('Result', 'Previous'),
    ExpandImage: () => button('.fa-expand-arrows'),
    CollapseImage: () => button('.fa-compress'),
    ZoomIn: () => button('.fa-search-plus'),
    ZoomOut: () => button('.fa-search-minus '),
    OverlayDrawings: () => button('.fa-draw-square'),
    LoadImage: () => loadImage('active'),
    LoadImageDisabled: () => loadImage('disabled')
  };
}
