

// global constants and variables

// DOM elements
const mensaje           = document.querySelector("#mensajes");

// DOM -- Aside Menu
const hojaPersonajeMenu = document.querySelector("#hojaPersonajeMenu");
const hojaPersonaje     = document.querySelector("#hojaPersonaje");
const inventarioMenu    = document.querySelector("#inventarioMenu");
const inventario        = document.querySelector("#inventario");
const comandosMenu      = document.querySelector("#comandosMenu");
const comandos          = document.querySelector("#comandos");
const nuevoJuego        = document.querySelector("#nuevoJuego");

// DOM -- Main Text 
const tituloSeccion     = document.querySelector("#sectionTitle");
const textoPrincipal    = document.querySelector("#textoPrincipal");
const inventarioSeccionPadre = document.querySelector("#inventarioSeccion");
const finDeSeccion      = document.querySelector("#finDeSeccion");

// DOM -- Character Sheet Values
const nombreValue       = document.querySelector("#nombreValue");
const edadValue         = document.querySelector("#edadValue");
const fueValue          = document.querySelector("#fueValue");
const agiValue          = document.querySelector("#agiValue");
const perValue          = document.querySelector("#perValue");
const saludValue        = document.querySelector("#saludValue");
const genValue          = document.querySelector("#genValue");

const textoTituloGeneral = "Perdido en Uma"
const titleTag           = document.querySelector("title");
const titleHeader        = document.querySelector("h1");

const objetos           = document.querySelector(".objeto");



// Helper functions
function chooseRandomItem(arry){
  let size = arry.length;
  let i = Math.floor(Math.random() * (size-1));
  return arry[i];
}

function toggleDisplayElement(element){
  if (element.classList.contains('hide')){
    element.classList.remove('hide');
    element.previousElementSibling.classList.add('chevronDown');
  }
  else{
    element.classList.add('hide');
    element.previousElementSibling.classList.remove('chevronDown');
  }
}

function toggleDisplayMessage(message){
  if (message.classList.contains('hide')){
    message.classList.remove('hide');
  }
  else{
    message.classList.add('hide');
  }
}

function displayMessage(message){
  mensaje.innerHTML = `${message} <span>&times;</span>`;
  mensaje.classList.remove('hide');
}

function saveGame(){
  localStorage.clear();
  localStorage.setItem("protagonistaNombre", protagonista.nombre);
  localStorage.setItem("protagonistaEdad", protagonista.edad);
  localStorage.setItem("protagonistaFue", protagonista.fue);
  localStorage.setItem("protagonistaAgi", protagonista.agi);
  localStorage.setItem("protagonistaPer", protagonista.per);
  localStorage.setItem("protagonistaGen", protagonista.genero);
  localStorage.setItem("protagonistaInv", protagonista.inventario);
  if(!seccionActual){
    seccionActual=0;
  }
  localStorage.setItem("seccionActual", seccionActual);
}

function loadGame(){
  try {
    protagonista = {
    nombre:localStorage.getItem("protagonistaNombre"),
    edad:  localStorage.getItem("protagonistaEdad"),
    fue:   localStorage.getItem("protagonistaFue"),
    agi:   localStorage.getItem("protagonistaAgi"),
    per:   localStorage.getItem("protagonistaPer"),
    genero: localStorage.getItem("protagonistaGen"),
    inventario: localStorage.getItem("protagonistaInv").split(","),
    }
    seccionActual = localStorage.getItem("seccionActual");
    if(!seccionActual){
      seccionActual=0;
    }
  } catch(exception) {
    return false;
  }
}

function newGame(){
  protagonista = nuevoProtagonista();
  seccionActual= 1;
  saveGame();  
  setCharacterSheet();
  parseSeccion(secciones[seccionActual], protagonista);
}

function parseOpciones(opciones, salidas){
  let opcionesHTML = `<ol id="listaOpciones">`;
  opciones.forEach(function(opcion, index) {
    opcionesHTML += `<li data-Salida=${salidas[index]}>${opcion}</li>`
  });
  opcionesHTML+=`</ol>`
  finDeSeccion.innerHTML = opcionesHTML;
  let listaOpciones = document.querySelector("#listaOpciones");
  listaOpciones.addEventListener('click', nuevaSeccion, false);
}

