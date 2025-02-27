import { uix } from '@sv/testing/uix';
import { PageTitleBar } from 'cypress/support/components/pageTitleBar';
import { PageTitleWrap } from 'cypress/support/components/pageTitleWrapper';
import { mean } from 'cypress/types/lodash';
/**
 * Uncomment the row below in order to disable all the takeEvidence in the test
 */
cy.takeEvidence['disabled'] = true;

//Variable to change in order to enable/disable all the takeEvidence after the setUp()
const screen = false;
/**
 * 'Enable and properly configure the Application Server in the harle.ini file.
Start the BVH version specified in Suite.
Log in with EXPERT.
From SV menu --> Configuration --> Images Management, enable the flag in the section "Images Memorized during the Ready Work".
Click on "Choose Images" and enable the options related to the controls performed in the current article.
Confirm to save the settings and close the dialogues.
Logout.
 */

it('Configure button - 6.001, 6.002', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.configure(1);
  uix.pages.view.cameras.configure(3);
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.configure(1);
  uix.pages.view.cameras.configure(3);

  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.configure(1);
  uix.pages.view.cameras.configure(3);
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.configure(1);
  uix.pages.view.cameras.configure(3);

  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.cameras.configure(1);
  uix.pages.view.cameras.configure(3);
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.configure(1);
  uix.pages.view.cameras.configure(3);
});
it('Camera zoom - 6.004', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.snapshotButton('active');
  uix.pages.view.dashboard.page.zoomIn(1).takeEvidence();
  uix.pages.view.dashboard.page.zoomOut(1).takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.CameraPage.zoomIn(1).takeEvidence();
  uix.pages.view.cameras.CameraPage.zoomOut(1).takeEvidence();

  uix
    .setup()
    .asExpertUser()
    .withStatus('Editing', 'NON SERIALISED', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.snapshotButton('active');
  uix.pages.view.dashboard.page.zoomIn(1).takeEvidence();
  uix.pages.view.dashboard.page.zoomOut(1).takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.CameraPage.zoomIn(1).takeEvidence();
  uix.pages.view.cameras.CameraPage.zoomOut(1).takeEvidence();

  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.snapshotButton('disabled');
  uix.pages.view.dashboard.page.zoomIn(1).takeEvidence();
  uix.pages.view.dashboard.page.zoomOut(1).takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'disabled');
  uix.popover.disabledWrongStatus();
  uix.pages.view.cameras.CameraPage.zoomIn(1).takeEvidence();
  uix.pages.view.cameras.CameraPage.zoomOut(1).takeEvidence();
});

it('Camera zoom: OPERATOR - 6.005', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.snapshotButton('active');
  uix.pages.view.dashboard.page.zoomIn(1).takeEvidence();
  uix.pages.view.dashboard.page.zoomOut(1).takeEvidence();
  uix.login.logoutUser();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.pages.view.dashboard.page.snapshotButton('active');
  uix.pages.view.dashboard.page.zoomIn(1).takeEvidence();
  uix.pages.view.dashboard.page.zoomOut(1).takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.CameraPage.zoomIn(1).takeEvidence();
  uix.pages.view.cameras.CameraPage.zoomOut(1).takeEvidence();
});

it('Toggle view button - 6.006', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();

  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();

  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
  uix.pages.view.cameras.toggleViewButton().takeEvidence();

  uix
    .setup()
    .asOperator()
    .withStatus('Idle', 'NON SERIALISED', '*')
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });
  uix.pages.view.cameras.toggleViewButton().takeEvidence();
});

it('Snapshot button - 6.008 + 6.009 + 6.010 + 6.011', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.login.logoutUser();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active').takeEvidence(); //6.011
  uix.login.loginNoUsrManagement();
  uix.topBar.changeStatusTo('ready');
  cy.wait(1000);
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'disabled').takeEvidence();
  uix.popover.disabledWrongStatus();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.goInRunning(false);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'disabled').takeEvidence();
  uix.popover.disabledWrongStatus();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(1000);
});

