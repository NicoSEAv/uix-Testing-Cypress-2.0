import { OcvStatus } from '@sv/api/harle.dto';

import { LoginService } from './login.service';
import { BatchSetupConfig, StatusService } from './status.service';
import { PageWithRoute } from '../pages/pages.models';

type IUserConfigurator = Pick<TestSetupHelpers, 'asExpertUser' | 'asOperator' | 'asUser'>;
type IStatusConfigurator = Pick<TestSetupHelpers, 'withStatus'>;
type IPageConfigurator = Pick<TestSetupHelpers, 'openPage'>;

type SettableOcvStatus = 'Idle' | 'Editing' | 'Ready';

const SupportedStatuses: Readonly<Record<SettableOcvStatus, OcvStatus>> = {
  Idle: 'Idle',
  Editing: 'Editing',
  Ready: 'Automatic'
};

export class TestSetupHelpers {
  static getInstance(config?: { expertPassword: string }): IUserConfigurator {
    return new TestSetupHelpers(config?.expertPassword || '');
  }

  private login = new LoginService();
  private status = new StatusService();

  private constructor(private expertPassword: string) {}

  asExpertUser(): IStatusConfigurator {
    this.login.loginIfNeeded('EXPERT', this.expertPassword);
    return this;
  }

  asUser(user: string, password: string): IStatusConfigurator {
    this.login.loginIfNeeded(user, password);
    return this;
  }

  asOperator(): IStatusConfigurator {
    this.login.logoutIfNeeded(this.expertPassword);
    return this;
  }

  withStatus(status: SettableOcvStatus, articleName: string, batch: BatchSetupConfig): IPageConfigurator {
    this.status.setStatus(SupportedStatuses[status], articleName, batch);
    return this;
  }

  openPage(page: PageWithRoute, config?: { takeEvidence: boolean }): void;
  openPage(url: string, config?: { takeEvidence: boolean }): void;
  openPage(pageOrUrl: string | PageWithRoute, config?: { takeEvidence: boolean }): void {
    let url = typeof pageOrUrl === 'string' ? pageOrUrl : pageOrUrl?.url;
    if (url == null) throw new Error('No url was provided');

    cy.visit(url.indexOf('#') < 0 ? `/index.html#${url}` : url);
    if (config?.takeEvidence == null || config.takeEvidence) cy.takeEvidence();
  }
}
