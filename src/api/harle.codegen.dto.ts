import { Dto, Map, IReturn, FormDef, Field } from '@sv/yudoo/core';
// tslint:disable: class-name

@FormDef('AccountCommandPolicy')
export class AccountCommandPolicy {
  @Map() @Field('boolean') UserManagement: boolean;
  @Map() @Field('boolean') ArchiveManagement: boolean;
  @Map() @Field('boolean') BatchManagement: boolean;
  @Map() @Field('boolean') SystemProtection: boolean;
  @Map() @Field('boolean') AutomaticLogoffTimeoutEnable: boolean;
  @Map() @Field('boolean') AutomaticLogoffAutomaticWorkStart: boolean;
  @Map() @Field('number') AutomaticLogoffTimeoutDuration: number;
  @Map() @Field('boolean') PasswordExpirable: boolean;
  @Map() @Field('number') PasswordDuration: number;
}

@FormDef('AccountLoginDataInput')
export class AccountLoginDataInput {
  @Map() @Field('string') UserCode: string;
  @Map() @Field('string') DeviceId: string;
  @Map() @Field('string') Password: string;
  @Map() @Field('boolean') ForceLogout: boolean;
}

@FormDef('AccountLoginDataOutput')
export class AccountLoginDataOutput {
  @Map() @Field('boolean') Success: boolean;
  @Map() @Field('string') Authentication_Token: string;
  @Map() @Field('string') Message: string;
  @Map() @Field('number') ErrorCode: number;
}

@FormDef('AccountUserChangePasswordInput')
export class AccountUserChangePasswordInput {
  @Map() @Field('string') UserCode: string;
  @Map() @Field('string') OldPassword: string;
  @Map() @Field('string') NewPassword: string;
}

@FormDef('AccountUserInformation')
export class AccountUserInformation {
  @Map() @Field('string') Id: string;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Surname: string;
  @Map() @Field('string') IdExt: string;
  @Map() @Field('string') NameExt: string;
  @Map() @Field('string') SurnameExt: string;
  @Map() @Field('number') CreateDate: number;
  @Map() @Field('number') LastLoginDate: number;
  @Map() @Field('number') LastChangePasswordDate: number;
  @Map() @Field('boolean') Active: boolean;
  @Map() @Field('boolean') PasswordExpired: boolean;
  @Map() @Field('boolean') SpecialUser: boolean;
  @Map() @Field('number[]') PermissionArray: number[];
  @Map() @Field('number[]') FunctionNeverAllowedArray: number[];
  @Map() @Field('number[]') FunctionAlwaysAllowedArray: number[];
  @Map() @Field('number[]') PermissionArrayExtra: number[];
}

@FormDef('AccountUserInformationDescription')
export class AccountUserInformationDescription {
  @Map()
  @Field('AccountUserInformationDescritpionPermission[]')
  AccountUserInformationDescritpionPermissionArray: AccountUserInformationDescritpionPermission[];
  @Map()
  @Field('AccountUserInformationDescritpionFunction[]')
  AccountUserInformationDescritpionFunctionArray: AccountUserInformationDescritpionFunction[];
}

@FormDef('AccountUserInformationDescritpionFunction')
export class AccountUserInformationDescritpionFunction {
  @Map() @Field('number') Id: number;
  @Map() @Field('string') LabelId: string;
  @Map() @Field('string') LabelFunction: string;
  @Map() @Field('number') PermissionIndex: number;
}

@FormDef('AccountUserInformationDescritpionPermission')
export class AccountUserInformationDescritpionPermission {
  @Map() @Field('number') Index: number;
  @Map() @Field('string') Label: string;
}

@FormDef('AccountUsersInformationInput')
export class AccountUsersInformationInput {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('string') UserId: string;
  @Map() @Field('boolean') UserDetails: boolean;
  @Map() @Field('boolean') ResetPassword: boolean;
  @Map() @Field('AccountUserInformation') UserAccount: AccountUserInformation;
}

@FormDef('AccountUsersInformationOutput')
export class AccountUsersInformationOutput {
  @Map() @Field('AccountUserInformation[]') UserAccounts: AccountUserInformation[];
}

@FormDef('AccountViewPolicy')
export class AccountViewPolicy {
  @Map() @Field('boolean') PasswordChangeEnable: boolean;
  @Map() @Field('boolean') PasswordDefaultChangeRequired: boolean;
  @Map() @Field('boolean') PasswordRemoteChangePasswordEnable: boolean;
  @Map() @Field('number') PasswordMinLenght: number;
  @Map() @Field('boolean') PasswordMixedString: boolean;
  @Map() @Field('number') PasswordHistoryCount: number;
  @Map() @Field('boolean') PasswordExpirable: boolean;
  @Map() @Field('number') PasswordDuration: number;
  @Map() @Field('number') PasswordMaxFailure: number;
  @Map() @Field('boolean') AutomaticLogoffTimeoutEnable: boolean;
  @Map() @Field('number') AutomaticLogoffTimeoutDuration: number;
  @Map() @Field('boolean') AutomaticLogoffAutomaticWorkStart: boolean;
  @Map() @Field('boolean') LogoutWhileEditing: boolean;
  @Map() @Field('number') LogoutTimeoutType: number;
  @Map() @Field('boolean') ArchiveManagement: boolean;
  @Map() @Field('boolean') BatchManagement: boolean;
  @Map() @Field('boolean') SystemProtection: boolean;
  @Map() @Field('boolean') UserManagement: boolean;
  @Map() @Field('boolean') UppercaseLoginEnable: boolean;
  @Map() @Field('number') Objects: number;
  @Map() @Field('number') Objects2: number;
}

@FormDef('AlarmsListInput')
export class AlarmsListInput {
  @Map() @Field('boolean') SortAsc: boolean;
  @Map() @Field('number') Offset: number;
  @Map() @Field('number') Limit: number;
}

@FormDef('ArticleCISConfiguration')
export class ArticleCISConfiguration {
  @Map() @Field('ArticleCISParameters[]') CISParameters: ArticleCISParameters[];
  @Map() @Field('string[]') LineAdjEnableOptions: string[];
  @Map() @Field('string[]') LineAdjDirectionOptions: string[];
  @Map() @Field('string[]') LedPulseDivisionOptions: string[];
  @Map() @Field('string[]') ImageTriggerModeOptions: string[];
  @Map() @Field('string[]') ImageTriggerBufferOptions: string[];
  @Map() @Field('string[]') LineTriggerModeOptions: string[];
  @Map() @Field('string[]') VantagePointOptions: string[];
}

@FormDef('ArticleCISParameters')
export class ArticleCISParameters {
  @Map() @Field('number[]') TV: number[];
  @Map() @Field('number[]') ImageTriggerMode: number[];
  @Map() @Field('number[]') ImageTriggerBuffer: number[];
  @Map() @Field('number[]') LineTriggerMode: number[];
  @Map() @Field('number[]') VantagePoint: number[];
  @Map() @Field('number[]') ImageTriggerDebTime: number[];
  @Map() @Field('number[]') LineTriggerDebTime: number[];
  @Map() @Field('number[]') ImageTriggerAsyncHeight: number[];
  @Map() @Field('number[]') NumAcqTriggerToAvoid: number[];
  @Map() @Field('number[]') LinesPerAcq: number[];
  @Map() @Field('number[]') BlisterLines: number[];
  @Map() @Field('number[]') XCoordinateNotchSearch: number[];
  @Map() @Field('number[]') ContrastNotchSearch: number[];
  @Map() @Field('number[]') LinesForOverlap: number[];
  @Map() @Field('number[]') LineAdjEnable: number[];
  @Map() @Field('number[]') LineAdjDirection: number[];
  @Map() @Field('number[]') LineAdjRatio: number[];
  @Map() @Field('number[]') LineAdjOffset: number[];
  @Map() @Field('number[]') WhiteTargetR: number[];
  @Map() @Field('number[]') WhiteTargetG: number[];
  @Map() @Field('number[]') WhiteTargetB: number[];
  @Map() @Field('number[]') LinePeriodCounter: number[];
  @Map() @Field('number[]') LedEffectivePeriod: number[];
  @Map() @Field('number[]') LedPulseWidthAB: number[];
  @Map() @Field('number[]') LedPulseDivision: number[];
}

@Dto('ArticleEdit_CopyArticleCommand')
@FormDef('ArticleCopyInput')
export class ArticleCopyInput implements IReturn<ArticleListOutput> {
  @Map() @Field('string') Code: string;
  @Map() @Field('string') Description: string;
  constructorRef(): ArticleListOutput {
    return <any>null;
  }
}

@FormDef('ArticleGeneralInformation')
export class ArticleGeneralInformation {
  @Map() @Field('string') Code: string;
  @Map() @Field('string') Description: string;
  @Map() @Field('number') CheckedPiecies: number;
  @Map() @Field('number') RejectedPiecies: number;
  @Map() @Field('string') FileName: string;
  @Map() @Field('number') LastModifiedParametersDate: number;
  @Map() @Field('string') LastModifiedParametersBy: string;
  @Map() @Field('boolean') Container: boolean;
  @Map() @Field('boolean') HasLinkedArticles: boolean;
  @Map() @Field('number') VersionNumber: number;
}

@FormDef('ArticleGeneralParameters')
export class ArticleGeneralParameters {
  @Map() @Field('string') Code: string;
  @Map() @Field('string') Description: string;
  @Map() @Field('number[]') WorkMode: number[];
  @Map() @Field('number') SerialImportType: number;
  @Map() @Field('number') SerialExportType: number;
}

@Dto('ArticleEdit_LearningCommand')
@FormDef('ArticleLearningCommandInput')
export class ArticleLearningCommandInput implements IReturn<MeasureResultLearning> {
  @Map() @Field('boolean') SaveOnEndLearning: boolean;
  constructorRef(): MeasureResultLearning {
    return <any>null;
  }
}

@FormDef('ArticleLinkedArticleType')
export class ArticleLinkedArticleType {
  @Map() @Field('number') Value: number;
  @Map() @Field('string') Custom: string;
  @Map() @Field('string') Label: string;
}

@FormDef('ArticleListInput')
export class ArticleListInput {
  @Map() @Field('string') FileName: string;
}

@FormDef('ArticleListOutput')
export class ArticleListOutput {
  @Map() @Field('ArticleGeneralInformation[]') ArticleList: ArticleGeneralInformation[];
  @Map() @Field('ArticleGeneralInformation') CurrentArticle: ArticleGeneralInformation;
}

@FormDef('ArticleListSlaveQueryOutput')
export class ArticleListSlaveQueryOutput {
  @Map() @Field('ArticleGeneralInformation[]') Slaves: ArticleGeneralInformation[];
  @Map() @Field('ArticleGeneralInformation') Master: ArticleGeneralInformation;
}

@FormDef('ArticleManagementCommitArticleInfo')
export class ArticleManagementCommitArticleInfo {
  @Map() @Field('ArticleGeneralInformation') Article: ArticleGeneralInformation;
  @Map() @Field('number[]') MissingPermissions: number[];
}

@FormDef('ArticleManagementCommitArticleInfoOutput')
export class ArticleManagementCommitArticleInfoOutput {
  @Map() @Field('number') NumArticleToCommit: number;
  @Map() @Field('boolean') CommentRequired: boolean;
  @Map() @Field('ArticleManagementCommitArticleInfo[]') ArticleToCommitInfo: ArticleManagementCommitArticleInfo[];
}

@FormDef('ArticleManagementCommitArticleInput')
export class ArticleManagementCommitArticleInput {
  @Map() @Field('boolean') CommitArticle: boolean;
  @Map() @Field('string') UserPassword: string;
  @Map() @Field('string[]') UserComment: string[];
  @Map() @Field('string') ArticleVersionCode: string;
}

@FormDef('ArticleMasterSlaveStructureOutput')
export class ArticleMasterSlaveStructureOutput {
  @Map() @Field('ArticleGeneralInformation[]') AvailableArticles: ArticleGeneralInformation[];
  @Map() @Field('ArticleGeneralInformation[]') SlaveArticles: ArticleGeneralInformation[];
  @Map() @Field('ArticleLinkedArticleType') LinkedArticleType: ArticleLinkedArticleType;
  @Map() @Field('ArticleLinkedArticleType[]') AvailableLinkedArticleTypes: ArticleLinkedArticleType[];
}

@FormDef('ArticleParameterImageAcquisition')
export class ArticleParameterImageAcquisition {
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('number') ExposureTime: number;
  @Map() @Field('number') AcqDelay: number;
}

@FormDef('ArticleParametersImageAcquisition')
export class ArticleParametersImageAcquisition {
  @Map()
  @Field('ArticleParameterImageAcquisition[]')
  ArticleParameterImageAcquisitionArray: ArticleParameterImageAcquisition[];
  @Map() @Field('number') ExpositionUpperLimit: number;
  @Map() @Field('number') ExpositionLowerLimit: number;
  @Map() @Field('number') AcqDelayUpperLimit: number;
  @Map() @Field('number') AcqDelayLowerLimit: number;
}

@Dto('ArticleEdit_SetLinkedArticleStructureCommand')
@FormDef('ArticleSetLinkedArticleStructureCommandInput')
export class ArticleSetLinkedArticleStructureCommandInput implements IReturn<ArticleLinkedArticleType> {
  @Map() @Field('boolean') ApplyEdit: boolean;
  @Map() @Field('string[]') SlaveArticleFileNames: string[];
  @Map() @Field('ArticleLinkedArticleType') LinkedArticleType: ArticleLinkedArticleType;
  constructorRef(): ArticleLinkedArticleType {
    return <any>null;
  }
}

