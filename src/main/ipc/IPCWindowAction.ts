import { ipcMain } from 'electron'
import { IPCModule } from '../../app/ipc'

export const IPCWindowAction: IPCModule = (app, mainWindow) => {
  ipcMain.on('windowAction', (_, action) => {
    switch (action) {
      case 'close':
        mainWindow?.close()
        break
      case 'minimize':
        mainWindow?.minimize()
        break
      case 'maximize':
        mainWindow?.isMaximized() ? mainWindow.unmaximize() : mainWindow?.maximize()
        break
      case 'hide':
        mainWindow?.hide()
        break
      case 'show':
        mainWindow?.show()
    }
  })
}
