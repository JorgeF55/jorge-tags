/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to fetch a SettingInstance
 */
export interface SettingContextFetchOptions {
  /**  */
  subaccountSid?: string;
}

/**
 * Options to pass to update a SettingInstance
 */
export interface SettingContextUpdateOptions {
  /**  */
  advancedFeatures?: boolean;
  /**  */
  voiceTrace?: boolean;
  /**  */
  subaccountSid?: string;
}

export interface SettingContext {
  /**
   * Fetch a SettingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;
  /**
   * Fetch a SettingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  fetch(
    params: SettingContextFetchOptions,
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;

  /**
   * Update a SettingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  update(
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;
  /**
   * Update a SettingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  update(
    params: SettingContextUpdateOptions,
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SettingContextSolution {}

export class SettingContextImpl implements SettingContext {
  protected _solution: SettingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Voice/Settings`;
  }

  fetch(
    params?:
      | SettingContextFetchOptions
      | ((error: Error | null, item?: SettingInstance) => any),
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["subaccountSid"] !== undefined)
      data["SubaccountSid"] = params["subaccountSid"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SettingInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | SettingContextUpdateOptions
      | ((error: Error | null, item?: SettingInstance) => any),
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["advancedFeatures"] !== undefined)
      data["AdvancedFeatures"] = serialize.bool(params["advancedFeatures"]);
    if (params["voiceTrace"] !== undefined)
      data["VoiceTrace"] = serialize.bool(params["voiceTrace"]);
    if (params["subaccountSid"] !== undefined)
      data["SubaccountSid"] = params["subaccountSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SettingInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface SettingPayload extends SettingResource {}

interface SettingResource {
  account_sid: string;
  advanced_features: boolean;
  voice_trace: boolean;
  url: string;
}

export class SettingInstance {
  protected _solution: SettingContextSolution;
  protected _context?: SettingContext;

  constructor(protected _version: V1, payload: SettingResource) {
    this.accountSid = payload.account_sid;
    this.advancedFeatures = payload.advanced_features;
    this.voiceTrace = payload.voice_trace;
    this.url = payload.url;

    this._solution = {};
  }

  accountSid: string;
  advancedFeatures: boolean;
  voiceTrace: boolean;
  url: string;

  private get _proxy(): SettingContext {
    this._context = this._context || new SettingContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a SettingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;
  /**
   * Fetch a SettingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  fetch(
    params: SettingContextFetchOptions,
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Update a SettingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  update(
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;
  /**
   * Update a SettingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingInstance
   */
  update(
    params: SettingContextUpdateOptions,
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: SettingInstance) => any
  ): Promise<SettingInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      advancedFeatures: this.advancedFeatures,
      voiceTrace: this.voiceTrace,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SettingSolution {}

export interface SettingListInstance {
  _version: V1;
  _solution: SettingSolution;
  _uri: string;

  (): SettingContext;
  get(): SettingContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SettingListInstance(version: V1): SettingListInstance {
  const instance = (() => instance.get()) as SettingListInstance;

  instance.get = function get(): SettingContext {
    return new SettingContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
