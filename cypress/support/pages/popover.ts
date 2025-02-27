export class popover {
  /**
   * It allows to check the reason why the button is disabled and closes the popover appeard.
   * In this case, the System status should have been different.
   */
  disabledWrongStatus() {
    cy.get('.reasons-wrapper .reasons-header').contains('Disabled because:');
    cy.get('.reasons-wrapper .reason-entry').contains('The status must be ').takeEvidence();
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }
  /**
   * It allows to check the reason why the button is disabled and closes the popover appeard.
   * In this case, the batch should have been opened.
   */
  disabledBatchClosed() {
    cy.get('.reasons-wrapper .reasons-header').contains('Disabled because:');
    cy.get('.reasons-wrapper .reason-entry').contains('The batch must be open').takeEvidence();
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }

  disabledUserAuthorization() {
    cy.get('.reasons-wrapper .reasons-header').contains('Disabled because:');
    cy.get('.reasons-wrapper .reason-entry').contains('Missing user authorization').takeEvidence();
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }
}
