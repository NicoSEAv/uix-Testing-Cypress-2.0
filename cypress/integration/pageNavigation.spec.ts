import { uix } from '@sv/testing/uix';

/**
 * Uncomment the row below in order to disable all the takeEvidence in the test
 */
cy.takeEvidence['disabled'] = true;

//Variable to change in order to enable/disable all the takeEvidence after the setUp()
const screen = false;

// Test 1.001
context('Verify the Main Navigation Menu is reachable from each page', () => {
  /**
   * This test checks the basic navigation features:
   *  - opens the run/BatchManagement page
   *  - navigates back to view/Dashboard page
   *  - opens the desk/Home page
   *  - navigates back to view/Dashboard page
   */
  it('Navigate from Dashboard Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    //Go to Batch Management section
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage();
    //Go to Dashboard section
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    //Go to Article section
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage();
    //Go to Dashboard section
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
  });

  /**
   * Ensures app navigation works for the view/Cameras page.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate from Cameras Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Go to Cameras from Navigation Bar
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
    // Go to _/run module (Batch Management)
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage().takeEvidence();
    // Go to Cameras Page
    uix.appNavigation.modules.openView();
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
    // Go to _/desk module (Home)
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
    // Go to Cameras Page
    uix.appNavigation.modules.openView();
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
  });

  /**
   * Ensures app navigation works for the view/Track and Trace page.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate from Track and Trace Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Enabling Track&Trace section and go back to Dashbaord
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.trackOperations.enableTracKPage('close');
    uix.pages.view.dashboard.configure.buttons.apply();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.notActiveTtButton;
    // Go to Track and Trace from Navigation Bar
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage().takeEvidence();
    // Go to _/run module (Batch Management)
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage();
    // Go to Dashboard
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.notActiveTtButton;
    // Go to Track and Trace from Navigation Bar
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
    // Go to _/desk module (Home)
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
    // Go to Dashboard
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.notActiveTtButton;
    // Go to Track and Trace from Navigation Bar
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
  });

  /**
   * Ensures app navigation works for the view/Counters page.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate from Counters Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Go to Counters from Navigation Bar
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage().takeEvidence();
    // Go to _/run module (Batch Management)
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage().takeEvidence();
    // Go to Counters Page
    uix.appNavigation.modules.openView();
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage().takeEvidence();
    // Go to _/desk module (Home)
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
    // Go to Counters Page
    uix.appNavigation.modules.openView();
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage().takeEvidence();
  });

  /**
   * Ensures app navigation works for the view/Alarms page.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate from System Logs Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Go to System Logs from Navigation Bar
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence();
    // Go to _/run module (Batch Management)
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage().takeEvidence();
    // Go to System Logs Page
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence();
    // Go to _/desk module (Home)
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
    // Go to System Logs Page
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence();
  });

  /**
   * Ensures app navigation works for the run/Batch Management page.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate from Batch Management Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Go to Batch Management Page
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage();
    // Go to _/view module (Dashboard)
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
    // Go to Batch Management Page
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage().takeEvidence();
    // Go to _/desk module (Home)
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
    // Go to Batch Management Page
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage().takeEvidence();
  });

  /**
   * Ensures app navigation works for the desk/Home Page.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate from Home Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Go to Home Page
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage();
    // Go to the _/run module (Batch Management)
    uix.appNavigation.modules.openRun();
    uix.pages.run.batchMgmt.checkBatchMgmtPage().takeEvidence();
    // Go to Home Page
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
    // Go to _/view module (Dashboard)
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
    // Go to Home Page
    uix.appNavigation.modules.openDesk();
    uix.pages.desk.home.checkHomePage().takeEvidence();
  });
});
// Tests 1.002 - 1.003
context('Verify all Navigation Bar buttons are working properly', () => {
  // Test 1.002
  /**
   * Ensures app navigation works for the view/Track and Trace page for a non-serialized article.
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate in _/view module (non serialized article)', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });

    // Go to Cameras
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
    // Go to Dashboard
    uix.navBar.viewModule.openDashboardPage();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
    // Go to Counters
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage().takeEvidence();
    // Go to Dashboard
    uix.navBar.viewModule.openDashboardPage();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
    // Go to System Logs
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence();
    // Go to Dashboard
    uix.navBar.viewModule.openDashboardPage();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle').takeEvidence();
    // Go to Cameras
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
    // Go to Counters
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage().takeEvidence();
    // Go to Cameras
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
    // Go to System Logs
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence();
    // Go to Cameras
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage().takeEvidence();
    // Go to Counters
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage().takeEvidence();
    // Go to System Logs
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage().takeEvidence();
  });

  // Test 1.003
  /**
   * Ensures app navigation works for the view/Track and Trace page for a serialised article
   * The test performs navigations between the different application modules (view/run/desk)
   */
  it('Navigate in _/view module from Track and Trace Page', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    // Load the Default template
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.template.selectTemplate('Default');
    // Activate the Track and Trace button and log out
    uix.pages.view.dashboard.configure.trackOperations.enableTracKPage('close');
    uix.pages.view.dashboard.configure.buttons.apply();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.notActiveTtButton();
    // Go to Track and Trace from Navigation Bar
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
    // Go to Dashboard Page
    uix.navBar.viewModule.openDashboardPage();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    uix.navBar.viewModule.notActiveTtButton();
    // Go to Track and Trace Page
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
    // Go to Cameras Page
    uix.navBar.viewModule.openCamerasPage();
    uix.pages.view.cameras.checkCamerasPage();
    uix.navBar.viewModule.notActiveTtButton();
    // Go to Track and Trace Page
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
    // Go to Counters Page
    uix.navBar.viewModule.openCountersPage();
    uix.pages.view.counters.checkCountersPage();
    uix.navBar.viewModule.notActiveTtButton();
    // Go to Track and Trace Page
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
    // Go to System Logs Page
    uix.navBar.viewModule.openAlarmsPage();
    uix.pages.view.systemLogs.checkSysLogsPage();
    uix.navBar.viewModule.notActiveTtButton();
    // Go to Track and Trace Page
    uix.navBar.viewModule.openTtPage();
    uix.pages.view.trackTrace.checkTrackPage();
  });
});