@FormDef('BatchAIQueryInput')
export class BatchAIQueryInput {
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') MaterialItem: string;
}

@FormDef('BatchAIQueryOutput')
export class BatchAIQueryOutput {
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Value: string;
}

@FormDef('BatchAIQueryOutputList')
export class BatchAIQueryOutputList {
  @Map() @Field('BatchAIQueryOutput[]') AiList: BatchAIQueryOutput[];
}

@FormDef('BatchAIResolved')
export class BatchAIResolved {
  @Map() @Field('BatchStartConfigurationVariable[]') AIResolved: BatchStartConfigurationVariable[];
}

@FormDef('BatchAIValidationInput')
export class BatchAIValidationInput {
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') MaterialItem: string;
  @Map() @Field('GenericCodeText[]') AiValues: GenericCodeText[];
}

@FormDef('BatchConfigurationSelection')
export class BatchConfigurationSelection {
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') Id: number;
}

@FormDef('BatchConfigurationSelectionList')
export class BatchConfigurationSelectionList {
  @Map() @Field('BatchConfigurationSelection[]') BatchConfigurationSelectionList: BatchConfigurationSelection[];
}

@FormDef('BatchEndOptions')
export class BatchEndOptions {
  @Map() @Field('boolean') TTChallengeFunctionEnabled: boolean;
  @Map() @Field('boolean') TTChallengeSuccess: boolean;
  @Map() @Field('boolean') BatchFunctionsAvailableInMenu: boolean;
  @Map() @Field('boolean') ValidationModeStarted: boolean;
  @Map() @Field('boolean') EndBatchRemoteEnabled: boolean;
}

@FormDef('BatchMaterialItems')
export class BatchMaterialItems {
  @Map() @Field('string[]') MaterialItems: string[];
}

