
const secciones = [
  // titulo    -> section title
  // texto     -> section text
  // opciones  -> section choices
  // opcionesIndex -> section choices index
  // inventario -> a list of stuff that is in this section.
  {
    titulo:"Librojuego",
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
    titulo:"Tu personaje",
    texto: 
     `<h3>{{nombre}}</h3>
      <p>
      El personaje que vas a ser en este juego, es, para toda circunstancia, 
      {{unChico}} normal en el verano de entre primero y segundo de secundaria. Sus 
      notas, si tienes curiosidad, alcanzaron de media 7,623, &mdash;2 centésimas por 
      encima de la media de su clase.
      </p>
      <p>
      A {{nombre}} le gusta el fútbol y la natación, además de otras cosas absolutamente
      normales como los videojuegos. No tiene sueños ni sabe qué va a ser de mayor. No 
      tiene enemigos ni enemigas que le molesten demasiado; sus hermanos son un poco plastas
      y sus padres les quieren mucho a todos. Y la verdad es que {{nombre}} estaba muy feliz
      con todo esto.
      </p>
      <p>
      Por eso, {{nombre}} no tenía ninguna necesidad de aventura alguna y cuando pasó lo que pasó
      hubiera tenido buenos motivos para lamentarse.
      </p>
      `,
    opciones:[
      `Si quieres saber lo que te pasó`,
      `Comienza tu aventura`,
      
    ],
    opcionesSalidas:[2,3],
    inventario:["una piedra", "otra piedra"]
  },

  {
    titulo:"Lo que pasó",
    texto: 
     `<h3>Lo que pasó</h3>
      <p>
      Tres de agosto. En dos días te vas con toda tu familia a las Islas del Verano. Acabas de
      salir de un partido de waterpolo con tus amigos. Ganastéis 12-9, cuando ellos empezaron
      a decir que habiáis hecho trampa y decidiste largarte antes de la hora.
      </p>
      <p>
      Y bueno, cogiste tu bicicleta y te diste una vuelta por tu ciudad, hasta que, en el solitario Callejón
      Tormes, te topaste con una explosión de luz. Lo normal es que te hubieras quedado mirando,
      pero la curiosidad te hizó correr hacia ella
      </p>
      `,
    opciones:[
      `Comienza tu aventura`,
      
    ],
    opcionesSalidas:[3]
  },

  {
    titulo:"La Aventura",
    texto: 
     `<p>
     Despiertas en una <em>alcantarilla</em>, lóbrega y húmeda. Apenas ves nada más allá
     de dos metros, pero a tu frente descubres la luz filtrándose desde el techo. A tu
     espalda notas un frio intenso.
     </p>
      `,
    opciones:[
      `Caminas al frente, hacia la luz`,
      `Te das la vuelta, hacia la oscuridad`,
      
    ],
    opcionesSalidas:[4,5]
  }
]
