import { uix } from '@sv/testing/uix';
/**
 * Uncomment the row below in order to disable all the takeEvidence in the test
 */
cy.takeEvidence['disabled'] = true;
//Variable to change in order to enable/disable all the takeEvidence after the setUp()
const screen = false;
it('Dashboard configuration with closed batch - 5.002', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.Camera('Batch information');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

it('Dashboard configuration with opened batch - 5.003', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.Camera('Batch information');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle');
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

it('Dashboard configuration with opened batch - 5.004', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Ready', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.Camera('Batch information');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready');
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
});

it('Save System Template with closed batch - 5.005', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.Camera('Batch information');
  uix.pages.view.dashboard.configure.saveTemplate('Testing');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

it('Delete System Template with closed batch - 5.006', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.FifosDiagram('Batch information');
  uix.pages.view.dashboard.configure.saveTemplate('Test');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.deleteTemplate('Test');
  uix.pages.view.dashboard.configure.apply();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

it('Load a Template with closed batch - 5.007', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('PS');
  uix.pages.view.dashboard.configure.apply();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

it('Dashbaord configuration - 5.010', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.layout();
  uix.pages.view.dashboard.configure.selectLayout(' 8x3 grid ');
  uix.pages.view.dashboard.configure.undo();
  uix.pages.view.dashboard.configure.redo();
  uix.pages.view.dashboard.configure.discard();
});

it('Dashbaord configuration - 5.011', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.apply();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.changeTo.Empty('Batch information');
  uix.pages.view.dashboard.configure.discard();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

it('Dashbaord configuration Layout with no article selected - 5.012', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.desk.articles, { takeEvidence: screen });

  uix.pages.desk.articles.copyArticle('CopyTest', ' ');
  uix.notification.closeSuccess();
  cy.wait(200); // time needed for the ArticleListQuery
  uix.pages.desk.articles.DeleteArticleCommand();
  uix.notification.closeSuccess();
  uix.appNavigation.modules.openView();
  cy.wait(300);
  uix.notification.noArticleSelected('Yes');
  uix.pages.view.dashboard.page.checkDashboardPage('Idle');
  uix.pages.view.dashboard.page.configureNoArticleSelected();
  uix.pages.desk.articles.checkArticlesPage();
});

it('Configuration of Track and Trace icons - 5.013 + 5.014', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.options();
  uix.pages.view.dashboard.configure.enableTracKPage('open');
  uix.pages.view.dashboard.configure.changeTo.FifosDiagram('Counter (Trend)');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.navBar.viewModule.openTtPage();
  uix.pages.view.trackTrace.checkTrackPage().takeEvidence();
});

it('Camera selection in camera viewer component - 5.015 + 5.016 + 5.017 + 5.018 + 5.019', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.Camera('Counter (Trend)');
  uix.pages.view.dashboard.configure.cameraOption('Camera 3');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.snapshotButton('active');
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence(); //5.019
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence(); //5.017
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence(); //5.018
  cy.wait(5000);
  uix.setup().asExpertUser().withStatus('Idle', 'TT3 LIVELLI ALT,', false);
});

it('Camera component update - 5.020', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.apply();
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.imageButton('active', 'Load', 'Local Archive');
  cy.get('sv-local-archive-modal .local-archive-img-row').eq(0).click();
  cy.get('.dialog-title sv-button').click();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.changeCamera();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.pages.view.cameras.checkCamerasPage().takeEvidence();
});

it('Alarm list & Status summary component - 5.021 + 5.022', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.setup().asExpertUser().withStatus('Idle', 'TT3 LIVELLI ALT,', false);
});

it('Gauge Counter component - 5.023', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.CounterGauge('Counter (Trend)');
  //Mettere in una funzione
  cy.get('sv-dashboard-cell .open-editor-btn').eq(0).click();
  cy.get('sv-counters-gauge-config-editor sv-button').contains('1 CARTON SGTIN').click();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  cy.get('sv-dashboard-cell .open-editor-btn').eq(2).click();
  cy.get('sv-counters-gauge-config-editor sv-button').contains('2 CASE SGTIN').click();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  //
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  cy.wait(8000); //aspetto lo Stop del run
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  //Mettere in una funzione
  cy.get('sv-counters-gauge .icon').eq(0).click().takeEvidence();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  //
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
});

it('Counter component - 5.024', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.changeTo.Counter('Alarm list');
  uix.pages.view.dashboard.configure.changeTo.Counter('Camera Counters');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  cy.wait(300);
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.enableTracKPage('open');
  //Mettere in una funzione
  cy.get('sv-dashboard-cell .open-editor-btn').eq(0).click();
  cy.get('sv-counters-single-config-editor sv-button').contains('SHIPPERS ON PALLET').click();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  cy.get('sv-dashboard-cell .open-editor-btn').eq(2).click();
  cy.get('sv-counters-single-config-editor sv-button').contains('FIFO OUT').click();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  //
  uix.pages.view.dashboard.configure.apply();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  cy.wait(8000);
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
});

