
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
const grabar            = document.querySelector("#grabar");
const cargar            = document.querySelector("#cargar");
const nuevoJuego        = document.querySelector("#nuevoJuego");
// DOM -- Main Text 
const figuraOpcional    = document.querySelector("#figuraOpcional");
const tituloSeccion     = document.querySelector("#sectionTitle");
const textoPrincipal    = document.querySelector("#textoPrincipal");
const listaOpciones     = document.querySelector("#listaOpciones");
// DOM -- Character Sheet Values
const nombreValue       = document.querySelector("#nombreValue");
const edadValue         = document.querySelector("#edadValue");
const fueValue          = document.querySelector("#fueValue");
const agiValue          = document.querySelector("#agiValue");
const perValue          = document.querySelector("#perValue");
const saludValue        = document.querySelector("#saludValue");

// Helper functions
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
  toggleDisplayMessage(mensaje);
}

function saveGame(whatToSave){
  localStorage.clear();
  localStorage.setItem("personajeNombre", "Pedro");
  displayMessage("Saved!" + localStorage.getItem("personajeNombre"));
}

function newGame(){
  displayMessage("e")
  protagonista = nuevoProtagonista();
  setCharacterSheet()
}


function parseSeccion(seccion){
  tituloSeccion.innerHTML = seccion["titulo"];
  if(seccion.imgSrc == ""){
    figuraOpcional.remove();
  } else {
    imagen = 
      `<img src='${seccion.imgSrc}' class='textImage'
    alt='${seccion.imgAlt}' description='${seccion.imgDescription}'>`;
    figuraOpcional.innerHTML = imagen;
  }
  textoPrincipal.innerHTML = seccion.texto;
  let opcionesHTML = ``;
  seccion.opciones.forEach(function(opcion) {
    opcionesHTML += `<li>${opcion}</li>`
  });
  listaOpciones.innerHTML = opcionesHTML;
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
}

function nuevoProtagonista(){
  return {
  nombre:"Pepe",
  edad: 12+singleDice(3)-singleDice(3),
  fue:   8+singleDice(3)-singleDice(3),
  agi:  11+singleDice(3)-singleDice(3),
  per:  11+singleDice(4)-singleDice(3)
  }
}


// Gamebook sections and data

// Protagonista -> Protagonist aka PlayerCharacter
var protagonista={};
// const protagonista = nuevoProtagonista();

// Secciones == Gamebook Sections
// To-do Load secciones from JSON

const secciones = [
  // titulo    -> section title
  // imgSrc... -> img fields src, alt, description
  // texto     -> section text
  // opciones  -> section choices
  {
    titulo:"<em>Título de Sección</em>",
    imgSrc:"steambug_noir___the_city_by_mikecoombsart-d7ifoy4.jpg",
    imgAlt:"Alt img",
    imgDescription:"Desc image",
    texto: 
     `<p>
      Naullam Bestibulum aliquam felis. Donec pulvinar orci at iaculis lacinia. 
      Nulla non sem leo. Maecenas nec dolor volutpat, rhoncus nisi in, aliquet nisi. 
      Sed hendrerit malesuada volutpat. Nulla facilisi. Phasellus imperdiet dui id 
      leo porttitor venenatis.
      </p><p>
      Sed malesuada felis ac est pretium accumsan. Praesent vitae malesuada ligula, 
      in tempus felis. Maecenas tempor eleifend bibendum. Proin porta risus sed 
      tellus convallis, sed eleifend urna facilisis. Nunc non nisl justo. Etiam 
      eget purus iaculis, posuere mauris vel, sollicitudin leo. Duis maximus, sapien 
      eget iaculis finibus, nisl erat sagittis nibh, et eleifend ligula nunc vel nibh. 
      Aenean id est nibh. Quisque gravida commodo molestie. 
      <b class="objeto" title="objeto">Nulla a elementum felis</b>. In orci nunc, 
      ornare nec porttitor ac, efficitur non ex.
      </p>
      `,
    opciones:[
      `Si quieres hacer una cosa, <a href="/">ve aquí</a>`,
      `Si quieres hacer la otra, <a href="/">ve allá</a>`,
      `Si por último te gusta más esa otra, <a href="/">ve acullás pero más lejos 
      que por ahí no llegas malesuada felis ac est pretium accumsan. Praesent 
      vitae malesuada ligula, in tempus felis.</a>`
    ]
  },

   {
    titulo:"<em>Título de Sección</em>",
    imgSrc:"",
    texto: 
     `<p>
      Naullam Bestibulum aliquam felis. Donec pulvinar orci at iaculis lacinia. 
      Nulla non sem leo. Maecenas nec dolor volutpat, rhoncus nisi in, aliquet nisi. 
      Sed hendrerit malesuada volutpat. Nulla facilisi. Phasellus imperdiet dui id 
      leo porttitor venenatis.
      </p><p>
      Sed malesuada felis ac est pretium accumsan. Praesent vitae malesuada ligula, 
      in tempus felis. Maecenas tempor eleifend bibendum. Proin porta risus sed 
      tellus convallis, sed eleifend urna facilisis. Nunc non nisl justo. Etiam 
      eget purus iaculis, posuere mauris vel, sollicitudin leo. Duis maximus, sapien 
      eget iaculis finibus, nisl erat sagittis nibh, et eleifend ligula nunc vel nibh. 
      Aenean id est nibh. Quisque gravida commodo molestie. 
      <b class="objeto" title="objeto">Nulla a elementum felis</b>. In orci nunc, 
      ornare nec porttitor ac, efficitur non ex.
      </p>
      `,
    opciones:[
      `Si quieres hacer una cosa, <a href="/">ve aquí</a>`,
      `Si quieres hacer la otra, <a href="/">ve allá</a>`,
      `Si por último te gusta más esa otra, <a href="/">ve acullás pero más lejos 
      que por ahí no llegas malesuada felis ac est pretium accumsan. Praesent 
      vitae malesuada ligula, in tempus felis.</a>`
    ]
  }
]


// Listeners

hojaPersonajeMenu.addEventListener('click', () => {
  if(protagonista.edad){
    toggleDisplayElement(hojaPersonaje);
  } else {
    mensaje.innerHTML = `Crea un nuevo juego <span>&times;</span>`;
    toggleDisplayMessage(mensaje);
  }
});
inventarioMenu.addEventListener('click', () => {toggleDisplayElement(inventario);});
comandosMenu.addEventListener('click', () => {toggleDisplayElement(comandos);});
grabar.addEventListener('click', () => {saveGame("aPedro");} );
nuevoJuego.addEventListener('click', () => {newGame();} );
mensajes.addEventListener('click', () => {toggleDisplayMessage(mensajes);});
; // This should only execute after a new game

seccion = parseSeccion(secciones[0]);

console.log(protagonista);