function parseSeccionInventario(cosas){
  let inventarioDeSeccion = `<p id="listaInventarioSeccion"> Objetos: `;
  cosas.forEach(function(cosa) {
    inventarioDeSeccion += `<span class="cosa" data-Cosa=${cosa}>${cosa}</li>`;
  });
  inventarioDeSeccion += `</p>`;
  inventarioSeccionPadre.innerHTML = inventarioDeSeccion;
}

function nuevaSeccion(event){
  if (event.target !== event.currentTarget) {
        var seccionCandidata = event.target.dataset.salida;
        if (isNaN(parseInt(seccionCandidata))){
          console.log("is Nana");
        } else {
          seccionActual = parseInt(seccionCandidata);
          console.log(seccionActual);
          parseSeccion(secciones[seccionActual], protagonista);
        }
        saveGame();
    }
}

function compilaString (inString, protagonista){
  outString = inString.replace(/{{nombre}}/g, protagonista.nombre);
  outString = outString.replace(/{{unChico}}/g, protagonista.genero == "chico" ? "un chico" : "una chica");
  return outString;
}

function generaInventario(inventarioArray){
  inventarioString = "";
  inventarioArray.forEach(function(objeto){
    inventarioString += ` <span class="cosa" data-Cosa=${objeto}>${objeto},</span>`;
  });
  inventarioString = inventarioString.replace(/,<\/span>$/,".<span>")
  return inventarioString;
}

function parseSeccion(seccion, protagonista){
  tituloSeccion.innerHTML = seccion.titulo;
  textoPrincipal.innerHTML = compilaString(seccion.texto, protagonista);
  titleTag.innerHTML = `${textoTituloGeneral} - Librojuego`;
  titleHeader.innerHTML = textoTituloGeneral;
  inventario.innerHTML = generaInventario(protagonista.inventario);
  if(seccion.opciones){
    parseOpciones(seccion.opciones, seccion.opcionesSalidas);
  } else {
    finDeSeccion.innerHTML = `<p class="theEnd">..:: Fin ::..</p>`;
  }
  if(seccion.inventario){
    parseSeccionInventario(seccion.inventario);
  }
}

function singleDice(sides) {
  return Math.floor(Math.random() * (sides-1)) + 1;
}

function dice(sides,number) {
  if(number==1){
    return singleDice(sides)
  } else {
    return singleDice(sides) + d6(number-1);
  }
}

function d6(){
  return singleDice(6)
}

function setCharacterSheet(){
  nombreValue.innerText = protagonista.nombre;
  edadValue.innerText = protagonista.edad;
  fueValue.innerText = protagonista.fue;
  agiValue.innerText = protagonista.agi;
  perValue.innerText = protagonista.per;
  genValue.innerText = protagonista.genero;
}

function nuevoProtagonista(){
  return {
  nombre: "Pedro",
  edad: 13,
  fue:  9,
  agi:  13,
  per:  16,
  genero: "chico",
  inventario: ["camiseta", "pantalones vaqueros", "deportivas", "mochila", "bolígrafo", "cuaderno", "botella"]
  }
}


// Gamebook sections and data

// Protagonista -> Protagonist aka PlayerCharacter
var protagonista={};
// const protagonista = nuevoProtagonista();

// Secciones == Gamebook Sections





// Listeners

hojaPersonajeMenu.addEventListener('click', () => {  
  if(!protagonista.edad){
     newGame();
  }
  toggleDisplayElement(hojaPersonaje);
});

inventarioMenu.addEventListener('click', () => {toggleDisplayElement(inventario);});

comandosMenu.addEventListener('click', () => {toggleDisplayElement(comandos);});

nuevoJuego.addEventListener('click', () => {newGame();} );

mensajes.addEventListener('click', () => {toggleDisplayMessage(mensajes);});


oldGame = loadGame();
if (oldGame == false) {newGame();}
setCharacterSheet();
parseSeccion(secciones[seccionActual], protagonista);
