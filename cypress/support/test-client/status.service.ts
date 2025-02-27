import { EndLocalBatchCommand, OcvStatus, SystemStatus_LayoutDescriptionQuery } from '@sv/api/harle.dto';

import {
  ArticleViewArticleListQuery,
  BatchConfigurationSelectionListRequest,
  ChangeStatusInput,
  SelectArticleCommand,
  StartLocalBatchCommand
} from '@sv/api/harle.codegen.dto';

import { callApi } from './api';

import Chainable = Cypress.Chainable;

export type BatchStartConfig = {
  name: string;
  configurationName?: string;
  configurationNum?: number;
  materialItem?: string;
  dataString: string;
};
export type BatchSetupConfig = '*' | false | BatchStartConfig;

export interface ExtendedOcvStatus {
  readonly status: OcvStatus;
  readonly label: string;
  readonly icon: string;
  readonly class: string;
}

export const OcvStatusMap = new Map<number, ExtendedOcvStatus>([
  [-1, { status: 'Unknown', label: '-', icon: '', class: 'hq-status-unknown' }],
  [0, { status: 'Idle', label: 'Idle', icon: 'fas fa-cogs', class: 'hq-status-idle' }],
  [1, { status: 'Automatic', label: 'Ready', icon: 'fas fa-check-circle', class: 'hq-status-automatic' }],
  [2, { status: 'Running', label: 'Running', icon: 'fas fa-sync fa-spin', class: 'hq-status-running' }],
  [3, { status: 'Editing', label: 'Editing', icon: 'fas fa-cog', class: 'hq-status-edit' }],
  [4, { status: 'Disabled', label: '', icon: '', class: '' }],
  [5, { status: 'Alarm', label: 'Alarm', icon: 'fas fa-exclamation-triangle', class: 'hq-status-alarm' }],
  [6, { status: 'Working', label: 'Working', icon: 'fas fa-sync fa-spin', class: 'hq-status-running' }]
]);

type SettableOcvStatus = 'Editing' | 'Idle' | 'Ready';

function callChangeStatusApi(newStatus: string) {
  callApi(ChangeStatusInput, { Status: newStatus }, { timeout: 300000 }).then(response => {
    if (response.type !== 'result') {
      const message = `There was an unexpected error while setting ${newStatus} state. Response received: ${JSON.stringify(response)}`;
      throw new Error(message);
    }

    if (response.result?.Result !== newStatus)
      throw new Error(
        `There was an unexpected error while setting ${newStatus} state: the resulting status is ${response.result?.Result}`
      );
  });
}

function callChangeStatus(...statuses: OcvStatus[]): void {
  statuses.forEach(status => {
    const newStatus = { Editing: 'Editing', Automatic: 'Automatic', Idle: 'Offline' }[status];
    if (!newStatus) throw new Error('Received unexpected status ' + status);
    callChangeStatusApi(newStatus);
  });
}

export function selectArticle(articleName: string): Chainable {
  return callApi(ArticleViewArticleListQuery, {})
    .then(response => {
      if (response?.type !== 'result')
        throw new Error('There was an error reading articles list: ' + JSON.stringify(response?.error));

      const articles = response.result.ArticleList;
      const article = articles.find(a => a.Code === articleName);
      if (!article) {
        const articleList = articles.map(a => `"${a.Code}"`).join(', ');
        throw new Error(`Could not find article "${articleName}". Articles are: ${articleList}`);
      }
      return callApi(SelectArticleCommand, { FileName: article.FileName });
    })
    .then(response => {
      if (response?.type !== 'result')
        throw new Error(`There was an error selecting article "${articleName}": ${JSON.stringify(response?.error)}`);

      if (response.result.CurrentArticle.Code !== articleName)
        throw new Error(`There was an error selecting article "${articleName}": the article seems not to be selected`);
      return cy.wrap(response);
    });
}

export class StatusService {
  currentStatus: OcvStatus = 'Unknown';
  currentArticleName: string = null;
  isBatchOpen = false;
  currentBatchName: string = null;

  setStatus(hqStatus: OcvStatus, articleName: string, batch: BatchSetupConfig): Chainable {
    if (!articleName) throw new Error('Article name cannot be null or empty.');
    if (batch == null) throw new Error('Batch config cannot be null.');
    if (hqStatus !== 'Editing' && hqStatus !== 'Idle' && hqStatus !== 'Automatic')
      throw new Error(`Invalid requested status "${hqStatus}".`);

    return this.readSystemStatus().then(currentSystemStatus => {
      if (articleName !== '*') this.selectArticleIfNeeded(articleName);

      if (batch === false) this.closeBatchIfNeeded();
      else if (batch !== '*') this.startBatchIfNeeded(batch);

      this.changeHqStatusIfNeeded(hqStatus);
    });
  }

