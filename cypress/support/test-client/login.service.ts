import { LoginCommand, LogoutCommand } from '@sv/api/harle.dto';
import { Persist } from './test-persist';
import { AccountDetailQuery } from '@sv/api/harle.codegen.dto';
import { callApi } from './api';

export const JWT_STORAGE_KEY = '__HqAuthProvider_____jwtToken';

export class LoginService {
  private callLogout(): Cypress.Chainable {
    return callApi(LogoutCommand, {}).then(response => {
      if (response.type === 'error')
        throw new Error(
          `There was an unexpected error while logging out. Response received: ${JSON.stringify(response)}`
        );

      Persist.writeToSessionStorage(JWT_STORAGE_KEY, null);

      return cy.wrap(null);
    });
  }

  private callLogin(user: string, password: string) {
    return callApi(LoginCommand, {
      UserCode: user,
      Password: password,
      DeviceId: 'cypress',
      ForceLogout: user === 'EXPERT'
    }).then(response => {
      if (response?.type !== 'result' || !response.result)
        throw new Error(
          `There was an unexpected error while logging in. Response received: ${JSON.stringify(response)}`
        );

      if (response.result.Success !== true)
        throw new Error(`There was an error while logging in. Response received: ${JSON.stringify(response.result)}`);

      if (response.result.Authentication_Token) {
        cy.log('Saving jwt to sessionstorage');
        Persist.writeToSessionStorage(JWT_STORAGE_KEY, { jwt: response.result.Authentication_Token });
      }
    });
  }

  loginIfNeeded(user: string, password: string) {
    if (!user) throw new Error('User cannot be null or empty');
    if (!password) password = '';

    callApi(AccountDetailQuery, {}).then(response => {
      const alreadyLoggedIn = response?.type === 'result' && response.result?.Id === user;
      if (!alreadyLoggedIn) this.callLogin(user, password);
    });
  }

  logoutIfNeeded(expertPassword?: string) {
    callApi(AccountDetailQuery, {}).then(response => {
      const alreadyOperator = response?.type === 'result' && response.result?.Id === 'OPERATOR';
      if (alreadyOperator) return;
      const someoneLoggedIn = response?.type === 'result' && response.result?.Id !== 'OPERATOR';
      if (someoneLoggedIn) return this.callLogout();

      // force login/logout combination
      if (response?.type === 'error' && response.error?.code === -100)
        return this.callLogin('EXPERT', expertPassword).then(_ => this.callLogout());
    });
  }
}
