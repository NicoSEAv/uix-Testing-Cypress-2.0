/////////////////////////////////////////////////////////////////////////////
// File:        valida.dto.ts
// Description: This file contains the main types used in the application
//              to describe the HQ status and the data coming from the Websocket.
//
// Version:			1.0.0.0 - March 2nd 2020
//
// Copyright (c) 2020 SEA Vision srl
// This File is a property of SEA Vision srl
// Any use or duplication of this file or part of it,
// is strictly prohibited without a written permission
//
/////////////////////////////////////////////////////////////////////////////

// tslint:disable: class-name
import { Dto, Map, IReturn, Field, FormDef } from '@sv/yudoo/core';
import {
  DeviceInformationOutput,
  GenericBoolOutput,
  GenericCodeTextArray,
  GenericNotificationOutput,
  MeasureResultsControlWindowLayout,
  MultifunctionWindowArray,
  PrintersCompleteConfTT,
  PrintersDataTT,
  SystemLanguages,
  TrackTraceInfoOutput,
  TrackTraceTableDataInput,
  TrackTraceTableDataOutput
} from './harle.codegen.dto';

/*
  1.	Monochromatic:
  2.	Colour
  3.	Binary
*/
export type SensorType = 'Mono' | 'Color' | 'Binary';

/*
  1.	Jpeg
  2.	Bmp
  3.	Png
*/
export type CompressionType = 'Jpeg' | 'Bmp' | 'Png';

const mimeTypes: Record<CompressionType, string> = {
  Jpeg: 'image/jpeg',
  Bmp: 'image/bmp',
  Png: 'image/png'
};

export function getMimeForCompressionType(compressionType: CompressionType): string {
  if (!mimeTypes[compressionType]) throw new Error('Unrecognized compression type ' + compressionType);
  return mimeTypes[compressionType];
}

/*
  0.	Image ok. No defects
  1.	Multifunction defect
  2.	Harlequin defect
  3.	Multifunction and Harlequin defect
*/
export type Defects = 'No defects' | 'Multifunction defect' | 'Harlequin defect' | 'Multifunction and Harlequin defect';

export interface CameraFrame {
  cameraId: number;
  width: number;
  height: number;
  sensor: SensorType;
  compression: CompressionType;
  frameData: ArrayBuffer;
  defects: Defects;
  id: number;
  timestamp: number;
  triggerId: number;
}

export interface GenericCountersUpdateItem {
  Id: number;
  Values: number[];
}

export interface CountersUpdateItem {
  Id: number;
  Name: string;
  Good: number;
  Reject: number;
}

export interface TTCounterUpdateItem {
  Id: number;
  Values: number[];
}

export interface CountersUpdateMessage {
  GenericCounters: GenericCountersUpdateItem[];
  ShiftRegister: CountersUpdateItem[];
  TTCounters: TTCounterUpdateItem[];
}

export interface TrackTraceUpdateItem {
  Id: number;
  State: {
    InputResult: number;
    Elements: number;
    ElementsToSend: number;
  };
}

export interface TrackTraceUpdateMessage {
  Update: TrackTraceUpdateItem[];
}

export interface ReworkScanEvent {
  Input: string;
  TrackTraceInfoOutputArray: TrackTraceInfoOutput[];
}
/* COUNTERS */

/*
This method returns all the information to show on screen the counters
 */

@Dto('Counters_LayoutDescriptionQuery')
export class Counters_LayoutDescriptionQuery implements IReturn<CountersResponse> {
  constructorRef(): CountersResponse {
    return <any>null;
  }
}

export interface TTCounter {
  Id: number;
  Name: string;
  LL: number;
  Values: number[];
}

export class CountersResponse {
  GenericCounters: GenericCounterData[];
  ShiftRegister: Counter[];
  TTCounters: TTCounter[];
}

export interface GenericCounterData {
  Id: number;
  Name: string;
  Labels: string[];
  Values: number[];
  Precision: number[];
  Priority: number[];
  Camera: number;
}

export interface Counter {
  Id: number;
  Name: string;
  Good: number;
  Reject: number;
}

