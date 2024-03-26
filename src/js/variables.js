const axios = require("axios");
const apiUrl = process.env.APIURL;
const { ipcRenderer } = require("electron");
const { ClientRequest } = require("http");

// Para categorias
let $categorias = null;
let updateStatusCategorias = false;
let cateId = null;
const $formCate = document.getElementById("form-cate");
const $nameCate = document.getElementById("name-cate");
const $descriptionCate = document.getElementById("description-cate");

function showCategorias() {
  ipcRenderer.send("show-categorias");
}