it('Current button - 6.012 + 6.013 + 6.014 + 6.015 + 6.016 + 6.017', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });
  // 6.012 + 6.013 + 6.015 + 6.016 + 6.017 as EXPERT
  cy.wait(300);
  uix.pages.view.cameras.setDefaultAction.Measure();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledWrongStatus();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.goInRunning(false);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledWrongStatus();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(3000);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.acquisitionButton('Measure', 'active').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.acquisitionButton('Measure', 'active').takeEvidence();
  // 6.012 + 6.013 + 6.015 + 6.016 + 6.017 as OPERATOR
  uix.login.logoutUser();
  uix.pages.view.cameras.acquisitionButton('Measure', 'active').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.pages.view.cameras.acquisitionButton('Measure', 'active').takeEvidence();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledWrongStatus();

  //6.014
  uix.topBar.changeStatusTo('idle');
  uix.login.loginNoUsrManagement();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
  uix.appNavigation.modules.openView();
  uix.navBar.viewModule.openCamerasPage();

  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledBatchClosed();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledBatchClosed();

  uix.login.logoutUser();
  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledBatchClosed();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.acquisitionButton('Measure', 'disabled').takeEvidence();
  uix.popover.disabledBatchClosed();
});

it('Image button  1 - 6.018 + 6.021', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Editing', 'NON SERIALISED', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });
  cy.wait(300);
  uix.pages.view.cameras.imageButton('active', null).takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.pages.view.cameras.imageButton('active', null).takeEvidence();
  uix.login.logoutUser();
  uix.pages.view.cameras.imageButton('disabled').takeEvidence();
  uix.popover.disabledUserAuthorization();
});

it('Image button 2 - 6.019 + 6.020', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.imageButton('disabled').takeEvidence();
  uix.popover.disabledWrongStatus();

  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.goInRunning(false);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('disabled').takeEvidence();
  uix.popover.disabledWrongStatus();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.stopRun();
});
it('Save and Load Work Images - 6.022', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });
  uix.pages.view.cameras.setDefaultAction.Snapshot();
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.imageButton('active', 'Save', 'Work');
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Work');
});

it('Save and Load Good Images - 6.023', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.imageButton('active', 'Save', 'Good');
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Good');
});

it('Save and Load Empty Images - 6.024', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.imageButton('active', 'Save', 'Empty');
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Empty');
});

it('Save and Load Defect Images - 6.025', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.imageButton('active', 'Save', 'Defect');
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Defect');
});

it('Load images from Measure Results: Closed Batch - 6.026', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results', true);
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results', true);
});

it('Load images from Measure Results: Opened Batch - 6.027', () => {
  //From SV menu --> Configuration --> Images Management, enable the flag in the section "Images Memorized during the Ready Work".
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  cy.wait(300);
  uix.pages.view.cameras.acquisitionButton('Snapshot', 'active');
  uix.pages.view.cameras.setDefaultAction.Measure();
  cy.wait(300);
  uix.pages.view.cameras.acquisitionButton('Measure', 'active');
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results');
  uix.dialog.loadImageMeasureResults.cancel();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results');
  uix.dialog.loadImageMeasureResults.filter('All windows');
  uix.dialog.loadImageMeasureResults.close();
});
it('Load images from Measure Results - 6.028', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'NON SERIALISED', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(true);
  cy.wait(4000);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.close();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results - 6.030', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.filter('DM Case');
  uix.dialog.loadImageMeasureResults.table(2).takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results - 6.031', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.cancel();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results: Sorting - 6.032', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.refreshButton().takeEvidence();
  uix.dialog.loadImageMeasureResults.sorting().takeEvidence();
  uix.dialog.loadImageMeasureResults.sorting().takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1);
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results: Filters - 6.033', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results');
  uix.dialog.loadImageMeasureResults.goodUncheck();
  uix.dialog.loadImageMeasureResults.badUncheck();
  uix.dialog.loadImageMeasureResults.goodCheck().takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results: Filters - 6.034', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.filter('DMg').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results: Image module - 6.035', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.collapse().takeEvidence();
  uix.dialog.loadImageMeasureResults.refreshButton().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});
