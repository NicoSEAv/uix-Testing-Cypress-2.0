export class Notifications {
  closeSuccess(message?: string) {
    this.close(message, 'success');
  }

  closeError(message?: string) {
    this.close(message, 'error');
  }

  private close(messageStr: string, messageType: 'error' | 'success') {
    let messageEl = cy.get('sv-notification .notifications-wrapper .notification.msg-' + messageType);
    if (messageStr) messageEl = messageEl.should('contain.text', messageStr);
    messageEl.click();
  }

  /**
   * It allows to leave the article page of the desk section or not depending on the answer.
   * @param answer can assume the values Yes or No.
   */
  noArticleSelected(answer: 'Yes' | 'No') {
    cy.get('sv-dialog-layout sv-button').contains(answer).click();
  }

  reduceWarning() {
    cy.get('sv-notification-message').takeEvidence('Warning Example');
    cy.get('sv-notification-message sv-button').click();
  }
}
