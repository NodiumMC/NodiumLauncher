import { App, BrowserWindow } from 'electron'

export type WindowAction = 'minimize' | 'close' | 'maximize' | 'hide' | 'show'

export interface IpcChannel {
  windowAction: [action: WindowAction]
  appClose: []
}

export type IPCModule = (app: App, mainWindow: BrowserWindow) => void
