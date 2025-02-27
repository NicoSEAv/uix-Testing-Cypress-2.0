import { PageWithRoute } from './pages.models';
import { PageTitleBar } from '../components/pageTitleBar';
import { uix } from '@sv/testing/uix';

function clickButton(string) {
  PageTitleBar.get().getButton({ icon: string }).checkEnabled().click();
}

export class UsersPage implements PageWithRoute {
  readonly url = '/desk/users';
  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkUsersPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.activeUsers();
    uix.navBar.deskModule.notActiveSystemParameters();

    return cy.get('sv-page-title').find('.main-title');
  }

  createNew() {
    PageTitleBar.get().getButton({ icon: '.fa-file-plus' }).checkEnabled().click();
  }

  selectUser(name: string) {
    cy.get('.grid-content-wrapper table tr').contains(name).click();
  }

  edit = {
    compileField(id: string, name?: string, surname?: string) {
      cy.get('sv-form-layout sv-field input').eq(0).type(id);
      cy.get('sv-form-layout sv-field input').eq(1).type(name);
      cy.get('sv-form-layout sv-field input').eq(2).type(surname);
    },

    selectTab(tab: 'Permissions' | 'Functions') {
      if (tab == 'Permissions') {
        cy.get('.mat-mdc-tab-labels .mdc-tab__text-label').eq(0).click();
      } else {
        cy.get('.mat-mdc-tab-labels .mdc-tab__text-label').eq(1).click();
      }
    },

    enablingPermission(
      permission:
        | 'User management'
        | 'Article choice'
        | 'Work'
        | 'Reset severe alarms'
        | 'Batch management'
        | 'Editing level 1'
        | 'Editing level 2'
        | 'Editing level 3'
        | 'System management'
        | 'Barecode management'
        | 'Start of machine for test'
        | 'Service call'
        | 'Editing configuration file'
        | 'Serialization'
        | 'Learning'
        | 'Tolerances'
        | 'Article commit'
    ) {
      cy.get('sv-user-permissions-field sv-checkbox-field')
        .contains(permission)
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    },

    enablingPermissionDE(permission: 'Usermanagement' | 'Formatwahl' | 'Bearbeiten ersten Ebene') {
      cy.get('sv-user-permissions-field sv-checkbox-field')
        .contains(permission)
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    },
    enablingPermissionES(permission: 'Administración usuarios' | 'Programación nivel 1' | 'Cambio artículo') {
      cy.get('sv-user-permissions-field sv-checkbox-field')
        .contains(permission)
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    },
    enablingPermissionFR(permission: 'Administration utilisateurs' | 'Programmation niveau 1' | 'Changement article') {
      cy.get('sv-user-permissions-field sv-checkbox-field')
        .contains(permission)
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    },
    enablingPermissionIT(permission: 'Amministrazione utenti' | 'Programmazione livello 1' | 'Cambio articolo') {
      cy.get('sv-user-permissions-field sv-checkbox-field')
        .contains(permission)
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    },
    enablingPermissionNL(permission: 'Gebruikers administratie' | 'Programmering niveau 1' | 'Artikel vervangen') {
      cy.get('sv-user-permissions-field sv-checkbox-field')
        .contains(permission)
        .siblings('.styled-checkbox')
        .find('[type="checkbox"]')
        .check({ force: true });
    },
    enablingFunctions(fun: string) {
      cy.get('sv-user-functions .function-row .function-name').contains(fun).parent().siblings('.fa-right').click();
    },

    exit: () => clickButton('.fa-sign-out-alt'),
    undo: () => clickButton('Undo'),
    redo: () => clickButton('Redo'),
    discard: () => clickButton('Discard'),
    save: () => clickButton('Save')
  };
}
