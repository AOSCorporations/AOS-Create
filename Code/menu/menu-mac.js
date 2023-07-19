const remote = require('@electron/remote');
const { Menu, MenuItem, BrowserWindow, shell, process, app } = remote
const { ipcRenderer } = require("electron")

const menu = new Menu()

menu.append(new MenuItem({
    label: "Create",
    submenu: [
        {
            label: "About Create"
        },
        {
            label: "Check for Updates"
        },
        {
            label: "Settings",
            accelerator: "CmdOrCtrl+,"
        },
        {
            type: "separator"
        },
        {
            label: "Hide Create",
            role: "hide"
        },
        {
            role: "hideOthers"
        },
        {
            label: "Show All"
        },
        {
            label: "Quit Create",
            role: "quit"
        }
    ]
}))

Menu.setApplicationMenu(menu)