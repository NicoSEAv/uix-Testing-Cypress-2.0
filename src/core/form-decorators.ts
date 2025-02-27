export interface FieldDecoratorMetadata {
  type: string;
}

/** The full set of metadata attached to a Form definition, used to generate FormManager and FormArray instances. */
export interface FormDecoratorMetadata {
  /** The name of the type, as used in FormDef and Field decorators. */
  name: string;
  fields: { [propName: string]: FieldDecoratorMetadata };
  ctor: Function;
}

const FORM_METADATA_KEY: symbol = Symbol.for('__FORM_METADATA__');

/** Resolves name and fields metadata for a type decorated with with the FormDef decorator. */
export const resolveMetadata = <T>(ctor: Function): FormDecoratorMetadata => {
  if (ctor.prototype[FORM_METADATA_KEY]) return ctor.prototype[FORM_METADATA_KEY];
  return (ctor.prototype[FORM_METADATA_KEY] = { name: null, fields: {}, ctor });
};

/**
 * FormDef is used to decorate classes that could be used as a FormManager definition
 * type; i.e. a type for which a FormManager<T> can be defined.
 *
 * ```
 * @FormDef('ClassName')
 * export class ClassName {
 *   @Field('string') property: string;
 * }
 * ```
 *
 */
export function FormDef(typeName: string): (Function) => void {
  return (ctor: Function) => {
    resolveMetadata(ctor).name = typeName;
  };
}

/**
 * Field is used to decorate properties that are included into a FormManager.
 * The argument passed into the decorator represents the type of the property.
 * When it matches a type name registered with FormDef, the property generates a
 * subform of the appropriate type.
 *
 * ```
 * @FormDef('ClassName')
 * export class ClassName {
 *   @Field('string') property: string;
 * }
 * ```
 */
export function Field(type: string = 'any') {
  return (ctor: Object, property: string) => {
    resolveMetadata(ctor.constructor).fields[property] = { type: type };
  };
}