/* SYSTEM STATUS */

/*
This method returns information about the current status of the system
 */

@Dto('SystemStatus_LayoutDescriptionQuery')
export class SystemStatus_LayoutDescriptionQuery implements IReturn<SystemStatusInfoResponse> {
  constructorRef(): SystemStatusInfoResponse {
    return <any>null;
  }
}

export enum SystemStatusEnum {
  Unknown = -1,
  Idle = 0,
  Automatic = 1,
  Running = 2,
  Editing = 3,
  Disabled = 4,
  Alarm = 5,
  Working = 6
}

/*
 -1: Unknown
  0: Idle (grey)
  1: Ready (automatic) (yellow)
  2: Running (green)
  3: Editing (blue)
  4: Disabled (red)
  5: Alarm (red)
  6: Working
 */
export type OcvStatus = 'Unknown' | 'Idle' | 'Automatic' | 'Running' | 'Editing' | 'Disabled' | 'Alarm' | 'Working';

export enum BatchStatusEnum {
  IsClosing = -2,
  Unknown = -1,
  Closed = 0, // HQ: NotStarted
  Open = 1, // HQ: Completed
  IsOpening = 2 // HQ: Partial
}

export interface SystemStatusInfoResponse {
  Status_Id: number;
  // TODO: check what is the actual returned type
  Alarm: Partial<Alarm>;
  Article_Info: ArticleInfo;
  Batch_Info: BatchInfo;
  System_Info: SystemInfo;
}

export interface ArticleInfo {
  Article_Name: string;
  Article_Version?: number;
  Master_Article_Name: string;
}

export interface BatchInfo {
  Batch_Status: number;
  Batch_Id: string;
  Material_Item: string;
  Batch_Config_Name: string;
  Batch_Start: number;
  Batch_Start_By: string;
  Batch_Type: number;
}

export interface SystemInfo {
  Last_Err_Start_Work: string;
  Transaction_Status: SystemTransitionStatusEnum;
}

export enum SystemTransitionStatusEnum {
  None = 0,
  BatchCloseToOpen = 1,
  // BatchStartTest = 2,
  // BatchStartPreliminary = 3,
  // BatchStartPartial = 4,
  // BatchStartComplete = 5,
  // BatchStartAllIn = 6,
  BatchOpenToClose = 7
  // BatchEndTest = 8,
  // BatchEndEnd = 9,
  // BatchEndExport = 10,
  // BatchEndComplete = 11,
  // EnterAutomatic = 12,
  // ExitAutomatic = 13
}

export interface Alarm {
  Code: string;
  Category: string;
  Message: string;
  Timestamp?: number;
  PasswordRequired: boolean;
  PasswordIdRequired: boolean;
}

export interface HqNotification {
  Tag: string;
  Uuid: string;
  Progress: number;
  Success: boolean;
  Messages: string[];
}

// export interface SystemStatusUpdateMessage {
//   Information_Status_Type: number;
//   Status_Id: number;
//   Description: any;
// }

export enum InformationStatusTypeEnum {
  GenericInfo = 0,
  Alarm = 1,
  ArticleAndBatchInfo = 2,
  Logout = 3,
  ExitVnc = 5,
  Login = 6,
  TransitionStatus = 7
}

export interface GenericSystemStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.GenericInfo;
  Status_Id: number;
  Description: {};
}

export interface AlarmSystemStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.Alarm;
  Status_Id: number;
  Description: Alarm;
}

export interface BatchInfoSystemStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.ArticleAndBatchInfo;
  Status_Id: number;
  Description: {
    Article_Info: ArticleInfo;
    Batch_Info: BatchInfo;
  };
}

export interface LoginSystemStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.Login;
  Status_Id: number;
  Description: {};
}

export interface LogoutSystemStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.Logout;
  Status_Id: number;
  Description: {};
}

export interface ExitVncStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.ExitVnc;
  Status_Id: number;
  Description: {};
}

