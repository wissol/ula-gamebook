
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
const finDeSeccion      = document.querySelector("#finDeSeccion");
// DOM -- Character Sheet Values
const nombreValue       = document.querySelector("#nombreValue");
const edadValue         = document.querySelector("#edadValue");
const fueValue          = document.querySelector("#fueValue");
const agiValue          = document.querySelector("#agiValue");
const perValue          = document.querySelector("#perValue");
const saludValue        = document.querySelector("#saludValue");


const nombresComunes = [
  "María", "David", "Laura", "Daniel", "Adrián", "Ana", "Paula", "Marta",
  "Pablo", "Marta", "Álvaro", "Andrea", "Alex", "Alejandro", "Sara", "Lucía",
  "Javier", "Alba", "Carlos", "Marina", "Miguel", "Cristina", "José", "Irene",
  "Sergio", "Andrés", "Valentina", "Diego", "Daniela", "Camilo", "Paola",
  "Mónica", "Erick", "Óscar", "Romina", "Carmiña", "Franco", "Agustina", "Lucas",
  "Sonia", "Marc", "Iris", "Aitor", "Alma", "Lili", "Frank", "Julia", "Martina", "Carmen",
  "Markel", "June", "Julen", "Ane", "Jon", "Laia", "Oier", "Iriati"];

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
  console.log("3")
  console.log(seccionActual);
  if(!seccionActual){
    seccionActual=0;
  }
  localStorage.setItem("seccionActual", seccionActual);
  displayMessage("Saved! " + localStorage.getItem("protagonistaNombre"));
}

function loadGame(){
  protagonista = {
  nombre:localStorage.getItem("protagonistaNombre"),
  edad:  localStorage.getItem("protagonistaEdad"),
  fue:   localStorage.getItem("protagonistaFue"),
  agi:   localStorage.getItem("protagonistaAgi"),
  per:   localStorage.getItem("protagonistaPer"),
  }
  seccionActual = localStorage.getItem("seccionActual");
  if(!seccionActual){
    seccionActual=0;
  }
}

function newGame(){
  displayMessage("Creado un nuevo personaje");
  protagonista = nuevoProtagonista();
  seccionActual= 0;
  saveGame();  
  setCharacterSheet();
}

function parseOpciones(opciones){
  let opcionesHTML = `<ol id="listaOpciones">`;
  opciones.forEach(function(opcion) {
    opcionesHTML += `<li>${opcion}</li>`
  });
  opcionesHTML+=`</ol>`
  finDeSeccion.innerHTML = opcionesHTML;
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
  if(seccion.opciones){
    parseOpciones(seccion.opciones);
  } else {
    finDeSeccion.innerHTML = `<p class="theEnd">..:: Fin ::..</p>`;
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
}

function nuevoProtagonista(){
  let pip = 11+singleDice(4)-singleDice(3)
  return {
  nombre:chooseRandomItem(nombresComunes),
  edad: pip,
  fue:  pip + singleDice(3)-dice(3,2),
  agi:  11+singleDice(3)-singleDice(3),
  per:  11+singleDice(4)-singleDice(3),

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
    titulo:"Librojuego",
    imgSrc:"",
    imgAlt:"",
    imgDescription:"",
    texto: 
     `<p>
     Atención. Éste no es un sitio web normal, sino un librojuego interactivo.
     Para jugar lee cada sección de texto. Al final tienes una o varias opciones
     para elegir, cada una con un enlace. Pincha en el enlace y descubrirás que 
     pasa a continuación.
     </p>
     <h3>Tu hoja de personaje</h3>
     <p>En el menú desplegable puedes consultar tu hoja de personaje. 
      `,
    
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
  if(!protagonista.edad){
     newGame();
  }
  toggleDisplayElement(hojaPersonaje);
});

inventarioMenu.addEventListener('click', () => {toggleDisplayElement(inventario);});
comandosMenu.addEventListener('click', () => {toggleDisplayElement(comandos);});
grabar.addEventListener('click', () => {saveGame("aPedro");} );
nuevoJuego.addEventListener('click', () => {newGame();} );
mensajes.addEventListener('click', () => {toggleDisplayMessage(mensajes);});


loadGame();
setCharacterSheet();
parseSeccion(secciones[seccionActual]);