//Test 1.004
context('Verify navigation in _/desk module', () => {
  // Test 1.004 from Testplan
  it('Navigate between Home and its subsections', () => {
    uix.setup().asExpertUser().withStatus('Idle', '*', '*').openPage(uix.pages.desk.home, { takeEvidence: screen });

    uix.pages.desk.home.checkHomePage();
    // Go to Multifunction Control page
    uix.navBar.deskModule.openMultifunctionControl();
    uix.pages.desk.windowManagement.page.checkWindowManagPage().takeEvidence();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    // Go tu Article Management page
    uix.navBar.deskModule.openArticleManagment();
    uix.pages.desk.batchConfiguration.checkBatchConfigPage().takeEvidence();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    // Go to System Management
    uix.navBar.deskModule.openSystemManagement();
    uix.pages.desk.systemParam.checkSystemParamPage().takeEvidence();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    // Go to Window Management page
    uix.pages.desk.home.navigateTo.windowManagPage();
    uix.pages.desk.windowManagement.page.checkWindowManagPage().takeEvidence();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    //Go to Codes Page
    uix.pages.desk.home.navigateTo.codesPage();
    uix.pages.desk.codes.checkCodesPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    //Go to Fonts page
    uix.pages.desk.home.navigateTo.fontsPage();
    uix.pages.desk.fonts.checkFontsPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    // Go to Progr. Measure page
    uix.pages.desk.home.navigateTo.progMeasuresPage();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    //Go to Batch configuration page
    uix.pages.desk.home.navigateTo.batchConfigPage();
    uix.pages.desk.batchConfiguration.checkBatchConfigPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    //Go to Article Parameters page
    //uix.pages.desk.home.navigateTo.articleParamPage();
    //uix.pages.desk.articleParameters.checkArticleParamPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    // Go to Articles Page
    uix.pages.desk.home.navigateTo.articlePage();
    uix.pages.desk.articles.checkArticlesPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    //Go to System paramters page
    uix.pages.desk.home.navigateTo.systemParamPage();
    uix.pages.desk.systemParam.checkSystemParamPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
    //Go to Users page
    uix.pages.desk.home.navigateTo.usersPage();
    // Go to _/desk module Home page
    uix.navBar.deskModule.openHomePage();
    uix.pages.desk.home.checkHomePage();
  });

  it('Navigate between inside the sections of Multifunction controls - Navigation from Windows Management', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.desk.windowManagement.page, { takeEvidence: screen });

    uix.pages.desk.windowManagement.page.checkWindowManagPage();
    //Go to Codes page
    uix.navBar.deskModule.openCodes();
    uix.pages.desk.codes.checkCodesPage();
    //Go back to Window management page
    uix.navBar.deskModule.openWindowsManagement();
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
    //Go to Fonts page
    uix.navBar.deskModule.openFonts();
    uix.pages.desk.fonts.checkFontsPage();
    //Go back to Window management page
    uix.navBar.deskModule.openWindowsManagement();
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
    //Go to Programmable Measure page
    uix.navBar.deskModule.openProgrammableMeasure();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
    //Go back to Window management page
    uix.navBar.deskModule.openWindowsManagement();
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
  });

  it('Navigate between inside the sections of Multifunction controls - Navigation from Codes', () => {
    uix.setup().asExpertUser().withStatus('Idle', '*', '*').openPage(uix.pages.desk.codes, { takeEvidence: screen });

    uix.pages.desk.codes.checkCodesPage();
    //Go to Window management page
    uix.navBar.deskModule.openWindowsManagement();
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
    //Go back to Codes page
    uix.navBar.deskModule.openCodes();
    uix.pages.desk.codes.checkCodesPage();
    //Go to Fonts page
    uix.navBar.deskModule.openFonts();
    uix.pages.desk.fonts.checkFontsPage();
    //Go back to Codes page
    uix.navBar.deskModule.openCodes();
    uix.pages.desk.codes.checkCodesPage();
    //Go to Programmable Measure page
    uix.navBar.deskModule.openProgrammableMeasure();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
    //Go back to Codes page
    uix.navBar.deskModule.openCodes();
    uix.pages.desk.codes.checkCodesPage();
  });

  it('Navigate between inside the sections of Multifunction controls - Navigation from Fonts', () => {
    uix.setup().asExpertUser().withStatus('Idle', '*', '*').openPage(uix.pages.desk.fonts, { takeEvidence: screen });

    uix.pages.desk.fonts.checkFontsPage();
    //Go to Window management page
    uix.navBar.deskModule.openWindowsManagement();
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
    //Go back to Fonts page
    uix.navBar.deskModule.openFonts();
    uix.pages.desk.fonts.checkFontsPage();
    //Go to Codes page
    uix.navBar.deskModule.openCodes();
    uix.pages.desk.codes.checkCodesPage();
    //Go back to Fonts page
    uix.navBar.deskModule.openFonts();
    uix.pages.desk.fonts.checkFontsPage();
    //Go to Programmable Measure page
    uix.navBar.deskModule.openProgrammableMeasure();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
    //Go back to Fonts page
    uix.navBar.deskModule.openFonts();
    uix.pages.desk.fonts.checkFontsPage();
  });
  it('Navigate between inside the sections of Multifunction controls - Navigation from Programmable Measure', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.desk.progMeasure, { takeEvidence: screen });

    uix.pages.desk.progMeasure.checkProgMeasurePage();
    //Go to Window management page
    uix.navBar.deskModule.openWindowsManagement();
    uix.pages.desk.windowManagement.page.checkWindowManagPage();
    //Go back to Prog Measure page
    uix.navBar.deskModule.openProgrammableMeasure();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
    //Go to Codes page
    uix.navBar.deskModule.openCodes();
    uix.pages.desk.codes.checkCodesPage();
    //Go back to Prog Measure page
    uix.navBar.deskModule.openProgrammableMeasure();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
    //Go to Fonts page
    uix.navBar.deskModule.openFonts();
    uix.pages.desk.fonts.checkFontsPage();
    //Go back to Prog Measure page
    uix.navBar.deskModule.openProgrammableMeasure();
    uix.pages.desk.progMeasure.checkProgMeasurePage();
  });
  it('Navigate between inside the sections of Article Management - Navigation from Batch configurations', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.desk.batchConfiguration, { takeEvidence: screen });
    uix.pages.desk.batchConfiguration.checkBatchConfigPage();
    //Go to Article Parameters page
    uix.navBar.deskModule.openArticleParameters();
    uix.pages.desk.articleParameters.checkArticleParamPage();
    //Go back to Batch configuration page
    uix.navBar.deskModule.openBatchConfigurations();
    uix.pages.desk.batchConfiguration.checkBatchConfigPage();
    //Go to Articles page
    uix.navBar.deskModule.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage();
    //Go back to Batch configurations page
    uix.navBar.deskModule.openBatchConfigurations();
    uix.pages.desk.batchConfiguration.checkBatchConfigPage();
  });
  it('Navigate between inside the sections of Article Management - Navigation from Article Parameters', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.desk.articleParameters, { takeEvidence: screen });
    uix.pages.desk.articleParameters.checkArticleParamPage();
    //Go to Batch configuration page
    uix.navBar.deskModule.openBatchConfigurations();
    uix.pages.desk.batchConfiguration.checkBatchConfigPage();
    //Go back to Article Parameters page
    uix.navBar.deskModule.openArticleParameters();
    uix.pages.desk.articleParameters.checkArticleParamPage();
    //Go to Articles page
    uix.navBar.deskModule.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage();
    //Go back to Article Parameters page
    uix.navBar.deskModule.openArticleParameters();
    uix.pages.desk.articleParameters.checkArticleParamPage();
  });
  it('Navigate between inside the sections of Article Management - Navigation from Articles', () => {
    uix.setup().asExpertUser().withStatus('Idle', '*', '*').openPage(uix.pages.desk.articles, { takeEvidence: screen });
    uix.pages.desk.articles.checkArticlesPage();
    //Go to Batch configuration page
    uix.navBar.deskModule.openBatchConfigurations();
    uix.pages.desk.batchConfiguration.checkBatchConfigPage();
    //Go back to Articles page
    uix.navBar.deskModule.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage();
    //Go to Article Parameters page
    uix.navBar.deskModule.openArticleParameters();
    uix.pages.desk.articleParameters.checkArticleParamPage();
    //Go back to Articles page
    uix.navBar.deskModule.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage();
  });
  it('Navigate between inside the sections of System Management', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', '*', '*')
      .openPage(uix.pages.desk.systemParam, { takeEvidence: screen });
    uix.pages.desk.systemParam.checkSystemParamPage();
    //Go to Users page
    uix.navBar.deskModule.openUsers();
    uix.pages.desk.users.checkUsersPage();
    //Go back to System parameters page
    uix.navBar.deskModule.openSystemParameters();
    uix.pages.desk.systemParam.checkSystemParamPage();
  });
});

