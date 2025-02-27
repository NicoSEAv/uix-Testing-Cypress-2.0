import { uix } from '@sv/testing/uix';
import { PageTitleBar } from 'cypress/support/components/pageTitleBar';
import { data, isEmptyObject } from 'cypress/types/jquery';
import { intersectionWith } from 'cypress/types/lodash';

context('Screenshot script', () => {
  it('FIIRST CHAPTERS - 2.3', () => {
    //6
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT WITH PRECENTERING', false)
      .openPage(uix.pages.run.batchMgmt, { takeEvidence: false });

    cy.wait(3000);
    uix.pages.run.batchMgmt.checkBatchMgmtPage();
    uix.pages.run.batchMgmt.openBatchMI('TT PRE-CENTER', '%01%01234567890128%10%LOTTO_123%17%201212%37%1000', false);
    uix.topBar.checkCurrentStatus('Idle', { takeEvidence: true });
    uix.clcikScreen.realClick();
    //Production information
    uix.appNavigation.modules.openView();
    cy.wait(500);
    uix.pages.view.dashboard.page.snapshotButton('active');
    cy.wait(1000);
    uix.topBar.checkBatchInfo('LOTTO_123');
    cy.wait(1000);
    //Main Application Naviagation Menu
    uix.appNavigation.navigationMenu().takeEvidence('Main Application Navigation Menu');
    cy.wait(1000);
    uix.appNavigation.button.configure().takeEvidence('Configure Main Application Navigation Menu');
    cy.wait(1000);
    cy.screenshot('Add Bookmarks');
    cy.wait(1000);
    uix.appNavigation.button.showLogo(false).takeEvidence('No Logo Main Applicaton Navigation Menu');
    cy.wait(1000);
    uix.appNavigation.button.discard();
    uix.clcikScreen.closeAppNavMenu();
    //Navigation Bar
    cy.wait(500);
    uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence('Navigation SideBar');
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.closeBatch(true);
    uix.appNavigation.bookmarksIT.openWindowManag();
    uix.topBar.changeStatusTo('editing');
    uix.pages.desk.windowManagement.page.editingWindow.addWindow(
      'Caratteri',
      '1 - ocrb 75 2mm TV1',
      'NEW WINDOW',
      false
    );
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.editingWindow.changeWindowName('');
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.button.issueList();
    uix.dialog.issueList();
    uix.pages.desk.windowManagement.page.button.discard();
    uix.dialog.unsavedChanges('Yes');
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
  });

  it('RUN + DESK-Window Management', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT', false)
      .openPage(uix.pages.run.batchMgmt, { takeEvidence: false });
    //Desk Home-page
    uix.pages.run.batchMgmt.openBatchMI('TT - NO STOP', '%01%01234567890128%10%LOTTO_123%17%201212%37%1000', true);
    cy.wait(1000);
    uix.appNavigation.modules.openDesk();
    //desk_/home
    cy.wait(1000);
    uix.pages.desk.home.checkHomePage().takeEvidence('HomePage tracker_desk');
    //Window Management
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.closeBatch(false);
    uix.appNavigation.bookmarksIT.openWindowManag();
    cy.wait(1000);
    uix.topBar.changeStatusTo('editing');
    cy.wait(1000);
    //Window Management Page
    uix.pages.desk.windowManagement.page.button.snapshot();
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.checkWindowManagPage().takeEvidence('Window Management Main Page');
    //Window Management Dialog
    uix.pages.desk.windowManagement.page.button.windowManagement();
    cy.wait(1000);
    uix.dialog.windowManagement();
    uix.pages.desk.windowManagement.page.button.snapshot();
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.editingWindow.changeWindowControlType('');
    //Precentering tool
    uix.appNavigation.modules.openRun();
    uix.topBar.changeStatusTo('idle');
    uix.pages.run.batchMgmt.openBatchMI('TT PRE-CENTER', '%01%01234567890128%10%LOTTO_123%17%201212%37%1000', false);
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.navigateToIT.windowManagPage();
    uix.topBar.changeStatusTo('editing');
    uix.pages.desk.windowManagement.page.button.snapshot();
    uix.pages.desk.windowManagement.page.editingWindow.selectWindow('35');
    uix.pages.desk.windowManagement.page.button.precentTool();
    cy.wait(1000);
    //Screenshot
    uix.pages.desk.windowManagement.precentTool.checkPage();
    cy.wait(1000);
    uix.pages.desk.windowManagement.precentTool.button.ChangePrecenter();
    cy.wait(1000);
    //Screenshot
    uix.dialog.changePrecenter('Cancel');
    cy.wait(1000);
    uix.pages.desk.windowManagement.precentTool.showProgMeasureOperations();
    cy.wait(1000);
    uix.clcikScreen.realClick();
    cy.wait(1000);
    uix.pages.desk.windowManagement.precentTool.editOffset(5);
    cy.wait(1000);
    uix.pages.desk.windowManagement.precentTool.precentOtherTV().takeEvidence('Precent Window of other TVs');
    cy.wait(1000);
    uix.clcikScreen.realClick();
    uix.pages.desk.windowManagement.precentTool.button.Exit();
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.editingWindow.selectWindow('36');
    uix.pages.desk.windowManagement.page.button.precentTool();
    cy.wait(1000);
    //Screenshot
    uix.pages.desk.windowManagement.precentTool.showProgMeasureOperations();
    cy.wait(1000);
    uix.clcikScreen.realClick();
    cy.wait(1000);
    uix.pages.desk.windowManagement.precentTool.button.Exit();
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.editingWindow.selectWindow('1');
    cy.get('.window-detail').realHover({ pointer: 'pen' }).realClick({ x: 539, y: 628 });
    cy.wait(1000);
    cy.get('.window-detail').realHover({ pointer: 'pen' }).realClick({ x: 539, y: 700 });
    cy.wait(1000);
    cy.get('sv-mf-window-editor').takeEvidence('Window Options and Mobile Window');
    cy.wait(1000);
    uix.appNavigation.modules.openRun();
    uix.topBar.changeStatusTo('idle');
    uix.pages.run.batchMgmt.closeBatch(false);
    cy.wait(2000);
    uix.appNavigation.bookmarksIT.openWindowManag();
    uix.topBar.changeStatusTo('editing');
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.editingWindow.addWindow('Caratteri', 'ocrb 75 2mm TV1', 'New Window', true);
    uix.pages.desk.windowManagement.page.button.discard();
    uix.dialog.unsavedChanges('Yes');
    cy.wait(1000);
    uix.pages.desk.windowManagement.page.button.multipleSelection().takeEvidence('Multiple Selection Windows');
  });

  it('DESK - Codes', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Editing', 'TT WITH PRECENTERING', false)
      .openPage(uix.pages.desk.codes, { takeEvidence: false });
    cy.wait(3000);
    //Screenshot
    uix.pages.desk.codes.checkCodesPage().takeEvidence('Codes Homepage');
    cy.wait(1000);
    uix.pages.desk.codes.button.linkedWindows('ECC200');
    cy.wait(1000);
    //Screenshot
    uix.dialog.linkedWindows();
    cy.wait(1000);
    //Edit of a code - Options
    uix.pages.desk.codes.button.edit().takeEvidence('Options - Codes');
    cy.wait(1000);
    //Edit of a code - Grading
    uix.pages.desk.codes.tabs.Grading().takeEvidence('Grading - Codes');
    cy.wait(1000);
    //Edit of a code - ECC200
    uix.pages.desk.codes.tabs.ECC200().takeEvidence('ECC200 - Codes');
    cy.wait(1000);
  });

  it('DESK - Fonts', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Editing', 'TT WITH PRECENTERING', false)
      .openPage(uix.pages.desk.fonts, { takeEvidence: false });

    cy.wait(1000);
    //Screenshot
    uix.pages.desk.fonts.checkFontsPage().takeEvidence('Fonts homepage');
    uix.pages.desk.fonts.button.createNew().takeEvidence('New Font creation');
    cy.wait(1000);
    uix.pages.desk.fonts.section.characterIT();
    cy.wait(1000);
    uix.pages.desk.fonts.button.learnCharacters();
    cy.wait(1000);
    uix.pages.desk.fonts.button.snapshot();
    cy.wait(1000);
    uix.pages.desk.fonts.learnDraw();
    cy.wait(2000);
    uix.pages.desk.fonts.button.assignCharacter().takeEvidence('Assign characters - Fonts');
    uix.pages.desk.fonts.button.exit();
    uix.dialog.unsavedChanges('Yes');
    uix.pages.desk.fonts.button.exit();
    uix.appNavigation.modules.openRun();
    uix.topBar.changeStatusTo('idle');
    uix.pages.run.batchMgmt.openBatchMI('TT PRE-CENTER', '%01%01234567890128%10%LOTTO_123%17%201212%37%1000', false);
    uix.appNavigation.bookmarksIT.openFonts();
    uix.topBar.changeStatusTo('editing');
    uix.pages.desk.fonts.button.edit();
    //MAP of the characters
    uix.pages.desk.fonts.section.mapIT().takeEvidence('Map - Fonts');
    cy.wait(1000);
    //Screenshot PARAMETERS of the characters
    uix.pages.desk.fonts.section.parametersIT().takeEvidence('Parameters -Fonts');
    cy.wait(1000);
    //Screenshot TOLERANCES of the characters
    uix.pages.desk.fonts.section.tolerancesIT().takeEvidence('Tolerances - Fonts');
    cy.wait(1000);
    uix.pages.desk.fonts.button.discard();
    uix.pages.desk.fonts.button.exit();
    cy.wait(1000);
    uix.appNavigation.modules.openRun();
    cy.wait(1000);
    uix.topBar.changeStatusTo('idle');
    cy.wait(1000);
    uix.pages.run.batchMgmt.closeBatch(false);
  });

  it('DESK - ProgrammableMeasure', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Editing', 'TT PRECENT TV1', {
        name: 'LOTTO_123',
        configurationName: 'Configurazione',
        dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
      })
      .openPage(uix.pages.desk.progMeasure, { takeEvidence: false });

    cy.wait(4000);
    //Screenshot
    uix.pages.desk.progMeasure.checkProgMeasurePage().takeEvidence('Programmable Measure homepage');
    uix.pages.desk.progMeasure.selectProgMeasure('PRECENT TV1');
    cy.wait(2000);
    uix.pages.desk.progMeasure.button.edit();
    cy.wait(1000);
    uix.pages.desk.progMeasure.button.snapshot();
    cy.wait(1000);
    uix.pages.desk.progMeasure.checkProgMeasurePage().takeEvidence('Detail view of program measure');
    cy.wait(2000);
    uix.pages.desk.progMeasure.button.editOperations();
    cy.wait(2000);
    uix.pages.desk.progMeasure.checkProgMeasurePage().takeEvidence();
    cy.wait(1000);
    uix.pages.desk.progMeasure.selectOperations(5, true);
    cy.wait(1000);
    uix.pages.desk.progMeasure.button.preview();
    cy.wait(1000);
    uix.pages.desk.progMeasure.selectOperations(1).takeEvidence('Preview');
    cy.wait(4000);
    uix.pages.desk.progMeasure.selectOperations(5).takeEvidence('Preview 5');
    cy.wait(3000);
    uix.pages.desk.progMeasure.button.interactiveEditor();
    cy.wait(5000);
    //Screenshot
    uix.pages.desk.progMeasure.interactiveEditor(2).takeEvidence('Interactive Editor');
    cy.wait(1000);
    uix.clcikScreen.realClick();
    cy.wait(1000);
    uix.pages.desk.progMeasure.button.exit();
    cy.wait(1000);
    uix.pages.desk.progMeasure.checkProgMeasurePage().takeEvidence('Single Operation editing');
    cy.wait(1000);
    cy.get('.operation-wrapper .quick-adj-star-wrapper .fa-star').eq(2).click();
    cy.get('.quick-adj').takeEvidence('Quick Adj dialog');
    cy.wait(1000);
    uix.clcikScreen.realClick();
    uix.pages.desk.progMeasure.button.editOperations();
    cy.wait(1000);
    uix.pages.desk.progMeasure.button.copyOperation();
    uix.clcikScreen.realClick();
    cy.wait(1000);
    uix.pages.desk.progMeasure.button.discard();
    cy.wait(1000);
    uix.pages.desk.progMeasure.button.exit();
  });

  it('DESK - Batch configuration', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Editing', 'TT WITH PRECENTERING', false)
      .openPage(uix.pages.desk.batchConfiguration, { takeEvidence: false });

    cy.wait(2000);
    uix.pages.desk.batchConfiguration.checkBatchConfigPage().takeEvidence('Home Page Batch configuration');
    cy.wait(500);
    uix.pages.desk.batchConfiguration.selectBatchConfig('1 - Configurazione');
    uix.pages.desk.batchConfiguration.button.edit().takeEvidence('Edit Batch Configuration');
    cy.wait(1000);
    uix.pages.desk.batchConfiguration.button.rules();
    cy.wait(1000);
    uix.dialog.ruleDialog();
    cy.wait(1000);
    uix.pages.desk.batchConfiguration.windows.textTemplate(4, '%1');
    uix.clcikScreen.clickCenter();
    uix.pages.desk.batchConfiguration.windows.textTemplate(4, '%10%');
    cy.wait(1000);
    uix.pages.desk.batchConfiguration.windows.textTemplate(3, '%17.6');
    uix.clcikScreen.realClick();
    cy.wait(1000);
    //Printers
    uix.pages.desk.batchConfiguration.selectTabIT('Stampanti');
    uix.pages.desk.batchConfiguration.printers.selectPrinter('Wolke').takeEvidence('Printer section');
    cy.wait(1000);
    uix.pages.desk.batchConfiguration.printers.selectLine(2, '%17%');
    //Standard AIs
    uix.pages.desk.batchConfiguration.selectTabIT('AI Standard').takeEvidence('Standard AIs section');
    cy.wait(1000);
    //Material Items
    uix.pages.desk.batchConfiguration.selectTabIT('Material Item').takeEvidence('Material Items section');
    cy.wait(1000);
  });

  it('desk - Articles + Article Parameters', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT WITH PRECENTERING', false)
      .openPage(uix.pages.desk.articles, { takeEvidence: false });

    cy.wait(1000);
    //Screenshot
    uix.pages.desk.articles.checkArticlesPage().takeEvidence('Article hompage');
    //New Article creation
    uix.pages.desk.articles.newArticle('NEW ARTICLE', true);
    cy.wait(4000);
    uix.pages.desk.articles.DeleteArticleCommand();
    uix.notification.closeSuccess();
    cy.wait(3000);
    // Article Parameters Page
    uix.pages.desk.articles.selectArticle('TT WITH PRECENTERING');
    cy.wait(1000);
    uix.navBar.deskModule.openArticleParameters();
    uix.topBar.changeStatusTo('editing');
    cy.wait(1000);
    uix.pages.desk.articleParameters.button.snapshot();
    uix.pages.desk.articleParameters.checkArticleParamPage().takeEvidence('Article Parameters');
    uix.pages.desk.articleParameters.button.snapshot();
    uix.pages.desk.articleParameters.button.mutlipleEditing().takeEvidence('Multiple Editing');
    cy.wait(1000);
    uix.pages.desk.articleParameters.button.configureWarnings();
    cy.wait(1000);
    uix.pages.desk.articleParameters.checkArticleParamPage();
  });

  it('Custom Warning Example', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Editing', 'WARNING ', {
        name: 'LOTTO_123',
        configurationName: 'Configurazione',
        dataString: '%01%01234567890128%10%LOTTO_123%17%201212%37%1000'
      })
      .openPage(uix.pages.view.cameras, { takeEvidence: false });

    cy.wait(1000);
    cy.get('sv-acquisition-button .fa-ellipsis-v').click();
    cy.get('.cdk-overlay-pane').find('span .fa-camera-viewfinder').click();
    cy.wait(3000);
    uix.navBar.viewModule.openDashboardPage();
    cy.wait(1000);
    uix.notification.reduceWarning();
    cy.wait(1000);
    cy.get('sv-notification-drawer').click();
    cy.get('.cdk-overlay-pane').takeEvidence('Dialog Warning');
    uix.clcikScreen.clickCenter();
  });

  it('desk - System Parameters and Users', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT WITH PRECENTERING', false)
      .openPage(uix.pages.desk.systemParam, { takeEvidence: false });

    cy.wait(2000);
    uix.pages.desk.systemParam.checkSystemParamPage().takeEvidence('System Parameters');
    uix.pages.desk.systemParam.enableUserManagement();
    uix.pages.desk.systemParam.button.save();
    cy.wait(3000);
    uix.notification.closeSuccess();
    uix.navBar.deskModule.openUsers();
    cy.wait(1000);
    uix.pages.desk.users.checkUsersPage();
    cy.wait(1000);
    uix.pages.desk.users.selectUser('USER GENERIC');
    cy.wait(1000);
    uix.pages.desk.users.checkUsersPage().takeEvidence('USERS Page');
    uix.pages.desk.users.createNew();
    uix.pages.desk.users.edit.compileField('USER_123', 'USER', 'SEAVISION');
    uix.pages.desk.users.edit.enablingPermissionIT('Amministrazione utenti');
    uix.pages.desk.users.edit.enablingPermissionIT('Programmazione livello 1');
    uix.pages.desk.users.edit.enablingPermissionIT('Cambio articolo');
    cy.wait(500);
    cy.get('.page-title-bar').takeEvidence('Permission section');
    uix.pages.desk.users.edit.selectTab('Functions');
    uix.pages.desk.users.edit.enablingFunctions('5 - Automatico');
    cy.wait(1000);
    cy.get('.page-title-bar').takeEvidence('Functions section');
    uix.pages.desk.users.edit.exit();
    uix.dialog.unsavedChanges('Yes');
    uix.navBar.deskModule.openSystemParameters();
    uix.pages.desk.systemParam.disableUserManagement();
    cy.wait(2000);
    uix.pages.desk.systemParam.button.save();
    cy.wait(2000);
    uix.notification.closeSuccess();
  });

  it('View - Dashboard', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT', false)
      .openPage(uix.pages.run.batchMgmt, { takeEvidence: false });
    uix.pages.run.batchMgmt.openBatchMI('TT - NO STOP', '%01%01234567890128%10%LOTTO_123%17%201212%37%1000');

    cy.wait(4000);
    uix.topBar.changeStatusTo('ready');
    cy.wait(4000);
    uix.appNavigation.modules.openView();
    cy.wait(2000);
    uix.pages.view.dashboard.page.checkDashboardPage('Ready');
    cy.wait(1000);
    uix.pages.view.dashboard.page.goInRunning(true, true);
    cy.wait(6000);
    uix.topBar.changeStatusTo('idle');
    cy.wait(2000);
    uix.pages.view.dashboard.page.configureDashboard();
    cy.wait(1000);
    cy.get('.page-title-bar').takeEvidence('Configure Dashbaord');
    cy.wait(1000);
    uix.pages.view.dashboard.configure.components().takeEvidence('Components');
    cy.wait(1000);
    uix.pages.view.dashboard.configure.layout().takeEvidence('Layout');
    cy.wait(1000);
    uix.pages.view.dashboard.configure.library();
    cy.wait(1000);
    uix.pages.view.dashboard.configure.cameraOption('Camera 1');
    cy.wait(3000);
    uix.pages.view.dashboard.configure.counterGaugeOption('1 CARTON SGTIN');
    cy.wait(3000);
    uix.pages.view.dashboard.configure.changeToIT.CounterPie('Contatore (Gauge)');
    cy.wait(3000);
    uix.pages.view.dashboard.configure.counterPieOption('2 CASE SGTIN');
    cy.wait(3000);
    uix.pages.view.dashboard.configure.changeToIT.Counter('Contatore (Torta)');
    cy.wait(3000);
    uix.pages.view.dashboard.configure.counterOption('FIFO OUT');
    cy.wait(1000);
    uix.pages.view.dashboard.configure.batchInfoOption();
    cy.wait(1000);
    uix.pages.view.dashboard.configure.changeToIT.CounterPie('Contatore');
    cy.wait(3000);
    uix.pages.view.dashboard.configure.counterPieOption('2 CASE SGTIN');
    cy.wait(1000);
    uix.pages.view.dashboard.configure.buttons.apply();
    cy.wait(1000);
    cy.get('sv-counters-donut').click('left');
    cy.get('.chart-popover-legend').takeEvidence('Legend Counter Pie');
    uix.clcikScreen.realClick();
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.changeToIT.CounterGauge('Contatore (Torta)');
    cy.wait(1000);
    uix.pages.view.dashboard.configure.counterGaugeOption('1 CARTON SGTIN');
    uix.pages.view.dashboard.configure.buttons.apply();
    cy.wait(1000);
    uix.appNavigation.modules.openRun();
    cy.wait(1000);
    uix.pages.run.batchMgmt.closeBatch(false);
  });

  it('View-Cameras and Track and Trace and Counters', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT PRECENT TV1', false)
      .openPage(uix.pages.run.batchMgmt, { takeEvidence: false });

    uix.pages.run.batchMgmt.openBatchMI('TrackAndTrace TV1', '%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
    cy.wait(4000);
    uix.topBar.changeStatusTo('ready');
    cy.wait(4000);
    uix.appNavigation.modules.openView();
    cy.wait(2000);
    uix.pages.view.dashboard.page.goInRunning(false);
    cy.wait(15000);
    // Instant Replay
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.button.instantReplay(0);
    cy.wait(2000);
    uix.pages.view.cameras.instantReplayPage.screenPage();
    uix.pages.view.cameras.instantReplayPage.expand();
    uix.pages.view.cameras.instantReplayPage.screenPage();
    uix.pages.view.cameras.instantReplayPage.exit();
    uix.navBar.viewModule.openDashboardPage();
    cy.wait(2000);
    uix.pages.view.dashboard.page.stopRun();
    uix.navBar.viewModule.openCamerasPage();
    cy.wait(3000);
    uix.pages.view.cameras.checkCamerasPage();
    uix.topBar.changeStatusTo('idle');
    cy.wait(2000);
    uix.pages.view.cameras.button.configure();
    cy.wait(2000);
    uix.pages.view.cameras.checkCamerasPage().takeEvidence('Cameras Page');
    cy.wait(1000);
    uix.pages.view.cameras.continuousSnap();
    uix.topBar.changeStatusTo('ready');
    cy.wait(2500);
    uix.pages.view.cameras.button.measureResultsButton('active');
    cy.wait(1000);
    uix.pages.view.measureResults.checkMeasureResultsPage().takeEvidence('Measure Results');
    uix.pages.view.measureResults.tv.Camera3();
    uix.pages.view.measureResults.selectMeasureResult(1);
    uix.pages.view.measureResults.goToDetail();
    cy.wait(5000);
    uix.pages.view.measureResults.expandInfoDetail();
    cy.wait(2000);
    uix.pages.view.measureResults.detail.ZoomIn();
    cy.wait(2000);
    uix.pages.view.measureResults.checkMeasureResultsPage().takeEvidence('Detail view Measure Results');
    uix.pages.view.measureResults.detail.ExpandImage().takeEvidence('Expanded view Measure Results');
    uix.pages.view.measureResults.exit();
    uix.navBar.viewModule.openTtPage();
    cy.wait(2500);
    uix.pages.view.trackTrace.checkTrackPage().takeEvidence('Track and Trace');
    uix.pages.view.trackTrace.button.table();
    uix.pages.view.trackTrace.tablePage.selectId('CARTON SGTIN', 'ID fuori macchina o aggregati. completi');
    cy.wait(2000);
    uix.pages.view.trackTrace.checkTrackPage().takeEvidence('Table Track and Trace');
    cy.wait(1000);
    cy.get('.cdk-overlay-backdrop-showing').realClick({ x: 99, y: 140 });
    cy.wait(1000);
    uix.pages.view.trackTrace.tablePage.selectId('FIFO OUT');
    cy.wait(2000);
    uix.pages.view.trackTrace.tablePage.view(1);
    uix.dialog.reworkDialog();
    cy.wait(2000);
    uix.navBar.viewModule.openCountersPage();
    cy.wait(1000);
    uix.pages.view.counters.checkCountersPage().takeEvidence('Counters');
    cy.wait(1000);
    uix.pages.view.counters.configureCounters();
    cy.wait(1000);
    uix.pages.view.counters.configCounterGauge();
    cy.wait(1000);
    uix.pages.view.counters.buttons.discard();
    uix.navBar.viewModule.openCamerasPage();
    uix.topBar.changeStatusTo('idle');
    cy.wait(3000);
    uix.pages.view.cameras.button.measureTest('active');
    uix.pages.view.measureTestPage.selectWindow(1, 5);
    cy.wait(500);
    uix.pages.view.measureTestPage.checkMeasureTestPage();
    cy.wait(500);
    uix.pages.view.measureTestPage.button.moveWindow().takeEvidence('Move Window Mode');
    cy.wait(500);
    uix.pages.view.measureTestPage.button.discard();
    cy.wait(1000);
    cy.get('.tv-header sv-button .action-button-wrapper .fa-times').click();
    cy.wait(1000);
    uix.pages.view.measureTestPage.selectWindow(1, 6);
    cy.wait(1000);
    uix.pages.view.measureTestPage.button.quickAdjust();
    cy.wait(4000);
    uix.pages.view.measureTestPage.button.helpTxtQuickAdj(2).takeEvidence();
    cy.wait(1000);
    uix.clcikScreen.clickCenter();
    uix.pages.view.measureTestPage.button.discard();
    uix.pages.view.measureTestPage.button.exit();
    cy.wait(1000);
    uix.navBar.viewModule.openAlarmsPage();
    cy.wait(500);
    uix.pages.view.systemLogs.auditPage();
    cy.wait(9500);
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence('Audit page');
    cy.wait(5000);
    uix.pages.view.systemLogs.filterAudit();
    cy.wait(5000);
    uix.pages.view.systemLogs.exportAudit('Cancel');
  });
});
