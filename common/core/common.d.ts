// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { EventEmitter } from 'events';
import { Message } from './dist/message';

export import endpoint = require('./dist/endpoint');
export import errors = require('./dist/errors');
export import results = require('./dist/results');
export { ResultWithHttpResponse } from './dist/results';
export { anHourFromNow, encodeUriComponentStrict } from './dist/authorization';
export { ConnectionString } from './dist/connection_string';
export { Message }
export { SharedAccessSignature } from './dist/shared_access_signature';
export { RetryOperation } from './dist/retry_operation';
export { RetryPolicy, NoRetry, ExponentialBackOffWithJitter } from './dist/retry_policy';
export { AuthenticationProvider, AuthenticationType } from './dist/authentication_provider';
export { getAgentPlatformString } from './dist/utils';
export { Callback, ErrorCallback, NoErrorCallback, DoubleValueCallback, TripleValueCallback, HttpResponseCallback, callbackToPromise, doubleValueCallbackToPromise, errorCallbackToPromise, noErrorCallbackToPromise, tripleValueCallbackToPromise, httpCallbackToPromise } from './dist/promise_utils'

export interface Receiver extends EventEmitter {
    on(type: 'message', func: (msg: Message) => void): this;
    on(type: 'errorReceived', func: (err: Error) => void): this;

    on(type: string, func: Function): this;
}

export { TransportConfig, X509 } from './dist/authorization';
export { IoTHubTokenScopes } from './dist/token_scopes';
