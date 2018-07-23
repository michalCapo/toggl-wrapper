const { app, BrowserWindow, Menu, Tray, globalShortcut } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let tray

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ minWidth: 800, height: 600, icon: __dirname + '/toggl_64.png' })
  tray = new Tray(__dirname + '/toggl_64.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Exit', type: 'normal', click: () => { win.destroy() } },
  ])
  tray.setContextMenu(contextMenu)
  // tray.setToolTip('This is my application.')

  tray.on('click', () => { win.isVisible() ? win.hide() : win.show() })

  // and load the index.html of the app.
  win.loadFile('index.html')

  globalShortcut.register('Super+R', () => {
    win.isVisible() ? win.hide() : win.show()
  })

  // Open the DevTools.
  // win.webContents.openDevTools()

  win.on('close', (event) => {
    event.preventDefault();
    win.hide();
  })

  // Emitted when the window is closed.
  win.on('closed', (event) => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.