import { contextBridge, ipcRenderer } from 'electron';
contextBridge.exposeInMainWorld('electronAPI', {
    sendNumber: (number) => ipcRenderer.send('send-number', number),
    onReceiveDoubled: (callback) => ipcRenderer.on('receive-doubled', callback)
});
