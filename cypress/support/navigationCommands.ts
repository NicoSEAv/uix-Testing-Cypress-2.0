import { uix } from './test-client';
import { Notifications } from './pages/notifications';

function goToModule(module) {
  cy.get('.main-nav-menu').click();
  cy.wait(300);
  cy.get('sv-area-menu .area-links').find(`[href="#/${module}"]`).click();
}

function buttonTop(name: 'Reset' | 'Undo' | 'Redo' | 'Discard' | 'Apply') {
  cy.get('.area-bar sv-button').contains(name).click();
}

function selectBookmarks(
  section:
    | 'Articles'
    | 'Window Management'
    | 'Fonts'
    | 'Codes'
    | 'Progr. Measures'
    | 'Batch Configurations'
    | 'Measure Results'
    | 'Cameras'
    | 'Track and Trace Table'
    | 'Measure Test'
    | 'Dashboard'
    | 'Track and Trace'
    | 'Counters'
    | 'Alarms'
    | 'System Logs'
    | 'Batch Management'
    | 'Article Parameters'
    | 'System Parameters'
    | 'Users'
) {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-appnav-menu .links-area sv-app-navigation-link'); // waits for area-links to become visible
  cy.get('.main-link').contains(section).click();
}

function selectBookmarksDE(section: 'Fensterverwaltung' | 'Schriftarten') {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-appnav-menu .links-area sv-app-navigation-link'); // waits for area-links to become visible
  cy.get('.main-link').contains(section).click();
}
function selectBookmarksES(section: 'Gestión de Ventana' | 'Fuente') {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-appnav-menu .links-area sv-app-navigation-link'); // waits for area-links to become visible
  cy.get('.main-link').contains(section).click();
}
function selectBookmarksFR(section: 'Gestion des fenêtres' | 'Fontes') {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-appnav-menu .links-area sv-app-navigation-link'); // waits for area-links to become visible
  cy.get('.main-link').contains(section).click();
}
function selectBookmarksIT(section: 'Gestione Finestre' | 'Font') {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-appnav-menu .links-area sv-app-navigation-link'); // waits for area-links to become visible
  cy.get('.main-link').contains(section).click();
}
function selectBookmarksNL(section: 'Vensterbeheer' | 'Lettertypes') {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-appnav-menu .links-area sv-app-navigation-link'); // waits for area-links to become visible
  cy.get('.main-link').contains(section).click();
}

function changeLanguage(language: string) {
  cy.get('.main-nav-menu').click();
  cy.wait(250);
  cy.get('sv-button.btn-change-system-language').click();
  cy.get('tr').contains(language).click();
  cy.get('sv-dialog-layout sv-button').eq(2).click();
  uix.notification.closeSuccess();
}

/**
 * Exposes helper methods and checks used to interact with the main Application Navigation Menu
 */
export class NavigationPage {
  modules = {
    openView: () => goToModule('view'),
    openRun: () => goToModule('run'),
    openDesk: () => goToModule('desk')
  };
  /**
   * It allows to open the subsection using the bookmarks on the right of the menu, if it is set.
   */
  bookmarks = {
    openArticlesPage: () => selectBookmarks('Articles'),
    openCameraPage: () => selectBookmarks('Cameras'),
    openMeasureResultsPage: () => selectBookmarks('Measure Results'),
    openTtTable: () => selectBookmarks('Track and Trace Table'),
    openWindowManag: () => selectBookmarks('Window Management'),
    openFonts: () => selectBookmarks('Fonts'),
    openCodes: () => selectBookmarks('Codes'),
    openProgMeasures: () => selectBookmarks('Progr. Measures'),
    openBatchConfig: () => selectBookmarks('Batch Configurations'),
    openMeasureTest: () => selectBookmarks('Measure Test'),
    openDashboard: () => selectBookmarks('Dashboard'),
    openTrackTracePage: () => selectBookmarks('Track and Trace'),
    openCounters: () => selectBookmarks('Counters'),
    openAlarms: () => selectBookmarks('Alarms'),
    openSyslogs: () => selectBookmarks('System Logs'),
    openBatchManag: () => selectBookmarks('Batch Management'),
    openSystemParam: () => selectBookmarks('System Parameters'),
    openArticleParam: () => selectBookmarks('Article Parameters'),
    openUsers: () => selectBookmarks('Users')
  };

