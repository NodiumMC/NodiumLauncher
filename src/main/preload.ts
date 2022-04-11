import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    windowAction: (action) => ipcRenderer.send('windowAction', action)
  }
})
