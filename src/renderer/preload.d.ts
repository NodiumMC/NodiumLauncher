import { IpcChannel, WindowAction } from 'app/ipc'
import { IpcMainInvokeEvent, IpcMainEvent, IpcRendererEvent } from 'electron'

export interface IElectronAPI {
  ipcRenderer: {
    windowAction(action: WindowAction): void
  }
}

declare global {
  interface Window {
    electron: IElectronAPI
  }
}


declare module 'electron' {
  namespace Electron {

    interface ContextBridge {
      exposeInMainWorld(apiKey: string, api: IElectronAPI): void;
    }

    interface IpcMain {
      handle<K extends keyof IpcChannel>(channel: K, listener: (event: IpcMainInvokeEvent, ...args: IpcChannel[K]) => (Promise<void>) | (any)): void

      handleOnce<K extends keyof IpcChannel>(channel: K, listener: (event: IpcMainInvokeEvent, ...args: IpcChannel[K]) => (Promise<void>) | (any)): void

      on<K extends keyof IpcChannel>(channel: K, listener: (event: IpcMainEvent, ...args: IpcChannel[K]) => void): this

      once<K extends keyof IpcChannel>(channel: K, listener: (event: IpcMainEvent, ...args: IpcChannel[K]) => void): this

      removeAllListeners<K extends keyof IpcChannel>(channel?: K): this;

      removeHandler<K extends keyof IpcChannel>(channel: K): void;

      removeListener<K extends keyof IpcChannel>(channel: K, listener: (...args: IpcChannel[K]) => void): this;
    }

    interface IpcRenderer {
      invoke<K extends keyof IpcChannel>(channel: K, ...args: IpcChannel[K]): Promise<any>;

      on<K extends keyof IpcChannel>(channel: K, listener: (event: IpcRendererEvent, ...args: IpcChannel[K]) => void): this;

      once<K extends keyof IpcChannel>(channel: K, listener: (event: IpcRendererEvent, ...args: IpcChannel[K]) => void): this;

      postMessage<K extends keyof IpcChannel>(channel: K, message: any, transfer?: MessagePort[]): void;

      removeAllListeners<K extends keyof IpcChannel>(channel: K): this;

      removeListener<K extends keyof IpcChannel>(channel: K, listener: (...args: IpcChannel[K]) => void): this;

      send<K extends keyof IpcChannel>(channel: K, ...args: IpcChannel[K]): void;

      sendSync<K extends keyof IpcChannel>(channel: K, ...args: IpcChannel[K]): any;

      sendTo<K extends keyof IpcChannel>(webContentsId: number, channel: K, ...args: IpcChannel[K]): void;

      sendToHost<K extends keyof IpcChannel>(channel: K, ...args: IpcChannel[K]): void;
    }

  }
}
