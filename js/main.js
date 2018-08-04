
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

function parseSeccion(seccion){
  document.querySelector("#sectionTitle").innerHTML = seccion["titulo"];
  imagen = 
    `<img src='${seccion["figure"]}'' 
  class="textImage"
  alt="Ilustración de la ciudad de Uma" description="U3na hermosa ilustración">`;
  document.querySelector("#figuraOpcional").innerHTML = imagen;
  document.querySelector("#textoPrincipal").innerHTML = seccion["texto"];
  let opcionesHTML = ``;
  seccion.opciones.forEach(function(opcion) {
    opcionesHTML += `<li>${opcion}</li>`
  });
  document.querySelector("#listaOpciones").innerHTML = opcionesHTML;
}


const secciones = [
  {
    titulo:"<em>Título de Sección</em>",
    figure:"steambug_noir___the_city_by_mikecoombsart-d7ifoy4.jpg",
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


seccion = parseSeccion(secciones[0]);

