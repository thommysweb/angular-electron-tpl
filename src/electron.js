const etn = require('electron');

let mainWindow;

etn.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        etn.app.quit();
    }
});
etn.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
etn.app.on('ready', createWindow);

function createWindow() {
    mainWindow = new etn.BrowserWindow({
        width: 900,
        height: 600,
        title: "Angular + Electron",
        icon: './assets/icons/icon.png',
        show: false,
        darkTheme: true,
    });
    console.log(process.argv);
    if (process.argv.includes('-live')) {
        // Live Server, ng serve must run.
        mainWindow.loadURL('http://127.0.0.1:4200');
    } else {
        mainWindow.loadFile('./view/index.html');
    }

    // mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('did-finish-load', () => mainWindow.maximize());
    mainWindow.on('closed', () => win = null);
}