it('Load images from Measure Results: Navigation between defects in the Image module - 6.036', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.prevDefect().takeEvidence();
  uix.dialog.loadImageMeasureResults.nextDefect().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.collapse();
  uix.dialog.loadImageMeasureResults.prevDefect().takeEvidence();
  uix.dialog.loadImageMeasureResults.nextDefect().takeEvidence();
  uix.dialog.loadImageMeasureResults.close();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results: Navigation between results in the Image module - 6.037', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.prevResult().takeEvidence();
  uix.dialog.loadImageMeasureResults.nextResult().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results');
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.collapse();
  uix.dialog.loadImageMeasureResults.prevResult().takeEvidence();
  uix.dialog.loadImageMeasureResults.nextResult().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results:  Zoom level in the Image module - 6.038', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.zoomIn().takeEvidence();
  uix.dialog.loadImageMeasureResults.zoomIn().takeEvidence();
  uix.dialog.loadImageMeasureResults.zoomOut().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.collapse().takeEvidence();
  uix.dialog.loadImageMeasureResults.zoomIn().takeEvidence();
  uix.dialog.loadImageMeasureResults.zoomIn().takeEvidence();
  uix.dialog.loadImageMeasureResults.zoomOut().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load images from Measure Results:  Overlay drawings in the Image module - 6.039', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(4000);
  uix.pages.view.dashboard.page.stopRun();
  cy.wait(4500);
  uix.topBar.changeStatusTo('idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Measure Results').takeEvidence();
  uix.dialog.loadImageMeasureResults.table(1).takeEvidence();
  uix.dialog.loadImageMeasureResults.overlayDrawings().takeEvidence();
  uix.dialog.loadImageMeasureResults.loadImage();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load Images from Local Archieve: closed batch, OnIdle - 6.040', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.checkCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Local Archive');
  uix.dialog.localArchive.loadImage('.im0').takeEvidence();
  uix.dialog.localArchive.loadImage('.im1').takeEvidence();
  uix.dialog.localArchive.loadImage('.im2').takeEvidence();
  uix.dialog.localArchive.close().takeEvidence();
});

it('Load Images from Local Archieve: open batch, OnIdle - 6.041', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.checkCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Local Archive');
  uix.dialog.localArchive.loadImage('.im0').takeEvidence();
  uix.dialog.localArchive.loadImage('.im1').takeEvidence();
  uix.dialog.localArchive.loadImage('.im2').takeEvidence();
  uix.dialog.localArchive.close().takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
});

it('Load Images from Local Archieve: closed batch, Editing - 6.042', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Editing', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.checkCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Local Archive');
  uix.dialog.localArchive.loadImage('.im0').takeEvidence();
  uix.dialog.localArchive.loadImage('.im1').takeEvidence();
  uix.dialog.localArchive.loadImage('.im2').takeEvidence();
  uix.dialog.localArchive.close().takeEvidence();
});

it('Load Images from Local Archieve: open batch, Editing - 6.043', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Editing', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.checkCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Local Archive');
  uix.dialog.localArchive.loadImage('.im0').takeEvidence();
  uix.dialog.localArchive.loadImage('.im1').takeEvidence();
  uix.dialog.localArchive.loadImage('.im2').takeEvidence();
  uix.dialog.localArchive.close();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
});

it('Measure Results button: closed batch - 6.044', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.measureResultsButton('disabled').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.cameras.measureResultsButton('disabled').takeEvidence();
  uix.login.logoutUser();
  uix.pages.view.cameras.measureResultsButton('disabled').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.pages.view.cameras.measureResultsButton('disabled').takeEvidence();
});

it('Measure Results button: Ready mode - 6.045', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.measureResultsButton('active').takeEvidence();
  uix.pages.view.measureResults.checkMeasureResultsPage().takeEvidence();
});

it('Measure Results button: Running mode - 6.046', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.goInRunning(false);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('disabled').takeEvidence();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.stopRun();
});

it('Measure Results button: open batch and Ready mode - 6.047', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.cameras, { takeEvidence: screen });

  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  uix.pages.view.cameras.measureResultsButton('active').takeEvidence();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.measureResults.refershButton().takeEvidence();
  uix.pages.view.measureResults.goToDetail().takeEvidence();
  uix.pages.view.measureResults.goToList().takeEvidence();
  uix.pages.view.measureResults.exit();
});

it('Measure Results - 6.048', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.pages.view.measureResults.selectMeasureResult(0).takeEvidence();
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.expandInfoDetail().takeEvidence();
  uix.pages.view.measureResults.selectMeasureResult(10).takeEvidence();
});

it('Measure Results: load image from detail view in Ready mode - 6.049', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active').takeEvidence();
  uix.pages.view.measureResults.selectMeasureResult(0).takeEvidence();
  uix.pages.view.measureResults.goToDetail().takeEvidence();
  uix.pages.view.measureResults.detail.ExpandImage();
  uix.pages.view.measureResults.detail.LoadImageDisabled().takeEvidence();
});

it('Measure Results: reset data - 6.050', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active').takeEvidence();
  uix.pages.view.measureResults.resetButton().takeEvidence();
});