it('Counter Trend component - 5.025', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.changeTo.CounterTrend('Counter (Gauge)');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.enableTracKPage('open');
  //Mettere in una funzione
  cy.get('sv-dashboard-cell .open-editor-btn').eq(0).click();
  cy.get('sv-counters-gauge-config-editor sv-button').contains('CASE SGTIN').click();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  cy.get('sv-dashboard-cell .open-editor-btn').eq(2).click();
  cy.get('sv-counters-gauge-config-editor sv-button').contains('ID PALLET').click();
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready');
  //
});
it('Camera counter component - 5.026', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
  uix.pages.view.dashboard.page.checkDashboardPage('Idle');
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.changeTo.CameraCounters('Alarm list');
  cy.get('sv-dashboard-cell .open-editor-btn').eq(0).click();
  cy.get('sv-counters-grid-config-editor sv-checkbox-field').eq(0).find("[type='checkbox']").check({ force: true });
  cy.get('sv-counters-grid-config-editor sv-checkbox-field').eq(1).find("[type='checkbox']").uncheck({ force: true });
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  cy.get('sv-dashboard-cell .open-editor-btn').eq(2).click();
  cy.get('sv-counters-grid-config-editor sv-checkbox-field').eq(0).find("[type='checkbox']").uncheck({ force: true });
  cy.get('sv-counters-grid-config-editor sv-checkbox-field').eq(1).find("[type='checkbox']").check({ force: true });
  cy.get('.cdk-overlay-backdrop-showing').click('center');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.setup().asExpertUser().withStatus('Idle', 'TT3 LIVELLI ALT,', false);
});

it('FIFO diagram component - 5.027', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.changeTo.FifosDiagram('Alarm list');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
  uix.setup().asExpertUser().withStatus('Idle', 'TT3 LIVELLI ALT,', false);
});

it('SVM messages component - 5.029', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', {
      name: 'LOTTO_123',
      configurationName: 'Configurazione',
      dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
    })
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.changeTo.SvmMessages('Alarm list');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.topBar.changeStatusTo('editing');
  uix.pages.view.dashboard.page.checkDashboardPage('Editing').takeEvidence();
  uix.topBar.changeStatusTo('idle');
  uix.topBar.changeStatusTo('ready');
  uix.pages.view.dashboard.page.goInRunning(true);
  uix.pages.view.dashboard.page.checkDashboardPage('Running').takeEvidence();
  uix.navBar.viewModule.openCamerasPage();
  uix.navBar.viewModule.openDashboardPage();
  uix.pages.view.dashboard.page.checkDashboardPage('Ready').takeEvidence();
});

it('Dashboard configuration retained for each article - 5.030 + 5031', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'NON SERIALISED', false)
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.disableTrackPage();
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.appNavigation.bookmarks.openArticlesPage();
  uix.pages.desk.articles.selectArticle('TT3 LIVELLI ALT,');
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.enableTracKPage('open');
  uix.pages.view.dashboard.configure.apply();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.appNavigation.modules.openRun();
  uix.pages.run.batchMgmt.closeBatch();
  uix.appNavigation.bookmarks.openArticlesPage();
  uix.pages.desk.articles.selectArticle('NON SERIALISED');
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
  uix.appNavigation.bookmarks.openArticlesPage();
  uix.pages.desk.articles.selectArticle('TT3 LIVELLI ALT,');
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
});

//TESTING
/*
it('Change the template of the Dashboard and verify the changes', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('Default');
  uix.pages.view.dashboard.configure.templateCheck.DEFAULT();
  uix.pages.view.dashboard.configure.apply();

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('TrackScan');
  uix.pages.view.dashboard.configure.templateCheck.TrackScan();
  uix.pages.view.dashboard.configure.apply();

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('PS');
  uix.pages.view.dashboard.configure.templateCheck.PS();
  uix.pages.view.dashboard.configure.apply();

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.selectTemplate('BL');
  uix.pages.view.dashboard.configure.templateCheck.BL();
  uix.pages.view.dashboard.configure.apply();
});

it('Change a component of the Dashboard and verify the change', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', '*')
    .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });

  uix.pages.view.dashboard.page.configureDashboard();
  uix.pages.view.dashboard.configure.changeTo.Empty('Batch information');
  uix.pages.view.dashboard.configure.apply();
});
*/
