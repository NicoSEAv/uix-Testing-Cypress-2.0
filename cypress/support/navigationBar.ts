function clickOnNavigationBarButton(module: string, section: string) {
  cy.get('.navigation-sidebar').children(`[href="#/${module}/${section}"]`).click();
  return cy.get('sv-app-layout');
}

function checkOnNavigationBarButton(module: 'view' | 'run' | 'desk', section: string, active: boolean) {
  cy.get('.navigation-sidebar');
  cy.get(`[href="#/${module}/${section}"]`)
    .children('.sidebar-label')
    .parents('a')
    .should(active ? 'have.class' : 'not.have.class', 'active-navigation');
}

export class NavigationBar {
  viewModule = {
    openDashboardPage: () => clickOnNavigationBarButton('view', 'dashboard'),
    openCamerasPage: () => clickOnNavigationBarButton('view', 'tv'),
    openTtPage: () => clickOnNavigationBarButton('view', 'tt'),
    openCountersPage: () => clickOnNavigationBarButton('view', 'counters'),
    openAlarmsPage: () => clickOnNavigationBarButton('view', 'alarms'),

    activeDashboardButton: () => checkOnNavigationBarButton('view', 'dashboard', true),
    activeCameraButton: () => checkOnNavigationBarButton('view', 'tv', true),
    activeTtButton: () => checkOnNavigationBarButton('view', 'tt', true),
    activeCountersButton: () => checkOnNavigationBarButton('view', 'counters', true),
    activeAlarmsButton: () => checkOnNavigationBarButton('view', 'alarms', true),

    notActiveDashboardButton: () => checkOnNavigationBarButton('view', 'dashboard', false),
    notActiveCameraButton: () => checkOnNavigationBarButton('view', 'tv', false),
    notActiveTtButton: () => checkOnNavigationBarButton('view', 'tt', false),
    notActiveCountersButton: () => checkOnNavigationBarButton('view', 'counters', false),
    notActiveAlarmsButton: () => checkOnNavigationBarButton('view', 'alarms', false)
  };
  deskModule = {
    openHomePage: () => clickOnNavigationBarButton('desk', 'home'),
    openMultifunctionControl: () => clickOnNavigationBarButton('desk', 'winmgmt'),
    openArticleManagment: () => clickOnNavigationBarButton('desk', 'batchconfs'),
    openSystemManagement: () => clickOnNavigationBarButton('desk', 'system-params'),
    openWindowsManagement: () => clickOnNavigationBarButton('desk', 'winmgmt'),
    openCodes: () => clickOnNavigationBarButton('desk', 'codes'),
    openFonts: () => clickOnNavigationBarButton('desk', 'fonts'),
    openProgrammableMeasure: () => clickOnNavigationBarButton('desk', 'prog-measures'),
    openBatchConfigurations: () => clickOnNavigationBarButton('desk', 'batchconfs'),
    openArticleParameters: () => clickOnNavigationBarButton('desk', 'article-params'),
    openArticlesPage: () => clickOnNavigationBarButton('desk', 'articles'),
    openSystemParameters: () => clickOnNavigationBarButton('desk', 'system-params'),
    openUsers: () => clickOnNavigationBarButton('desk', 'users'),

    activeHomeButton: () => checkOnNavigationBarButton('desk', 'home', true),
    activeWindowsManagement: () => checkOnNavigationBarButton('desk', 'winmgmt', true),
    activeCodes: () => checkOnNavigationBarButton('desk', 'codes', true),
    activeFonts: () => checkOnNavigationBarButton('desk', 'fonts', true),
    activeProgrmmableMeasrue: () => checkOnNavigationBarButton('desk', 'prog-measures', true),
    activeBatchConfigurations: () => checkOnNavigationBarButton('desk', 'batchconfs', true),
    activeArticleParameters: () => checkOnNavigationBarButton('desk', 'article-params', true),
    activeArticleButton: () => checkOnNavigationBarButton('desk', 'articles', true),
    activeSystemParameters: () => checkOnNavigationBarButton('desk', 'system-params', true),
    activeUsers: () => checkOnNavigationBarButton('desk', 'users', true),

    notActiveHomeButton: () => checkOnNavigationBarButton('desk', 'home', false),
    notActiveMultifunctionControls: () => checkOnNavigationBarButton('desk', 'winmgmt', false),
    notActiveArticleManagement: () => checkOnNavigationBarButton('desk', 'batchconfs', false),
    notActiveSystemManagement: () => checkOnNavigationBarButton('desk', 'system-params', false),
    notActiveWindowsManagement: () => checkOnNavigationBarButton('desk', 'winmgmt', false),
    notActiveCodes: () => checkOnNavigationBarButton('desk', 'codes', false),
    notActiveFonts: () => checkOnNavigationBarButton('desk', 'fonts', false),
    notActiveProgrmmableMeasrue: () => checkOnNavigationBarButton('desk', 'prog-measures', false),
    notActiveBatchConfigurations: () => checkOnNavigationBarButton('desk', 'batchconfs', false),
    notActiveArticleParameters: () => checkOnNavigationBarButton('desk', 'article-params', false),
    notActiveArticleButton: () => checkOnNavigationBarButton('desk', 'articles', false),
    notActiveSystemParameters: () => checkOnNavigationBarButton('desk', 'system-params', false),
    notActiveUsers: () => checkOnNavigationBarButton('desk', 'users', false)
  };
  runModule = {
    openBatchMgmtPage: () => clickOnNavigationBarButton('run', 'batchmgmt'),

    activeBatchMgmtButton: () => checkOnNavigationBarButton('run', 'batchmgmt', true),

    notActiveBatchMgmtButton: () => checkOnNavigationBarButton('run', 'batchmgmt', false)
  };
}
