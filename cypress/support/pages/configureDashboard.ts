import { uix } from '@sv/testing/uix';
import { should } from 'chai';
import { PageTitleBar } from '../components/pageTitleBar';
import { PageTitleWrap } from '../components/pageTitleWrapper';

// Function definition used in the code below
/**
 * It allows to check that in a certain position of the grid there is certain component.
 * @param cellNum : indicates the position in the gird where to check the component.
 * @param name  : indicates the name of the single component to check.
 */
function verifyComponent(cellNum: number, name: string) {
  cy.get('sv-dashboard-cell');
  cy.get(`[id="cdk-drop-list-${cellNum}"] sv-select-field`).should('contain', name);
}

/**
 * It allows to select another component to visualize in a certain cell.
 * @param cellNum : indicates the position in the gird where the component will be placed.
 * @param component :indicates the name of the new component, that corresponds to the name in the dropdown menu.
 */
function selectComponent(
  oldComponent:
    | 'Empty'
    | 'Alarm list'
    | 'Camera'
    | 'Counter (Gauge)'
    | 'Counter'
    | 'Counter (Trend)'
    | 'Camera Counters'
    | 'FIFOs diagram'
    | 'Scanner output'
    | 'Batch information'
    | 'SVM messages',
  newComponent: RegExp | string
) {
  cy.get('sv-dashboard-cell');
  cy.get('sv-select-field').contains(oldComponent).click();
  cy.get('.sv-select-field-panel .cdk-option').contains(newComponent).click();
}

function editorBar(icon) {
  cy.get('.editor-toolbar').find('sv-button .action-button-wrapper').find(icon).click();
}

export class ConfigureDashboard {
  /**
   * This class allows to configure the first component placing it where the second one is.
   */
  changeTo = {
    Empty: oldComponent => selectComponent(oldComponent, /^Empty $/),
    AlarmList: oldComponent => selectComponent(oldComponent, /^Alarm list $/),
    Camera: oldComponent => selectComponent(oldComponent, /^Camera $/),
    CounterGauge: oldComponent => selectComponent(oldComponent, 'Counter (Gauge)'),
    Counter: oldComponent => selectComponent(oldComponent, /^Counter $/),
    CounterPie: oldComponent => selectComponent(oldComponent, 'Counter (Pie)'),
    CounterTrend: oldComponent => selectComponent(oldComponent, 'Counter (Trend)'),
    CameraCounters: oldComponent => selectComponent(oldComponent, /^Camera Counters $/),
    FifosDiagram: oldComponent => selectComponent(oldComponent, /^FIFOs diagram $/),
    Image: oldComponent => selectComponent(oldComponent, /^Image $/),
    ScannerOutput: oldComponent => selectComponent(oldComponent, /^Scanner output $/),
    BatchInformation: oldComponent => selectComponent(oldComponent, /^Batch information $/),
    SvmMessages: oldComponent => selectComponent(oldComponent, /^SVM messages $/)
  };

  componentCheck = {
    batchInformation: (cellNum: number) => verifyComponent(cellNum, 'Batch information'),
    alarmList: (cellNum: number) => verifyComponent(cellNum, 'Alarm list'),
    counterGauge: (cellNum: number) => verifyComponent(cellNum, 'Counter (Gauge)'),
    camera: (cellNum: number) => verifyComponent(cellNum, 'Camera'),
    counterTrend: (cellNum: number) => verifyComponent(cellNum, 'Counter (Trend)'),
    counterSingle: (cellNum: number) => verifyComponent(cellNum, 'Counter'),
    cameraCounters: (cellNum: number) => verifyComponent(cellNum, 'Camera Counters'),
    fifoDiagram: (cellNum: number) => verifyComponent(cellNum, 'FIFOs diagram'),
    scannerOutput: (cellNum: number) => verifyComponent(cellNum, 'Scanner output'),
    svmMessages: (cellNum: number) => verifyComponent(cellNum, 'SVM messages'),
    emptyCell: (cellNum: number) => verifyComponent(cellNum, 'Empty')
  };

  templateCheck = {
    PS: () => {
      this.componentCheck.batchInformation(0),
        this.componentCheck.alarmList(1),
        this.componentCheck.counterGauge(2),
        this.componentCheck.camera(3),
        this.componentCheck.counterSingle(4),
        this.componentCheck.counterSingle(5),
        this.componentCheck.scannerOutput(6);
    },
    BL: () => {
      this.componentCheck.batchInformation(0),
        this.componentCheck.alarmList(1),
        this.componentCheck.counterGauge(2),
        this.componentCheck.camera(3),
        this.componentCheck.counterTrend(4);
    },
    DEFAULT: () => {
      this.componentCheck.batchInformation(0),
        this.componentCheck.alarmList(1),
        this.componentCheck.camera(2),
        this.componentCheck.cameraCounters(3);
    },
    TrackScan: () => {
      this.componentCheck.batchInformation(0),
        this.componentCheck.alarmList(1),
        this.componentCheck.counterGauge(2),
        this.componentCheck.counterSingle(3),
        this.componentCheck.counterSingle(4),
        this.componentCheck.counterSingle(5),
        this.componentCheck.scannerOutput(6),
        this.componentCheck.svmMessages(7);
    }
  };

