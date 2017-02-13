<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000", v-once)
      span Correcto! Se ha guardado en tus Logros. A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click.native="close()")
        md-icon done
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Acertijo {{ index }} de {{ quests.length }}
        md-switch.md-primary(v-model="help") Pista
      md-card-media
        md-image(v-bind:md-src="'img/quests/' + active.media", v-on:click.native="debug()")
        md-ink-ripple
      md-card-content
        p.description {{ active.description }}
        p
          md-chip.md-primary(v-for="tag in active.tags") {{ tag }}
          template(v-for="clue in active.clues")
            md-chip.md-warn(v-show="help") {{ clue }}
        md-input-container(md-has-password)
          label Código secreto
          md-input(type="password", required, v-model="password")
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        help: false,
        password: '',
        quests: [
          {
            password: '',
            icon: 'extension',
            title: 'Empieza el juego',
            media: 'avatar.jpg',
            description: 'Bienvenida! Aparte de la gymkana, también he hecho tu propio avatar en 8bits! Antes de que digas que os pareceis como un huevo a una castaña, esto es lo mejor que he podido conseguir con lo que había...',
            tags: ['Nombre', 'Mujer'],
            clues: ['Lol'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Virginia',
            icon: 'movies',
            title: 'Marty, tenemos que volver',
            media: 'delorean.gif',
            description: 'Para resolver algunos acertijos tendrás que viajar usando tu flamante coche nuevo, que tiene algo que ver con este acertijo. También era híbrido, y sólo consumía 1.21GW por viaje!\n\nCreo que he sido un poco enrevesado, pero eres una chica lista y seguro que lo sacas tarde o temprano.',
            tags: ['California', 'Virginia'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '1234VJS',
            icon: 'games',
            title: 'Peleas como una vaca',
            media: 'monkey.gif',
            description: 'Este es sin duda uno de los mejores juegos a los que he jugado, y espero que tu también si quieres superar la siguiente prueba. Concretamente la escena de las jarras. Consistía en llevar un líquido de una punta de la isla a la otra, mientras las jarras contenedoras se iban deshaciendo por el camino.',
            tags: ['Piratas', 'Ingredientes'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Grog',
            icon: 'chrome_reader_mode',
            title: 'Acertijos en la oscuridad',
            media: 'hobbit.gif',
            description: 'El mejor capítulo del libro, el duelo a muerte de dos aficionados a los acertijos. Aunque uno de ellos hizo trampa, el otro también, así que técnicamente fue un empate de tramposos.\n\nPero yo tampoco habría jugado limpio con Gollum, la verdad.',
            tags: ['Acertijos', 'Último'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Anillo',
            icon: 'extension',
            title: 'Electricidad',
            media: 'law.jpg',
            description: 'Este es un chiste de ingenieros. Bueno, la verdad es que de ingeniero, en singular. Mío, porque nadie más lo pilla. Aunque en realidad, es nuestro.\n\nY el gato me ha venido que ni pintado!',
            tags: ['Ley', 'Física'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Ohm',
            icon: 'games',
            title: 'Desierto de Nevada',
            media: 'halflife.gif',
            description: 'Allí transcurre este grandísimo juego. Supongo que te sonará. Lo que nos interesa aquí no es el juego como tal, sino la ubicación de las instalaciones del mismo. Te acuerdas?',
            tags: ['Nombre', 'Clave'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'BlackMesa',
            icon: 'movies',
            title: 'Ciencia vs Fe',
            media: 'lost.gif',
            description: 'Otra grandísima serie, probablemente la primera que vi como una "serie" de capítulos en los que el orden importaba y mucho. De cuando apenas tenía suficiente banda ancha de internet en casa para poder verlo en streaming, pero eso no me impedía pausar la carga y poder ver capítulos hasta altísimas horas de la madrugada.',
            tags: ['Spoiler', 'Números'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '4815162342',
            icon: 'chrome_reader_mode',
            title: 'Imaginación al poder',
            media: 'neverending.gif',
            description: 'Uno de los libros que con más cariño recuerdo de mi infancia. De cuando las novelas río de fantasía medieval eran demasiado complicados para un niño, que prefería entretenerse con amigables dragones y princesas en altos castillos de mundos imaginarios.',
            tags: ['Amuleto', 'Enfermedad'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Auryn',
            icon: 'games',
            title: 'Dragonborn',
            media: 'dragonborn.jpg',
            description: '"Yo antes era un aventurero como tú, pero un día me hirieron con una flecha en la rodilla". Esa es sin duda la frase más repetida en este, por otro lado, grandísimo juego. Aunque tenía cosas muy absurdas. Recuerdo haber subido Herrería al máximo nivel fabricando cientos de dagas de hierro.\n\nPero había otra armadura más chula todavía que la de Dragón, al menos para mi...',
            tags: ['Fus', 'Ro'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Dah',
            icon: 'extension',
            title: 'Las 5 casas',
            media: 'einstein.jpg',
            description: 'Seguro que has hecho este rompecabezas antes. Te toca volverlo a hacer, pero ésta vez para responder a mi propia pregunta: ¿Qué bebe el dueño del pez?',
            tags: ['País', 'Origen'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Cerveza',
            icon: 'movies',
            title: 'Oferta en la ferretería',
            media: 'saw.gif',
            description: 'Me imagino al malo yendo a la ferretería del barrio a comprar bridas, cal, un barreño resistente al ácido, ácido, un saco, una cuerda, una pala y algunos instrumentos de tortura de oferta para hacer intrincados instrumentos de muerte retardada. Y pagando en efectivo. Todo muy correcto, todo muy normal.\n\nSiempre saludaba.',
            tags: ['Asesino', 'Nick'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Jigsaw',
            icon: 'games',
            title: 'Hazte con todos!',
            media: 'pokemon.jpg',
            description: 'Aunque es jodidamente imposible. Hay más de 800! Y éste es uno de ellos. Aunque no he sido tan cabrón de coger uno al azar para que los vayas comparando. Este es ligeramente especial.\n\nSuerte!',
            tags: ['4chan', 'Inventado'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Tentaquil',
            icon: 'chrome_reader_mode',
            title: 'Le Petit Prince',
            media: 'little.gif',
            description: 'Otro precioso libro de obligada lectura infantil y no tan infantil. Mientras que los niños ven un elefante en el estómago de una boa, los adultos somos muchos más simples y aburridos...\n\nMenos mal que yo no.',
            tags: ['Adultos', 'Realidad'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Sombrero',
            icon: 'games',
            title: 'Cards Against Humanity',
            media: 'cah.jpg',
            description: 'Cuando me soltaste esa burrada mientras veíamos juntos uno de los capítulos de esa serie, me hiciste reir tanto que me dije: "Esta chica es para mí". Simple y llanamente.',
            tags: ['Burrada', 'Plural'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Niños',
            icon: 'games',
            title: 'World of Warcraft',
            media: 'item.gif',
            description: 'Otro agujero de horas y un no parar de jugar. La saga completa, la verdad. La historia del WoW es un poco enrevesada y sin un final concreto, pero la del Warcraft3 está bastante bien. Pero aquí buscamos al culpable de todo, de toda la historia, desde el principio.',
            tags: ['Arma', 'Inglés'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Frostmourne',
            icon: 'movies',
            title: 'Upside down',
            media: 'stranger.gif',
            description: 'Vaya pedazo de serie. Muy oscura y a la vez casi familiar con la pandilla de Verano Azul dando vueltas por la ciudad con un monstruo interdimensional rondado. Y la escena de las luces de navidad sobre la pared fue magistral.',
            tags: ['Luces', 'Letras'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Fake',
            icon: 'chrome_reader_mode',
            title: 'Habla, y entra',
            media: 'moria.gif',
            description: 'Otra escena mítica de otro gran libro y película. Aquí vamos a jugar un poco con el frikismo más extremo. Da gracias que no me gusta Star Trek, imagínate en Klingon...',
            tags: ['Hermosa', 'Élfico'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Vanya',
            icon: 'games',
            title: '+1UP!',
            media: 'mario.gif',
            description: 'Mira que este juego tiene añazos, y hoy en dia se sigue manteniendo como el juego más vendido de la historia. Y cada vez que pensabas que llegabas al final, "Lo siento Mario, la princesa está en otro castillo". Podías habermelo dicho antes, hijo de puta...',
            tags: ['Enemigo', 'Apellido'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Morton',
            icon: 'movies',
            title: 'Foto de familia',
            media: 'sherlock.jpg',
            description: 'No podía ser un juego de acertijos completo sin que apareciera nuestro investigador favorito, verdad? Yo no soy tan listo como para crear un complicado reto intelectual que resolver, aunque tenga buenas ideas para una scape room.\n\nY gracias adios, ahora Mary está MUERTA.',
            tags: ['Nombre', 'Familiar'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Eurus',
            icon: 'games',
            title: 'Aku Aku',
            media: 'crash.gif',
            description: 'Otro genial juego de cuando tenía la PSOne. Qué recuerdos! No sé si has jugado, pero sino siempre tienes la Wikipedia. Por cierto, la desarrolladora original, Naughty Dog, es la responsable actual de la saga Uncharted.',
            tags: ['Gemelo', 'Malvado'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'UkaUka',
            icon: 'movies',
            title: 'Luz! Fuego! Destrucción!',
            media: 'goku.gif',
            description: 'El mundo puede ser una ruina! No lo podemos permitir! Esto sí que eran dibujos de los buenos, y no la mierda que ponen hoy en día a los chavales. Algún día tengo que volver a verlo entero otra vez. La de pifostio que se armó por intentar conseguir las 7 Bolas de Dragón.',
            tags: ['Nombre', 'Real'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Kakarotto',
            icon: 'chrome_reader_mode',
            title: 'Eres un mago, Harry',
            media: 'marauders.gif',
            description: 'Siempre me pareció un poco absurdo que unos artefactos mágicos tan jodidamente poderosos y que tienden a ser usados para hacer el mal, como la Capa de Invisibilidad o el Mapa del Merodeador, acaben en las inexpertas manos de imberbes estudiantes de instituto.\n\nEso sí, en Gringots guardamos las monedas de oro, no sea que los gitamagos nos las roben.',
            tags: ['Muerto', 'Mote'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Colagusano',
            icon: 'movies',
            title: 'Odio a Carl',
            media: 'carl.gif',
            description: 'Yo ya veo esto simplemente para ver si Carl se muere. Aunque sé que es un personaje principal y esto no es Juego de Tronos, no he perdido la esperanza de que Negan lo mate a base de bates en la cabeza.\n\nEste niño evade la muerte tan bien como la Portuguesa o Kissy.',
            tags: ['Spoiler', 'Estamos'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Infectados',
            icon: 'games',
            title: 'Woka Woka Woka',
            media: 'pacman.gif',
            description: 'Sabías que este juego está basado en la película Alien? Se supone que los fantasmas son representaciones del bicho y tu tienes que huir de el por los pasillos de la nave, hasta que tienes suficientes agallas como para volverte contra él y matarlo.\n\nCurioso, verdad?',
            tags: ['Color', 'Favorito'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Blinky',
            icon: 'movies',
            title: 'I will be back',
            media: 'terminator.gif',
            description: 'A mi me gustan por este orden: primero la segunda, segundo la tercera, tercero la primera, cuarta la quinta y quinta la cuarta.\n\nLa serie no hay por donde cogerla.',
            tags: ['Orden', 'Secuencia'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '23154',
            icon: 'games',
            title: 'Fatality',
            media: 'fatality.gif',
            description: 'Sabías que este juego se convirtió en muy famoso porque las escenas de lucha estaban grabadas con personas reales que se ofrecieron para capturar sus movimientos y representarlos en un juego de recreativa?',
            tags: ['Boss', 'Final'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'ShangTsung',
            icon: 'place',
            title: 'Excursión',
            media: '25.jpg',
            description: 'Toca coger el coche y darse un paseo. Creías que lo de viajar y hablar con NPCs era broma, verdad? Pues ya verás cuando tengas que luchar contra monstruos...\n\nOrnitorrincos asesinos!',
            tags: ['Mapa', 'Coche'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Ornitorrinco',
            icon: 'movies',
            title: 'Hay alguien ahí?',
            media: 'alien.gif',
            description: 'Supongo que te estarás preguntando para qué sirve esa llave. Y la contraseña. En fin, ya lo descubrirás.\n\nMientras tanto, seguimos con otro acertijo. Este es muy sencillo, casi de manual.',
            tags: ['Especie', 'Género'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Xenomorfo',
            icon: 'games',
            title: 'Resident Evil',
            media: 'resident.gif',
            description: 'El mejor juego de zombies que hay. Tenía acción, sustos, acertijos, puzzles y una historia bastante buena. Hoy en día los píxeles dan asco, pero de aquella era un acojone constante, sobre todo cuando llevabas jugando unas horas y no encontrabas una puta cinta para grabar la partida en la máquina de escribir. Las pelis son una basura.',
            tags: ['Boss', 'Final'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Nemesis',
            icon: 'movies',
            title: 'Big Crunch',
            media: 'bang.gif',
            description: 'Molaba más cuando no tenían novia, pero todos los frikis tenemos derecho al amor, no? Ahora es una retaíla de empalagosas situaciones románticas estúpidas, de esas que tanto te gustan. Pero antes tenían cosas tan chulas como ésta.',
            tags: ['Robot', 'Siglas'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'MONTE',
            icon: 'movies',
            title: 'Cuál es tu nombre?',
            media: 'witness.gif',
            description: 'Una de mis sagas favoritas. El rollo postapocalíptico me mola un montón. Y es muy curioso que sea en Australia. Aunque la obra maestra es la cuarta, el resto tampoco están mal. En fin, lo que nos interesa aquí es algo muy obvio pero que apenas sale mencionado en las películas.\n\nLa verdad es que no sabía muy bien qué preguntar...',
            tags: ['Australiano', 'Apellido'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Rockatansky',
            icon: 'movies',
            title: 'El juego de mesa',
            media: 'jumanji.gif',
            description: 'Esto si que era jugarsela apostando a un juego. Sabías que no sólo se esta haciendo un remake para 2017, sino que había segunda parte?\n\nYo no tenía ni idea.',
            tags: ['Título', 'Juego'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Zathura',
            icon: 'movies',
            title: 'Año 3000',
            media: 'fry.gif',
            description: 'Mi serie de animación favorita. Tiene más burradas que los Simpsons, pero menos que Padre de Familia. Una pena que la cancelaran. Aunque luego volviera en forma de películas. Y luego volviera a estar en antena. Y luego vuelto a cancelarla.\n\nPero estamos buscando un capítulo muy concreto...',
            tags: ['Banco', 'Pizza'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '1077',
            icon: 'movies',
            title: 'Yo soy Groot',
            media: 'galaxy.gif',
            description: 'Yo desconocía totalmente la existencia de esta franquicia de antihéroes, pero desde que la descubrí, me encanta. Si hasta tengo cómics de ella. Este año sale la segunda parte!',
            tags: ['Rocket', 'Experimento'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '89P13',
            icon: 'extension',
            title: 'Overexposed model',
            media: 'model.jpg',
            description: 'Incluso alguien ha hecho un Tumblr para postear fotos donde la gente encuentra a esta modelo que está por todas partes. Nosotros mismos sin ir más lejos ya nos la hemos encontrado por ahí, en León.\n\nYo una vez la ví en Noruega anunciando auténtica butifarra española.',
            tags: ['Nombre', 'Modelo'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Arianne',
            icon: 'movies',
            title: 'El Puente de la Muerte',
            media: 'python.gif',
            description: 'Quien el puente desee atravesar, tres preguntas deberá contestar, o al abismo irá a dar...\n\nIba a ponerte lo del color favorito, y contestar mal, pero ésta me mola más!',
            tags: ['Capital', 'Asiria'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Ekallatum',
            icon: 'movies',
            title: 'Indiana',
            media: 'indiana.gif',
            description: 'Quién no ha tenido alguna vez la curisidad por saber qué se siente al tener el corazón palpitante de un hombre en la mano mientras se lo ofrece como sacrificio a su Dios favorito?\n\nY el de un niño?',
            tags: ['Dios', 'Culto'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Kalimah',
            icon: 'games',
            title: 'Fuego++',
            media: 'ff.jpg',
            description: 'Somos de mundos distintos. Tú, de Nintendo y Legend of Zelda. Yo, de Sony y Final Fantasy. Un amor imposible.',
            tags: ['Personaje', 'FF9'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Vivi',
            icon: 'chrome_reader_mode',
            title: 'Todos van a morir',
            media: 'got.gif',
            description: 'Estoy casi seguro de que no se va a salvar ninguno de ellos. El Trono de Hierro no va a acabar en manos de ninguno de los supuestos herederos legítimos. El frío blanco se comerá todo a su paso.\n\nOh, dulce niño de verano...',
            tags: ['Fuego', 'Verde'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Valirio',
            icon: 'movies',
            title: 'Follow the white rabbit',
            media: 'matrix.jpg',
            description: 'Qué habrías escogido tú?',
            tags: ['Color', 'Favorito'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Roja',
            icon: 'movies',
            title: 'Uno nuevo en la familia',
            media: 'starwars.gif',
            description: 'Éramos pocos y parió la abuela. Estos de Disney si que saben hacer merchandising. Le dan a la rueda y ala, un nuevo droide en cada película. Luego peluches, pósters, figuras, camisetas...\n\nY yo encantado de la vida! Cuál será el siguiente?',
            tags: ['Nombre', 'Robot'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'K2SO',
            icon: 'movies',
            title: 'Westworld',
            media: 'westworld.gif',
            description: 'Vaya spoileraco que se nos escapó sobre Bernard, eh? A la bobada además. Zasca. Yo suelo ser siempre muy considerado cuando hablamos de spoilers, pero esa vez...',
            tags: ['Robot', 'Humano'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Arnold',
            icon: 'movies',
            title: 'Pensamiento Profundo',
            media: 'guide.jpg',
            description: 'Tras millones de años, se ha llegado a una conclusión irrefutable.',
            tags: ['Respuesta', 'Pregunta'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '42',
            icon: 'movies',
            title: 'Es hora de morir',
            media: 'runner.gif',
            description: '"Todos esos momentos se perderán en el tiempo como lágrimas en la lluvia".\n\nGrandísima frase.',
            tags: ['Modelo', 'Clave'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Nexus6',
            icon: 'movies',
            title: 'Tus problemas déjalos',
            media: 'fraggle.gif',
            description: 'Ven a disfrutar, ven a Fraggle Rock! Junto con los Teleñecos y Barrio Sésamo, este show era de lo mejor para los niños pequeños. Aunque creo recordar que tu no lo veías, así que igual es difícil.',
            tags: ['Animal', 'Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Sprocket',
            icon: 'movies',
            title: 'Qué es?! Qué es?!',
            media: 'jack.gif',
            description: 'Hay luces de color! Qué es?! Parece de algodón! Qué es?! No creo en lo que veo. Estoy soñando? No lo sé! Qué injusto es! Qué es?',
            tags: ['Luz', 'Nariz'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Zero',
            icon: 'movies',
            title: 'V de Virginia',
            media: 'vendetta.gif',
            description: '"Recuerden, recuerden, el 5 de Noviembre. Conspiración, pólvora y traición. No veo la demora y siempre es la hora, de evocarla sin dilación". Hoy en día se ha convertido en la careta oficial de Annonymous, así como referencias en otras películas y series de hackers como Mr Robot.',
            tags: ['Careta', 'Apellido'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Fawkes',
            icon: 'games',
            title: 'Triforce',
            media: 'zelda.gif',
            description: 'Yo no he jugado, pero se supone que en cada historia se repite el bucle de la divisón de la trifuerza en tres fragmentos: la Fuerza, representada por Garnon; la Sabiduría, representada por Zelda; y el Valor, representado por Link. Y el que controle las 3, controla el poder supremo. Pero, quién creó esos fragmentos exactamente?',
            tags: ['Color', 'Favorito'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Din',
            icon: 'movies',
            title: 'Me comeré tu alma',
            media: 'ash.gif',
            description: 'Aunque tiene un par de escenas especialmente brutas, es una película de muy bajo presupuesto pensada para reirse con ganas de las fuerzas del mal y de los muertos vivientes. Y la serie no está nada mal tampoco.',
            tags: ['Libro', 'Muertos'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Necronomicon',
            icon: 'movies',
            title: 'Men In Black',
            media: 'mib.gif',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Mr Robot',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'Witcher',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Spiderman',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Breaking Bad',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Totoro',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Ready Player One',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Age of Empires',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Assassins Creed',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Malcolm in the Middle',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Spaceball',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Heroes juego',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Heroes tv',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Tekken',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Codigo da Vinci',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Principe Bel Air',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Nombre del Viento',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: '1984',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Cariño encogido a niños',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Solo en casa',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Lerooy Jenkins',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Como conoci a vuestra madre',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Rick y Morty',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Wayward Pines',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Gravity Falls',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Momia',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Simpsons',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Scott Pilgrim',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Willow',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Shadow of the Colossus',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Mars Attacks',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Man Seeking Woman',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'Fibonacci',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Lemmings',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Naruto',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Muppets',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Worms',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Padre de Familia',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'movies',
            title: 'Fullmetal Alchemist',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Konami Kode',
            media: 'avatar.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: 'SNES',
            media: '25.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            imestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: 'SNES',
            media: '50.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            imestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: 'SNES',
            media: '75.jpg',
            description: '',
            tags: ['Nombre'],
            favorite: false,
            imestamp: 0
          },
          {
            password: 'Necronomicon',
            icon: 'place',
            title: 'Fin',
            media: '100.jpg',
            description: 'Enhorabuena! Has llegado al final del todo. Te estarás preguntando si todo este esfuerzo ha merecido la pena, pero espero que al menos te hayas divertido. Y que te guste mi regalo!',
            tags: ['Llave', 'Ornitorrinco'],
            favorite: false,
            timestamp: 0
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('quest')
    },
    methods: {
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      md5 (string) {
        var hash = 0
        if (string.length === 0) return hash
        for (var i = 0; i < string.length; i++) {
          var char = string.charCodeAt(i)
          hash = ((hash << 5) - hash) + char
          hash = hash & hash
        }
        return hash
      },
      debug () {
        var index = this.quests.findIndex(quest => quest.password === this.password)
        this.password = this.quests[index + 1].password
      }
    },
    computed: {
      active () {
        var found = this.quests.find(quest => quest.password === this.password)
        if (this.password && found) {
          this.$getItem(this.password)
          .then((value) => {
            if (!value) {
              found.timestamp = moment().format('x')
              this.$setItem(this.password, found)
              this.open()
            }
          })
          if (document.getElementById('scroll')) document.getElementById('scroll').scrollIntoView(true)
          return found
        } else {
          return this.quests[0]
        }
      },
      index () {
        return this.quests.findIndex(quest => quest.password === this.password) + 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .description
    white-space: pre-line
  .md-chip.md-primary
    background-color: #673ab7
    color: white
  .md-chip.md-warn
    background-color: #e53935
    color: white
</style>