import { App, BrowserWindow } from 'electron'
import { MinecraftOptions } from './MinecraftOptions'

export type WindowAction = 'minimize' | 'close' | 'maximize' | 'hide' | 'show'

export interface IpcChannel {
  windowAction: [action: WindowAction]
  dataStorage_read: [name: string, path?: string]
  dataStorage_write: [name: string, value: any]
  error: [error: Error]
  getMaxRAM: []
  downloadMinecraft: [options: MinecraftOptions]
}

export type IPCModule = (app: App, mainWindow: BrowserWindow) => void
