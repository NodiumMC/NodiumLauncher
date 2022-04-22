import { MinecraftVersion } from 'ndml-core/browser'

export type MinecraftOptions = {
  java?: string
  gameDir?: string
  version: MinecraftVersion,
  iname: string
  alloc?: number,
  args?: {
    java?: string[]
    jar?: string[]
  },
  auth: {
    nid?: string
    username: string
    accessToken?: string
  }
  window?: {
    fullscreen?: boolean
    width?: number
    height?: number
  }
}
