import path from "path"
import fs from 'fs'
import { App } from 'electron'

export const APPDATA_NAME = 'NodiumLauncher'
export const GAME_DIR = '.nodium'

export const ElectronAppData = (app: App) => {
  const dirPath: string = path.join(app.getPath('appData'), APPDATA_NAME)
  const gameDir: string = path.join(app.getPath('appData'), GAME_DIR)

  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath)
  if (!fs.existsSync(gameDir)) fs.mkdirSync(gameDir, { recursive: true })
}

export const getAppData = (app: App): string => {
  return path.join(app.getPath('appData'), APPDATA_NAME)
}

export const getGameDir = (app: App): string => {
  return path.join(app.getPath('appData'), GAME_DIR)
}
