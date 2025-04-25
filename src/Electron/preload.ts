import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendNumber: (number: number) => ipcRenderer.send('send-number', number),
  onReceiveDoubled: (callback: (event: any, doubled: number) => void) => ipcRenderer.on('receive-doubled', callback)
});