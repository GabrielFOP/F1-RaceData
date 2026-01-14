import {app, BrowserWindow, ipcMain} from 'electron'; 
import path from 'path'; 
import { isDev } from './util.js';
import { getPreloadPath } from './pathResolver.js';
import { getSessionData, loadMeetingByYear } from './sessionCaller.js';

// @ts-ignore
type test = string; 

app.on('ready', () =>{
    const mainWindow = new BrowserWindow({
        webPreferences: { 
            preload: getPreloadPath(), 
        }
    });
    if(isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }


    ipcMain.handle('getSessionData', async (event, meeting_key: number, year: number, session_type: string) => {
        return getSessionData(meeting_key, year, session_type); 
    })

    ipcMain.handle('loadMeetingByYear', async (event, year: number) => {
        return loadMeetingByYear(year); 
    })
}); 