  buttons = {
    apply() {
      PageTitleBar.get().getButton({ icon: '.fa-check' }).click();
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

    /**
     * It allows to enter the 'Options' and see if the T&T is enalbed or not, taking evidence of it
     */
    options() {
      PageTitleBar.get().getButton({ icon: '.fa-list-radio' }).click();
      cy.get('sv-checkbox-field').find('label').contains('Enable Track and Trace Page').takeEvidence();
      cy.get('sv-dialog-layout sv-button').contains('Save').click();
    }
  };

  library() {
    //cy.get('.editor-toolbar sv-button .action-button-wrapper .fa-books').click();
    editorBar('.fa-books');
    return cy.get('.page-title-bar');
  }

  components() {
    editorBar('.fa-tools');
    //cy.get('.editor-toolbar sv-button .action-button-wrapper .fa-tools').click();
    return cy.get('.page-title-bar');
  }

  layout() {
    editorBar('.fa-table-cells-large');
    //cy.get('.editor-toolbar sv-button .action-button-wrapper .fa-table-cells-large').click();
    return cy.get('.page-title-bar');
  }

  trackOperations = {
    /**
     * Allows to enable the Track and Trace page for a serialised article. If the batch is open it also performs the Icon Assignment.
     * @param batch : can assume the value open or close.
     */
    enableTracKPage(batch: 'open' | 'close') {
      PageTitleBar.get().getButton({ icon: '.fa-list-radio' }).click();
      cy.get('sv-checkbox-field')
        .find('label')
        .contains('Enable Track and Trace Page')
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
      if (batch == 'open') {
        //Icon assignement, only if the article is serialised and the batch is open
        //Depending on the article and on the logistic levels
        this.iconAssignment();
      }
      cy.get('sv-dialog-layout sv-button').contains('Save').click();
    },

    /**
     * It allows to disable the T&T page.
     */
    disableTrackPage() {
      PageTitleBar.get().getButton({ icon: '.fa-list-radio' }).click();
      cy.get('sv-checkbox-field')
        .find('label')
        .should('contain.text', 'Enable Track and Trace Page')
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .uncheck({ force: true });
      cy.get('sv-dialog-layout sv-button').contains('Save').click();
    },

    /**
     * It performs icon assignement for the article TT3 LIVELLI ALT used for testing (TRY).
     */
    iconAssignment() {
      cy.get('[class="images-row"]');
      cy.get('[src="assets/img/logisticLevels/foldable.svg"]').eq(0).click();
      cy.get('[class="images-row"]');
      cy.get('[src="assets/img/logisticLevels/case.svg"]').eq(1).click();
      cy.get('[class="images-row"]');
      cy.get('[src="assets/img/logisticLevels/pallet.svg"]').eq(2).click();
      cy.get('[class="images-row"]');
      cy.get('[src="assets/img/logisticLevels/case.svg"]').eq(3).click();
    }
  };

  template = {
    /**
     * It allows to select a template named tempName for the dashboard component.
     * @param tempName : can be a new one created by the user or one among the default ones {'Default','BL','TrackScan','PS'}.
     */
    selectTemplate(tempName: string) {
      cy.get('.dashboard-edit-panel')
        .children('.library-wrapper')
        .children('.dashboard-template')
        .children('.template-name')
        .contains(tempName)
        .click();
      cy.get('button').should('contain.text', 'Load').click();
    },
    /**
     * It allows to save the current configuration in a template named tempName.
     * @param tempName the name the user want to give to the Template created.
     */
    saveTemplate(tempName: string) {
      cy.get('sv-button').contains('Save template...').click();
      cy.get('sv-text-field').type(tempName);
      cy.get('sv-button').contains('SAVE').click();
      uix.notification.closeSuccess('Template saved');
    },
    /**
     * It allows to delete a specific template sepcifying the tempName.
     * @param tempName is the name of the teamplate to delete.
     */
    deleteTemplate(tempName: string) {
      cy.get('.template-name').contains(tempName).click();
      cy.get('button').contains('Delete').click();
      cy.get('sv-dialog-layout sv-button').contains('Delete').click();
      uix.notification.closeSuccess('Template deleted');
    }
  };
  /**
   * It allows to select a layout named layoutName among the availble ones.
   * @param layoutName is the name of the layout to select.
   */
  selectLayout(
    layoutName:
      | 'BL dashboard'
      | ' PS dashboard '
      | ' 3 counters '
      | ' 3+2 grid '
      | ' 3x2 grid '
      | ' 8x2 grid '
      | ' 8x3 grid '
      | ' 10x2 grid '
      | ' 10x3 grid '
      | ' 12x6 grid '
  ) {
    cy.get('.layout-editor .grid-template').contains(layoutName).click();
  }

  batchInfoOption() {
    cy.get('sv-dashboard-cell sv-status-summary').parent().find('.editing-overlay .open-editor-btn').click();
    cy.get('sv-status-summary-config-editor').takeEvidence('Batch Information config');
    cy.get('sv-status-summary-config-editor .dialog-title sv-button').click();
  }

  //imporvvisata adatta al singolo test specifico 5.015 e screenshoot
  cameraOption(camera) {
    cy.get('sv-dashboard-cell sv-camera-monitoring').parent().find('.editing-overlay .open-editor-btn').click();
    cy.get('.dashboard-editor sv-select-field').click();
    cy.get('.sv-select-field-panel').takeEvidence('Camera Config');
    cy.get('.sv-select-field-panel .cdk-option').contains(camera).click();
    cy.wait(1000);
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  counterGaugeOption(ID: '1 CARTON SGTIN' | '2 CASE SGTIN' | '3 ID PALLET') {
    cy.get('sv-dashboard-cell sv-counters-gauge').eq(0).parent().find('.editing-overlay .open-editor-btn').click();
    cy.wait(1000);
    cy.get('sv-counters-gauge-config-editor sv-button').contains(ID).click();
    cy.wait(1000);
    cy.get('sv-counters-gauge-config-editor').takeEvidence('Counter Gauge config');
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  counterOption(ID: string) {
    cy.get('sv-dashboard-cell sv-counters-single').parent().find('.editing-overlay .open-editor-btn').click();
    cy.wait(1000);
    cy.get('sv-counters-single-config-editor').takeEvidence('Counter Trend config');
    cy.get('sv-counters-single-config-editor sv-button').contains(ID).click();
    cy.wait(1000);
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  counterPieOption(ID: '1 CARTON SGTIN' | '2 CASE SGTIN' | '3 ID PALLET') {
    cy.get('sv-dashboard-cell sv-counters-donut').parent().find('.editing-overlay .open-editor-btn').click();
    cy.wait(1000);
    cy.get('sv-counters-gauge-config-editor').takeEvidence('Counter Pie config');
    cy.get('sv-counters-gauge-config-editor sv-button').contains(ID).click();
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  // Language dependent component
  changeToDE = {
    CounterGauge: oldComponent => selectComponent(oldComponent, 'Zähler (Spur)'),
    Counter: oldComponent => selectComponent(oldComponent, /^Zähler $/),
    CounterPie: oldComponent => selectComponent(oldComponent, 'Zähler (Stk.)'),
    CounterTrend: oldComponent => selectComponent(oldComponent, 'Counter (Trend)')
  };
  changeToES = {
    CounterGauge: oldComponent => selectComponent(oldComponent, 'Contador (calibre)'),
    Counter: oldComponent => selectComponent(oldComponent, /^Contador $/),
    CounterPie: oldComponent => selectComponent(oldComponent, 'Contador (Tarta)'),
    CounterTrend: oldComponent => selectComponent(oldComponent, 'Counter (Trend)')
  };
  changeToFR = {
    CounterGauge: oldComponent => selectComponent(oldComponent, 'Compteur (Jauge)'),
    Counter: oldComponent => selectComponent(oldComponent, /^Compteurs $/),
    CounterPie: oldComponent => selectComponent(oldComponent, 'Compteur (Pcs)'),
    CounterTrend: oldComponent => selectComponent(oldComponent, 'Compteur (Trend)')
  };
  changeToIT = {
    CounterGauge: oldComponent => selectComponent(oldComponent, 'Contatore (Gauge)'),
    Counter: oldComponent => selectComponent(oldComponent, /^Contatore $/),
    CounterPie: oldComponent => selectComponent(oldComponent, 'Contatore (Torta)'),
    CounterTrend: oldComponent => selectComponent(oldComponent, 'Counter (Trend)')
  };
  changeToNL = {
    CounterGauge: oldComponent => selectComponent(oldComponent, 'Teller (Meter)'),
    Counter: oldComponent => selectComponent(oldComponent, /^Teller $/),
    CounterPie: oldComponent => selectComponent(oldComponent, 'Teller (Cirkeldiagram)'),
    CounterTrend: oldComponent => selectComponent(oldComponent, 'Teller (Trend)')
  };
}
