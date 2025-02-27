import { SvButton } from './button';

export class FilterResults {
  bar: Cypress.Chainable<JQuery<HTMLElement>>;

  private constructor() {
    this.bar = cy.get('sv-mf-measure-results-page .grid-toolbar');
  }

  getButton(btn: { label: string });
  getButton(btn: { icon: string });
  getButton(btn: { label?: string; icon?: string }) {
    return SvButton.find(this.bar, btn);
  }

  static get(): FilterResults {
    return new FilterResults();
  }
}
