import 'reflect-metadata'
import { _LocalStorageModelName } from './LocalStorage.decorator'

export const getLSModelName = target => {
  const name = Reflect.getMetadata(
    _LocalStorageModelName,
    target?.prototype ? target?.prototype : target
  )
  if (!name) throw new Error('Metadata of LSModel is not defined')
  return name
}
