import { uix } from '@sv/testing/uix';
/**
 * Uncomment the row below in order to disable all the takeEvidence in the test
 */
cy.takeEvidence['disabled'] = true;

//Variable to change in order to enable/disable all the takeEvidence after the setUp()
const screen = false;
it('Alarm Management with user already logged-in and comment required', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.pages.view.dashboard.page.toggleFields.changeToReady();
  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(20000);
  uix.pages.view.systemLogs.resetAlarmComment('Alarm reset complete');
  uix.notification.closeSuccess('The Alarm has been reset');
  uix.pages.view.dashboard.page.toggleFields.changeToIdle();
});

it('Alarm Management: Non existing user + Valid User and Reason, wrong Password + Valid User and Password, empty Reason + Valid User and Password, Reason with only the space character', () => {
  uix
    .setup()
    .asExpertUser()
    .withStatus('Idle', 'TT3 LIVELLI ALT,', false)
    .openPage(uix.pages.run.batchMgmt, { takeEvidence: screen });
  uix.pages.run.batchMgmt.openBatch('%01%01234567890128%10%LOTTO_123%17%201212%37%1000');
  uix.appNavigation.modules.openView();
  uix.login.logoutUser();
  uix.pages.view.dashboard.page.toggleFields.changeToReady();
  uix.pages.view.dashboard.page.goInRunning(false);
  cy.wait(20000);
  cy.get('sv-form-layout').find('sv-field').should('have.length', '3');
  //Non exisiting user
  uix.pages.view.systemLogs.resetAlarmUsr('Alarm reset complete', 'Pippo', 'Pluto');
  uix.notification.closeError('User not found');
  //Valid User and Reason, wrong Password
  uix.pages.view.systemLogs.resetAlarmUsr('Alarm reset complete', 'EXPERT', 'Pluto');
  uix.notification.closeError('Incorrect Password');
  //Valid User and Password, empty Reason
  uix.pages.view.systemLogs.resetAlarmUsr('{backspace}', 'EXPERT', '{backspace}');
  //Valid User and Password, Reason with only the space character
  uix.pages.view.systemLogs.resetAlarmUsr(' ', 'EXPERT', '{backspace}');
  uix.notification.closeError('The comment field cannot be empty');
  //Valid User, Password, comment.
  uix.pages.view.systemLogs.resetAlarmUsr('Alarm reset complete', 'EXPERT', '{backspace}');
  uix.notification.closeSuccess('The Alarm has been reset');
});
