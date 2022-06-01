const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        title: "Electron App",
        width: 1024,
        height: 768
    })
}

app.whenReady().then(() => {

    createWindow()

    app.on('activate', () => {
        // For MacOS
        if (BrowserWindow.getAllWindows().length == 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

const isMac = process.platform === 'darwin'
const template = [
    {
        label: 'File',
        submenu: [
            isMac ? {role: 'close'} : {role: 'quit'}
        ]
    }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)