export interface TransitionStatusUpdateMessage {
  Information_Status_Type: InformationStatusTypeEnum.TransitionStatus;
  Status_Id: number;
  Description: {
    Last_Err_Start_Work: string;
    Transaction_Status: SystemTransitionStatusEnum;
  };
}

export type SystemStatusUpdateMessage =
  | GenericSystemStatusUpdateMessage
  | AlarmSystemStatusUpdateMessage
  | BatchInfoSystemStatusUpdateMessage
  | LoginSystemStatusUpdateMessage
  | LogoutSystemStatusUpdateMessage
  | ExitVncStatusUpdateMessage
  | TransitionStatusUpdateMessage;

export type WebSocketMesage = GenericSystemStatusUpdateMessage | SystemStatusUpdateMessage;

/* Web Storage */

export interface WebStorageData {
  Key: string;
  Value: string;
  Status: number;
}

@Dto('WebStorage_UpdateCommand')
export class WebStorageUpdateCommand implements IReturn<WebStorageData> {
  @Map() @Field('string') Key: string;
  @Map() @Field('string') Value: string;
  constructorRef(): WebStorageData {
    return <any>null;
  }
}

@Dto('WebStorage_ReadQuery')
export class WebStorageQuery implements IReturn<WebStorageData> {
  @Map() @Field('string') Key: string;
  constructorRef(): WebStorageData {
    return <any>null;
  }
}

@Dto('WebStorage_DeleteCommand')
export class WebStorageDeleteCommand implements IReturn<WebStorageData> {
  @Map() @Field('string') Key: string;
  constructorRef(): WebStorageData {
    return <any>null;
  }
}

@Dto('WebStorageArticle_UpdateCommand')
export class WebStorageArticleUpdateCommand implements IReturn<WebStorageData> {
  @Map() @Field('string') Key: string;
  @Map() @Field('string') Value: string;
  constructorRef(): WebStorageData {
    return <any>null;
  }
}

@Dto('WebStorageArticle_ReadQuery')
export class WebStorageArticleQuery implements IReturn<WebStorageData> {
  @Map() @Field('string') Key: string;
  constructorRef(): WebStorageData {
    return <any>null;
  }
}

@Dto('WebStorageArticle_DeleteCommand')
export class WebStorageArticleDeleteCommand implements IReturn<WebStorageData> {
  @Map() @Field('string') Key: string;
  constructorRef(): WebStorageData {
    return <any>null;
  }
}

/* FIFO */

export function isTtIdObject(x: TtElement): x is TtIdObject {
  return x?.Type === 'ID';
}

export function isTtWindow(x: TtElement): x is TtWindow {
  return x?.Type === 'WIN';
}

export function isTtFifo(x: TtElement): x is TtFifo {
  return x?.Type === 'FIFO';
}

export type TtElement = TtIdObject | TtWindow | TtFifo;

interface TtElementBase {
  Id: number;
  Type: 'ID' | 'WIN' | 'FIFO';
  Name: string;
}

export interface TtIdObject extends TtElementBase {
  Type: 'ID';
  Description: {
    LogisticLv?: number;
  };
}

export interface TtWindow extends TtElementBase {
  Type: 'WIN';
  Description: {
    IdNum: number[];
    WindowsNum: number[];
  };
}

export type TtFifoType = 'Real' | 'Virtual' | 'Reject';

export interface TtFifo extends TtElementBase {
  Type: 'FIFO';
  Description: {
    Input: number[];
    FifoType: TtFifoType;
    State: TrackTraceElementStatus;
    AcceptedIDs: number[];
  };
}

export interface TrackTraceElementStatus {
  InputResult: number;
  Elements: number;
  ElementsToSend: number;
  Visible: number;
}

export interface TrackTraceLayout {
  LayoutData: TtElement[];
}

@Dto('TrackTrace_LayoutDescriptionQuery')
export class TrackTraceLayoutDescriptionQuery implements IReturn<TrackTraceLayout> {
  constructorRef(): TrackTraceLayout {
    return <any>null;
  }
}

/*
 * Plc Scan data
 */

