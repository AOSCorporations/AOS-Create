const { app, BrowserWindow, ipcMain } = require('electron')

const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

const MainWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 800,
    titleBarStyle: "hidden",
    titleBarOverlay: {
        color: "#FFFFFF",
        symbolColor: "#000000",
        height: 40
    },
    minHeight: 500,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  remoteMain.enable(win.webContents)

  win.loadFile('window.html')
}

app.whenReady().then(() => {
  MainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      MainWindow()
    }
  })
})

ipcMain.on('MainWindow', () => {
  MainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})