export const _LocalStorageModelName = 'lsModelName'
import 'reflect-metadata'

export const LSModel = (name: string) => target => {
  Reflect.defineMetadata(_LocalStorageModelName, name, target.prototype)
}
