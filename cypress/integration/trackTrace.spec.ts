import { uix } from '@sv/testing/uix';
import { takeWhile } from 'cypress/types/lodash';

/**
 * Uncomment the row below in order to disable all the takeEvidence in the test
 */
cy.takeEvidence['disabled'] = true;

//Variable to change in order to enable/disable all the takeEvidence after the setUp()
const screen = false;

it('Track and Trace Page configuration with closed batch - 7.001', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });
  cy.wait(500);
  uix.pages.view.trackTrace.checkTrackPage().takeEvidence();
  uix.pages.view.trackTrace.button.table().takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.trackTrace.button.home().takeEvidence();
});

it('Track and Trace Page configuration with open batch - 7.002', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });

  cy.wait(500);
  uix.pages.view.trackTrace.checkTrackPage();
  uix.pages.view.trackTrace.button.configure().takeEvidence();
  uix.pages.view.trackTrace.configure.selectLayout(' 2 cells ');
  uix.pages.view.trackTrace.configure.ScannerOutput('Component');
  uix.pages.view.trackTrace.configure.apply().takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openTtPage().takeEvidence();
  uix.topBar.changeStatusTo('editing').takeEvidence();
  uix.pages.view.trackTrace.button.table().takeEvidence();
});

it('Track and Trace Page configuration in Ready and Running modes - 7.003', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });
  uix.pages.view.trackTrace.checkTrackPage();
  uix.pages.view.trackTrace.button.configure().takeEvidence();
  uix.pages.view.trackTrace.configure.SVMMessages('Scanner output');
  uix.pages.view.trackTrace.configure.apply().takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openTtPage().takeEvidence();
  uix.pages.view.trackTrace.button.start();
  uix.pages.view.trackTrace.configure.configureDisabled().takeEvidence();
  uix.popover.disabledWrongStatus();
  uix.pages.view.trackTrace.button.stop();
  uix.appNavigation.modules.openRun();
  uix.topBar.changeStatusTo('idle');
  uix.pages.run.batchMgmt.closeBatch(false);
});

it('Save Track and Trace system template - 7.004', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });

  uix.pages.view.trackTrace.checkTrackPage();
  uix.pages.view.trackTrace.button.configure().takeEvidence();
  uix.pages.view.trackTrace.configure.selectLayout(' Single cell ');
  uix.pages.view.trackTrace.configure.Empty('FIFOs diagram');
  uix.pages.view.trackTrace.configure.saveTemplate('TESTING TT');
  uix.pages.view.trackTrace.configure.apply().takeEvidence();
});

it('Delete Track and Trace system template - 7.005', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });

  uix.pages.view.trackTrace.checkTrackPage();
  uix.pages.view.trackTrace.button.configure().takeEvidence();
  uix.pages.view.trackTrace.configure.selectLayout(' 2 + 1 cells ');
  uix.pages.view.trackTrace.configure.Empty('SVM messages');
  uix.pages.view.trackTrace.configure.saveTemplate('TT TEST').takeEvidence();
  uix.pages.view.trackTrace.configure.deleteTemplate('TT TEST').takeEvidence();
  uix.pages.view.trackTrace.configure.apply().takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openTtPage().takeEvidence();
});

it('Load Track and Trace template - 7.006', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });

  uix.pages.view.trackTrace.checkTrackPage();
  uix.pages.view.trackTrace.button.configure().takeEvidence();
  uix.pages.view.trackTrace.configure.selectTemplate('FIFO');
  uix.pages.view.trackTrace.configure.apply().takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openTtPage().takeEvidence();
});

it('Track and Trace Page configuration - 7.007', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.trackTrace, { takeEvidence: screen });

  uix.pages.view.trackTrace.checkTrackPage();
  uix.pages.view.trackTrace.button.configure().takeEvidence();
  uix.pages.view.trackTrace.configure.selectTemplate('FIFO');
  uix.pages.view.trackTrace.configure.apply().takeEvidence();
  uix.pages.view.trackTrace.button.configure();
  uix.pages.view.trackTrace.configure.selectLayout(' 2 cells ');
  uix.pages.view.trackTrace.configure.undo().takeEvidence();
  uix.pages.view.trackTrace.configure.redo().takeEvidence();
  uix.pages.view.trackTrace.configure.discard().takeEvidence();
});
