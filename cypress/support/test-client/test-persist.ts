import { LZString } from '@sv/yudoo/core';

class PersistService {
  serialize(obj: any): string {
    return JSON.stringify(obj, (_, value) => {
      if (value == null) return value;
      if (value instanceof Map) return { $type: 'Map', value: [...value] };
      if (value instanceof Set) return { $type: 'Set', value: [...value] };
      return value;
    });
  }

  deserialize(json: string): any {
    if (typeof json !== 'string') return undefined;
    return JSON.parse(json, (_, value) => {
      if (value == null) return value;
      if (value['$type'] === 'Set') return new Set(value['value']);
      if (value['$type'] === 'Map') return new Map(value['value']);
      return value;
    });
  }

  readFromSessionStorage(storageKey: string): any {
    try {
      const compressed = window.sessionStorage.getItem(storageKey);
      const json = LZString.decompressFromUTF16(compressed);
      return this.deserialize(json);
    } catch {
      return undefined;
    }
  }

  writeToSessionStorage(storageKey: string, value: any): void {
    if (typeof value === 'undefined') {
      window.sessionStorage.removeItem(storageKey);
    } else {
      const json = this.serialize(value);
      const compressed = LZString.compressToUTF16(json);
      window.sessionStorage.setItem(storageKey, compressed);
      // window.sessionStorage.setItem(storageKey, 'compressed');
    }
  }
}

export const Persist = new PersistService();
