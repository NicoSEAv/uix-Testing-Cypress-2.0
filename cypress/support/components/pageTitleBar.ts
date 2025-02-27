import { SvButton } from './button';

export class PageTitleBar {
  bar: Cypress.Chainable<JQuery<HTMLElement>>;

  private constructor() {
    this.bar = cy.get('div.page-title-bar');
  }

  getButton(btn: { label: string });
  getButton(btn: { icon: string });
  getButton(btn: { label?: string; icon?: string }) {
    return SvButton.find(this.bar, btn);
  }

  static get(): PageTitleBar {
    return new PageTitleBar();
  }
}