  private startBatchIfNeeded(batch: BatchStartConfig) {
    if (this.currentBatchName === batch.name) return;
    this.changeHqStatusIfNeeded('Idle');
    this.startBatch(batch);
    this.currentBatchName = batch.name;
  }

  private selectArticleIfNeeded(articleName: string) {
    if (this.currentArticleName !== articleName) {
      this.changeHqStatusIfNeeded('Idle');
      this.closeBatchIfNeeded();
      selectArticle(articleName);
    }
  }

  private closeBatchIfNeeded(): void {
    if (!this.isBatchOpen) return;
    this.changeHqStatusIfNeeded('Idle');
    this.closeBatch();
    this.isBatchOpen = false;
  }

  private changeHqStatusIfNeeded(status: OcvStatus): OcvStatus {
    const current = this.currentStatus;
    if (status === current) return current;

    if (status === 'Idle' && (current === 'Automatic' || current === 'Editing')) callChangeStatus('Idle');
    else if (status === 'Editing' && current === 'Idle') callChangeStatus('Editing');
    else if (status === 'Editing' && current === 'Automatic') callChangeStatus('Idle', 'Editing');
    else if (status === 'Automatic' && current === 'Idle') callChangeStatus('Automatic');
    else if (status === 'Automatic' && current === 'Editing') callChangeStatus('Idle', 'Automatic');
    else throw new Error('Unexpected status ' + current);

    this.currentStatus = status;
  }

  private readSystemStatus(): Cypress.Chainable<boolean> {
    return callApi(SystemStatus_LayoutDescriptionQuery, {}).then(response => {
      if (response?.type !== 'result') throw new Error('Could not retrieve system status');
      if (response.result == null) throw new Error('Could not retrieve system status');
      const currentStatus = response.result;
      this.currentStatus = OcvStatusMap.get(currentStatus?.Status_Id ?? -1)?.status;
      this.currentArticleName = currentStatus.Article_Info?.Article_Name;
      this.isBatchOpen = currentStatus.Batch_Info.Batch_Start !== 0;
      this.currentBatchName = currentStatus.Batch_Info.Batch_Id || '';
      return cy.wrap(true);
    });
  }

  private closeBatch() {
    callApi(EndLocalBatchCommand, {}, { timeout: 30000 }).then(response => {
      if (response?.type !== 'result')
        throw new Error(`There was an error closing the batch: ${JSON.stringify(response?.error)}`);

      if (response.result?.Success !== true) throw new Error('There was an error closing the batch');
      return cy.wrap(true);
    });
  }

  private startBatch(batchConfig: BatchStartConfig) {
    if (batchConfig?.configurationName)
      return this.getConfigurationNumber(batchConfig.configurationName).then(configurationNum => {
        this.startBatch({ name: batchConfig.name, dataString: batchConfig.dataString, configurationNum });
      });

    if (batchConfig == null) throw new Error('Batch start config cannot be null');

    if (batchConfig.configurationNum == null && batchConfig.materialItem == null)
      throw new Error('Batch start config must specify either batch configuration or material item');

    return this.callStartBatchApi(batchConfig);
  }

  private callStartBatchApi(batchConfig: BatchStartConfig) {
    const payload: Partial<StartLocalBatchCommand> = {
      ForceCloseBatchIfStarted: false,
      DataString: batchConfig.dataString
    };

    if (batchConfig.materialItem) payload.MaterialItem = batchConfig.materialItem;

    if (batchConfig.configurationNum) {
      payload.BatchConfigurationNumber = batchConfig.configurationNum;
      payload.IgnoreMaterialItem = true;
    }

    return callApi(StartLocalBatchCommand, payload, { timeout: 30000 }).then(response => {
      if (response?.type !== 'result')
        throw new Error(`There was an error closing the batch: ${JSON.stringify(response?.error)}`);

      if (response.result?.Success !== true) throw new Error('There was an error opening the batch');
    });
  }

  private getConfigurationNumber(configurationName: string) {
    return callApi(BatchConfigurationSelectionListRequest, {}).then(response => {
      if (response.type !== 'result')
        throw new Error(`There was an error retrieving start batch configurations: ${JSON.stringify(response?.error)}`);

      const configurations = response.result.BatchConfigurationSelectionList || [];
      const selectedConfig = configurations.find(cfg => cfg.Name === configurationName);

      if (selectedConfig == null) {
        const configs = configurations.map(cfg => `"${cfg.Name}"`).join(', ');
        throw new Error(
          `Could not find batch start configuration "${configurationName}. Available configs are ${configs}`
        );
      }

      return cy.wrap(selectedConfig.BatchConfigurationNumber);
    });
  }
}
