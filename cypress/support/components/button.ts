export class SvButton {
  checkDisabled(): SvButton {
    this.host.closest('sv-button').should('have.class', 'disabled').children('sv-enabled-if-badge');
    return this;
  }

  checkEnabled(): SvButton {
    this.host.closest('sv-button').should('not.have.class', 'disabled');
    return this;
  }

  click(): SvButton {
    this.host.click();
    return this;
  }

  private constructor(public readonly host: Cypress.Chainable<JQuery<HTMLElement>>) {}

  static find(container: Cypress.Chainable<JQuery<HTMLElement>>, btn: { label?: string; icon?: string }): SvButton {
    if (btn.label) return new SvButton(container.find('sv-button').contains(btn.label));
    else if (btn.icon) return new SvButton(container.find('sv-button .action-button-wrapper').find(`${btn.icon}`));
    throw new Error('Invalid configuration');
  }
}