export enum PlcScanDataState {
  NotChecked = 2,
  Ok = 1,
  Defect = 0,
  BadGrade = -1,
  Critical = -2,
  NotChecked2 = -3
}
// •	2 = Not checked
// •	1 = Ok
// •	0 = Defect
// •	-1 = Bad Grade
// •	-2 = Critical
// •	-3 = Not checked

export enum PlcScanParseError {
  ENone = 0,
  EInvalidAIFormatFound = 1,
  EInvalidAILength = 2,
  EinvalidFieldLength = 3,
  EinvalidField = 4,
  EinvalidParseEnd = 5,
  EunableToConvertToGS1 = 6,
  EinternalError = 7
}

export interface PlcScanData {
  tvIndex: number;
  windowIndex: number;
  status: PlcScanDataState;
  code: string;
  codeInfo?: PlcScanDataCodeInfo;
}

export interface PlcScanDataCodeInfo {
  srcHex: string;
  codeType: string;
  isGs1: boolean;
  parseError: PlcScanParseError;
  data: AiEntry[];
}

export interface AiEntry {
  id: string;
  description: string;
  value: string;
}

// {
//     "tvIndex": 4,
//     "windowIndex": 51,
//     "defect": 1,
//     "code": "(00)000000001000000304"
// }"

export interface SvmMessage {
  Row: number;
  MessageType: 'info' | 'msg';
  MessageColor: number;
  Message: string;
}

/*
 * Printers RPC.
 */

@Dto('Printers_SendCodesToPrinterCommand')
@FormDef('SendCodesToPrinterCommand')
export class SendCodesToPrinterCommand implements IReturn<PrintersCompleteConfTT> {
  @Map() @Field('number') IDNumber: number;
  @Map() @Field('number') PrintersGroupSelected: number;
  @Map() @Field('number') CodesToSend: number;
  constructorRef(): PrintersCompleteConfTT {
    return <any>null;
  }
}

@Dto('Printers_RecoverSentCodesCommand')
@FormDef('RecoverSentCodesCommand')
export class RecoverSentCodesCommand implements IReturn<PrintersCompleteConfTT> {
  @Map() @Field('number') IDNumber: number;
  @Map() @Field('number') PrintersGroupSelected: number;
  constructorRef(): PrintersCompleteConfTT {
    return <any>null;
  }
}

@Dto('Printers_SetAutomaticPrintingEnableCommand')
@FormDef('SetAutomaticPrintingEnableCommand')
export class SetAutomaticPrintingEnableCommand implements IReturn<PrintersCompleteConfTT> {
  @Map() @Field('PrintersDataTT[]') PrintersIDConf: PrintersDataTT[];
  constructorRef(): PrintersCompleteConfTT {
    return <any>null;
  }
}

@Dto('Device_InformationQuery')
@FormDef('DeviceInformationQuery')
export class DeviceInformationQuery implements IReturn<DeviceInformationOutput> {
  constructorRef(): DeviceInformationOutput {
    return <any>null;
  }
}

@FormDef('AlarmsQueryResponse')
export class AlarmsQueryResponse {
  @Map() @Field('Alarm[]') Alarms: Alarm[];
  @Map() @Field('number') Total: number;
}

@Dto('SystemStatus_AlarmsQuery')
@FormDef('AlarmsQuery')
export class AlarmsQuery implements IReturn<AlarmsQueryResponse> {
  @Map() @Field('boolean') SortAsc: boolean;
  @Map() @Field('number') Offset: number;
  @Map() @Field('number') Limit: number;
  constructorRef(): AlarmsQueryResponse {
    return <any>null;
  }
}

@FormDef('LogFileTextQueryResponse')
export class LogFileTextUsersQueryResponse {
  @Map() @Field('string[]') Result: string[];
}

@Dto('SystemStatus_LogFileTextUsersQuery')
@FormDef('LogFileTextUsersQuery')
export class LogFileTextUsersQuery implements IReturn<LogFileTextUsersQueryResponse> {
  @Map() @Field('number') StartDate: number;
  @Map() @Field('number') EndDate: number;
  constructorRef(): LogFileTextUsersQueryResponse {
    return <any>null;
  }
}

