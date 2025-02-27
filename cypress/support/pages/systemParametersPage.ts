import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';

function buttonPageTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).checkEnabled().click();
}

export class SystemParametersPage implements PageWithRoute {
  readonly url = '/desk/system-params';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkSystemParamPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.notActiveUsers();
    uix.navBar.deskModule.activeSystemParameters();

    return cy.get('sv-page-title').find('.main-title');
  }
  /**
   * It allows to enable the option User Management
   */
  enableUserManagement() {
    cy.get('.menu-top sv-button .action-button-wrapper .fa-pencil').click();
    cy.get('sv-form-layout sv-field')
      .find('label')
      .eq(0)
      .siblings('.input-wrapper')
      .find('[type="checkbox"]')
      .check({ force: true });
  }

  /**
   * It allows to disable the option User Management
   */
  disableUserManagement() {
    cy.get('.menu-top sv-button .action-button-wrapper .fa-pencil').click();
    cy.get('sv-form-layout sv-field')
      .find('label')
      .eq(0)
      .siblings('.input-wrapper')
      .find('[type="checkbox"]')
      .uncheck();
  }

  button = {
    undo: () => buttonPageTitle('.fa-undo'),
    redo: () => buttonPageTitle('.fa-redo'),
    discard: () => buttonPageTitle('.fa-times'),
    save: () => buttonPageTitle('.fa-save')
  };
}
