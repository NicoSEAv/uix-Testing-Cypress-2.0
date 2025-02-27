export const DTO_METADATA: symbol = Symbol('dtoMetadata');

export interface DtoMetadata {
  name: string;
  mappings: {
    [propName: string]: string;
  };
}

export function Dto(alias?: string) {
  return function (target: Function) {
    getOrInitDtoMetadata(target).name = alias || target.name;
  };
}

export function Map(type?: string) {
  return function (target: Object, propertyKey: string /*| symbol*/) {
    if (!target || !target.constructor) {
      throw new Error(`Cannot map a property if target is undefined.`);
    }
    const dtoMeta = getOrInitDtoMetadata(target.constructor);
    dtoMeta.mappings[propertyKey] = type || 'any';
  };
}

function getOrInitDtoMetadata(ctor: Function): DtoMetadata {
  if (!ctor.prototype[DTO_METADATA]) {
    ctor.prototype[DTO_METADATA] = { name: null, mappings: {} };
  }
  return ctor.prototype[DTO_METADATA];
}

export function getDtoMetadata(ctor: Function): DtoMetadata {
  if (!ctor.prototype[DTO_METADATA]) {
    return null;
  }
  return ctor.prototype[DTO_METADATA];
}

export interface TopicMetadata {
  name: string;
  topicClass: Function;
}
export interface IndexedTopicMetadata extends TopicMetadata {
  type: 'indexed';
}

const TOPIC_SYMBOL = Symbol.for('TOPIC_SYMBOL');

export function ServerTopic(name?: string) {
  return function (target: Function) {
    target[TOPIC_SYMBOL] = { name: name, topicClass: target };
  };
}

export function IndexedServerTopic(name?: string) {
  return function (target: new () => any) {
    target[TOPIC_SYMBOL] = { name: name, topicClass: target, type: 'indexed' };
  };
}

export function resolveTopicMetadata(topicClass: Function): TopicMetadata {
  // no inheritance is handled here. it shouldn't be needed, so I'm not bothering now
  return topicClass[TOPIC_SYMBOL] || null;
}

export function isIndexedTopic(topic: TopicMetadata): topic is IndexedTopicMetadata {
  return topic?.['type'] === 'indexed';
}
