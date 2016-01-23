const Electron = require('electron');
const BrowserWindow = Electron.BrowserWindow;
const app = Electron.app;
const ipc = Electron.ipcMain;

Electron.app.on('ready', function() {
    var win = new BrowserWindow({
        width: 420,
        height: 200,
        frame: false,
        titleBarStyle: 'hidden',
        transparent: true,
        alwaysOnTop: true,
        skipTaskbar: true,
        autoHideMenuBar: true,
        hasShadow: false
    });

    win.loadURL('file://' + __dirname + '/index.html');
});

Electron.app.on('window-all-closed', function() {
    return;
});
