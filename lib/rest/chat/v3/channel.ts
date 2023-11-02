/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V3 from "../V3";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type ChannelChannelType = "public" | "private";

type ChannelWebhookEnabledType = "true" | "false";

/**
 * Options to pass to update a ChannelInstance
 */
export interface ChannelContextUpdateOptions {
  /** The X-Twilio-Webhook-Enabled HTTP request header */
  xTwilioWebhookEnabled?: ChannelWebhookEnabledType;
  /**  */
  type?: ChannelChannelType;
  /** The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this channel belongs to. */
  messagingServiceSid?: string;
}

export interface ChannelContext {
  /**
   * Update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Update a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    params: ChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelContextSolution {
  serviceSid: string;
  sid: string;
}

export class ChannelContextImpl implements ChannelContext {
  protected _solution: ChannelContextSolution;
  protected _uri: string;

  constructor(protected _version: V3, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${sid}`;
  }

  update(
    params?:
      | ChannelContextUpdateOptions
      | ((error: Error | null, item?: ChannelInstance) => any),
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["type"] !== undefined) data["Type"] = params["type"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
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

interface ChannelPayload extends ChannelResource {}

interface ChannelResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  friendly_name: string;
  unique_name: string;
  attributes: string;
  type: ChannelChannelType;
  date_created: Date;
  date_updated: Date;
  created_by: string;
  members_count: number;
  messages_count: number;
  messaging_service_sid: string;
  url: string;
}

export class ChannelInstance {
  protected _solution: ChannelContextSolution;
  protected _context?: ChannelContext;

  constructor(
    protected _version: V3,
    payload: ChannelResource,
    serviceSid?: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.attributes = payload.attributes;
    this.type = payload.type;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;
    this.membersCount = deserialize.integer(payload.members_count);
    this.messagesCount = deserialize.integer(payload.messages_count);
    this.messagingServiceSid = payload.messaging_service_sid;
    this.url = payload.url;

    this._solution = {
      serviceSid: serviceSid || this.serviceSid,
      sid: sid || this.sid,
    };
  }

  /**
   * The unique string that we created to identify the Channel resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel resource.
   */
  accountSid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Channel resource is associated with.
   */
  serviceSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\'s `sid` in the URL.
   */
  uniqueName: string;
  /**
   * The JSON string that stores application-specific data. If attributes have not been set, `{}` is returned.
   */
  attributes: string;
  type: ChannelChannelType;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The `identity` of the User that created the channel. If the Channel was created by using the API, the value is `system`.
   */
  createdBy: string;
  /**
   * The number of Members in the Channel.
   */
  membersCount: number;
  /**
   * The number of Messages that have been passed in the Channel.
   */
  messagesCount: number;
  /**
   * The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this channel belongs to.
   */
  messagingServiceSid: string;
  /**
   * The absolute URL of the Channel resource.
   */
  url: string;

  private get _proxy(): ChannelContext {
    this._context =
      this._context ||
      new ChannelContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Update a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    params: ChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      attributes: this.attributes,
      type: this.type,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
      membersCount: this.membersCount,
      messagesCount: this.messagesCount,
      messagingServiceSid: this.messagingServiceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChannelSolution {}

export interface ChannelListInstance {
  _version: V3;
  _solution: ChannelSolution;
  _uri: string;

  (serviceSid: string, sid: string): ChannelContext;
  get(serviceSid: string, sid: string): ChannelContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ChannelListInstance(version: V3): ChannelListInstance {
  const instance = ((serviceSid, sid) =>
    instance.get(serviceSid, sid)) as ChannelListInstance;

  instance.get = function get(serviceSid, sid): ChannelContext {
    return new ChannelContextImpl(version, serviceSid, sid);
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