@Dto('TrackTrace_ExtractionInsertionCommand')
@FormDef('ExtractionInsertionCommand')
export class ExtractionInsertionCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@FormDef('MeasureResultsControlWindowArray')
export class MeasureResultsControlWindowArray {
  @Map() @Field('number[]') Data: number[];
  @Map() @Field('string[]') Results: string[];
  @Map() @Field('number[]') Colors: number[];
}

@FormDef('ArticleMeasureResultsControlWindow')
export class ArticleMeasureResultsControlWindow {
  @Map() @Field('number') Total: number;
  @Map()
  @Field('MeasureResultsControlWindowArray[]')
  MeasureResultsControlWindowArray: MeasureResultsControlWindowArray[];
  @Map() @Field('string') PaginationToken: string;
}

@FormDef('MeasureResultsControlWindowFiltersInput')
export class MeasureResultsControlWindowFiltersInput {
  @Map() @Field('boolean') Good: boolean;
  @Map() @Field('boolean') Defect: boolean;
  @Map() @Field('number') ControlType: number;
  @Map() @Field('number') Tv: number;
  @Map() @Field('number') Window: number;
  @Map() @Field('number') OrderColumnIndex: number;
  @Map() @Field('number') OrderType: number;
}

@Dto('ArticleView_ArticleMeasureResultsControlWindowQuery')
@FormDef('ArticleMeasureResultsControlWindowQuery')
export class ArticleMeasureResultsControlWindowQuery implements IReturn<ArticleMeasureResultsControlWindow> {
  @Map() @Field('string') PaginationToken: string;
  @Map()
  @Field('MeasureResultsControlWindowFiltersInput')
  MeasureResultsControlWindowFilters: MeasureResultsControlWindowFiltersInput;
  @Map() @Field('number') Limit: number;
  constructorRef(): ArticleMeasureResultsControlWindow {
    return <any>null;
  }
}

@FormDef('MeasureResultsControlWindowLayoutHeader')
export class MeasureResultsControlWindowLayoutHeader {
  @Map() @Field('number') Type: number;
  @Map() @Field('string[]') Headers: string[];
}

