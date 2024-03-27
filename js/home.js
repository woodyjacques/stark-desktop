const { ipcMain, BrowserWindow } = require("electron");
const path = require("path");

const { categoriaWindow, closeModalCat } = require("./cateWindow");
const {requestAllCategorias, requestAllClientes} = require("./getDate");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      cache: false,
    },
    icon: path.join(__dirname, "../src/assets/Logo.png"),
  });
  // mainWindow.setMenu(null);
  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  mainWindow.on("close", () => {closeModalCat();});

}

// para categoria

ipcMain.on("show-categoria-cerrado", async () => {
  closeModalCat();
  await requestAllCategorias(mainWindow);
});

ipcMain.on("categoria-eliminado", async () => {
  await requestAllCategorias(mainWindow);
});

ipcMain.on("request-all-categories", async (event, args) => {
  await requestAllCategorias(mainWindow);
});

// para los clientes
ipcMain.on("request-all-clients", async (event, args) => {
  await requestAllClientes(mainWindow);
});

module.exports = { createWindow };
