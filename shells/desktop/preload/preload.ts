import { contextBridge } from 'electron';
import { TypedIpcRenderer } from '../common/ipc';

declare global {
  interface Window {
    api: TypedIpcRenderer;
  }
}

// Only grab prefs and save from across the IPC bridge at the start
const typedIpcRenderer = new TypedIpcRenderer();

contextBridge.exposeInMainWorld('api', typedIpcRenderer);
