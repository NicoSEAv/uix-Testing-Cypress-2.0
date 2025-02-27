import { getDtoMetadata, IReturn } from '@sv/yudoo/core';

import { Persist } from './test-persist';
import { JWT_STORAGE_KEY } from './login.service';

interface JsonRpcResponse {
  jsonrpc: '2.0';
  id: number;
  result: any;
}

interface JsonRpcError {
  jsonrpc: '2.0';
  id: number;
  error: {
    code: number;
    message: string;
    data: any;
  };
}

export interface CallApiConfig {
  // /*
  //  * The default (true) will throw an error and fail the test.
  //  * False not show any notification and throw the error object in the promise chain,
  //  * allowing further elaboration of the error.
  //  */
  // stdErrors: boolean | 'notifyAndRethrow';
  timeout: number;
}

function getDtoName(dto: new () => any): string {
  return dto != null ? getDtoMetadata(dto)?.name : null;
}

function isJsonRpcResponse(response: Cypress.Response<any>, id: number): response is Cypress.Response<JsonRpcResponse> {
  return !!(response?.body && response.body.jsonrpc === '2.0' && response.body.id === id && response.body.result);
}

function isJsonRpcError(response: Cypress.Response<any>, id: number): response is Cypress.Response<JsonRpcError> {
  return !!(response?.body.jsonrpc === '2.0' && response.body.id === id && response.body.error?.code != null);
}

let callCounter = 1e6;

export type ApiResult<T> = { type: 'result'; result: T };
export type ApiError = { type: 'error'; error: JsonRpcError['error'] };
export type ApiResponse<T> = ApiResult<T> | ApiError;

export function callApi(
  method: string,
  payload?: any,
  config?: Partial<CallApiConfig>
): Cypress.Chainable<ApiResponse<any>>;
export function callApi<TRequest>(
  dto: new () => TRequest,
  data: Partial<TRequest>,
  config?: Partial<CallApiConfig>
): TRequest extends IReturn<infer U> ? Cypress.Chainable<ApiResponse<U>> : never;
export function callApi(
  dto: string | (new () => any),
  payload?: any,
  config?: Partial<CallApiConfig>
): Cypress.Chainable<ApiResponse<any>> {
  const jwtObj = Persist.readFromSessionStorage(JWT_STORAGE_KEY);
  const jwt = jwtObj?.jwt;
  const method = typeof dto === 'string' ? dto : getDtoName(dto);

  if (!method)
    throw new Error('There was an error invoking the api: could not resolve a method name for the RPC call.');

  const auth = jwt ? { bearer: jwt } : undefined;
  const body = { jsonrpc: '2.0', id: ++callCounter, method, params: payload || {} };
  const timeout = Number.isFinite(config?.timeout) && config.timeout > 0 ? config.timeout : 20000;

  return cy.request({ method: 'POST', url: '/api', body, auth, timeout }).then((response): ApiResponse<any> => {
    if (response.isOkStatusCode && isJsonRpcResponse(response, body.id))
      return { type: 'result', result: response.body.result };

    console.log('There was an error invoking the API', response.body);

    if (isJsonRpcError(response, body.id)) {
      const rpcErr = response.body.error;
      return { type: 'error', error: rpcErr };
      throw new Error(`There was an error invoking the API: [${rpcErr.code}] ${rpcErr.message}`);
    }
    throw new Error(`There was an unexpected error invoking the API: ${JSON.stringify(response.body)}`);
  });
}
