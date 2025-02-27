import { uix } from '../test-client';
import { should } from 'chai';
import { PageTitleBar } from '../components/pageTitleBar';

function clickButton(string) {
  PageTitleBar.get().getButton({ label: string }).checkEnabled().click();
}

export class precentTool {
  checkPage() {
    cy.get('.page-title-bar').takeEvidence('Precenter Tool');
  }

  button = {
    //ChangePrecenter: () => clickButton('Change Precenter'),
    ChangePrecenter() {
      cy.get('.page-title-bar sv-button .action-button-wrapper .fa-pen-to-square').click();
    },
    Undo: () => clickButton('Undo'),
    Redo: () => clickButton('Redo'),
    Cancel: () => clickButton('Cancel'),
    Apply: () => clickButton('Apply'),
    Exit() {
      cy.get('.page-title-bar sv-button .action-button-wrapper .fa-sign-out-alt').click();
    }
  };

  showProgMeasureOperations() {
    cy.get('sv-mf-precenter-tool sv-mf-precenter-measure-data .op-statuses').click();
    cy.wait(1000);
    //Screenshot
    cy.get('.preview-data-popover-wrapper').takeEvidence('Preview Precentering operations of Progrm Measure');
  }

  editOffset(window: number, x?: string, y?: string) {
    cy.get('.windows-list-wrapper .windows-list .win-row .win-number')
      .contains(window)
      .parent()
      .parent()
      .find('sv-button .action-button-wrapper .fa-pencil')
      .click();
    cy.wait(1000);
    if (x != null || y != null) {
      cy.get('.popover-box .form-row sv-numeric-field').eq(0).find('input').type('{selectall}{backspace}').type(x);
      cy.get('.popover-box .form-row sv-numeric-field').eq(1).find('input').type('{selectall}{backspace}').type(y);
    }
    cy.get('.cdk-overlay-container').takeEvidence('Edit offset Precentering Tool');
    cy.wait(1000);
    cy.get('.close-popover-btn').click();
  }

  precentOtherTV() {
    cy.get('.windows-count').click();
    cy.wait(1000);
    cy.get('.cdk-overlay-container .popover-box sv-checkbox-field .styled-checkbox')
      .find('[type="checkbox"]')
      .check({ force: true });
    return cy.get('.popover-box');
  }
}
