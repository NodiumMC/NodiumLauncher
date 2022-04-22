import { IPCModule } from '../../app/ipc'
import { getGameDir } from '../ElectronAppData'
import { MCIPath, MinecraftInstance } from 'ndml-core'
import { ipcMain } from 'electron'

export const IPCMinecraftLauncher: IPCModule = (app, mainWindow) => {
  const gameDir = getGameDir(app)
  ipcMain.handle('downloadMinecraft', async (_, options) => {
    const instance = new MinecraftInstance({
      path: new MCIPath(options.gameDir ?? gameDir, options.iname),
      version: options.version,
      javaPath: options.java,
    })
    instance.on('')
    await instance.install()

  })
}
