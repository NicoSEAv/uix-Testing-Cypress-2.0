export class TopBar {
  checkUser(userId: string) {
    cy.get('sv-login > div').should('contain.text', userId);
  }

  //It is included in the following command checkButtonStatus
  checkCurrentStatus(
    status: 'Idle' | 'Editing' | 'Ready' | 'Leerlauf' | 'Inactivo' | 'Inactif' | 'Inactief',
    config?: { takeEvidence: boolean }
  ) {
    cy.get('sv-status-bar').click();
    cy.get('.status-toggle-container')
      .children('.statuses-container')
      .find('sv-button.current-status')
      .should('contain.text', status);

    if (config?.takeEvidence) cy.takeEvidence('System Status');
    cy.wait(1000);
  }

  /**
   * It allows to verify the status (active or not) of each System Status button
   * @param status : can assume the values 'Editing' | 'Idle' | 'Ready'
   * @param active : indicates that the button is active or not and so can be selected
   * @param selected : indicates that the button is selected or not as the current System Status
   */
  checkButtonStatus(status: 'Editing' | 'Idle' | 'Ready' | 'Bereit', active = true, selected = false) {
    cy.get('sv-status-bar').click();

    const btnSelectors = {
      Editing: 'sv-button.hq-status-edit',
      Idle: 'sv-button.hq-status-idle',
      Ready: 'sv-button.hq-status-automatic'
    };

    cy.get('.status-toggle-container')
      .children('.statuses-container')
      .find(btnSelectors[status])
      .should('contain.text', status)
      .should(selected ? 'have.class' : 'not.have.class', 'current-status')
      .should(active ? 'not.have.class' : 'have.class', 'disabled');

    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  /**
   *It allows to change the System Status into the one expressed in the variable button.
   * @param button :can assume the value idle, ready, editing.
   */
  changeStatusTo(button: 'idle' | 'ready' | 'editing') {
    cy.get('sv-status-bar').click();
    cy.get('.status-toggle-container')
      .children('.statuses-container')
      .then(btn => {
        if (button == 'editing') {
          cy.wrap(btn).find('sv-button.hq-status-edit').click();
          // cy.get('.cdk-overlay-backdrop-showing').eq(0).click('center');
        } else if (button == 'idle') {
          cy.wrap(btn).find('sv-button.hq-status-idle').click();
          // cy.get('.cdk-overlay-backdrop-showing').eq(0).click('center');
        } else {
          cy.wrap(btn).find('sv-button.hq-status-automatic').click();
          // cy.get('.cdk-overlay-backdrop-showing').eq(0).click('center');
        }
      });
    return cy.get('sv-app-layout');
  }

  /**
   *It allows to check the dialog of the Production Info through the parameters (.takeEvidence integrated inside this function)
   * @param batch can contain the batch number if it is opened otherwise 'Closed batch' if the batch is closed
   * @param options if it is true you are redirect to Batch management page. Otherwise, you stay in the current page. By default it is null.
   */
  checkBatchInfo(batch: string, options?: { openBatchMgtmLink?: boolean } | null) {
    cy.get('.menu-top .production-info-panel').should('contain', batch).click();
    cy.get('.prodinfo-popover .prodinfo-content').eq(1).should('contain', batch).takeEvidence();

    if (options?.openBatchMgtmLink) {
      cy.get('.batch-mgmt-link').click();
      return;
    }

    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  checkProdInfo(options: { batchName: string | false; articleName: string | false; openBatchMgtmLink?: boolean }) {
    if (options == null) throw new Error('Options object cannot be null');

    if (options.batchName !== '*') {
      const label = !options.batchName ? 'Closed Batch' : options.batchName;
      cy.get('.menu-top .production-info-panel .production-info-row')
        .eq(0)
        .contains('span', label, { matchCase: false });

      cy.get('.menu-top .production-info-panel .production-info-row')
        .eq(0)
        .contains('span', label, { matchCase: true });
    }
    if (options.articleName !== '*') {
      const label = !options.articleName ? 'No article' : options.articleName;
      cy.get('.menu-top .production-info-panel .article-name').should('contain', label);
    }

    return cy.get('.menu-top');
  }
}
