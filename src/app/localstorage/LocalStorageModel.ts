import 'reflect-metadata'

export abstract class LocalStorageModel {
  /**
   * Сериализовать объект
   */
  serialize(): string {
    return JSON.stringify(this)
  }

  /**
   * Десериализовать объект
   * @param serializedString
   */
  deserialize<T>(serializedString: string): T {
    const parsed = JSON.parse(serializedString)
    for (const key of Reflect.getMetadataKeys(this.constructor.prototype)) {
      Reflect.defineMetadata(
        key,
        Reflect.getMetadata(key, this.constructor.prototype),
        parsed
      )
    }
    return parsed as T
  }
}

export interface ConstructableLSModel<T extends LocalStorageModel> {
  new (): T
}

export type Prototyped = { prototype: object }
