/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { ChallengeListInstance } from "./entity/challenge";
import { FactorListInstance } from "./entity/factor";
import { NewFactorListInstance } from "./entity/newFactor";

/**
 * Options to pass to create a EntityInstance
 */
export interface EntityListInstanceCreateOptions {
  /** The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\\\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
  identity: string;
}
/**
 * Options to pass to each
 */
export interface EntityListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: EntityInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface EntityListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface EntityListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface EntityContext {
  challenges: ChallengeListInstance;
  factors: FactorListInstance;
  newFactors: NewFactorListInstance;

  /**
   * Remove a EntityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a EntityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EntityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EntityContextSolution {
  serviceSid: string;
  identity: string;
}

export class EntityContextImpl implements EntityContext {
  protected _solution: EntityContextSolution;
  protected _uri: string;

  protected _challenges?: ChallengeListInstance;
  protected _factors?: FactorListInstance;
  protected _newFactors?: NewFactorListInstance;

  constructor(protected _version: V2, serviceSid: string, identity: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    this._solution = { serviceSid, identity };
    this._uri = `/Services/${serviceSid}/Entities/${identity}`;
  }

  get challenges(): ChallengeListInstance {
    this._challenges =
      this._challenges ||
      ChallengeListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._challenges;
  }

  get factors(): FactorListInstance {
    this._factors =
      this._factors ||
      FactorListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._factors;
  }

  get newFactors(): NewFactorListInstance {
    this._newFactors =
      this._newFactors ||
      NewFactorListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._newFactors;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EntityInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity
        )
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

interface EntityPayload extends TwilioResponsePayload {
  entities: EntityResource[];
}

interface EntityResource {
  sid: string;
  identity: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class EntityInstance {
  protected _solution: EntityContextSolution;
  protected _context?: EntityContext;

  constructor(
    protected _version: V2,
    payload: EntityResource,
    serviceSid: string,
    identity?: string
  ) {
    this.sid = payload.sid;
    this.identity = payload.identity;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, identity: identity || this.identity };
  }

  /**
   * A 34 character string that uniquely identifies this Entity.
   */
  sid: string;
  /**
   * The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters.
   */
  identity: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The date that this Entity was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date that this Entity was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Entity.
   */
  links: Record<string, string>;

  private get _proxy(): EntityContext {
    this._context =
      this._context ||
      new EntityContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._context;
  }

  /**
   * Remove a EntityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a EntityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EntityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the challenges.
   */
  challenges(): ChallengeListInstance {
    return this._proxy.challenges;
  }

  /**
   * Access the factors.
   */
  factors(): FactorListInstance {
    return this._proxy.factors;
  }

  /**
   * Access the newFactors.
   */
  newFactors(): NewFactorListInstance {
    return this._proxy.newFactors;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      identity: this.identity,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EntitySolution {
  serviceSid: string;
}

export interface EntityListInstance {
  _version: V2;
  _solution: EntitySolution;
  _uri: string;

  (identity: string): EntityContext;
  get(identity: string): EntityContext;

  /**
   * Create a EntityInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EntityInstance
   */
  create(
    params: EntityListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance>;

  /**
   * Streams EntityInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EntityListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: EntityInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: EntityListInstanceEachOptions,
    callback?: (item: EntityInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EntityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage>;
  /**
   * Lists EntityInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EntityListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EntityInstance[]) => any
  ): Promise<EntityInstance[]>;
  list(
    params: EntityListInstanceOptions,
    callback?: (error: Error | null, items: EntityInstance[]) => any
  ): Promise<EntityInstance[]>;
  /**
   * Retrieve a single page of EntityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EntityListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage>;
  page(
    params: EntityListInstancePageOptions,
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function EntityListInstance(
  version: V2,
  serviceSid: string
): EntityListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((identity) => instance.get(identity)) as EntityListInstance;

  instance.get = function get(identity): EntityContext {
    return new EntityContextImpl(version, serviceSid, identity);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Entities`;

  instance.create = function create(
    params: EntityListInstanceCreateOptions,
    callback?: (error: Error | null, items: EntityInstance) => any
  ): Promise<EntityInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EntityInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | EntityListInstancePageOptions
      | ((error: Error | null, items: EntityPage) => any),
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new EntityPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new EntityPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

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

export class EntityPage extends Page<
  V2,
  EntityPayload,
  EntityResource,
  EntityInstance
> {
  /**
   * Initialize the EntityPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: EntitySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EntityInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EntityResource): EntityInstance {
    return new EntityInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
