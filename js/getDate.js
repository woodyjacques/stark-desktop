const axios = require("axios");
const { apiUrl } = require("./api");

async function requestAllCategorias(mainWindow) {
  try {
    const response = await axios.get(`${apiUrl}/Categories`);
    const data = response.data;
    mainWindow.webContents.send("Nueva-Categoria", JSON.stringify(data));
  } catch (error) {
    alert("Hubo un error al obtener las categorias");
  }
}

async function requestAllClientes(mainWindow) {
  try {
    const response = await axios.get(`${apiUrl}/Auth/Clients`);
    const data = response.data;
    mainWindow.webContents.send("Nuevos-Clientes", JSON.stringify(data));
  } catch (error) {
    alert("Hubo un error al obtener los cliente");
  }
}

module.exports = {
  requestAllCategorias,
  requestAllClientes,
};
