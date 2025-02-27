import { SvButton } from './button';

export class CameraViewer {
  bar: Cypress.Chainable<JQuery<HTMLElement>>;

  private constructor() {
    this.bar = cy.get('sv-camera-viewer');
  }

  getButton(btn: { label: string });
  getButton(btn: { icon: string });
  getButton(btn: { label?: string; icon?: string }) {
    return SvButton.find(this.bar, btn);
  }

  static get(): CameraViewer {
    return new CameraViewer();
  }
}
