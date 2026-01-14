const electron = require('electron'); 

electron.contextBridge.exposeInMainWorld('electron',{
    getSessionData: (meeting_key: number, year: number, session_type: string) => electron.ipcRenderer.invoke('getSessionData', meeting_key, year, session_type),
    loadMeetingByYear: (year: number) => electron.ipcRenderer.invoke('loadMeetingByYear', year)
} satisfies Window['electron']);