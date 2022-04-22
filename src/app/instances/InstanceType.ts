import { Version } from '../Version'
import { MinecraftVersion } from 'ndml-core/browser'

export interface InstanceType {
  id: string
  info: {
    name: string
    extra?: string
  }
  version?: {
    latest: Version
    current: Version
  }
  mcv: MinecraftVersion
  local: boolean
  favorite: boolean
  settings: {
    alloc: number
  }
}
