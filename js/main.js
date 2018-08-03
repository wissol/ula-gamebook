console.log("hola, mundo feliz");

const hojaPersonajeMenu = document.querySelector("#hojaPersonajeMenu");
const hojaPersonaje = document.querySelector("#hojaPersonaje");
const inventarioMenu = document.querySelector("#inventarioMenu");
const inventario = document.querySelector("#inventario");
const comandosMenu = document.querySelector("#comandosMenu");
const comandos = document.querySelector("#comandos");
const grabar = document.querySelector("#grabar");

function toggleDisplayElement(element){
  if (element.classList.contains('hide')){
    element.classList.remove('hide');
    element.previousElementSibling.classList.add('chevronRight');
  }
  else{
    element.classList.add('hide');
    element.previousElementSibling.classList.remove('chevronRight');
  }
}

function saveGame(whatToSave){
  localStorage.clear();
  localStorage.setItem("personajeNombre", "Pedro");
  console.log("Saved!" + localStorage.getItem("personajeNombre"));
}

hojaPersonajeMenu.addEventListener('click', () => {toggleDisplayElement(hojaPersonaje);});
inventarioMenu.addEventListener('click', () => {toggleDisplayElement(inventario);});
comandosMenu.addEventListener('click', () => {toggleDisplayElement(comandos);});
grabar.addEventListener('click', () => {saveGame("aPedro");} );