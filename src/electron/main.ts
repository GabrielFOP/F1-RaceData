import {app, BrowserWindow, ipcMain} from 'electron'; 
import path from 'path'; 
import { isDev } from './util.js';
import { getSessionData, loadMeetingByYear } from './sessionCaller.js';
import { getDriversData } from './driversCaller.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

function getPreloadPath() {
  return path.join(__dirname, 'preload.cjs');
}

app.on('ready', () =>{
    const mainWindow = new BrowserWindow({
        webPreferences: { 
            preload: getPreloadPath(), 
        }
    });
    if(isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    }else{
        mainWindow.loadFile(path.join(__dirname, '../dist-react/index.html'));
    }


    ipcMain.handle('getSessionData', async (_event, meeting_key: number, year: number, session_type: string) => {
        return getSessionData(meeting_key, year, session_type); 
    })

    ipcMain.handle('loadMeetingByYear', async (_event, year: number) => {
        return loadMeetingByYear(year); 
    })

    ipcMain.handle('loadDriversByMeetingAndSession', async (_event, meeting_key: number, session_key: number) => {
        return getDriversData(meeting_key, session_key);
    })
}); 