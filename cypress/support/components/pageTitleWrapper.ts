import { SvButton } from './button';

export class PageTitleWrap {
  bar: Cypress.Chainable<JQuery<HTMLElement>>;

  private constructor() {
    this.bar = cy.get('div.sv-page-title-wrapper');
  }

  getButton(btn: { label: string });
  getButton(btn: { icon: string });
  getButton(btn: { label?: string; icon?: string }) {
    return SvButton.find(this.bar, btn);
  }

  static get(): PageTitleWrap {
    return new PageTitleWrap();
  }
}