  language = {
    useItalian: () => changeLanguage('Italiano'),
    useEnglish: () => changeLanguage('English'),
    useDeutsch: () => changeLanguage('Deutsch'),
    useEspañol: () => changeLanguage('Español'),
    useFrançais: () => changeLanguage('Français')
  };

  button = {
    showLogo(flag: boolean) {
      if (flag == true) {
        cy.get('.bottom-bar sv-checkbox-field .styled-checkbox').find('[type="checkbox"]').check({ force: true });
      } else {
        cy.get('.bottom-bar sv-checkbox-field .styled-checkbox').find('[type="checkbox"]').uncheck({ force: true });
      }
      return cy.get('sv-appnav-menu');
    },
    configure() {
      cy.get('.menu-wrapper .top-bar sv-button')
        .children()
        .children()
        .should('have.class', 'fa-table-layout')
        .eq(0)
        .click();
      cy.wait(1000);
      return cy.get('sv-appnav-menu');
    },
    addBookmark(
      section:
        | 'Articles'
        | 'Window Management'
        | 'Fonts'
        | 'Codes'
        | 'Progr. Measures'
        | 'Batch Configurations'
        | 'Measure Results'
        | 'Cameras'
        | 'Track and Trace Table'
        | 'Measure Test'
        | 'Dashboard'
        | 'Track and Trace'
        | 'Counters'
        | 'Alarms'
        | 'System Logs'
        | 'Batch Management'
        | 'Article Parameters'
        | 'System Parameters'
        | 'Users',
      col: number,
      mode?: 'Search'
    ) {
      cy.get('.links-scroller .add-button')
        .eq(col - 1)
        .click();
      cy.wait(1000);
      cy.screenshot('Add Bookmark');
      //cy.get('.cdk-overlay-connected-position-bounding-box').takeEvidence('Add bookmark');
      if (mode == 'Search') {
        cy.get('.add-popover sv-text-field input').type(section);
      }
      cy.wait(1000);
      cy.get('.add-popover sv-tree mat-tree-node .sv-row').contains(section).siblings('sv-button').click();
      cy.wait(1000);
    },
    reset: () => buttonTop('Reset'),
    undo: () => buttonTop('Undo'),
    redo: () => buttonTop('Redo'),
    discard() {
      cy.get('.area-bar sv-button .action-button-wrapper .fa-times').click();
    },
    apply: () => buttonTop('Apply')
  };

  navigationMenu() {
    cy.get('.main-nav-menu').click();
    cy.wait(1000);
    return cy.get('sv-appnav-menu');
  }

  // Variazioni comandi in base alla lingua
  bookmarksDE = {
    openWindowManag: () => selectBookmarksDE('Fensterverwaltung'),
    openFonts: () => selectBookmarksDE('Schriftarten')
  };

  bookmarksES = {
    openWindowManag: () => selectBookmarksES('Gestión de Ventana'),
    openFonts: () => selectBookmarksES('Fuente')
  };

  bookmarksFR = {
    openWindowManag: () => selectBookmarksFR('Gestion des fenêtres'),
    openFonts: () => selectBookmarksFR('Fontes')
  };

  bookmarksIT = {
    openWindowManag: () => selectBookmarksIT('Gestione Finestre'),
    openFonts: () => selectBookmarksIT('Font')
  };
  bookmarksNL = {
    openWindowManag: () => selectBookmarksNL('Vensterbeheer'),
    openFonts: () => selectBookmarksNL('Lettertypes')
  };
}
