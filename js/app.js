import { encriptar } from "./encriptar.js";
import { desencriptar } from "./desencriptar.js";

//Selectores
const input = document.querySelector("#input-texto");
const btnEncriptador = document.querySelector("#boton-encriptar");
const btnDesencriptar = document.querySelector("#boton-desencriptar");
const mensaje = document.querySelector("#mensaje");
const btnCopiar = document.querySelector("#boton-copiar");

//captura el id y esconde la div-aparece da de la pantalla
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

//caputura el id en el momento del click y direcciona el programa para el método que encripta el texto
document.getElementById('boton-encriptar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece();
}

//caputura el id en el momento del click y direcciona el programa para el método que desencripta el texto
document.getElementById('boton-desencriptar').onclick = (e) => {
  e.preventDefault();
  const textoDesencriptado = desencriptar(input.value);
  mensaje.value = textoDesencriptado;
  input.value = "";
  aparece();
}

//caputura el id en el momento del click y hace la validación que copia el texto
document.getElementById('boton-copiar').onclick = (e) => {
  e.preventDefault();
  const mensaje = document.querySelector("#mensaje");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}

//manipula el dom para que algunos componentes aparezcan y desaparezcan de la pantalla
function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

//manipula el dom para que algunos componentes aparezcan y desaparezcan de la pantalla
function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}


//verifica lo que el usuário digitó
function inputverificar() {
  var inputPalabra = document.querySelector("#input-texto");
  inputPalabra.addEventListener("keypress", (e) => {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}

