import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    windowAction: (...args) => ipcRenderer.send('windowAction', ...args),
    dataStorageRead: (...args) =>
      ipcRenderer.invoke('dataStorage_read', ...args),
    dataStorageWrite: (...args) =>
      ipcRenderer.invoke('dataStorage_write', ...args),
    error: callback => ipcRenderer.on('error', (_, error) => callback(error)),
    getMaxRAM: () => ipcRenderer.invoke('getMaxRAM'),
    downloadMinecraft: options =>
      ipcRenderer.invoke('downloadMinecraft', options),
  },
})
