const electron = require('electron'); 

electron.contextBridge.exposeInMainWorld("electron",{
    subscribeStatistics: (callback: (statitics: any) => void) => callback({}),
    getStaticData: () => console.log('static'),
});