@Dto('ArticleView_ArticleMeasureResultsControlWindowLayoutQuery')
@FormDef('ArticleMeasureResultsControlWindowLayoutQuery')
export class ArticleMeasureResultsControlWindowLayoutQuery {
  constructorRef(): MeasureResultsControlWindowLayout {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleMeasureResultsControlWindowResetCommand')
@FormDef('ArticleMeasureResultsControlWindowResetCommand')
export class ArticleMeasureResultsControlWindowResetCommand {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('Maintenance_SaveArticleZipCommand')
@FormDef('SaveArticleZipCommand')
export class SaveArticleZipCommand implements IReturn<GenericNotificationOutput> {
  constructorRef(): GenericNotificationOutput {
    return <any>null;
  }
}

@Dto('ImagesView_SaveImageZipCommand')
@FormDef('SaveImageZipCommand')
export class SaveImageZipCommand implements IReturn<GenericNotificationOutput> {
  constructorRef(): GenericNotificationOutput {
    return <any>null;
  }
}

@Dto('Maintenance_SaveCurrentStatusZipCommand')
@FormDef('SaveCurrentStatusZipCommand')
export class SaveCurrentStatusZipCommand implements IReturn<GenericNotificationOutput> {
  constructorRef(): GenericNotificationOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_TableDataQuery')
@FormDef('TrackTraceTableDataQuery')
export class TrackTraceTableDataQuery extends TrackTraceTableDataInput implements IReturn<TrackTraceTableDataOutput> {
  constructorRef(): TrackTraceTableDataOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_UpdateAdoptedChildrenCommand')
@FormDef('UpdateAdoptedChildrenCommand')
export class UpdateAdoptedChildrenCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleManagement_DeleteArticleCommand')
@FormDef('DeleteArticleCommand')
export class DeleteArticleCommand implements IReturn<GenericBoolOutput> {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleMultiFunctionWindowsQuery')
@FormDef('ArticleMultiFunctionWindowsQuery')
export class ArticleMultiFunctionWindowsQuery implements IReturn<MultifunctionWindowArray> {
  constructorRef(): MultifunctionWindowArray {
    return <any>null;
  }
}

@Dto('ImagesView_LocalArchiveImagesQuery')
@FormDef('LocalArchiveImagesQuery')
export class LocalArchiveImagesQuery implements IReturn<GenericCodeTextArray> {
  constructorRef(): GenericCodeTextArray {
    return <any>null;
  }
}

@Dto('LineOperation_EndBatchLocalCommand')
@FormDef('EndLocalBatchCommand')
export class EndLocalBatchCommand implements IReturn<GenericBoolOutput> {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('LineOperation_EndBatchLocalAsyncCommand')
@FormDef('EndLocalBatchAsyncCommand')
export class EndLocalBatchAsyncCommand implements IReturn<GenericNotificationOutput> {
  constructorRef(): GenericNotificationOutput {
    return <any>null;
  }
}

@Dto('Languages_SupportedLanguagesQuery')
@FormDef('SystemLanguagesQuery')
export class SystemLanguagesQuery implements IReturn<SystemLanguages> {
  constructorRef(): SystemLanguages {
    return <any>null;
  }
}

@Dto('Languages_ChangeLanguageCommand')
@FormDef('ChangeLanguageCommand')
export class ChangeLanguageCommand implements IReturn<SystemLanguages> {
  @Map() @Field('string') LanguageCode: string;
  constructorRef(): SystemLanguages {
    return <any>null;
  }
}

export enum LoginErrorCodes {
  ERR_WRONG_PASSWD = -1,
  ERR_GENERIC_FILE_ERROR = -2,
  ERR_END_OF_FILE = -3,
  ERR_BAD_ENTRY = -4,
  ERR_ID_NOT_UNIQUE = -5,
  ERR_NAME_AND_SURNAME_NOT_UNIQUE = -6,
  ERR_ACCOUNT_NOT_FOUND = -7,
  ERR_PASSWD_EXPIRED = -8,
  ERR_NO_USER_LOGGED = -9,
  ERR_PASSWD_DISABLED = -10,
  ERR_USER_NOT_ACTIVE = -11,
  ERR_ALLOCAZIONE = -12,
  ERR_USER_HAS_NOT_PERMISSION = -13,
  ERR_PASSWD_ALREADY_USED = -14,
  ERR_USER_DEACTIV_MANY_ATTEMPTS = -15,
  ERR_VERSION = -16,
  ERR_UNICODE = -17,
  ERR_PARSE_PARAM_CFR21 = -18,
  ERR_GROUP_NOT_FOUND = -19,
  ERR_WRONG_USERNAME_OR_PWD = -20,
  ERR_CONNECTION_REFUSED = -21,
  ERR_NO_GROUP_MEMBER = -22,
  ERR_USER_LOCKED = -23,
  ERR_PWD_TOO_SHORT = -24,
  ERR_LOGIN_LDAP_TOO_ATTEMPT = 775,
  ERR_LOGIN_TOO_ATTEMPT_RET = -25,
  ERR_LOGIN_IP_ADDRESS_API = -26
}

export interface LoginResponse {
  Success: boolean;
  Authentication_Token: string;
  Message: string;
  ErrorCode?: LoginErrorCodes;
}

@Dto('Account_LoginCommand')
export class LoginCommand implements IReturn<LoginResponse> {
  @Map() UserCode: string;
  @Map() DeviceId: string;
  @Map() Password: string;
  @Map() ForceLogout: boolean;

  constructorRef(): LoginResponse {
    return <any>null;
  }
}

export interface LogoutResponse {
  Success: boolean;
  Message: string;
}

@Dto('Account_LogoutCommand')
export class LogoutCommand implements IReturn<LogoutResponse> {
  constructorRef(): LogoutResponse {
    return <any>null;
  }
}
