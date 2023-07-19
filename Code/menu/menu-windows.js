const remote = require('@electron/remote');
const { Menu, MenuItem, BrowserWindow, shell, process } = remote
const { ipcRenderer } = require("electron")


const fileMenu = document.getElementById("file");
const editMenu = document.getElementById("edit");
const viewMenu = document.getElementById("view");
const buildMenu = document.getElementById("build");
const runMenu = document.getElementById("run");
const toolsMenu = document.getElementById("tools");
const selectionMenu = document.getElementById("selection");
const accountMenu = document.getElementById("account");
const windowMenu = document.getElementById("window");
const helpMenu = document.getElementById("help");
const titlebar = document.getElementById("titlebar");

fileMenu.addEventListener("click", (e) => {
    const menu = new Menu()

    menu.append(new MenuItem ({
        label: "New",
        submenu: [
            {
                label: "New Project",
                accelerator: "CmdOrCtrl+Alt+N"
            },
            {
                label: "Window",
                accelerator: "CmdOrCtrl+W",
                click () {
                    ipcRenderer.send("MainWindow")
                }
            },
            {
                label: "File",
                submenu: [
                    {
                        label: "Resource File (.json)"
                    },
                    {
                        label: "UI File (.html)"
                    },
                    {
                        label: "Code File (.js)"
                    },
                    {
                        label: "Custom Stylesheet File (.css)"
                    },
                    {
                        label: "Scratch File",
                        accelerator: "CmdOrCtrl+Alt+Shift+Insert"
                    }
                ]
            },
            {
                label: "Directory"
            },
        ]
    }))

    menu.append(new MenuItem ({
        type: "separator"
    }))

    menu.append(new MenuItem ({
        label: "Open ..",
        accelerator: "CmdOrCtrl+O"
    }))

    menu.append(new MenuItem ({
        label: "Open Recent",
        role: "recentDocuments"
    }))

    menu.append(new MenuItem ({
        label: "Open Project",
        accelerator: "CmdOrCtrl+Alt+O"
    }))

    menu.append(new MenuItem ({
        type: "separator"
    }))

    menu.append(new MenuItem ({
        label: "Close Project",
        "accelerator": "CmdOrCtrl+F4"
    }))

    menu.append(new MenuItem ({
        label: "Close Window",
        "accelerator": "Alt+F4",
        click () {
            BrowserWindow.getFocusedWindow().close()
        }
    }))

    menu.popup();
})

editMenu.addEventListener("click", (e) => {
    const menu = new Menu()

    const { x, y } = editMenu.getBoundingClientRect();

    menu.append(new MenuItem({
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        click () {
            BrowserWindow.getFocusedWindow().webContents.undo()
        }
    }))

    menu.append(new MenuItem({
        label: "Redo",
        accelerator: "CmdOrCtrl+Y",
        click () {
            BrowserWindow.getFocusedWindow().webContents.redo()
        }
    }))

    menu.append(new MenuItem({
        type: "separator"
    }))

    menu.append(new MenuItem({
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        click () {
            BrowserWindow.getFocusedWindow().webContents.cut()
        }
    }))

    menu.append(new MenuItem({
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        click () {
            BrowserWindow.getFocusedWindow().webContents.copy()
        }
    }))

    menu.append(new MenuItem({
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        click () {
            BrowserWindow.getFocusedWindow().webContents.paste()
        }
    }))

    menu.append(new MenuItem({
        type: "separator"
    }))

    menu.append(new MenuItem({
        label: "Find",
        accelerator: "CmdOrCtrl+F",
        click () {
            
        }
    }))

    menu.append(new MenuItem({
        label: "Replace",
        accelerator: "CmdOrCtrl+H",
        click () {
            
        }
    }))

    menu.append(new MenuItem({
        label: "Find in Files",
        accelerator: "CmdOrCtrl+Shift+F",
        click () {
            
        }
    }))

    menu.append(new MenuItem({
        label: "Replace in Files",
        accelerator: "CmdOrCtrl+Shift+H",
        click () {
            
        }
    }))

    menu.append(new MenuItem({
        type: "separator"
    }))

    menu.append(new MenuItem({
        label: "Toggle Line Comment",
        accelerator: "CmdOrCtrl+/",
        click () {
            
        }
    }))

    menu.append(new MenuItem({
        label: "Toggle Block Comment",
        accelerator: "Shift+Alt+A",
        click () {
            
        }
    }))

    menu.popup()
})

viewMenu.addEventListener("click", () => {
    const menu = new Menu()
    

    menu.append(new MenuItem({
        label: "Fullscreen Mode",
        accelerator: "F11",
        type: "checkbox",
        click: () => {
            if(BrowserWindow.getFocusedWindow().fullScreen == true) {
                BrowserWindow.getFocusedWindow().fullScreen = false
            } else {
                BrowserWindow.getFocusedWindow().fullScreen = true
            }
        }
    }))

    menu.append(new MenuItem({
        label: "Window Appearance",
        submenu: [
            {
                label: "Titlebar",
                submenu: [
                    {
                        label: "Menubar",
                        type: "checkbox",
                        checked: true
                    },
                    {
                        label: "Quick Actions",
                        type: "checkbox",
                        checked: true
                    }
                ]
            }
        ]
    }))

    menu.popup()
})

buildMenu.addEventListener("click", () => {
    const menu = new Menu()
    
    menu.append(new MenuItem({
        label: "Rebuild Project"
    }))

    menu.append(new MenuItem({
        type: "separator"
    }))

    menu.append(new MenuItem({
        label: "Package as (.aosinstall) file"
    }))

    menu.append(new MenuItem({
        label: "Package as (.apk) file",
        enabled: false
    }))

    menu.append(new MenuItem({
        label: "Edit Build Architecture"
    }))

    menu.popup()
})

Menu.adrundEventListener("click", () => {
    const menu = new Menu()

    menu.append(new MenuItem({
        label: "Run",
        accelerator: "CmdOrCtrl+R"
    }))

    menu.append(new MenuItem({
        label: "Emulator Run Options"
    }))

    menu.popup()
})

toolsMenu.addEventListener("click", () => {

})

helpMenu.addEventListener("click", () => {
    const menu = new Menu()

    menu.append(new MenuItem({
        label: "Start Page"
    }))

    menu.append(new MenuItem({
        label: "Documentation"
    }))

    menu.append(new MenuItem({
        label: "Playground"
    }))

    menu.append(new MenuItem({
        label: "Show Release Notes"
    }))

    menu.append(new MenuItem({
        label: "Open GitHub Page",
        click () {
            shell.openExternal("https://github.com/AOSCorporations/AOS-Create")
        }
    }))

    menu.popup()
})

if(process.platform == 'win32') {
    fileMenu.style.display = 'block';
    editMenu.style.display = 'block';
    viewMenu.style.display = 'block';
    buildMenu.style.display = 'block';
    runMenu.style.display = 'block';
    toolsMenu.style.display = 'block';
    selectionMenu.style.display = 'block';
    accountMenu.style.display = 'block';
    windowMenu.style.display = 'block';
    helpMenu.style.display = 'block';
}

if(process.platform == 'darwin') {
    fileMenu.style.display = 'none';
    editMenu.style.display = 'none';
    viewMenu.style.display = 'none';
    buildMenu.style.display = 'none';
    runMenu.style.display = 'none';
    toolsMenu.style.display = 'none';
    selectionMenu.style.display = 'none';
    accountMenu.style.display = 'none';
    windowMenu.style.display = 'none';
    helpMenu.style.display = 'none';
}