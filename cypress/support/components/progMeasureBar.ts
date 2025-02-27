import { SvButton } from './button';

export class ProgMeasureBar {
  bar: Cypress.Chainable<JQuery<HTMLElement>>;

  private constructor() {
    this.bar = cy.get('.operations-list-lower-bar');
  }

  getButton(btn: { label: string });
  getButton(btn: { icon: string });
  getButton(btn: { label?: string; icon?: string }) {
    return SvButton.find(this.bar, btn);
  }

  static get(): ProgMeasureBar {
    return new ProgMeasureBar();
  }
}
