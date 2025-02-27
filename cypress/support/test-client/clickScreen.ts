import { NumberMatcher } from 'cypress/types/net-stubbing';

export class ClickScreen {
  realClick() {
    cy.get('.cdk-overlay-backdrop-showing').realClick({ x: 99, y: 140 });
  }
  closeAppNavMenu() {
    cy.get('.popup-menu-overlay').click('center');
  }
  clickCenter() {
    cy.get('.cdk-overlay-backdrop-showing').click('center');
  }
  realPosition(x: number, y: number) {
    cy.get('.cdk-overlay-backdrop-showing').realClick({ x: x, y: y });
  }
}
