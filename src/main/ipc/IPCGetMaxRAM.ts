import { IPCModule } from '../../app/ipc'
import { ipcMain } from 'electron'
import * as os from 'os'

export const IPCGetMaxRAM: IPCModule = () => {
  ipcMain.handle('getMaxRAM', () => Math.floor(os.totalmem() / 1024 / 1024))
}
