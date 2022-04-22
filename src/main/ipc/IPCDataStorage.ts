import { IPCModule } from '../../app/ipc'
import { ipcMain } from 'electron'
import * as fsx from 'fs/promises'
import * as fs from 'fs'
import path from 'path'
import { getGameDir } from '../ElectronAppData'

export const IPCDataStorage: IPCModule = (app, mainWindow) => {
  ipcMain.handle('dataStorage_read', async (_, name) => {
    try {
      const filepath = path.join(getGameDir(app), `${name}.ndml`)
      if (fs.existsSync(filepath)) {
        return await fsx.readFile(filepath).then(r => r.toString())
      } else {
        return null
      }
    } catch (e: any) {
      mainWindow.webContents.send('error', e)
      return null
    }
  })

  ipcMain.handle('dataStorage_write', async (_, name, value) => {
    try {
      await fsx.writeFile(path.join(getGameDir(app), `${name}.ndml`), value)
    } catch (e) {
      mainWindow.webContents.send('error', e)
    }
  })
}
