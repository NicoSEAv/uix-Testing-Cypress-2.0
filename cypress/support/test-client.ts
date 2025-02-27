import { callApi } from './test-client/api';
import { TestSetupHelpers } from './test-client/test-setup-helpers';
import { TopBar } from './topBar';
import { NavigationBar } from './navigationBar';
import { NavigationPage } from './navigationCommands';
import { Login } from './pages/login';
import { Notifications } from './pages/notifications';
import { popover } from './pages/popover';
import { dialog } from './pages/dialog';
import { ClickScreen } from './test-client/clickScreen';
//view
import { DashboardPage } from './pages/dashboardPage';
import { ConfigureDashboard } from './pages/configureDashboard';
import { CamerasPage } from './pages/camerasPage';
import { MeasureTestPage } from './pages/measrueTestPage';
import { MeasureResultsPage } from './pages/measureResultsPage';
import { TrackTracePage } from './pages/trackTracePage';
import { CountersPage } from './pages/countersPage';
import { SystemLogsPage } from './pages/systemLogsPage';
//desk
import { WindowManagPage } from './pages/windowManagement';
import { precentTool } from './pages/precenterinngToolPage';
import { CodesPage } from './pages/codesPage';
import { FontsPage } from './pages/fontsPage';
import { ProgMeasurePage } from './pages/progMeasuresPage';
import { BatchManagementPage } from './pages/batchManagementPage';
import { ArticlesPage } from './pages/articlesPage';
import { ArticleParametersPage } from './pages/articleParametersPage';
import { BatchConfigPage } from './pages/batchConfigurationPage';
import { SystemParametersPage } from './pages/systemParametersPage';
import { UsersPage } from './pages/userPage';
import { HomePage } from './pages/homePage';

export const uix = {
  api: { call: callApi },
  setup: TestSetupHelpers.getInstance,
  login: new Login(),
  topBar: new TopBar(),
  navBar: new NavigationBar(),
  appNavigation: new NavigationPage(),
  notification: new Notifications(),
  clcikScreen: new ClickScreen(),
  dialog: new dialog(),
  popover: new popover(),
  pages: {
    view: {
      dashboard: {
        page: new DashboardPage(),
        configure: new ConfigureDashboard()
      },
      cameras: new CamerasPage(),
      measureTestPage: new MeasureTestPage(),
      measureResults: new MeasureResultsPage(),
      trackTrace: new TrackTracePage(),
      counters: new CountersPage(),
      systemLogs: new SystemLogsPage()
    },
    run: {
      batchMgmt: new BatchManagementPage()
    },
    desk: {
      windowManagement: {
        page: new WindowManagPage(),
        precentTool: new precentTool()
      },
      codes: new CodesPage(),
      fonts: new FontsPage(),
      progMeasure: new ProgMeasurePage(),
      articles: new ArticlesPage(),
      home: new HomePage(),
      articleParameters: new ArticleParametersPage(),
      batchConfiguration: new BatchConfigPage(),
      systemParam: new SystemParametersPage(),
      users: new UsersPage()
    }
  }
} as const;

export type UixTestClient = typeof uix;