// Test 1.005
context('Verify Change Status button', () => {
  // Test 1.005
  it('Change system status from System Status button', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: screen });
    //Login and check when the batch is closed
    uix.pages.view.dashboard.page.checkSlider('idle', 'close');
    uix.pages.view.dashboard.page.checkSlider('idle', 'open');
    //uix.topBar.checkProdInfo('Closed batch',null)
    uix.topBar.checkButtonStatus('Idle', true, true);
    uix.topBar.changeStatusTo('editing');
    uix.topBar.checkButtonStatus('Editing', true, true);
    uix.topBar.changeStatusTo('idle');
    //Go to Batch Management page and open the batch
    //navigateTo.batchManagementPage()
    uix.topBar.checkBatchInfo('Closed batch', { openBatchMgtmLink: true });
    uix.pages.run.batchMgmt.checkBatchMgmtPage();
    uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
    //Go back to the Dashboard page, peform all the check on the status
    uix.appNavigation.modules.openView();
    //uix.topBar.checkProdInfo('98765',null)
    uix.topBar.checkButtonStatus('Idle', true, true);
    uix.topBar.changeStatusTo('editing');
    uix.topBar.checkButtonStatus('Editing', true, true);
    uix.topBar.changeStatusTo('idle');
    uix.topBar.checkButtonStatus('Idle', true, true);
    uix.topBar.changeStatusTo('ready');
    //uix.pages.view.dashboard.checkRuntimeButtons();
    uix.topBar.changeStatusTo('idle');
    uix.topBar.checkButtonStatus('Idle', true, true);
    uix.topBar.checkBatchInfo('LOTTO_123', { openBatchMgtmLink: false });
    //Go back to the batch management and close the batch and logout the user in order to go back to initial conditions
  });
});
// Tests 1.006 - 1.007
context('Verify links in Main Navigation Menu', () => {
  // Test 1.006
  it('Verify the links visible in Main application Navigation Menu based on the TT flag', () => {
    uix
      .setup()
      .asOperator()
      .withStatus('Idle', '*', false)
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });
    //Take a screenshoot of the menu with the bookmarks available
    uix.appNavigation.navigationMenu().takeEvidence();
    // Click on the Articles link from Main Navigation Menu
    uix.appNavigation.bookmarks.openArticlesPage();
    //Go to article page and check it
    uix.pages.desk.articles.checkArticlesPage().takeEvidence();
    // Select the serialized article without the TT section enabled
    uix.pages.desk.articles.selectArticle('TT3 LIVELLI ALT,');
    //uix.pages.desk.articles.selectArticle('NON SERIALISED')
    // Go to Dashboard
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    // Click on each of the links displayed in the Favourites section
    uix.appNavigation.bookmarks.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage().takeEvidence();
    //Go to camera sections using the bookmarks section
    uix.appNavigation.bookmarks.openCameraPage();
    uix.pages.view.cameras.checkCamerasPage();
    //Go to Measure results page using the bookmarks section
    uix.appNavigation.bookmarks.openMeasureResultsPage();
    uix.pages.view.measureResults.checkMeasureResultsPage();
    // Log in and go to Dashboard
    uix.login.loginNoUsrManagement(null);
    uix.navBar.viewModule.openDashboardPage();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    // Enable the Track and Trace button and select the template Default
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.trackOperations.enableTracKPage('close');
    uix.pages.view.dashboard.configure.buttons.apply();
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.template.selectTemplate('Default');
    uix.pages.view.dashboard.configure.buttons.apply();
    // Check buttons when exiting the DESIGNER
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    // Click on each of the links displayed in the Favourites section
    //Articles
    uix.appNavigation.bookmarks.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage().takeEvidence();
    //Cameras
    uix.appNavigation.bookmarks.openCameraPage();
    uix.pages.view.cameras.checkCamerasPage();
    //Measures Results not visible at batch closed
    /*uix.appNavigation.bookmarks.openMeasureResultsPage();
    uix.pages.view.measureResults.checkMeasureResultsPage();
    uix.pages.view.measureResults.checkMeasureResultsPage();*/
    //TT table
    uix.appNavigation.bookmarks.openTtTable();
    uix.pages.view.trackTrace.checkTrackPage();
  });
  // Test 1.007
  it('Verify the links displayed based on the selected-article type', () => {
    uix
      .setup()
      .asExpertUser()
      .withStatus('Idle', 'NON SERIALISED', '*')
      .openPage(uix.pages.view.dashboard.page, { takeEvidence: true });
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.trackOperations.enableTracKPage('close');
    uix.pages.view.dashboard.configure.buttons.apply();
    //From Main Navigation Menu, click on 'Articles'
    uix.appNavigation.bookmarks.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage();
    // Select the non-serialized article
    uix.pages.desk.articles.selectArticle('NON SERIALISED');
    // Go to Dashboard
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    // Enable the Track and Trace button
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.trackOperations.enableTracKPage('close');
    uix.pages.view.dashboard.configure.buttons.apply();
    // Deactivate the Track and Trace button
    uix.pages.view.dashboard.configure.trackOperations.disableTrackPage();
    uix.pages.view.dashboard.configure.buttons.apply();
    //Load the template 'Default' and take evidence
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.template.selectTemplate('Default');
    uix.pages.view.dashboard.configure.buttons.apply();
    cy.takeEvidence('Default template on NON SERIALIZED ARTICLE');
    // Go to Dashboard and check the availble button on navigation bar
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    cy.get('.navigation-sidebar').children('[routerlinkactive]').should('have.length', 4).takeEvidence();
    // Check the TT button is not displayed
    uix.appNavigation.bookmarks.openArticlesPage();
    uix.pages.desk.articles.checkArticlesPage();
    // Select the serialized article
    uix.pages.desk.articles.selectArticle('TT3 LIVELLI ALT,');
    // Go to Dashboard
    uix.appNavigation.modules.openView();
    uix.pages.view.dashboard.page.checkDashboardPage('Idle');
    // Load the template 'BL'
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.template.selectTemplate('BL');
    uix.pages.view.dashboard.configure.buttons.apply();
    cy.screenshot('BL template on TT3 LIVELLI ALT, ARTICLE');
    // Activate the Track and Trace button
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.page.configureDashboard();
    uix.pages.view.dashboard.configure.trackOperations.enableTracKPage('open');
    cy.get('.navigation-sidebar').children('[routerlinkactive]').should('have.length', 5).takeEvidence();
    // Check the TT button is displayed
    uix.appNavigation.bookmarks.openArticlesPage();
    // Select the non serialized article
    uix.pages.desk.articles.selectArticle('NON SERIALISED');
    // Check the number of buttons in the Navigation Bar and links in Favourites available
    uix.appNavigation.modules.openView();
    cy.get('.navigation-sidebar').children('[routerlinkactive]').should('have.length', 4).takeEvidence();
    uix.appNavigation.bookmarks.openArticlesPage();
    // Select the serialized article
    uix.pages.desk.articles.checkArticlesPage();
    uix.pages.desk.articles.selectArticle('TT3 LIVELLI ALT,');
    // Check the number of buttons in the Navigation Bar and links in Favourites available
    uix.appNavigation.modules.openView(); // img 12
    cy.get('.navigation-sidebar').children('[routerlinkactive]').should('have.length', 5).takeEvidence(); // img 13
    uix.appNavigation.bookmarks.openTtTable();
    uix.pages.view.trackTrace.checkTrackPage();
    cy.screenshot();
  });
});
