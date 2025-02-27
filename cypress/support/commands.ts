Cypress.Commands.add('takeEvidence', { prevSubject: 'optional' }, function (subject, fileName?: string) {
  if (cy.takeEvidence['disabled']) return;
  // wait for angular animations to finish
  cy.get('.ng-animating').should('not.exist');
  if (fileName) cy.screenshot(fileName);
  else cy.screenshot();
  return cy.wrap(subject);
});

import 'cypress-real-events';
// Cypress.Commands.add('versionCheck', (versionUIX, versionBVH, versionAPI) => {
//   //This command allows to check the version of the SW taking as input the version of UIX, BVH, and API
//   cy.get('[class="menu-top first-row ng-tns-c105-0"] sv-button')
//     .should('not.contain', 'UNRELEASED') // test fails when there is UNRELEASED version in the button or does not correspond to the version expected
//     .click();
//   cy.get('[class="info-text"]').then(info => {
//     cy.wrap(info)
//       .eq(0)
//       .should('have.text', ' ' + versionUIX + ' ');
//     cy.wrap(info)
//       .eq(1)
//       .should('have.text', ' Blister Vision - Harlequin - ' + versionBVH + ' ');
//     cy.wrap(info)
//       .eq(2)
//       .should('have.text', ' ' + versionAPI + ' ');
//   });
//   cy.get('sv-system-info-dialog sv-button').click();
// });