@Dto('Batch_BatchReportTextQuery')
@FormDef('BatchReportInput')
export class BatchReportInput implements IReturn<GenericStringOutput> {
  @Map() @Field('number') Type: number;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@FormDef('BatchStartConfiguration')
export class BatchStartConfiguration {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ObjectFamily: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('boolean') BatchEnable: boolean;
  @Map() @Field('string') TemplateNumPieces: string;
  @Map() @Field('boolean') ArticleSelectionMaterialItemEnable: boolean;
  @Map() @Field('boolean') EditPositionWindowsStartBatchEnable: boolean;
  @Map() @Field('boolean') SavePositionWindowsAfterGraphics: boolean;
  @Map() @Field('string[]') MaterialItems: string[];
  @Map() @Field('BatchStartConfigurationVariable[]') StandardAI: BatchStartConfigurationVariable[];
  @Map() @Field('BatchStartConfigurationVariable[]') CustomAI: BatchStartConfigurationVariable[];
  @Map() @Field('BatchStartConfigurationVariable[]') InternalAI: BatchStartConfigurationVariable[];
  @Map() @Field('BatchStartConfigurationVariable[]') Variables: BatchStartConfigurationVariable[];
  @Map() @Field('string[]') ArticleClientName: string[];
  @Map() @Field('BatchStartConfigurationVariable[]') ExternalAI: BatchStartConfigurationVariable[];
  @Map() @Field('BatchStartConfigurationCognex') CognexStartBatchConf: BatchStartConfigurationCognex;
  @Map() @Field('BatchStartConfigurationWindow[]') WindowStartBatchConf: BatchStartConfigurationWindow[];
  @Map()
  @Field('BatchStartConfigurationWriterDevice[]')
  WriterDeviceStartBatchConf: BatchStartConfigurationWriterDevice[];
  @Map() @Field('OEEParameters') OEEStartBatchConf: OEEParameters;
}

@FormDef('BatchStartConfigurationArray')
export class BatchStartConfigurationArray {
  @Map() @Field('BatchStartConfiguration[]') BatchStartConfigurationArray: BatchStartConfiguration[];
  @Map() @Field('BatchStartConfigurationLimit') Limits: BatchStartConfigurationLimit;
  @Map() @Field('GenericStringParentChildren[]') VariableTree: GenericStringParentChildren[];
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') BatchConfigurationId: number;
  @Map() @Field('boolean') BatchConfigurationDetails: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('string') Warning: string;
  @Map() @Field('boolean') AcceptMaterialItemsConflict: boolean;
}

@FormDef('BatchStartConfigurationCognex')
export class BatchStartConfigurationCognex {
  @Map() @Field('string[]') FileJob: string[];
  @Map() @Field('number[]') ExternalCameraInUse: number[];
  @Map() @Field('number[]') WindowNumber: number[];
}

@FormDef('BatchStartConfigurationImportParam')
export class BatchStartConfigurationImportParam {
  @Map() @Field('number') SerialNumberLineLen: number;
  @Map() @Field('number') SerialNumberBatchLen: number;
  @Map() @Field('number') SerialNumberRandomNumberLen: number;
  @Map() @Field('number') SerialNumberProgressiveNumberLen: number;
  @Map() @Field('number') BatchUSBSerialReaderAddFNC1: number;
  @Map() @Field('number') TrackUSBSerialReaderAddFNC1: number;
  @Map() @Field('string[]') Import3FormatString: string[];
  @Map() @Field('number[]') Import3IndexInRow: number[];
}

@FormDef('BatchStartConfigurationLimit')
export class BatchStartConfigurationLimit {
  @Map() @Field('GenericCodeText[]') StringControlType: GenericCodeText[];
  @Map() @Field('GenericCodeText[]') StringControlTypePQV: GenericCodeText[];
  @Map() @Field('number') WriterDeviceNum: number;
  @Map() @Field('number') WriterDeviceFieldNum: number;
  @Map() @Field('number') ExternalCameraNum: number;
  @Map() @Field('boolean') ControlIDAtBatchStart: boolean;
  @Map() @Field('boolean') ManageProgMeasGroups: boolean;
  @Map() @Field('boolean') EnableOEE: boolean;
  @Map() @Field('boolean') FlagBatchStart: boolean;
  @Map() @Field('boolean') FlagBatchEnd: boolean;
}

@FormDef('BatchStartConfigurationPrinter')
export class BatchStartConfigurationPrinter {
  @Map() @Field('number') InUse: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') FileLayoutName: string;
  @Map() @Field('BatchStartConfigurationPrinterField[]') TemplateString: BatchStartConfigurationPrinterField[];
  @Map() @Field('string[]') FileList: string[];
}

@FormDef('BatchStartConfigurationPrinterField')
export class BatchStartConfigurationPrinterField {
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Text: string;
  @Map() @Field('number') GS1: number;
}

@FormDef('BatchStartConfigurationPrinterInput')
export class BatchStartConfigurationPrinterInput {
  @Map() @Field('number') Index: number;
  @Map() @Field('string') FileLayoutName: string;
}

@FormDef('BatchStartConfigurationVariable')
export class BatchStartConfigurationVariable {
  @Map() @Field('number') Index: number;
  @Map() @Field('string') Reference: string;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Value: string;
  @Map() @Field('string') Default: string;
  @Map() @Field('boolean') Enable: boolean;
}

@FormDef('BatchStartConfigurationWindow')
export class BatchStartConfigurationWindow {
  @Map() @Field('number') ID: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('MultifunctionWindowCoordinate') Coordinate: MultifunctionWindowCoordinate;
  @Map() @Field('boolean') Exclusion: boolean;
  @Map() @Field('number') ControlType: number;
  @Map() @Field('GenericCodeText') Control: GenericCodeText;
  @Map() @Field('GenericCodeText[]') ControlAvailable: GenericCodeText[];
  @Map() @Field('GenericCodeText[]') TemplateCheckPair: GenericCodeText[];
  @Map() @Field('boolean') ModifyWindowAtBatchStart: boolean;
  @Map() @Field('boolean') SaveLastGraphicOperation: boolean;
}

@FormDef('BatchStartConfigurationWriterDevice')
export class BatchStartConfigurationWriterDevice {
  @Map() @Field('number') InUse: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') FileLayoutName: string;
  @Map()
  @Field('BatchStartConfigurationWriterDeviceField[]')
  TemplateString: BatchStartConfigurationWriterDeviceField[];
  @Map() @Field('string[]') FileList: string[];
}

@FormDef('BatchStartConfigurationWriterDeviceField')
export class BatchStartConfigurationWriterDeviceField {
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Text: string;
  @Map() @Field('number') GS1: number;
}

@FormDef('BatchStartConfigurationWriterDeviceInput')
export class BatchStartConfigurationWriterDeviceInput {
  @Map() @Field('number') Index: number;
  @Map() @Field('string') FileLayoutName: string;
}

@FormDef('BatchStartOptions')
export class BatchStartOptions {
  @Map() @Field('boolean') MaterialItemEnableAtBatchStart: boolean;
  @Map() @Field('boolean') MaterialItemNotRequiredForLocalBatchStart: boolean;
  @Map() @Field('boolean') MaterialItemAlwaysRequiredAtBatchStart: boolean;
  @Map() @Field('boolean') CustomizedBatchStartManualInputEnable: boolean;
  @Map() @Field('boolean') CustomizedBatchStartDoubleInputEnable: boolean;
  @Map() @Field('boolean') ChangeFieldsColorBatchStartDialog: boolean;
  @Map() @Field('boolean') BypassStartBatchDialogWhenNoDataRequired: boolean;
  @Map() @Field('boolean') UserChangeDuringBatchStart: boolean;
}

@FormDef('BlisterWindows')
export class BlisterWindows {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Suid: number;
  @Map() @Field('Cavity[]') Cavity: Cavity[];
  @Map() @Field('number') RefWindowHorizontalMovementNumber: number;
  @Map() @Field('number') RefWindowVerticalMovementNumber: number;
  @Map() @Field('number') HorizontalMovement: number;
  @Map() @Field('number') VerticalMovement: number;
  @Map() @Field('number') TypeHorizontalMovement: number;
  @Map() @Field('number') TypeVerticalMovement: number;
}

@FormDef('Cavity')
export class Cavity {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Suid: number;
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('number') WindowTop: number;
  @Map() @Field('number') WindowBottom: number;
  @Map() @Field('number') WindowLeft: number;
  @Map() @Field('number') WindowRight: number;
}

@Dto('LineOperation_ChangeStatusCommand')
@FormDef('ChangeStatusInput')
export class ChangeStatusInput implements IReturn<GenericStringMessagesOutput> {
  @Map() @Field('string') Status: string;
  @Map() @Field('ChangeStatusInputAutomaticOptions') AutomaticOptions: ChangeStatusInputAutomaticOptions;
  @Map() @Field('ChangeStatusInputOfflineOptions') OfflineOptions: ChangeStatusInputOfflineOptions;
  constructorRef(): GenericStringMessagesOutput {
    return <any>null;
  }
}

@FormDef('ChangeStatusInputAutomaticOptions')
export class ChangeStatusInputAutomaticOptions {
  @Map() @Field('boolean') ResetQueue: boolean;
}

@FormDef('ChangeStatusInputOfflineOptions')
export class ChangeStatusInputOfflineOptions {
  @Map() @Field('boolean') SaveChanges: boolean;
}

@FormDef('Character')
export class Character {
  @Map() @Field('number') Num: number;
  @Map() @Field('number[]') Values: number[];
  @Map() @Field('string') Alphanumeric: string;
  @Map() @Field('number') TypeOfCompare: number;
  @Map() @Field('boolean') NoTopologicCheck: boolean;
  @Map() @Field('string') ListExclusion: string;
}

@FormDef('Code')
export class Code {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') Type: number;
  @Map() @Field('number') Contrast: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') MinNumChars: number;
  @Map() @Field('number') MinPercentageReading: number;
  @Map() @Field('boolean') FastSearch: boolean;
  @Map() @Field('boolean') NegativeSymbol: boolean;
  @Map() @Field('boolean') CheckDigit: boolean;
  @Map() @Field('boolean') RotationAllowed: boolean;
  @Map() @Field('boolean') NoBlankAreas: boolean;
  @Map() @Field('boolean') SubStringEnable: boolean;
  @Map() @Field('number') SubStringPosition: number;
  @Map() @Field('boolean') Variable: boolean;
  @Map() @Field('number') VariableCheckSubString: number;
  @Map() @Field('number') VariableSubStringLength: number;
  @Map() @Field('number') VariableSubStringInitChar: number;
  @Map() @Field('string') VariableSubStringMinID: string;
  @Map() @Field('string') VariableSubStringMaxID: string;
  @Map() @Field('number') Gs1Encoding: number;
  @Map() @Field('CodeOptions') Options: CodeOptions;
  @Map() @Field('CodeAnsiGrading') AnsiGrading: CodeAnsiGrading;
}

@FormDef('CodeAnsiGrading')
export class CodeAnsiGrading {
  @Map() @Field('boolean') Enable: boolean;
  @Map() @Field('number') MinAcceptedQuality: number;
  @Map() @Field('number') ReflectanceSurface: number;
  @Map() @Field('boolean') DifferentThresholds: boolean;
  @Map() @Field('number[]') UsedParamAnsi: number[];
  @Map() @Field('number[]') ThresholdParamAnsi: number[];
  @Map() @Field('boolean') QuietZoneCheck: boolean;
  @Map() @Field('boolean') CorrectionIlluminationGradient: boolean;
  @Map() @Field('number') ApertureFilter: number;
  @Map() @Field('number') ApertureFilterSize: number;
  @Map() @Field('number') GlobalThreshold: number;
  @Map() @Field('number') Modulation: number;
  @Map() @Field('number') FixedPatternDamage: number;
}

@FormDef('CodeEditActionsInput')
export class CodeEditActionsInput {
  @Map() @Field('CodesArray') CodesData: CodesArray;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') ExtraData: number[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
}

@FormDef('CodeOptions')
export class CodeOptions {
  @Map() @Field('number') PharmacodeBarHeight: number;
  @Map() @Field('number') PharmacodeBarLargeWidth: number;
  @Map() @Field('number') PharmacodeBarSmallWidth: number;
  @Map() @Field('number') PharmacodeBlankWidth: number;
  @Map() @Field('boolean') Code128OnlyCType: boolean;
  @Map() @Field('number') DotSize: number;
  @Map() @Field('number') Magnification: number;
  @Map() @Field('number') MedianFilterDecode: number;
  @Map() @Field('number') SearchAreaDecode: number;
  @Map() @Field('boolean') Ecc200Rect: boolean;
  @Map() @Field('boolean') Ecc200Negative: boolean;
  @Map() @Field('boolean') Ecc200NoBackgroundSub: boolean;
  @Map() @Field('boolean') Ecc200Binarization: boolean;
  @Map() @Field('boolean') Ecc200ComponentFilterSearch: boolean;
  @Map() @Field('boolean') Ecc200ComponentFilterDecode: boolean;
  @Map() @Field('number') Ecc200SymbolSize: number;
  @Map() @Field('boolean') ShortcutDecode: boolean;
  @Map() @Field('number') SearchType: number;
}

@FormDef('CodesArray')
export class CodesArray {
  @Map() @Field('Code[]') CodeArray: Code[];
  @Map() @Field('CodesDescription[]') CodesDescription: CodesDescription[];
  @Map() @Field('CodesLimit') Limits: CodesLimit;
}

@FormDef('CodesDescription')
export class CodesDescription {
  @Map() @Field('string') Name: string;
  @Map() @Field('boolean[]') FieldEnabledArray: boolean[];
  @Map() @Field('string[]') AnsiGradeThresholdArray: string[];
  @Map() @Field('boolean[]') AnsiGradeFieldEnabledArray: boolean[];
}

@FormDef('CodesLimit')
export class CodesLimit {
  @Map() @Field('number[]') Contrast: number[];
  @Map() @Field('number[]') PharmacodeBarHeight: number[];
  @Map() @Field('number[]') PharmacodeBarLargeWidth: number[];
  @Map() @Field('number[]') PharmacodeBarSmallWidth: number[];
  @Map() @Field('number[]') PharmacodeBlankWidth: number[];
  @Map() @Field('number[]') MinNumChars: number[];
  @Map() @Field('number[]') MinPercentageReading: number[];
  @Map() @Field('number[]') VariableSubStringLength: number[];
  @Map() @Field('number[]') VariableSubStringInitChar: number[];
  @Map() @Field('string[]') SubStringPosition: string[];
  @Map() @Field('string[]') VariableCheckSubString: string[];
  @Map() @Field('string[]') Gs1Encoding: string[];
  @Map() @Field('number[]') DotSize: number[];
  @Map() @Field('number[]') Magnification: number[];
  @Map() @Field('number[]') SearchAreaDecode: number[];
  @Map() @Field('number[]') MedianFilterDecode: number[];
  @Map() @Field('number[]') MedianFilterDecodeEcc200: number[];
  @Map() @Field('string[]') Ecc200SymbolSize: string[];
  @Map() @Field('string[]') SearchTypeEcc200: string[];
  @Map() @Field('string[]') SearchTypeQR: string[];
  @Map() @Field('string[]') MinAcceptedQuality: string[];
  @Map() @Field('number[]') ReflectanceSurface: number[];
  @Map() @Field('number[]') ThresholdParamAnsi: number[];
  @Map() @Field('string[]') ApertureFilter: string[];
  @Map() @Field('number[]') ApertureFilterSize: number[];
  @Map() @Field('string[]') GlobalThreshold: string[];
  @Map() @Field('string[]') Modulation: string[];
  @Map() @Field('string[]') FixedPatternDamage: string[];
}

@FormDef('ConditionStructure')
export class ConditionStructure {
  @Map() @Field('string') Name: string;
  @Map() @Field('number') Type: number;
  @Map() @Field('number') Value: number;
  @Map() @Field('number') LimitUpper: number;
  @Map() @Field('number') LimitLower: number;
}

@FormDef('CustomTrackTraceBatchReport')
export class CustomTrackTraceBatchReport {
  @Map() @Field('number') BatchStart: number;
  @Map() @Field('number') BatchEnd: number;
  @Map() @Field('string') BatchNumber: string;
  @Map() @Field('string') CustomData: string;
}

@FormDef('DeviceInformation')
export class DeviceInformation {
  @Map() @Field('string') Id: string;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') ModelStr: string;
  @Map() @Field('number') Type: number;
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('number[]') WindowsNum: number[];
}

@FormDef('DeviceInformationOutput')
export class DeviceInformationOutput {
  @Map() @Field('DeviceInformation[]') DeviceInformationArray: DeviceInformation[];
}

@Dto('ArticleEdit_SetBlistersWindowsCommand')
@FormDef('EditBlistersWindow')
export class EditBlistersWindow implements IReturn<GenericStringOutput> {
  @Map() @Field('Tv[]') Tv: Tv[];
  @Map() @Field('BlisterWindows[]') BlisterWindows: BlisterWindows[];
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@FormDef('EditStripWindow')
export class EditStripWindow {
  @Map() @Field('Tv[]') Tv: Tv[];
  @Map() @Field('StripWindows[]') StripWindows: StripWindows[];
  @Map() @Field('boolean') CaseDefectStopMachine: boolean;
  @Map() @Field('boolean') CaseDefectRestartWithPassword: boolean;
}

@FormDef('EmptyRequest')
export class EmptyRequest {}

@FormDef('Error')
export class Error {
  @Map() @Field('number') code: number;
  @Map() @Field('string') message: string;
}

@FormDef('Font')
export class Font {
  @Map() @Field('number') Id: number;
  @Map() @Field('number') FontNumber: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('boolean') TopologicCheck: boolean;
  @Map() @Field('FontParameters') Parameters: FontParameters;
  @Map() @Field('FontTolerances') Tolerances: FontTolerances;
  @Map() @Field('Character[]') CharacterArray: Character[];
}

@FormDef('FontLimits')
export class FontLimits {
  @Map() @Field('string[]') ColorChar: string[];
  @Map() @Field('number[]') WidthDot: number[];
  @Map() @Field('number[]') HeightDot: number[];
  @Map() @Field('number[]') WidthChar: number[];
  @Map() @Field('number[]') HeightChar: number[];
  @Map() @Field('number[]') DimFilterH: number[];
  @Map() @Field('number[]') DimFilterV: number[];
  @Map() @Field('string[]') TypeDistanceMaxChar: string[];
  @Map() @Field('number[]') DistanceDotH: number[];
  @Map() @Field('number[]') DistanceDotV: number[];
  @Map() @Field('number[]') DistanceCharsH: number[];
  @Map() @Field('number[]') DistanceCharsV: number[];
  @Map() @Field('number[]') Blank: number[];
  @Map() @Field('string[]') CharRotation: string[];
  @Map() @Field('string[]') SegmentationType: string[];
  @Map() @Field('number[]') Thickness: number[];
  @Map() @Field('string[]') MergeComponents: string[];
  @Map() @Field('number[]') DistanceMaxExcess: number[];
  @Map() @Field('number[]') DistanceAvgExcess: number[];
  @Map() @Field('number[]') DistanceMaxMissing: number[];
  @Map() @Field('number[]') DistanceAvgMissing: number[];
  @Map() @Field('number[]') DistanceMaxCharacters: number[];
  @Map() @Field('number[]') DistanceMinWords: number[];
  @Map() @Field('number[]') SensitivityExternalControl: number[];
  @Map() @Field('number[]') ContrastMinAbsolute: number[];
  @Map() @Field('number[]') DimZoneBeginLineChar: number[];
  @Map() @Field('number[]') SensitivityBeginLineChar: number[];
  @Map() @Field('number[]') DimZoneEndLineChar: number[];
  @Map() @Field('number[]') SensitivityEndLineChar: number[];
  @Map() @Field('number[]') SensitivityAdjacentChar: number[];
  @Map() @Field('string[]') TypeOfCompare: string[];
}

@FormDef('FontParameters')
export class FontParameters {
  @Map() @Field('number') ColorChar: number;
  @Map() @Field('number') WidthDot: number;
  @Map() @Field('number') HeightDot: number;
  @Map() @Field('number') WidthChar: number;
  @Map() @Field('number') HeightChar: number;
  @Map() @Field('number') DimFilterH: number;
  @Map() @Field('number') DimFilterV: number;
  @Map() @Field('number') TypeDistanceMaxChar: number;
  @Map() @Field('number') DistanceDotH: number;
  @Map() @Field('number') DistanceDotV: number;
  @Map() @Field('number') DistanceCharsH: number;
  @Map() @Field('number') DistanceCharsV: number;
  @Map() @Field('number') Blank: number;
  @Map() @Field('boolean') StretchH: boolean;
  @Map() @Field('boolean') StretchV: boolean;
  @Map() @Field('number') CharRotation: number;
  @Map() @Field('number') CharRotationAngle: number;
  @Map() @Field('boolean') Proportional: boolean;
  @Map() @Field('boolean') WaveCorrection: boolean;
  @Map() @Field('boolean') TrueOCR: boolean;
  @Map() @Field('boolean') NoCombinationOverlap: boolean;
  @Map() @Field('boolean') CorrelationOnly: boolean;
  @Map() @Field('boolean') BackgroundSubtraction: boolean;
  @Map() @Field('boolean') VariableLength: boolean;
  @Map() @Field('number') SegmentationType: number;
  @Map() @Field('boolean') UnionPointsH: boolean;
  @Map() @Field('boolean') UnionPointsV: boolean;
  @Map() @Field('number') Thickness: number;
  @Map() @Field('number') MergeComponents: number;
  @Map() @Field('number[]') PatternDot: number[];
}

@FormDef('FontsInput')
export class FontsInput {
  @Map() @Field('Font') Font: Font;
  @Map() @Field('number') TvNumber: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') FontId: number;
  @Map() @Field('number') CharNumber: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') Coordinates: number[];
  @Map() @Field('boolean') ResizeGrid: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('boolean') FontDetails: boolean;
  @Map() @Field('number') EnlargeOrShrink: number;
}

@FormDef('FontsOutput')
export class FontsOutput {
  @Map() @Field('Font[]') FontArray: Font[];
  @Map() @Field('FontLimits') FontLimits: FontLimits;
  @Map() @Field('string[]') FontSymbols: string[];
  @Map() @Field('number') FontId: number;
}

@FormDef('FontTolerances')
export class FontTolerances {
  @Map() @Field('number') DistanceMaxExcess: number;
  @Map() @Field('number') DistanceAvgExcess: number;
  @Map() @Field('number') DistanceMaxMissing: number;
  @Map() @Field('number') DistanceAvgMissing: number;
  @Map() @Field('boolean') CheckDistanceCharacters: boolean;
  @Map() @Field('number') DistanceMaxCharacters: number;
  @Map() @Field('boolean') CheckDistanceWords: boolean;
  @Map() @Field('number') DistanceMinWords: number;
  @Map() @Field('number') SensitivityExternalControl: number;
  @Map() @Field('number') ContrastMinAbsolute: number;
  @Map() @Field('number') DimZoneBeginLineChar: number;
  @Map() @Field('number') SensitivityBeginLineChar: number;
  @Map() @Field('number') DimZoneEndLineChar: number;
  @Map() @Field('number') SensitivityEndLineChar: number;
  @Map() @Field('number') SensitivityAdjacentChar: number;
}

@FormDef('FrameGrabberCamera')
export class FrameGrabberCamera {
  @Map() @Field('number') Index: number;
  @Map() @Field('number') Camera_Model: number;
  @Map() @Field('boolean') Color_Camera: boolean;
  @Map() @Field('number') Width: number;
  @Map() @Field('number') Height: number;
}

@FormDef('FrameGrabberCameraArray')
export class FrameGrabberCameraArray {
  @Map() @Field('FrameGrabberCamera[]') FrameGrabberCameraArray: FrameGrabberCamera[];
}

@FormDef('GenericBoolOutput')
export class GenericBoolOutput {
  @Map() @Field('boolean') Success: boolean;
}

@FormDef('GenericCodeText')
export class GenericCodeText {
  @Map() @Field('string') Code: string;
  @Map() @Field('string') Text: string;
}

@FormDef('GenericCodeTextArray')
export class GenericCodeTextArray {
  @Map() @Field('GenericCodeText[]') Result: GenericCodeText[];
}

@FormDef('GenericDouble')
export class GenericDouble {
  @Map() @Field('number') Value: number;
}

@FormDef('GenericInt64')
export class GenericInt64 {
  @Map() @Field('number') Value: number;
}

@FormDef('GenericNotificationOutput')
export class GenericNotificationOutput {
  @Map() @Field('string') Uuid: string;
}

@FormDef('GenericStringArrayInput')
export class GenericStringArrayInput {
  @Map() @Field('string[]') Values: string[];
}

@FormDef('GenericStringArrayOutput')
export class GenericStringArrayOutput {
  @Map() @Field('string[]') Result: string[];
}

@FormDef('GenericStringInput')
export class GenericStringInput {
  @Map() @Field('string') Value: string;
}

@FormDef('GenericStringMessagesOutput')
export class GenericStringMessagesOutput {
  @Map() @Field('string') Result: string;
  @Map() @Field('string[]') Messages: string[];
}

@FormDef('GenericStringOutput')
export class GenericStringOutput {
  @Map() @Field('string') Result: string;
}

@FormDef('GenericStringParentChildren')
export class GenericStringParentChildren {
  @Map() @Field('string') Parent: string;
  @Map() @Field('GenericStringParentChildren[]') Children: GenericStringParentChildren[];
}

@Dto('Images_ImageBitmapQuery')
@FormDef('ImagesBitmapInput')
export class ImagesBitmapInput implements IReturn<GenericStringOutput> {
  @Map() @Field('number') Tv: number;
  @Map() @Field('boolean') Drawings: boolean;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@FormDef('LineOperationResetAlarmDescription')
export class LineOperationResetAlarmDescription {
  @Map() @Field('boolean') AskCommentOnResetSevereAlarm: boolean;
  @Map() @Field('string[]') PresetReasons: string[];
}

@Dto('LineOperation_ResetAlarmCommand')
@FormDef('LineOperationResetAlarmInput')
export class LineOperationResetAlarmInput implements IReturn<GenericStringOutput> {
  @Map() @Field('string') Id: string;
  @Map() @Field('string') Password: string;
  @Map() @Field('string') Comment: string;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@FormDef('LineOperationStartBatchLocalInput')
export class LineOperationStartBatchLocalInput {
  @Map() @Field('boolean') ForceCloseBatchIfStarted: boolean;
  @Map() @Field('string') MaterialItem: string;
  @Map() @Field('boolean') IgnoreMaterialItem: boolean;
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') DataString: string;
  @Map() @Field('ArticleManagementCommitArticleInput') Commit: ArticleManagementCommitArticleInput;
}

@FormDef('LineOperationUnmarkDefectImage')
export class LineOperationUnmarkDefectImage {
  @Map() @Field('number') id: number;
  @Map() @Field('number') Tv: number;
}

@FormDef('LocalImageLoadInput')
export class LocalImageLoadInput {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') ImageIndex: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') TvNum: number;
}

@FormDef('LogFileTextInput')
export class LogFileTextInput {
  @Map() @Field('number') StartDate: number;
  @Map() @Field('number') EndDate: number;
  @Map() @Field('number') FilterType: number;
  @Map() @Field('string') User: string;
}

@Dto('Maintenance_SaveArchiveZipCommand')
@FormDef('MaintenanceSaveArchiveUsbInput')
export class MaintenanceSaveArchiveUsbInput implements IReturn<GenericNotificationOutput> {
  @Map() @Field('boolean') SavePrinterLabels: boolean;
  @Map() @Field('number') UnmountPenDrive: number;
  constructorRef(): GenericNotificationOutput {
    return <any>null;
  }
}

@FormDef('MeasureResultLearning')
export class MeasureResultLearning {
  @Map() @Field('MeasureResultLearningProduct[]') Products: MeasureResultLearningProduct[];
}

@FormDef('MeasureResultLearningProduct')
export class MeasureResultLearningProduct {
  @Map() @Field('string') Code: string;
  @Map() @Field('string') Description: string;
  @Map() @Field('number') Type: number;
  @Map()
  @Field('MeasureResultLearningResultCavity[]')
  MeasureResultLearningResultCavity: MeasureResultLearningResultCavity[];
  @Map()
  @Field('MeasureResultLearningResultStrip[]')
  MeasureResultLearningResultStrip: MeasureResultLearningResultStrip[];
}

@FormDef('MeasureResultLearningResultCavity')
export class MeasureResultLearningResultCavity {
  @Map() @Field('number') BlisterIndex: number;
  @Map() @Field('number') CavityIndex: number;
  @Map() @Field('boolean') Color: boolean;
  @Map() @Field('number') Area: number;
  @Map() @Field('number') Shape1: number;
  @Map() @Field('number') Shape2: number;
  @Map() @Field('number') Shape3: number;
  @Map() @Field('number') Shape4: number;
  @Map() @Field('number') Angle: number;
  @Map() @Field('number') RedLevel: number;
  @Map() @Field('number') RedDispersion: number;
  @Map() @Field('number') GreenLevel: number;
  @Map() @Field('number') GreenDispersion: number;
  @Map() @Field('number') BlueLevel: number;
  @Map() @Field('number') BlueDispersion: number;
  @Map() @Field('number') Hue1: number;
  @Map() @Field('number') Saturation1: number;
  @Map() @Field('number') Value1: number;
  @Map() @Field('number') Hue2: number;
  @Map() @Field('number') Saturation2: number;
  @Map() @Field('number') Value2: number;
  @Map() @Field('number') Level: number;
  @Map() @Field('number') Dispersion: number;
}

@FormDef('MeasureResultLearningResultStrip')
export class MeasureResultLearningResultStrip {
  @Map() @Field('number') BlisterIndex: number;
  @Map() @Field('boolean') Color: boolean;
  @Map() @Field('number') RedLevel: number;
  @Map() @Field('number') RedDispersion: number;
  @Map() @Field('number') GreenLevel: number;
  @Map() @Field('number') GreenDispersion: number;
  @Map() @Field('number') BlueLevel: number;
  @Map() @Field('number') BlueDispersion: number;
  @Map() @Field('number') Hue: number;
  @Map() @Field('number') Saturation: number;
  @Map() @Field('number') Value: number;
  @Map() @Field('number') Level: number;
  @Map() @Field('number') Dispersion: number;
}

@FormDef('MeasureResultsControlWindowArray')
export class MeasureResultsControlWindowArray {
  @Map() @Field('number[]') Data: number[];
  @Map() @Field('string[]') Results: string[];
  @Map() @Field('number[]') Colors: number[];
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

@FormDef('MeasureResultsControlWindowInput')
export class MeasureResultsControlWindowInput {
  @Map() @Field('string') PaginationToken: string;
  @Map()
  @Field('MeasureResultsControlWindowFiltersInput')
  MeasureResultsControlWindowFilters: MeasureResultsControlWindowFiltersInput;
  @Map() @Field('number') Limit: number;
}

@FormDef('MeasureResultsControlWindowLayout')
export class MeasureResultsControlWindowLayout {
  @Map()
  @Field('MeasureResultsControlWindowLayoutHeader[]')
  MeasureResultsHeaders: MeasureResultsControlWindowLayoutHeader[];
  @Map() @Field('number[]') MeasuresByWindows: number[];
  @Map() @Field('string[]') ControlWindowsTypesLabels: string[];
  @Map() @Field('number') TvLimit: number;
  @Map() @Field('number') WindowLimit: number;
  @Map() @Field('number') TimeSince: number;
}

@FormDef('MeasureResultsControlWindowLayoutHeader')
export class MeasureResultsControlWindowLayoutHeader {
  @Map() @Field('number') Type: number;
  @Map() @Field('string[]') Headers: string[];
}

@FormDef('MeasureResultsControlWindowOutput')
export class MeasureResultsControlWindowOutput {
  @Map() @Field('number') Total: number;
  @Map()
  @Field('MeasureResultsControlWindowArray[]')
  MeasureResultsControlWindowArray: MeasureResultsControlWindowArray[];
  @Map() @Field('string') PaginationToken: string;
}

@FormDef('MeasureResultsHarlequinArticleArray')
export class MeasureResultsHarlequinArticleArray {
  @Map() @Field('number') Type: number;
  @Map() @Field('boolean') AllArticle: boolean;
  @Map() @Field('number') ArticleIndex: number;
  @Map() @Field('string') ArticleCode: string;
  @Map() @Field('string[]') Columns: string[];
  @Map() @Field('number') TotalRows: number;
  @Map()
  @Field('MeasureResultsHarlequinArticleRowArray[]')
  MeasureResultsHarlequinArticleRowArray: MeasureResultsHarlequinArticleRowArray[];
}

@FormDef('MeasureResultsHarlequinArticleRowArray')
export class MeasureResultsHarlequinArticleRowArray {
  @Map() @Field('number') Tv: number;
  @Map() @Field('number') ArticleIndex: number;
  @Map() @Field('number') AddressDefectImage: number;
  @Map() @Field('number') Type: number;
  @Map() @Field('string') Label: string;
  @Map() @Field('boolean') Fail: boolean;
  @Map() @Field('string[]') Results: string[];
  @Map() @Field('number[]') Colors: number[];
}

@FormDef('MeasureResultsHarlequinFiltersInput')
export class MeasureResultsHarlequinFiltersInput {
  @Map() @Field('boolean') GoodCavities: boolean;
  @Map() @Field('boolean') EmptyCavities: boolean;
  @Map() @Field('boolean') CavitiesWithDefects: boolean;
  @Map() @Field('boolean') WindowsOnStrip: boolean;
  @Map() @Field('number') ArticleIndex: number;
}

@Dto('ArticleView_ArticleMeasureResultsHarlequinQuery')
@FormDef('MeasureResultsHarlequinInput')
export class MeasureResultsHarlequinInput implements IReturn<MeasureResultsHarlequinOutput> {
  @Map() @Field('number') Start: number;
  @Map() @Field('number') Limit: number;
  @Map()
  @Field('MeasureResultsHarlequinFiltersInput')
  MeasureResultsHarlequinFilters: MeasureResultsHarlequinFiltersInput;
  constructorRef(): MeasureResultsHarlequinOutput {
    return <any>null;
  }
}

@FormDef('MeasureResultsHarlequinOutput')
export class MeasureResultsHarlequinOutput {
  @Map() @Field('string[]') AvailableViewArticles: string[];
  @Map()
  @Field('MeasureResultsHarlequinArticleArray[]')
  MeasureResultsHarlequinArticleArray: MeasureResultsHarlequinArticleArray[];
  @Map() @Field('boolean') FilterEnable: boolean;
}

@FormDef('MeasureResultsImageInput')
export class MeasureResultsImageInput {
  @Map() @Field('number') ImageNumber: number;
  @Map() @Field('number') ImageAddress: number;
  @Map() @Field('boolean') DrawingsEnabled: boolean;
  @Map() @Field('number') TvNum: number;
  @Map() @Field('number') ResultType: number;
  @Map() @Field('number') ImgFormat: number;
  @Map() @Field('boolean') MultiFunctionTv: boolean;
}

@FormDef('MeasureResultsMoviolaImageOutput')
export class MeasureResultsMoviolaImageOutput {
  @Map() @Field('string') Image: string;
  @Map() @Field('number') TvNum: number;
}

@FormDef('MeasureResultsMoviolaImageOutputArray')
export class MeasureResultsMoviolaImageOutputArray {
  @Map() @Field('MeasureResultsMoviolaImageOutput[]') Result: MeasureResultsMoviolaImageOutput[];
  @Map() @Field('number') PrevImgNum: number;
  @Map() @Field('number') NextImgNum: number;
}

@FormDef('MultifunctionWindow')
export class MultifunctionWindow {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Id: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('number') IdControl: number;
  @Map() @Field('number') TypeControl: number;
  @Map() @Field('number') Rotation: number;
  @Map() @Field('number') RotationAngleDegree: number;
  @Map() @Field('number') Reflection: number;
  @Map() @Field('boolean') PreliminaryFilter: boolean;
  @Map() @Field('number') NumRejectSignal: number;
  @Map() @Field('number') LenghtRejectQueue: number;
  @Map() @Field('number') NumRefWindowHoriz: number;
  @Map() @Field('number') PxOffsetHoriz: number;
  @Map() @Field('number') TypeOffsetHoriz: number;
  @Map() @Field('number') NumRefWindowVert: number;
  @Map() @Field('number') PxOffsetVert: number;
  @Map() @Field('number') TypeOffsetVert: number;
  @Map() @Field('boolean') ClearanceBatchEnd: boolean;
  @Map() @Field('boolean') DisableControl: boolean;
  @Map() @Field('boolean') DisplayAutomaticWork: boolean;
  @Map() @Field('boolean') SerialFromWindow: boolean;
  @Map() @Field('number') SerialNumFromWindow: number;
  @Map() @Field('number') NumPreprocessingWindow: number;
  @Map() @Field('number') TriggerPeriod: number;
  @Map() @Field('number') TriggerWork: number;
  @Map() @Field('boolean') DisplayDebug: boolean;
  @Map() @Field('boolean') CopyToMaster: boolean;
  @Map() @Field('MultifunctionWindowCoordinate') Coordinates: MultifunctionWindowCoordinate;
}

@FormDef('MultifunctionWindowArray')
export class MultifunctionWindowArray {
  @Map() @Field('MultifunctionWindow[]') MultifunctionWindowArray: MultifunctionWindow[];
  @Map() @Field('MultifunctionWindowTypeControl[]') TypeControlsDescription: MultifunctionWindowTypeControl[];
  @Map() @Field('string[]') Signals: string[];
  @Map() @Field('boolean[]') FieldEnabledArray: boolean[];
  @Map() @Field('MultifunctionWindowLimits') Limits: MultifunctionWindowLimits;
}

@FormDef('MultifunctionWindowControlData')
export class MultifunctionWindowControlData {
  @Map() @Field('number') Id: number;
  @Map() @Field('string') Name: string;
}

@FormDef('MultifunctionWindowCoordinate')
export class MultifunctionWindowCoordinate {
  @Map() @Field('number') WindowTop: number;
  @Map() @Field('number') WindowBottom: number;
  @Map() @Field('number') WindowLeft: number;
  @Map() @Field('number') WindowRight: number;
}

@FormDef('MultifunctionWindowCoordinateArray')
export class MultifunctionWindowCoordinateArray {
  @Map()
  @Field('MultifunctionWindowCoordinateData[]')
  MultifunctionWindowCoordinateArray: MultifunctionWindowCoordinateData[];
}

@FormDef('MultifunctionWindowCoordinateData')
export class MultifunctionWindowCoordinateData {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Id: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('MultifunctionWindowCoordinate') Coordinates: MultifunctionWindowCoordinate;
  @Map() @Field('number') TypeControl: number;
  @Map() @Field('number') IdControl: number;
}

@Dto('ArticleEdit_ArticleMultiFunctionWindowsCoordinateUpdateCommand')
@FormDef('MultifunctionWindowCoordinateEditActionsInput')
export class MultifunctionWindowCoordinateEditActionsInput implements IReturn<MultifunctionWindowCoordinateArray> {
  @Map()
  @Field('MultifunctionWindowCoordinateData[]')
  MultifunctionWindowCoordinateArray: MultifunctionWindowCoordinateData[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
  constructorRef(): MultifunctionWindowCoordinateArray {
    return <any>null;
  }
}

@FormDef('MultifunctionWindowEditActionsInput')
export class MultifunctionWindowEditActionsInput {
  @Map() @Field('MultifunctionWindowArray') MultifunctionWindowsData: MultifunctionWindowArray;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') ExtraData: number[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
}

@FormDef('MultifunctionWindowLimits')
export class MultifunctionWindowLimits {
  @Map() @Field('number[]') Windows: number[];
  @Map() @Field('number[]') WindowRotation: number[];
  @Map() @Field('number[]') WindowReflection: number[];
  @Map() @Field('number[]') NumRejectSignal: number[];
  @Map() @Field('number[]') LenghtRejectQueue: number[];
  @Map() @Field('number[]') TriggerWork: number[];
  @Map() @Field('number[]') TriggerPeriod: number[];
  @Map() @Field('number[]') PxOffsetHoriz: number[];
  @Map() @Field('number[]') TypeOffsetHoriz: number[];
  @Map() @Field('number[]') PxOffsetVert: number[];
  @Map() @Field('number[]') TypeOffsetVert: number[];
}

@FormDef('MultifunctionWindowTypeControl')
export class MultifunctionWindowTypeControl {
  @Map() @Field('number') TypeControl: number;
  @Map() @Field('string') TypeControlName: string;
  @Map() @Field('MultifunctionWindowControlData[]') Controls: MultifunctionWindowControlData[];
}

@FormDef('OEEParameters')
export class OEEParameters {
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') InputFormula: string;
  @Map() @Field('number') InputLogic: number;
  @Map() @Field('string') OutputFormula: string;
  @Map() @Field('number') OutputLogic: number;
  @Map() @Field('number') NumberOfSteps: number;
  @Map() @Field('boolean') ApplyToAllConfigurations: boolean;
}

@FormDef('OperationDescription')
export class OperationDescription {
  @Map() @Field('number') Num: number;
  @Map() @Field('OperationStructure[]') OperationStructure: OperationStructure[];
  @Map() @Field('boolean') SaveFileBatch: boolean;
}

@FormDef('OperationStructure')
export class OperationStructure {
  @Map() @Field('number') Index: number;
  @Map() @Field('number') Type: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Category: string;
  @Map() @Field('number') NumParams: number;
  @Map() @Field('number[]') OffsetValues: number[];
  @Map() @Field('string') Layout: string;
  @Map() @Field('ParameterStructure[]') ParameterStructure: ParameterStructure[];
  @Map() @Field('ConditionStructure[]') ConditionStructure: ConditionStructure[];
  @Map() @Field('boolean') Model: boolean;
  @Map() @Field('boolean') Learning: boolean;
  @Map() @Field('boolean') Trend: boolean;
  @Map() @Field('boolean') Draw: boolean;
  @Map() @Field('string') TextInputLabel: string;
}

@FormDef('ParameterStructure')
export class ParameterStructure {
  @Map() @Field('string') Name: string;
  @Map() @Field('number') Value: number;
  @Map() @Field('number') LimitUpper: number;
  @Map() @Field('number') LimitLower: number;
  @Map() @Field('boolean') Operation: boolean;
  @Map() @Field('ParameterStructureFormat') ParameterStructureFormat: ParameterStructureFormat;
}

@FormDef('ParameterStructureFormat')
export class ParameterStructureFormat {
  @Map() @Field('string') Label: string;
  @Map() @Field('string') HelpText: string;
  @Map() @Field('string') Type: string;
  @Map() @Field('ParameterStructureFormatArray[]') ParameterStructureFormatArray: ParameterStructureFormatArray[];
}

@FormDef('ParameterStructureFormatArray')
export class ParameterStructureFormatArray {
  @Map() @Field('number[]') Range: number[];
  @Map() @Field('string') ResourceName: string;
  @Map() @Field('number') Type: number;
  @Map() @Field('number[]') Code: number[];
  @Map() @Field('string[]') Text: string[];
}

@FormDef('PLC13Parameters')
export class PLC13Parameters {
  @Map() @Field('number[]') Value: number[];
  @Map() @Field('string') TableName: string;
  @Map() @Field('number') DatasourceIndexConfiguration: number;
}

@FormDef('PrintersCompleteConfTT')
export class PrintersCompleteConfTT {
  @Map() @Field('PrintersDataTT[]') PrintersIDConf: PrintersDataTT[];
  @Map() @Field('boolean') RecoverCodesPermissions: boolean;
}

@FormDef('PrintersDataTT')
export class PrintersDataTT {
  @Map() @Field('number') IDNumber: number;
  @Map() @Field('string') IDName: string;
  @Map() @Field('number') PrintersGroupSelected: number;
  @Map() @Field('PrintersGroupsOutput[]') PrinterGroups: PrintersGroupsOutput[];
  @Map() @Field('number') CodesToSend: number;
  @Map() @Field('number') CodesSentNotProcessed: number;
  @Map() @Field('boolean') AutomaticPrintingEnable: boolean;
}

@FormDef('PrintersGroupsOutput')
export class PrintersGroupsOutput {
  @Map() @Field('number') GroupNumber: number;
  @Map() @Field('string') PrintersNames: string;
  @Map() @Field('number') PrintableCodes: number;
  @Map() @Field('boolean') PrintFromFIFO: boolean;
}

@FormDef('ProgMeasure')
export class ProgMeasure {
  @Map() @Field('number') Id: number;
  @Map() @Field('number') NumProgMeasure: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') Description: string;
  @Map() @Field('number') Cx: number;
  @Map() @Field('number') Cy: number;
  @Map() @Field('number') ObjectFamily: number;
  @Map() @Field('number') Group: number;
  @Map() @Field('ProgMeasureOperation[]') Operation: ProgMeasureOperation[];
  @Map() @Field('ProgMeasureWindow[]') Windows: ProgMeasureWindow[];
  @Map() @Field('string') LearnModelImage: string;
  @Map() @Field('ProgMeasureTableModel') LearnModelTable: ProgMeasureTableModel;
}

@FormDef('ProgMeasureConditionAcceptance')
export class ProgMeasureConditionAcceptance {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Type: number;
  @Map() @Field('number') NumParametersUsed: number;
  @Map() @Field('boolean') WizardEditing: boolean;
  @Map() @Field('number') WizardTolerance: number;
  @Map() @Field('number') Value: number;
  @Map() @Field('number') ExtremeValue: number;
  @Map() @Field('number') MeasuredValue: number;
  @Map() @Field('number') LearnedValue: number;
  @Map() @Field('number') LearnedValueWorst: number;
}

@Dto('ArticleEdit_ArticleProgMeasureCommand')
@FormDef('ProgMeasureInput')
export class ProgMeasureInput implements IReturn<ProgMeasure> {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('ProgMeasure') ProgMeasure: ProgMeasure;
  @Map() @Field('string') GUID: string;
  @Map() @Field('number') ProgMeasureID: number;
  @Map() @Field('number') OperationNum: number;
  @Map() @Field('number') WindowNum: number;
  @Map() @Field('number') TvNum: number;
  @Map() @Field('number[]') Coordinates: number[];
  @Map() @Field('number') EnlargeOrShrink: number;
  constructorRef(): ProgMeasure {
    return <any>null;
  }
}

@FormDef('ProgMeasureOperation')
export class ProgMeasureOperation {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') Type: number;
  @Map() @Field('boolean') DrawMeasureControl: boolean;
  @Map() @Field('number[]') Parameters: number[];
  @Map() @Field('ProgMeasureConditionAcceptance[]') ConditionsAcceptance: ProgMeasureConditionAcceptance[];
  @Map() @Field('boolean') TotalBatch: boolean;
  @Map() @Field('string') OperationNameTotalBatch: string;
  @Map() @Field('string') Comment: string;
  @Map() @Field('boolean') Trend: boolean;
  @Map() @Field('string') TextData: string;
  @Map() @Field('ProgMeasureTableModel') RadialToolTable: ProgMeasureTableModel;
}

@FormDef('ProgMeasureOperationModels')
export class ProgMeasureOperationModels {
  @Map() @Field('GenericCodeText[]') LearnedModelImages: GenericCodeText[];
  @Map() @Field('ProgMeasureTableModel') LearnedModelTable: ProgMeasureTableModel;
}

@FormDef('ProgMeasurePreviewInput')
export class ProgMeasurePreviewInput {
  @Map() @Field('number') ProgMeasureId: number;
  @Map() @Field('number') Window: number;
  @Map() @Field('number') NumOperation: number;
  @Map() @Field('boolean') CopyDrawingsOnImage: boolean;
}

@FormDef('ProgMeasurePreviewOperation')
export class ProgMeasurePreviewOperation {
  @Map() @Field('number') Result: number;
  @Map() @Field('string') ResultString: string;
  @Map() @Field('string') ExtraInfo: string;
  @Map() @Field('number') Time: number;
}

@FormDef('ProgMeasurePreviewOutput')
export class ProgMeasurePreviewOutput {
  @Map() @Field('ProgMeasurePreviewOperation[]') Operations: ProgMeasurePreviewOperation[];
  @Map() @Field('number[]') PointsCoordinatesX: number[];
  @Map() @Field('number[]') PointsCoordinatesY: number[];
}

@FormDef('ProgMeasureRadialToolModel')
export class ProgMeasureRadialToolModel {
  @Map() @Field('string[]') Fields: string[];
  @Map() @Field('number[]') LearnedValues: number[];
  @Map() @Field('number[]') Offset: number[];
}

@FormDef('ProgMeasures')
export class ProgMeasures {
  @Map() @Field('ProgMeasure[]') ProgMeasure: ProgMeasure[];
}

@FormDef('ProgMeasureTableModel')
export class ProgMeasureTableModel {
  @Map() @Field('string[]') Fields: string[];
  @Map() @Field('number[]') LearnedValues: number[];
  @Map() @Field('number[]') OffsetValues: number[];
  @Map() @Field('number[]') OffsetDefaults: number[];
}

@FormDef('ProgMeasureWindow')
export class ProgMeasureWindow {
  @Map() @Field('number') Index: number;
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') Type: number;
  @Map() @Field('number') ID: number;
}

@Dto('RuntimeButtons_RuntimeButtonExecuteCommand')
@FormDef('RunTimeButtonInformation')
export class RunTimeButtonInformation implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') Index: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('string') IconPath: string;
  @Map() @Field('number') FunctionButton: number;
  @Map() @Field('boolean') Active: boolean;
  @Map() @Field('number') Type: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@FormDef('RunTimeButtonInformationArray')
export class RunTimeButtonInformationArray {
  @Map() @Field('RunTimeButtonInformation[]') RunTimeButtonInformationArray: RunTimeButtonInformation[];
}

@FormDef('StripWindows')
export class StripWindows {
  @Map() @Field('number') Num: number;
  @Map() @Field('number') TvIndex: number;
  @Map() @Field('MultifunctionWindowCoordinate') Coordinate: MultifunctionWindowCoordinate;
  @Map() @Field('boolean') LevelMultiplicative: boolean;
  @Map() @Field('boolean') LevelAdditive: boolean;
  @Map() @Field('boolean') WhiteBalance: boolean;
  @Map() @Field('boolean') Debug: boolean;
}

@FormDef('SystemInformation')
export class SystemInformation {
  @Map() @Field('string') SystemName: string;
  @Map() @Field('string') SystemLanguage: string;
  @Map() @Field('string') SystemSerialNumber: string;
  @Map() @Field('string') SystemDeliveryDate: string;
  @Map() @Field('string') SystemOS: string;
  @Map() @Field('string') SystemDrivers: string;
  @Map() @Field('string') CompanyName: string;
  @Map() @Field('string') CompanyAddress: string;
  @Map() @Field('string') CompanyPhone: string;
  @Map() @Field('string') CompanyFax: string;
  @Map() @Field('string') CompanyEmail: string;
  @Map() @Field('string[]') OptionalPacksDescription: string[];
  @Map() @Field('number[]') OptionalPacksValues: number[];
  @Map() @Field('string') Acknowledgements: string;
  @Map() @Field('string') Copyright: string;
  @Map() @Field('string') IdentificationLine: string;
  @Map() @Field('string') APIVersion: string;
}

@FormDef('SystemLanguages')
export class SystemLanguages {
  @Map() @Field('GenericCodeText[]') Languages: GenericCodeText[];
  @Map() @Field('string') LanguageCode: string;
  @Map() @Field('string') Uuid: string;
}

@FormDef('SystemManagementInput')
export class SystemManagementInput {
  @Map() @Field('boolean') UserManagement: boolean;
  @Map() @Field('boolean') ArchiveManagement: boolean;
  @Map() @Field('boolean') BatchManagement: boolean;
  @Map() @Field('boolean') SystemProtection: boolean;
  @Map() @Field('boolean') AutomaticLogoffTimeoutEnable: boolean;
  @Map() @Field('boolean') AutomaticLogoffAutomaticWorkStart: boolean;
  @Map() @Field('number') AutomaticLogoffTimeoutDuration: number;
  @Map() @Field('boolean') PasswordExpirable: boolean;
  @Map() @Field('number') PasswordDuration: number;
}

@Dto('ArticleEdit_ArticleTolerancesCommand')
@FormDef('TollerancesCommandInput')
export class TollerancesCommandInput implements IReturn<GenericBoolOutput> {
  @Map() @Field('TollerancesParametersInput') Area: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Shape_1: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Shape_2: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Shape_3: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Shape_4: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Angle: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Red_Level: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Red_Dispersion: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Green_Level: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Green_Dispersion: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Blue_Level: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Blue_Dispersion: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Hue_1: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Saturation_1: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Value_1: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Hue_2: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Saturation_2: TollerancesParametersInput;
  @Map() @Field('TollerancesParametersInput') Value_2: TollerancesParametersInput;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@FormDef('TollerancesParametersInput')
export class TollerancesParametersInput {
  @Map() @Field('number') LowerValue: number;
  @Map() @Field('number') HigherValue: number;
  @Map() @Field('boolean') IsEnabled: boolean;
}

@FormDef('TollerancesParametersOutput')
export class TollerancesParametersOutput {
  @Map() @Field('number') LowerValue: number;
  @Map() @Field('number') HigherValue: number;
  @Map() @Field('number') SuggestedValue: number;
  @Map() @Field('boolean') IsEnabled: boolean;
}

@FormDef('TollerancesQueryOutput')
export class TollerancesQueryOutput {
  @Map() @Field('TollerancesParametersOutput') Area: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Shape_1: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Shape_2: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Shape_3: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Shape_4: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Angle: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Red_Level: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Red_Dispersion: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Green_Level: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Green_Dispersion: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Blue_Level: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Blue_Dispersion: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Hue_1: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Saturation_1: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Value_1: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Hue_2: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Saturation_2: TollerancesParametersOutput;
  @Map() @Field('TollerancesParametersOutput') Value_2: TollerancesParametersOutput;
}

@FormDef('TrackTraceInfoHistoryOutput')
export class TrackTraceInfoHistoryOutput {
  @Map() @Field('number') Timestamp: number;
  @Map() @Field('number') Type: number;
  @Map() @Field('string') OperatorId: string;
  @Map() @Field('string') Position: string;
}

@FormDef('TrackTraceInfoInput')
export class TrackTraceInfoInput {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
}

@FormDef('TrackTraceInfoOutput')
export class TrackTraceInfoOutput {
  @Map() @Field('number') ArrayNumber: number;
  @Map() @Field('number') ObjectIndex: number;
  @Map() @Field('string[]') SerialID: string[];
  @Map() @Field('number') LogisticLevel: number;
  @Map() @Field('string') Position: string;
  @Map() @Field('number') PositionNum: number;
  @Map() @Field('number') FifoNum: number;
  @Map() @Field('string') FifoName: string;
  @Map() @Field('string') Status: string;
  @Map() @Field('number') StatusNum: number;
  @Map() @Field('string') FatherId: string;
  @Map() @Field('number') FatherIdNum: number;
  @Map() @Field('number') NumberOfChildren: number;
  @Map() @Field('boolean') Sent: boolean;
  @Map() @Field('number') SendingState: number;
  @Map() @Field('boolean') Exported: boolean;
  @Map() @Field('number') ExportedState: number;
  @Map() @Field('boolean') CommissioningNotification: boolean;
  @Map() @Field('boolean') AggregationNotification: boolean;
  @Map() @Field('string') RejectReason: string;
  @Map() @Field('TrackTraceInfoHistoryOutput[]') History: TrackTraceInfoHistoryOutput[];
  @Map() @Field('number[]') RpcActions: number[];
  @Map() @Field('number') NumberOfAdoptedChildren: number;
}

@FormDef('TrackTraceInfoOutputArray')
export class TrackTraceInfoOutputArray {
  @Map() @Field('TrackTraceInfoOutput[]') TrackTraceInfoOutputArray: TrackTraceInfoOutput[];
  @Map() @Field('string') Input: string;
}

@FormDef('TrackTraceInfoRejectReasonOutput')
export class TrackTraceInfoRejectReasonOutput {
  @Map() @Field('number[]') RejectReasonNum: number[];
  @Map() @Field('string[]') RejectResonString: string[];
  @Map() @Field('number[]') RejectReasonStandardNum: number[];
  @Map() @Field('string[]') RejectResonStandardString: string[];
}

@FormDef('TrackTraceInfoReworkOptionsOutput')
export class TrackTraceInfoReworkOptionsOutput {
  @Map() @Field('TrackTraceInfoRejectReasonOutput') Rejection: TrackTraceInfoRejectReasonOutput;
  @Map() @Field('number') RecoveryFifo: number;
  @Map() @Field('number') UnpackingRejectRecover: number;
  @Map() @Field('number') UnpackingFifoRecover: number;
  @Map() @Field('number') UnpackingChildrenRejectRecover: number;
  @Map() @Field('number') UnpackingChildrenFifoRecover: number;
  @Map() @Field('number') UnpackingExpectedNextStatus: number;
  @Map() @Field('number') ReplacementSourceFifo: number;
  @Map() @Field('number') ReplacementRejectRecover: number;
  @Map() @Field('number') ReplacementFifoRecover: number;
  @Map() @Field('number') ReplaceExpectedNextStatus: number;
  @Map() @Field('number') AggregationDestFifoFather: number;
  @Map() @Field('number') AggregationSourceFifo: number;
  @Map() @Field('number') AggregationRejectRecover: number;
  @Map() @Field('number') AggregationFifoRecover: number;
  @Map() @Field('boolean') AggregationChangeFatherIdPos: boolean;
  @Map() @Field('number') AggregationExpectedNextStatus: number;
  @Map() @Field('number[]') AggregationChildrenArrayNumber: number[];
  @Map() @Field('number') AdoptedChildrenNum: number;
}

@FormDef('TrackTraceReworkInput')
export class TrackTraceReworkInput {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
}

@FormDef('TrackTraceReworkShowContentOutput')
export class TrackTraceReworkShowContentOutput {
  @Map() @Field('string[]') Serial: string[];
  @Map() @Field('number[]') ArrayNumber: number[];
  @Map() @Field('number[]') ObjectIndex: number[];
  @Map() @Field('number') MaxChildren: number;
}

@FormDef('TrackTraceTableDataId')
export class TrackTraceTableDataId {
  @Map() @Field('number') Index: number;
  @Map() @Field('string[]') CodeArray: string[];
  @Map() @Field('number') Color: number;
  @Map() @Field('string[]') Info: string[];
  @Map() @Field('number') Time: number;
  @Map() @Field('string[]') Ansi: string[];
  @Map() @Field('string') Reason: string;
}

@FormDef('TrackTraceTableDataInput')
export class TrackTraceTableDataInput {
  @Map() @Field('string') TrackTraceFileName: string;
  @Map() @Field('any') TrackTraceFileType: any;
  @Map() @Field('number') Start: number;
  @Map() @Field('number') Limit: number;
  @Map() @Field('boolean') FlagIdBatch: boolean;
  @Map() @Field('boolean') FlagIdSentPrinter: boolean;
  @Map() @Field('boolean') FlagIdMachine: boolean;
  @Map() @Field('boolean') FlagIdOutComplete: boolean;
  @Map() @Field('boolean') FlagIdOutIncomplete: boolean;
  @Map() @Field('boolean') FlagIdRejected: boolean;
  @Map() @Field('string') FilterText: string;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') FifoIndex: number;
  @Map() @Field('number') LogisticLevel: number;
}

@FormDef('TrackTraceTableDataOutput')
export class TrackTraceTableDataOutput {
  @Map() @Field('string') TagUri: string;
  @Map() @Field('string') PackObjectName: string;
  @Map() @Field('number') FifoMax: number;
  @Map() @Field('string') FifoName: string;
  @Map() @Field('number[]') LogisticLevels: number[];
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') CurrentId: number;
  @Map() @Field('number') IdSentDownstream: number;
  @Map() @Field('number') IdNotSent: number;
  @Map() @Field('number') IdBatch: number;
  @Map() @Field('number') IdSentPrinter: number;
  @Map() @Field('number') IdMachine: number;
  @Map() @Field('number') IdOutComplete: number;
  @Map() @Field('number') IdOutIncomplete: number;
  @Map() @Field('number') IdRejected: number;
  @Map() @Field('string[]') HeadersColumnName: string[];
  @Map() @Field('number') TotalFilteredId: number;
  @Map() @Field('TrackTraceTableDataId[]') IdArray: TrackTraceTableDataId[];
}

@Dto('Visualization_ShowTvCommand')
@FormDef('Tv')
export class Tv implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') Index: number;
  @Map() @Field('number') Width: number;
  @Map() @Field('number') Height: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@FormDef('Valida3DParameter')
export class Valida3DParameter {
  @Map() @Field('number[]') Value: number[];
}

@FormDef('ValidaParameters')
export class ValidaParameters {
  @Map() @Field('number') ProductMovementDirectionValue: number;
  @Map() @Field('string[]') ProductMovementDirectionOptions: string[];
  @Map() @Field('boolean') ValidaEndOfPlateCoordinatesEnable: boolean;
  @Map() @Field('ValidaParametersCoordinates[]') ValidaParameterCoordinatesArray: ValidaParametersCoordinates[];
  @Map() @Field('number[]') MinObjectMovementPixel: number[];
  @Map() @Field('number[]') MaxObjectMovementPixel: number[];
  @Map() @Field('number[]') TimeoutAfterClearMs: number[];
  @Map() @Field('number[]') DefaultFallingTimeMs: number[];
  @Map() @Field('number[]') Valida2DMaxWrongPercentage: number[];
  @Map() @Field('boolean') Valida3DCheckEnable: boolean;
  @Map() @Field('number[]') Valida3DTupleMinNumber: number[];
  @Map() @Field('number') Valida3DAlgorithmValue: number;
  @Map() @Field('string[]') Valida3DAlgorithmOptions: string[];
  @Map() @Field('Valida3DParameter[]') Valida3DAlgorithmParameters: Valida3DParameter[];
}

@FormDef('ValidaParametersCoordinates')
export class ValidaParametersCoordinates {
  @Map() @Field('number') ChannelNumber: number;
  @Map() @Field('number[]') EndOfPlateCoordinate: number[];
  @Map() @Field('number[]') OutcomeCoordinate: number[];
}

@FormDef('WebSocketOperationUpdate')
export class WebSocketOperationUpdate {
  @Map() @Field('string') Tag: string;
  @Map() @Field('string') Uuid: string;
  @Map() @Field('number') Progress: number;
  @Map() @Field('string[]') Messages: string[];
  @Map() @Field('boolean') Success: boolean;
}

@FormDef('WebStorageData')
export class WebStorageData {
  @Map() @Field('string') Key: string;
  @Map() @Field('string') Value: string;
  @Map() @Field('number') Status: number;
}

@Dto('AccountView_AccountDescriptionQuery')
@FormDef('AccountDescriptionQuery')
export class AccountDescriptionQuery implements IReturn<AccountUserInformationDescription> {
  constructorRef(): AccountUserInformationDescription {
    return <any>null;
  }
}

@Dto('AccountView_AccountDetailQuery')
@FormDef('AccountDetailQuery')
export class AccountDetailQuery implements IReturn<AccountUserInformation> {
  constructorRef(): AccountUserInformation {
    return <any>null;
  }
}

@Dto('AccountView_AccountPolicyQuery')
@FormDef('AccountPolicyQuery')
export class AccountPolicyQuery implements IReturn<AccountViewPolicy> {
  constructorRef(): AccountViewPolicy {
    return <any>null;
  }
}

@Dto('AccountView_AccountsDetailQuery')
@FormDef('UsersQuery')
export class UsersQuery implements IReturn<AccountUsersInformationOutput> {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('string') UserId: string;
  @Map() @Field('boolean') UserDetails: boolean;
  @Map() @Field('boolean') ResetPassword: boolean;
  @Map() @Field('AccountUserInformation') UserAccount: AccountUserInformation;
  constructorRef(): AccountUsersInformationOutput {
    return <any>null;
  }
}

@Dto('AccountEdit_ChangePasswordCommand')
@FormDef('ChangePasswordCommand')
export class ChangePasswordCommand implements IReturn<GenericStringOutput> {
  @Map() @Field('string') UserCode: string;
  @Map() @Field('string') OldPassword: string;
  @Map() @Field('string') NewPassword: string;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('AccountEdit_DetailCommand')
@FormDef('UserCommand')
export class UserCommand implements IReturn<AccountUsersInformationOutput> {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('string') UserId: string;
  @Map() @Field('boolean') UserDetails: boolean;
  @Map() @Field('boolean') ResetPassword: boolean;
  @Map() @Field('AccountUserInformation') UserAccount: AccountUserInformation;
  constructorRef(): AccountUsersInformationOutput {
    return <any>null;
  }
}

@Dto('AccountEdit_AccountPolicyCommand')
@FormDef('SystemManagementCommand')
export class SystemManagementCommand implements IReturn<AccountViewPolicy> {
  @Map() @Field('boolean') UserManagement: boolean;
  @Map() @Field('boolean') ArchiveManagement: boolean;
  @Map() @Field('boolean') BatchManagement: boolean;
  @Map() @Field('boolean') SystemProtection: boolean;
  @Map() @Field('boolean') AutomaticLogoffTimeoutEnable: boolean;
  @Map() @Field('boolean') AutomaticLogoffAutomaticWorkStart: boolean;
  @Map() @Field('number') AutomaticLogoffTimeoutDuration: number;
  @Map() @Field('boolean') PasswordExpirable: boolean;
  @Map() @Field('number') PasswordDuration: number;
  constructorRef(): AccountViewPolicy {
    return <any>null;
  }
}

@Dto('AccountEdit_UpdateLastUserAliveTimeCommand')
@FormDef('UpdateLastUserAliveTimeCommand')
export class UpdateLastUserAliveTimeCommand implements IReturn<GenericBoolOutput> {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleCodesEditActionsCommand')
@FormDef('ArticleCodesEditActionsCommand')
export class ArticleCodesEditActionsCommand implements IReturn<GenericInt64> {
  @Map() @Field('CodesArray') CodesData: CodesArray;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') ExtraData: number[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
  constructorRef(): GenericInt64 {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleCodesUpdateCommand')
@FormDef('ArticleCodesUpdateCommand')
export class ArticleCodesUpdateCommand implements IReturn<CodesArray> {
  @Map() @Field('CodesArray') CodesData: CodesArray;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') ExtraData: number[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
  constructorRef(): CodesArray {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleFontUpdateCommand')
@FormDef('ArticleFontUpdateCommand')
export class ArticleFontUpdateCommand implements IReturn<FontsOutput> {
  @Map() @Field('Font') Font: Font;
  @Map() @Field('number') TvNumber: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') FontId: number;
  @Map() @Field('number') CharNumber: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') Coordinates: number[];
  @Map() @Field('boolean') ResizeGrid: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('boolean') FontDetails: boolean;
  @Map() @Field('number') EnlargeOrShrink: number;
  constructorRef(): FontsOutput {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleMultiFunctionWindowEditActionsCommand')
@FormDef('ArticleMultiFunctionWindowEditActionsCommand')
export class ArticleMultiFunctionWindowEditActionsCommand implements IReturn<GenericInt64> {
  @Map() @Field('MultifunctionWindowArray') MultifunctionWindowsData: MultifunctionWindowArray;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') ExtraData: number[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
  constructorRef(): GenericInt64 {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleMultiFunctionWindowUpdateCommand')
@FormDef('ArticleMultiFunctionWindowUpdateCommand')
export class ArticleMultiFunctionWindowUpdateCommand implements IReturn<MultifunctionWindowArray> {
  @Map() @Field('MultifunctionWindowArray') MultifunctionWindowsData: MultifunctionWindowArray;
  @Map() @Field('number') Id: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') ExtraData: number[];
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('string') GUID: string;
  constructorRef(): MultifunctionWindowArray {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleParameterImageAcquisitionCommand')
@FormDef('ArticleParameterImageAcquisitionCommand')
export class ArticleParameterImageAcquisitionCommand implements IReturn<GenericBoolOutput> {
  @Map()
  @Field('ArticleParameterImageAcquisition[]')
  ArticleParameterImageAcquisitionArray: ArticleParameterImageAcquisition[];
  @Map() @Field('number') ExpositionUpperLimit: number;
  @Map() @Field('number') ExpositionLowerLimit: number;
  @Map() @Field('number') AcqDelayUpperLimit: number;
  @Map() @Field('number') AcqDelayLowerLimit: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleEdit_BlistersWindowsQuery')
@FormDef('EditBlisterWindowsQueryRequest')
export class EditBlisterWindowsQueryRequest implements IReturn<EditBlistersWindow> {
  constructorRef(): EditBlistersWindow {
    return <any>null;
  }
}

@Dto('ArticleEdit_SelectArticleCommand')
@FormDef('SelectArticleCommand')
export class SelectArticleCommand implements IReturn<ArticleListOutput> {
  @Map() @Field('string') FileName: string;
  constructorRef(): ArticleListOutput {
    return <any>null;
  }
}

@Dto('ArticleEdit_SelectLinkedArticleCommand')
@FormDef('SelectLinkedArticleCommand')
export class SelectLinkedArticleCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') FileName: string;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleEdit_ArticleGeneralParametersCommand')
@FormDef('ArticleGeneralParametersCommand')
export class ArticleGeneralParametersCommand implements IReturn<ArticleGeneralParameters> {
  @Map() @Field('string') Code: string;
  @Map() @Field('string') Description: string;
  @Map() @Field('number[]') WorkMode: number[];
  @Map() @Field('number') SerialImportType: number;
  @Map() @Field('number') SerialExportType: number;
  constructorRef(): ArticleGeneralParameters {
    return <any>null;
  }
}

@Dto('ArticleManagement_ShowArticleVersionsQuery')
@FormDef('ShowArticleVersionsQuery')
export class ShowArticleVersionsQuery implements IReturn<GenericCodeTextArray> {
  constructorRef(): GenericCodeTextArray {
    return <any>null;
  }
}

@Dto('ArticleManagement_CommitArticleCommand')
@FormDef('CommitArticleCommand')
export class CommitArticleCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('boolean') CommitArticle: boolean;
  @Map() @Field('string') UserPassword: string;
  @Map() @Field('string[]') UserComment: string[];
  @Map() @Field('string') ArticleVersionCode: string;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleManagement_CommitArticleInfoQuery')
@FormDef('CommitArticleInfoQuery')
export class CommitArticleInfoQuery implements IReturn<ArticleManagementCommitArticleInfoOutput> {
  constructorRef(): ArticleManagementCommitArticleInfoOutput {
    return <any>null;
  }
}

@Dto('ArticleManagement_RestoreArticleVersionCommand')
@FormDef('RestoreArticleVersionCommand')
export class RestoreArticleVersionCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('boolean') CommitArticle: boolean;
  @Map() @Field('string') UserPassword: string;
  @Map() @Field('string[]') UserComment: string[];
  @Map() @Field('string') ArticleVersionCode: string;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleManagement_ShowArticleVersionDetailsQuery')
@FormDef('ShowArticleVersionDetailsQuery')
export class ShowArticleVersionDetailsQuery implements IReturn<GenericStringOutput> {
  @Map() @Field('boolean') CommitArticle: boolean;
  @Map() @Field('string') UserPassword: string;
  @Map() @Field('string[]') UserComment: string[];
  @Map() @Field('string') ArticleVersionCode: string;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('ArticleManagement_ShowArticleVersionsDiffQuery')
@FormDef('ShowArticleVersionsDiffQuery')
export class ShowArticleVersionsDiffQuery implements IReturn<GenericStringOutput> {
  @Map() @Field('string[]') Values: string[];
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('ArticleManagement_ShowDiffArticleQuery')
@FormDef('ShowDiffArticleQuery')
export class ShowDiffArticleQuery implements IReturn<GenericStringOutput> {
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('')
@FormDef('ArticleCISParametersCommand')
export class ArticleCISParametersCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('ArticleCISParameters[]') CISParameters: ArticleCISParameters[];
  @Map() @Field('string[]') LineAdjEnableOptions: string[];
  @Map() @Field('string[]') LineAdjDirectionOptions: string[];
  @Map() @Field('string[]') LedPulseDivisionOptions: string[];
  @Map() @Field('string[]') ImageTriggerModeOptions: string[];
  @Map() @Field('string[]') ImageTriggerBufferOptions: string[];
  @Map() @Field('string[]') LineTriggerModeOptions: string[];
  @Map() @Field('string[]') VantagePointOptions: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleCISParametersQuery')
@FormDef('ArticleCISParametersQuery')
export class ArticleCISParametersQuery implements IReturn<ArticleCISConfiguration> {
  constructorRef(): ArticleCISConfiguration {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleCodesParametersQuery')
@FormDef('ArticleCodesParametersQuery')
export class ArticleCodesParametersQuery implements IReturn<CodesArray> {
  constructorRef(): CodesArray {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleFontModelQuery')
@FormDef('ArticleFontModelQuery')
export class ArticleFontModelQuery implements IReturn<GenericStringOutput> {
  @Map() @Field('Font') Font: Font;
  @Map() @Field('number') TvNumber: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') FontId: number;
  @Map() @Field('number') CharNumber: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') Coordinates: number[];
  @Map() @Field('boolean') ResizeGrid: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('boolean') FontDetails: boolean;
  @Map() @Field('number') EnlargeOrShrink: number;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleFontParametersQuery')
@FormDef('ArticleFontParametersQuery')
export class ArticleFontParametersQuery implements IReturn<FontsOutput> {
  @Map() @Field('Font') Font: Font;
  @Map() @Field('number') TvNumber: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') FontId: number;
  @Map() @Field('number') CharNumber: number;
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number[]') Coordinates: number[];
  @Map() @Field('boolean') ResizeGrid: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('boolean') FontDetails: boolean;
  @Map() @Field('number') EnlargeOrShrink: number;
  constructorRef(): FontsOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleGeneralInformationQuery')
@FormDef('ArticleGeneralInformationRequest')
export class ArticleGeneralInformationRequest implements IReturn<ArticleGeneralInformation> {
  constructorRef(): ArticleGeneralInformation {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleListQuery')
@FormDef('ArticleViewArticleListQuery')
export class ArticleViewArticleListQuery implements IReturn<ArticleListOutput> {
  constructorRef(): ArticleListOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleListSlaveQuery')
@FormDef('ArticleListSlaveQuery')
export class ArticleListSlaveQuery implements IReturn<ArticleListSlaveQueryOutput> {
  @Map() @Field('string') FileName: string;
  constructorRef(): ArticleListSlaveQueryOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleMasterSlaveStructureQuery')
@FormDef('ArticleMasterSlaveStructureQuery')
export class ArticleMasterSlaveStructureQuery implements IReturn<ArticleMasterSlaveStructureOutput> {
  constructorRef(): ArticleMasterSlaveStructureOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleMeasureResultsDefectImageQuery')
@FormDef('MeasureResultDefectImageQuery')
export class MeasureResultDefectImageQuery implements IReturn<GenericStringOutput> {
  @Map() @Field('number') ImageNumber: number;
  @Map() @Field('number') ImageAddress: number;
  @Map() @Field('boolean') DrawingsEnabled: boolean;
  @Map() @Field('number') TvNum: number;
  @Map() @Field('number') ResultType: number;
  @Map() @Field('number') ImgFormat: number;
  @Map() @Field('boolean') MultiFunctionTv: boolean;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleMultiFunctionWindowCoordinateQuery')
@FormDef('ArticleMultiFunctionWindowCoordinateQuery')
export class ArticleMultiFunctionWindowCoordinateQuery implements IReturn<MultifunctionWindowCoordinateArray> {
  constructorRef(): MultifunctionWindowCoordinateArray {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleParameterImageAcquisitionQuery')
@FormDef('ArticleParametersImageAcquisitionRequest')
export class ArticleParametersImageAcquisitionRequest implements IReturn<ArticleParametersImageAcquisition> {
  constructorRef(): ArticleParametersImageAcquisition {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleProgMeasOperationDescriptionQuery')
@FormDef('OperationListRequest')
export class OperationListRequest implements IReturn<OperationDescription> {
  constructorRef(): OperationDescription {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleProgMeasOperationLearnedModelsQuery')
@FormDef('ArticleProgMeasOperationLearnedModelsQuery')
export class ArticleProgMeasOperationLearnedModelsQuery implements IReturn<ProgMeasureOperationModels> {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('ProgMeasure') ProgMeasure: ProgMeasure;
  @Map() @Field('string') GUID: string;
  @Map() @Field('number') ProgMeasureID: number;
  @Map() @Field('number') OperationNum: number;
  @Map() @Field('number') WindowNum: number;
  @Map() @Field('number') TvNum: number;
  @Map() @Field('number[]') Coordinates: number[];
  @Map() @Field('number') EnlargeOrShrink: number;
  constructorRef(): ProgMeasureOperationModels {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleProgMeasurePreviewCachedQuery')
@FormDef('ArticleProgMeasurePreviewCachedQuery')
export class ArticleProgMeasurePreviewCachedQuery implements IReturn<ProgMeasurePreviewOutput> {
  @Map() @Field('number') ProgMeasureId: number;
  @Map() @Field('number') Window: number;
  @Map() @Field('number') NumOperation: number;
  @Map() @Field('boolean') CopyDrawingsOnImage: boolean;
  constructorRef(): ProgMeasurePreviewOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleProgMeasurePreviewQuery')
@FormDef('ArticleProgMeasurePreviewQuery')
export class ArticleProgMeasurePreviewQuery implements IReturn<ProgMeasurePreviewOutput> {
  @Map() @Field('number') ProgMeasureId: number;
  @Map() @Field('number') Window: number;
  @Map() @Field('number') NumOperation: number;
  @Map() @Field('boolean') CopyDrawingsOnImage: boolean;
  constructorRef(): ProgMeasurePreviewOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleProgMeasuresQuery')
@FormDef('ProgMeasureRequest')
export class ProgMeasureRequest implements IReturn<ProgMeasures> {
  constructorRef(): ProgMeasures {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleTolerancesQuery')
@FormDef('TollerancesQueryRequest')
export class TollerancesQueryRequest implements IReturn<TollerancesQueryOutput> {
  constructorRef(): TollerancesQueryOutput {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleValidaParameterQuery')
@FormDef('ValidaParametersQueryRequest')
export class ValidaParametersQueryRequest implements IReturn<ValidaParameters> {
  constructorRef(): ValidaParameters {
    return <any>null;
  }
}

@Dto('ArticleView_ArticleGeneralParametersQuery')
@FormDef('ArticleGeneralParametersQuery')
export class ArticleGeneralParametersQuery implements IReturn<ArticleGeneralParameters> {
  constructorRef(): ArticleGeneralParameters {
    return <any>null;
  }
}

@Dto('ImagesView_ClearBufferCommand')
@FormDef('ClearBufferCommand')
export class ClearBufferCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') Value: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('Batch_AIQuery')
@FormDef('BatchAIQuery')
export class BatchAIQuery implements IReturn<BatchAIQueryOutputList> {
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') MaterialItem: string;
  constructorRef(): BatchAIQueryOutputList {
    return <any>null;
  }
}

@Dto('Batch_AIValidation')
@FormDef('BatchAIValidationQuery')
export class BatchAIValidationQuery implements IReturn<GenericCodeTextArray> {
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') MaterialItem: string;
  @Map() @Field('GenericCodeText[]') AiValues: GenericCodeText[];
  constructorRef(): GenericCodeTextArray {
    return <any>null;
  }
}

@Dto('Batch_BatchConfigurationSelectionList')
@FormDef('BatchConfigurationSelectionListRequest')
export class BatchConfigurationSelectionListRequest implements IReturn<BatchConfigurationSelectionList> {
  constructorRef(): BatchConfigurationSelectionList {
    return <any>null;
  }
}

@Dto('Batch_MaterialItemsQuery')
@FormDef('BatchMaterialItemsQuery')
export class BatchMaterialItemsQuery implements IReturn<BatchMaterialItems> {
  constructorRef(): BatchMaterialItems {
    return <any>null;
  }
}

@Dto('Batch_StartConfigurationWriterDeviceQuery')
@FormDef('BatchConfigurationPrinterQuery')
export class BatchConfigurationPrinterQuery implements IReturn<BatchStartConfigurationPrinter> {
  @Map() @Field('number') Index: number;
  @Map() @Field('string') FileLayoutName: string;
  constructorRef(): BatchStartConfigurationPrinter {
    return <any>null;
  }
}

@Dto('Batch_StartConfigurationQuery')
@FormDef('BatchConfigurationQuery')
export class BatchConfigurationQuery implements IReturn<BatchStartConfigurationArray> {
  @Map() @Field('BatchStartConfiguration[]') BatchStartConfigurationArray: BatchStartConfiguration[];
  @Map() @Field('BatchStartConfigurationLimit') Limits: BatchStartConfigurationLimit;
  @Map() @Field('GenericStringParentChildren[]') VariableTree: GenericStringParentChildren[];
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') BatchConfigurationId: number;
  @Map() @Field('boolean') BatchConfigurationDetails: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('string') Warning: string;
  @Map() @Field('boolean') AcceptMaterialItemsConflict: boolean;
  constructorRef(): BatchStartConfigurationArray {
    return <any>null;
  }
}

@Dto('Batch_StartConfigurationCommand')
@FormDef('BatchConfigurationCommand')
export class BatchConfigurationCommand implements IReturn<BatchStartConfigurationArray> {
  @Map() @Field('BatchStartConfiguration[]') BatchStartConfigurationArray: BatchStartConfiguration[];
  @Map() @Field('BatchStartConfigurationLimit') Limits: BatchStartConfigurationLimit;
  @Map() @Field('GenericStringParentChildren[]') VariableTree: GenericStringParentChildren[];
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') SaveAction: number;
  @Map() @Field('number') BatchConfigurationId: number;
  @Map() @Field('boolean') BatchConfigurationDetails: boolean;
  @Map() @Field('string') GUID: string;
  @Map() @Field('string') Warning: string;
  @Map() @Field('boolean') AcceptMaterialItemsConflict: boolean;
  constructorRef(): BatchStartConfigurationArray {
    return <any>null;
  }
}

@Dto('Batch_StartOptionsQuery')
@FormDef('BatchStartOptionsQuery')
export class BatchStartOptionsQuery implements IReturn<BatchStartOptions> {
  constructorRef(): BatchStartOptions {
    return <any>null;
  }
}

@Dto('Batch_EndOptionsQuery')
@FormDef('BatchEndOptionsQuery')
export class BatchEndOptionsQuery implements IReturn<BatchEndOptions> {
  constructorRef(): BatchEndOptions {
    return <any>null;
  }
}

@Dto('FileSystem_GetAllFilesInDocrootDirectory')
@FormDef('GetFilesInDirectory')
export class GetFilesInDirectory implements IReturn<GenericStringArrayOutput> {
  @Map() @Field('string') Value: string;
  constructorRef(): GenericStringArrayOutput {
    return <any>null;
  }
}

@Dto('FrameGrabber_LayoutDescriptionQuery')
@FormDef('FrameGrabberCameraRequest')
export class FrameGrabberCameraRequest implements IReturn<FrameGrabberCameraArray> {
  constructorRef(): FrameGrabberCameraArray {
    return <any>null;
  }
}

@Dto('ImagesView_LoadImage')
@FormDef('LoadImage')
export class LoadImage implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') ActionType: number;
  @Map() @Field('number') ImageIndex: number;
  @Map() @Field('string') Name: string;
  @Map() @Field('number') TvNum: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('ImagesView_SaveImage')
@FormDef('SaveImage')
export class SaveImage implements IReturn<GenericStringOutput> {
  @Map() @Field('number') Value: number;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('LineOperation_AcquisitionQuery')
@FormDef('LineOperationAcquisitionQuery')
export class LineOperationAcquisitionQuery implements IReturn<GenericBoolOutput> {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('LineOperation_DisplayMeasureQuery')
@FormDef('LineOperationDisplayMeasureQueryRequest')
export class LineOperationDisplayMeasureQueryRequest implements IReturn<GenericBoolOutput> {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('LineOperation_KillVncCommand')
@FormDef('KillVncCommand')
export class KillVncCommand implements IReturn<GenericStringOutput> {
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('LineOperation_LastDefectedImagesQuery')
@FormDef('LastDefectedImagesQuery')
export class LastDefectedImagesQuery implements IReturn<GenericInt64> {
  @Map() @Field('number') Value: number;
  constructorRef(): GenericInt64 {
    return <any>null;
  }
}

@Dto('LineOperation_ResetAlarmDescriptionQuery')
@FormDef('ResetAlarmDescriptionQuery')
export class ResetAlarmDescriptionQuery implements IReturn<LineOperationResetAlarmDescription> {
  constructorRef(): LineOperationResetAlarmDescription {
    return <any>null;
  }
}

@Dto('LineOperation_StartBatchLocalAsyncCommand')
@FormDef('StartLocalBatchAsyncCommand')
export class StartLocalBatchAsyncCommand implements IReturn<GenericNotificationOutput> {
  @Map() @Field('boolean') ForceCloseBatchIfStarted: boolean;
  @Map() @Field('string') MaterialItem: string;
  @Map() @Field('boolean') IgnoreMaterialItem: boolean;
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') DataString: string;
  @Map() @Field('ArticleManagementCommitArticleInput') Commit: ArticleManagementCommitArticleInput;
  constructorRef(): GenericNotificationOutput {
    return <any>null;
  }
}

@Dto('LineOperation_StartBatchLocalCommand')
@FormDef('StartLocalBatchCommand')
export class StartLocalBatchCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('boolean') ForceCloseBatchIfStarted: boolean;
  @Map() @Field('string') MaterialItem: string;
  @Map() @Field('boolean') IgnoreMaterialItem: boolean;
  @Map() @Field('number') BatchConfigurationNumber: number;
  @Map() @Field('string') DataString: string;
  @Map() @Field('ArticleManagementCommitArticleInput') Commit: ArticleManagementCommitArticleInput;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('LineOperation_UnmarkDefectedImageCommand')
@FormDef('UnmarkDefectedImageCommand')
export class UnmarkDefectedImageCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') id: number;
  @Map() @Field('number') Tv: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('Printers_PrintableCodesQuery')
@FormDef('PrintableCodesQuery')
export class PrintableCodesQuery implements IReturn<PrintersCompleteConfTT> {
  constructorRef(): PrintersCompleteConfTT {
    return <any>null;
  }
}

@Dto('RuntimeButtons_RuntimeButtonInformationArrayQuery')
@FormDef('RuntimeButtonQuery')
export class RuntimeButtonQuery implements IReturn<RunTimeButtonInformationArray> {
  constructorRef(): RunTimeButtonInformationArray {
    return <any>null;
  }
}

@Dto('SystemStatus_LogFileTextQuery')
@FormDef('LogFileTextQuery')
export class LogFileTextQuery implements IReturn<GenericStringOutput> {
  @Map() @Field('number') StartDate: number;
  @Map() @Field('number') EndDate: number;
  @Map() @Field('number') FilterType: number;
  @Map() @Field('string') User: string;
  constructorRef(): GenericStringOutput {
    return <any>null;
  }
}

@Dto('SystemStatus_SystemInformationQuery')
@FormDef('SystemInformationQuery')
export class SystemInformationQuery implements IReturn<SystemInformation> {
  constructorRef(): SystemInformation {
    return <any>null;
  }
}

@Dto('TrackTrace_ChildrenObjectsQuery')
@FormDef('ReworkChildrenObjectQuery')
export class ReworkChildrenObjectQuery implements IReturn<TrackTraceReworkShowContentOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): TrackTraceReworkShowContentOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_ExtractionCommand')
@FormDef('ReworkExtractionCommand')
export class ReworkExtractionCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_InfoQuery')
@FormDef('ReworkInfoQuery')
export class ReworkInfoQuery implements IReturn<TrackTraceInfoOutputArray> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  constructorRef(): TrackTraceInfoOutputArray {
    return <any>null;
  }
}

@Dto('TrackTrace_InfoReworkOptionsQuery')
@FormDef('ReworkInfoReworkOptionsQuery')
export class ReworkInfoReworkOptionsQuery implements IReturn<TrackTraceInfoReworkOptionsOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  constructorRef(): TrackTraceInfoReworkOptionsOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_InsertionCommand')
@FormDef('ReworkInsertionCommand')
export class ReworkInsertionCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_ParentPackQuery')
@FormDef('ReworkParentPackQuery')
export class ReworkParentPackQuery implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_PrintCommand')
@FormDef('ReworkPrintCommand')
export class ReworkPrintCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_RecoverFifoCommand')
@FormDef('ReworkRecoverFifoCommand')
export class ReworkRecoverFifoCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_RecoverObjectCommand')
@FormDef('ReworkRecoverObjectCommand')
export class ReworkRecoverObjectCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_RejectFifoCommand')
@FormDef('ReworkRejectFifoCommand')
export class ReworkRejectFifoCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_RejectObject')
@FormDef('ReworkRejectObjectCommand')
export class ReworkRejectObjectCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_ReplaceCommand')
@FormDef('ReworkReplaceCommand')
export class ReworkReplaceCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('TrackTrace_UnpackCommand')
@FormDef('ReworkUnpackCommand')
export class ReworkUnpackCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('string') Serial: string;
  @Map() @Field('number') NumId: number;
  @Map() @Field('number') RejectReasonNum: number;
  @Map() @Field('string') RejectReasonString: string;
  @Map() @Field('string[]') GenericStringData: string[];
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('Visualization_CleanScreenCommand')
@FormDef('CleanScreenCommand')
export class CleanScreenCommand implements IReturn<GenericBoolOutput> {
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('Visualization_RotateImageCommand')
@FormDef('RotateImageCommand')
export class RotateImageCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') Value: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}

@Dto('Visualization_ReflectImageCommand')
@FormDef('ReflectImageCommand')
export class ReflectImageCommand implements IReturn<GenericBoolOutput> {
  @Map() @Field('number') Value: number;
  constructorRef(): GenericBoolOutput {
    return <any>null;
  }
}
