import { cli } from 'cypress';
import { PageTitleBar } from '../components/pageTitleBar';
import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';

export class ArticlesPage implements PageWithRoute {
  readonly url = 'desk/articles';

  /**
   * It checks that the landed page is the one expected
   * @returns :it allows to concatenate the command.takeEvidence()
   */
  checkArticlesPage() {
    cy.get('sv-page-title').find('.main-title');
    uix.navBar.deskModule.notActiveBatchConfigurations();
    uix.navBar.deskModule.activeArticleButton();
    //uix.navBar.deskModule.notActiveArticleParameters();
    return cy.get('sv-page-title').find('.main-title');
  }

  /**
   * It allows to create and article inserting
   * @param ArticleName : defines the name of the article
   * @param Screenshot : optional, it allows to take a screenshoot to the dialog of the new article.
   */
  newArticle(ArticleName: string, Screenshot?: boolean) {
    PageTitleBar.get().getButton({ icon: '.fa-file-plus' }).checkEnabled().click();
    cy.get('sv-dialog-layout sv-form-layout sv-text-field').eq(0).find('input').type(ArticleName);
    if (Screenshot == true) {
      cy.wait(1000);
      cy.get('sv-dialog-layout').takeEvidence('New Article dialog');
    }
    cy.get('sv-dialog-layout sv-button .action-button-wrapper .fa-file-plus').click();
    cy.wait(1000);
    uix.notification.closeSuccess();
  }

  /**
   *It allows to select an article in the Article page.
   * @param articleName : it should contain the article name the user want to select.
   */
  selectArticle(articleName: string) {
    cy.get('table tbody tr .article-name')
      .eq(0)
      .invoke('text')
      .then(selected => {
        if (selected !== articleName) {
          cy.get('table tbody tr').find('.article-name').contains(`${articleName}`).click();
          cy.get('sv-button .action-button-wrapper .fa-file-check').click();
          cy.get('sv-button.dialog-action .fa-file-check').takeEvidence().click();
          uix.notification.closeSuccess();
        }
      });
  }

  /**
   * It allows to copy and rename the selected article.
   * @param newArtName : corresponds to the name of the copied article
   * @param newArtDescr : corresponds to the description of the copied article
   */
  copyArticle(newArtName: string, newArtDescr: string) {
    cy.get('sv-button').contains('Copy').click();
    cy.get('sv-copy-article-modal').find('sv-text-field').eq(0).type('{selectall}{backspace}').type(newArtName);
    cy.get('sv-copy-article-modal').find('sv-text-field').eq(1).type('{selectall}{backspace}').type(newArtDescr);
    cy.get('sv-dialog-layout sv-button').contains('Copy').click();
  }

  /**
   * It allows to delete the selected article.
   */
  DeleteArticleCommand() {
    cy.get('sv-button .action-button-wrapper .fa-trash').click();
    cy.get('sv-button .dialog-action .fa-trash').click();
  }
}