it('Measure Results: sorting - 6.052', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.refershButton().takeEvidence();
  uix.pages.view.measureResults.sortingButton('up').takeEvidence();
  uix.pages.view.measureResults.sortingButton('down').takeEvidence();
});

it('Measure Results: filters - 6.053', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.goodObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.defectiveObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(true).takeEvidence();
});

it('Measure Results: filters - 6.054', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.controlType.Code().takeEvidence();
  uix.pages.view.measureResults.tv.Camera1().takeEvidence();
  uix.pages.view.measureResults.window.Window1().takeEvidence();
  uix.pages.view.measureResults.window.Window2().takeEvidence();
});

it('Measure Results: filters - 6.055', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.tv.Camera2().takeEvidence();
  uix.pages.view.measureResults.window.Window6().takeEvidence();
  uix.pages.view.measureResults.controlType.Code().takeEvidence();
  uix.pages.view.measureResults.controlType.Characters().takeEvidence();
});

it('Measure Results: filters - 6.056', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.window.Window1().takeEvidence();
  uix.pages.view.measureResults.tv.Camera1().takeEvidence();
  uix.pages.view.measureResults.controlType.Code();
  uix.pages.view.measureResults.controlType.ProgrammableMeasure();
});

it('Measure Results: filters - 6.057', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active').takeEvidence();
  uix.pages.view.measureResults.controlType.Characters().takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.defectiveObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(true).takeEvidence();
});

it('Measure Results: filters - 6.058', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.tv.Camera2().takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.defectiveObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(true).takeEvidence();
});

it('Measure Results: filters - 6.059', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.window.Window9().takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.defectiveObjFilter(false).takeEvidence();
  uix.pages.view.measureResults.goodObjFilter(true).takeEvidence();
});

it('Measure Results: expansion of the detail view - 6.060', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.selectMeasureResult(4).takeEvidence();
  uix.pages.view.measureResults.goToDetail().takeEvidence();
  uix.pages.view.measureResults.detail.ExpandImage().takeEvidence();
  uix.pages.view.measureResults.detail.CollapseImage().takeEvidence();
});

it('Measure Results: navigation between defects in the detail view - 6.061', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.ExpandImage().takeEvidence();
  uix.pages.view.measureResults.detail.PrevDefect().takeEvidence();
  uix.pages.view.measureResults.detail.NextDefect().takeEvidence();
});

it('Measure Results: navigation between results in the detail view - 6.062', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.ExpandImage().takeEvidence();
  uix.pages.view.measureResults.detail.PrevResult().takeEvidence();
  uix.pages.view.measureResults.detail.NextResult().takeEvidence();
});

it('Measure Results: zoom level in the detail view - 6.063', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.ExpandImage().takeEvidence();
  uix.pages.view.measureResults.detail.ZoomIn().takeEvidence();
  uix.pages.view.measureResults.detail.ZoomOut().takeEvidence();
});

it('Measure Results: overlay drawings in the detail view - 6.064', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.selectMeasureResult(4);
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.ExpandImage().takeEvidence();
  uix.pages.view.measureResults.detail.OverlayDrawings().takeEvidence();
});

it('Measure Results: load image from detail view - 6.065', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.ExpandImage().takeEvidence();
  uix.pages.view.measureResults.detail.LoadImage().takeEvidence();
  uix.pages.view.measureResults.exit();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
});

it('Measure Results: navigation between rejected images in the detail view - 6.066', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.selectMeasureResult(8);
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.PrevDefect().takeEvidence();
  uix.pages.view.measureResults.detail.PrevDefect().takeEvidence();
  uix.pages.view.measureResults.detail.NextDefect().takeEvidence();
  uix.pages.view.measureResults.detail.NextDefect().takeEvidence();
});

it('Measure Results: navigation between images in the detail view - 6.067', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.measureResultsButton('active');
  uix.pages.view.measureResults.selectMeasureResult(8);
  uix.pages.view.measureResults.goToDetail();
  uix.pages.view.measureResults.detail.PrevResult().takeEvidence();
  uix.pages.view.measureResults.detail.PrevResult().takeEvidence();
  uix.pages.view.measureResults.detail.NextResult().takeEvidence();
  uix.pages.view.measureResults.detail.NextResult().takeEvidence();
});

it.only('Measure test - 6.068', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });

  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(false);
  uix.navBar.viewModule.openCamerasPage();
});
