
// global constants and variables

// DOM elements
const hojaPersonajeMenu = document.querySelector("#hojaPersonajeMenu");
const hojaPersonaje     = document.querySelector("#hojaPersonaje");
const inventarioMenu    = document.querySelector("#inventarioMenu");
const inventario        = document.querySelector("#inventario");
const comandosMenu      = document.querySelector("#comandosMenu");
const comandos          = document.querySelector("#comandos");
const grabar            = document.querySelector("#grabar");
const figuraOpcional    = document.querySelector("#figuraOpcional");
const tituloSeccion     = document.querySelector("#sectionTitle");
const textoPrincipal    = document.querySelector("#textoPrincipal");
const listaOpciones     = document.querySelector("#listaOpciones");
const fueValue          = document.querySelector("#fueValue");

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

function saveGame(whatToSave){
  localStorage.clear();
  localStorage.setItem("personajeNombre", "Pedro");
  console.log("Saved!" + localStorage.getItem("personajeNombre"));
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

// Gamebook sections and data

// Protagonista -> Protagonist aka PlayerCharacter


const protagonista = {
  nombre:"Pepe",
  edad: 12+singleDice(3)-singleDice(3),
  fue:   8+singleDice(3)-singleDice(3),
  agi:  11+singleDice(3)-singleDice(3),
  per:  11+singleDice(4)-singleDice(3)
}

console.log(protagonista.fue);

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


// Initialize game

hojaPersonajeMenu.addEventListener('click', () => {toggleDisplayElement(hojaPersonaje);});
inventarioMenu.addEventListener('click', () => {toggleDisplayElement(inventario);});
comandosMenu.addEventListener('click', () => {toggleDisplayElement(comandos);});
grabar.addEventListener('click', () => {saveGame("aPedro");} );

function setCharacterSheet(){
  fueValue.innerText = protagonista.fue;
}

setCharacterSheet(); // This should only execute after a new game

seccion = parseSeccion(secciones[0]);

