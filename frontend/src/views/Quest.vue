<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000")
      span Correcto! Se ha guardado en tus Logros. A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click="close()")
        md-icon done
    md-card(md-with-hover)
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Acertijo {{ index }} de {{ quests.length }}
      md-card-media
        img(v-bind:src="'img/quests/' + active.media")
        md-ink-ripple
        md-button.md-primary.md-fab.floating(v-on:click="debug()")
          md-icon play_arrow
      md-card-content
        span {{ active.description }}
        p
          md-chip(v-for="tag in active.tags") {{ tag }}
        md-input-container(md-has-password)
          label Código secreto
          md-input(type="password", required, v-model="password")
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        quests: [
          {
            password: '',
            icon: 'extension',
            title: 'Empieza el juego',
            media: 'avatar.jpg',
            description: 'Bienvenida a tu propia gymkana de aniversario portátil! Durante 50 pruebas, resolverás pequeños acertijos sobre temas de la cultura friki que tanto nos gusta a los dos para encontrar el regalo que he escondido al final. Hay de todo: libros, películas, series, dibujos animados, videojuegos, juegos... Para avanzar debes encontrar la contraseña que desbloquea la siguiente prueba. Los códigos siempre son de una palabra, compuesta por letras y/o números. En algunos raros casos, como nombres propios de 2 palabras, la contraseña será del formato PrimeraSegunda, nunca con espacios. Elimina los signos de puntuación, pero respeta las mayúsculas. Suerte y que te diviertas!',
            tags: ['Pista', 'Ayuda', 'Nombre', 'Mujer'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Virginia',
            icon: 'movies',
            title: 'Marty, tenemos que volver',
            media: 'delorean.gif',
            description: 'Para resolver algunos acertijos tendrás que viajar usando tu flamante coche nuevo, que tiene algo que ver con este acertijo. También era híbrido, y sólo consumía 1.21GW por viaje! Creo que he sido un poco enrevesado, pero eres una chica lista y seguro que lo sacas tarde o temprano.',
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
            tags: ['Piratas', 'Ingredientes', 'Jarras'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Grog',
            icon: 'chrome_reader_mode',
            title: 'Acertijos en la oscuridad',
            media: 'hobbit.gif',
            description: 'El mejor capítulo del libro, el duelo a muerte de dos aficionados a los acertijos. Aunque uno de ellos hizo trampa, el otro también, así que técnicamente fue un empate de tramposos. Pero yo tampoco habría jugado limpio con Gollum, la verdad.',
            tags: ['Acertijos', 'Último'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Anillo',
            icon: 'extension',
            title: 'Electricidad',
            media: 'law.jpg',
            description: 'Este es un chiste de ingenieros. Bueno, la verdad es que de ingeniero, en singular. Mío, porque nadie más lo pilla. Aunque en realidad, es nuestro. Y el gato me ha venido que ni pintado!',
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
            tags: ['Nombre', 'Clave', 'Complejo'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'BlackMesa',
            icon: 'movies',
            title: 'Ciencia vs Fe',
            media: 'lost.gif',
            description: 'Otra grandísima serie, probablemente la primera que vi como una "serie" de capítulos en los que el orden importaba y mucho. De cuando apenas tenía suficiente banda ancha de internet en casa para poder verlo en streaming, pero eso no me impedía pausar la carga y poder ver capítulos hasta altísimas horas de la madrugada. Como haces tu en 2017, vamos...',
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
            tags: ['Amuleto', 'Cura', 'Enfermedad'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Auryn',
            icon: 'games',
            title: 'Fus Ro Dah!',
            media: 'dragonborn.jpg',
            description: '"Yo antes era un aventurero como tú, pero un día me hirieron con una flecha en la rodilla". Esa es sin duda la frase más repetida en este, por otro lado, grandísimo juego. Aunque tenía cosas muy absurdas. Recuerdo haber subido Herrería al máximo nivel fabricando cientos de dagas de hierro. Pero había otra armadura más chula todavía.',
            tags: ['Elemento', 'Metal', 'Armadura'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Onice',
            icon: 'extension',
            title: 'Las 5 casas',
            media: 'einstein.jpg',
            description: 'Seguro que has hecho este rompecabezas antes. Te toca volverlo a hacer, pero ésta vez para responder a mi propia pregunta: ¿Qué bebe el dueño del pez?',
            tags: ['País', 'Origen', 'Bebida'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Cerveza',
            icon: 'movies',
            title: 'Oferta en la ferretería',
            media: 'saw.gif',
            description: 'Me imagino al malo yendo a la ferretería del barrio a comprar bridas, cal, un barreño resistente al ácido, ácido, un saco, una cuerda, una pala y algunos instrumentos de tortura de oferta para hacer intrincados instrumentos de muerte retardada. Y pagando en efectivo. Todo muy correcto, todo muy normal. Siempre saludaba.',
            tags: ['Asesino', 'Nick'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Jigsaw',
            icon: 'games',
            title: 'Hazte con todos!',
            media: 'pokemon.jpg',
            description: 'Aunque es jodidamente imposible. Hay más de 800. Y éste es uno de ellos. Aunque no he sido tan cabrón de coger uno al azar para que los vayas comparando. Este es ligeramente especial. Suerte!',
            tags: ['Nombre', '4chan'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Tentaquil',
            icon: 'chrome_reader_mode',
            title: 'Le Petit Prince',
            media: 'little.gif',
            description: 'Otro precioso libro de obligada lectura infantil y no tan infantil. Mientras que los niños ven un elefante en el estómago de una boa, los adultos somos muchos más simples y aburridos... Menos mal que yo no.',
            tags: ['Adultos', 'Realidad'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Sombrero',
            icon: 'filter_6',
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
            media: 'item.jpg',
            description: 'Otro agujero de horas y un no parar de jugar. La saga completa, la verdad. La historia del WoW es un poco enrevesada y sin un final concreto, pero la del Warcraft3 está bastante bien. Pero aquí buscamos al culpable de todo, de toda la historia, desde el principio.',
            tags: ['Arma', 'Inglés'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Frostmourne',
            icon: 'movies',
            title: 'Run',
            media: 'stranger.gif',
            description: 'Vaya pedazo de serie. Muy oscura y a la vez casi familiar con la pandilla de Verano Azul dando vueltas por la ciudad con un monstruo interdimensional rondado. Y la escena de las luces de navidad sobre la pared fue magistral. Tal vez deberías verla más de cerca...',
            tags: ['Luces', 'Letras'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Currada',
            icon: 'chrome_reader_mode',
            title: 'Habla, y entra',
            media: 'moria.gif',
            description: 'Otra escena mítica de otro gran libro y película. Aquí vamos a jugar un poco con el frikismo más extremo. Da gracias que no me gusta Star Trek, que sino imagínate en Klingon...',
            tags: ['Élfico', 'Hermosa'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Vanya',
            icon: 'games',
            title: '+1 UP!',
            media: 'mario.gif',
            description: 'Mira que este juego tiene añazos, y hoy en dia se sigue manteniendo como el juego más vendido de la historia. Y cada vez que pensabas que llegabas al final, "Lo siento Mario, la princesa está en otro castillo". Podías darme un mapa al castillo correcto, hijo de puta...',
            tags: ['Princesa'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Peach',
            icon: 'movies',
            title: 'Foto de familia',
            media: 'sherlock.jpg',
            description: 'No podía ser un juego de acertijos completo sin que apareciera nuestro investigador favorito, verdad? Yo no soy tan listo como para crear un complicado reto intelectual que resolver, aunque tenga buenas ideas para una scape room. Y gracias adios, ahora Mary está MUERTA.',
            tags: ['Esta', 'U', 'Resulta', 'Una', 'Simpleza'],
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
            description: 'El mundo puede ser una ruina! No lo podemos permitir! Esto sí que eran dibujos de los buenos, y no la mierda que ponen hoy en día a los chavales. Algún día tengo que volver a verlo entero otra vez. La de pifostio que se armó por intentar conseguir las 7 bolas de...',
            tags: ['Dragón'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Shenlong',
            icon: 'chrome_reader_mode',
            title: 'Eres un mago, Harry',
            media: 'mapa.gif',
            description: 'Siempre me pareció un poco absurdo que unos artefactos mágicos tan jodidamente poderosos y que tienden a ser usados para hacer el mal, como la Capa de Invisibilidad o el Mapa del Merodeador, acaben en las inexpedrtas manos de imberbes estudiantes de instituto. Eso sí, en Gringots guardamos las monedas de oro, no sea que los gitamagos nos las roben.',
            tags: ['Muerto', 'Imposible', 'Mote'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Colagusano',
            icon: 'movies',
            title: 'Odio a Carl',
            media: 'walking.jpg',
            description: 'Yo ya veo esto simplemente para ver si Carl se muere. Aunque sé que es un personaje principal y esto no es Juego de Tronos, no he perdido la esperanza de que Negan lo mate a base de bates en la cabeza. Este niño evade la muerte tan bien como la Portuguesa o Kissy.',
            tags: ['Spoiler', 'Todos', 'Estamos'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Infectados',
            icon: 'games',
            title: 'Waka Waka Waka',
            media: 'pacman.gif',
            description: 'Sabías que este juego está basado en la película Alien? Se supone que los fantasmas son representaciones del bicho y tu tienes que huir de el por los pasillos de la nave, hasta que tienes suficientes agallas como para volverte contra él y matarlo. Curioso, verdad?',
            tags: ['Fantasma', 'Color', 'Favorito'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Blinky',
            icon: 'movies',
            title: 'I will be back',
            media: 'back.gif',
            description: 'A mi me gustan por este orden: primero la segunda, segundo la tercera, tercero la primera, cuarta la quinta y quinta la cuarta. La serie no hay por donde cogerla.',
            tags: ['Orden'],
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
            media: 'key.jpg',
            description: 'Toca coger el coche y darse un paseo. Creías que lo de viajar y hablar con NPCs era broma, verdad? Pues ya verás cuando tengas que luchar contra monstruos...',
            tags: ['Mapa', 'Coche'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Ornitorrinco',
            icon: 'movies',
            title: 'Hay alguien ahí?',
            media: 'alien.gif',
            description: 'Supongo que te estarás preguntando para qué sirve esa llave. Y la contraseña. En fin, ya lo descubrirás. Mientras tanto, seguimos con otro acertijo. Este es muy sencillo, casi de manual.',
            tags: ['Especie'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Xenomorfo',
            icon: 'games',
            title: 'Resident Evil',
            media: 'media.extension',
            description: 'El mejor juego de zombies que hay. Tenía acción, sustos, acertijos, puzzles y una historia bastante buena. Hoy en día los píxeles dan asco, pero de aquella era un acojone constante, sobre todo cuando llevabas jugando unas horas y no encontrabas una puta cinta para grabar la partida en la máquina de escribir.',
            tags: ['Boss', 'Final'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Nemesis',
            icon: 'movies',
            title: 'Tabla periódica',
            media: 'bb.jpg',
            description: 'Ya que has tenido una pregunta de física, qué tal ahora una de química? Y quién mejor en química que nuestro profesor favorito, Walter White? No seas demasiado dura conmigo, no sé casi nada de química y aunque éste es tu campo predilecto, no se me ha ocurrido nada más...',
            tags: ['Peso', '+3000'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '3033',
            icon: 'movies',
            title: 'Big Crunch',
            media: 'bang.gif',
            description: 'Molaba más cuando no tenían novia, pero todos los frikis tenemos derecho al amor, no? Ahora es una retaíla de empalagosas situaciones románticas estúpidas, de esas que tanto te gustan. Pero antes tenían cosas tan chulas como ésta.',
            tags: ['Robot'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'MONTE',
            icon: 'movies',
            title: 'Cuál es tu nombre?',
            media: 'witness.gif',
            description: 'Una de mis sagas favoritas. El rollo postapocalíptico me mola un montón. Y es muy curioso que sea en Australia. Aunque la obra maestra es la cuarta, el resto tampoco están mal. En fin, lo que nos interesa aquí es algo muy obvio pero que apenas sale mencionado en las películas. La verdad es que no sabía muy bien qué preguntar...',
            tags: ['Last name'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Rockatansky',
            icon: 'movies',
            title: 'El juego de mesa',
            media: 'jumanji.gif',
            description: 'Esto si que era jugarsela apostando a un juego. Sabías que no sólo se esta haciendo un remake, sino que había segunda parte? Yo no tenía ni idea.',
            tags: ['Título'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Zathura',
            icon: 'movies',
            title: '3000',
            media: 'futurama.gif',
            description: 'Mi serie de animación favorita. Tiene más burradas que los Simpsons, pero menos que Padre de Familia. Una pena que la cancelaran. Aunque luego volviera en forma de películas. Y luego volviera a estar en antena. Y luego vuelto a cancelarla. Pero estoy buscando un capítulo concreto...',
            tags: ['Tarjeta', 'Banco'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '1077',
            icon: 'movies',
            title: 'Yo soy Groot',
            media: 'galaxy.gif',
            description: 'Yo desconocía totalmente la existencia de esta franquicia de antihéroes, pero desde que la descubrí, me encanta. Si hasta tengo cómics de ella. Este año sale la segunda parte!',
            tags: ['Rocket', 'Experimento', 'Código'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '89P13',
            icon: 'extension',
            title: 'Overexpoed model',
            media: 'model.jpg',
            description: 'Incluso alguien ha hecho un Tumblr para postear fotos donde la gente encuentra a esta modelo que está por todas partes. Nosotros mismos sin ir más lejos ya nos la hemos encontrado por ahí. Yo una vez la ví en Noruega anunciando auténtica butifarra española.',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Arianne',
            icon: 'movies',
            title: 'El Puente de la Muerte',
            media: 'python.gif',
            description: 'Quien el puente desee atravesar, tres preguntas deberá contestar, o al abismo irá a dar...',
            tags: ['Capital'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Ekallatum',
            icon: 'movies',
            title: 'indiana jones',
            media: 'media.extension',
            description: 'Quién no ha tenido alguna vez la curisidad por saber qué se siente al tener el corazón palpitante de un hombre en la mano mientras se lo ofrece como sacrificio a su Dios favorito? Y el de un niño?',
            tags: ['Dios'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Kalimah',
            icon: 'games',
            title: 'Final Fantasy',
            media: 'ff.gif',
            description: 'Somos de mundos distintos. Tú, de Nintendo y Legend of Zelda. Yo, de Sony y Final Fantasy. Un amor imposible.',
            tags: ['Personaje'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Vivi',
            icon: 'chrome_reader_mode',
            title: 'Todos van a morir',
            media: 'got.gif',
            description: 'Estoy casi seguro de que no se va a salvar ninguno de ellos. El Trono de Hierro no va a acabar en manos de ninguno de los supuestos herederos legítimos. El frío blanco se comerá todo a su paso. Oh, dulce niño de verano...',
            tags: ['Fuego'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Valirio',
            icon: 'movies',
            title: 'Follow the white rabbit',
            media: 'matrix.jpg',
            description: 'Qué habrías escogido tú?',
            tags: ['Decisiones'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Roja',
            icon: 'movies',
            title: 'Uno nuevo en la familia',
            media: 'rogue.gif',
            description: 'Éramos pocos y parió la abuela. Estos de Disney si que saben hacer merchandising. Le dan a la rueda y ala, un nuevo droide en cada película. Luego peluches, pósters, figuras, camisetas... Y yo encantado de la vida! Cuál será el siguiente?',
            tags: ['Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'K2SO',
            icon: 'movies',
            title: 'Westworld',
            media: 'bernard.gif',
            description: 'Vaya spoileraco que se nos escapó sobre Bernard, eh? A la bobada además. Zasca. Yo suelo ser siempre muy considerado cuando hablamos de spoilers, pero esa vez...',
            tags: ['Spoiler', 'Bernard'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Arnold',
            icon: 'movies',
            title: 'Pensamiento Profundo',
            media: 'guide.jpg',
            description: 'Tras millones de años, se ha llegado a una conclusión irrefutable.',
            tags: ['Respuesta', 'Pregunta', '+1000'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '1042',
            icon: 'movies',
            title: 'Es hora de morir',
            media: 'runner.gif',
            description: '"Todos esos momentos se perderán en el tiempo como lágrimas en la lluvia". Grandísima frase.',
            tags: ['Modelo'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Nexus6',
            icon: 'movies',
            title: 'Tus problemas déjalos',
            media: 'fraggle.gif',
            description: 'Ven a disfrutar, ven a Fraggle Rock! Junto con los Teleñecos y Barrio Sésamo, este show era de lo mejor para los niños pequeños. Aunque creo recordar que tu no lo veías, así que igual es difícil.',
            tags: ['Animal'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Sprocket',
            icon: 'movies',
            title: 'Qué es?! Qué es?!',
            media: 'jack.gif',
            description: 'Hay luces de color! Qué es?! Parece de algodón! Qué es?! No creo en lo que veo. Estoy soñando? No lo sé! Qué injusto es! Qué es?',
            tags: ['Luz', 'Roja', 'Nariz'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Zero',
            icon: 'movies',
            title: 'V de Virginia',
            media: 'vendetta.gif',
            description: '"Recuerden, recuerden, el 5 de Noviembre. Conspiración, pólvora y traición. No veo la demora y siempre es la hora, de evocarla sin dilación". Hoy en día se ha convertido en la careta oficial de Annonymous, así como referencias a otras películas y series de hackers como Mr Robot.',
            tags: ['Apellido'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Hawkes',
            icon: 'games',
            title: 'Triforce',
            media: 'triforce.gif',
            description: 'Yo no he jugado, pero se supone que en cada historia se repite el bucle de la divisón de la trifuerza en tres fragmentos: la Fuerza, representada por Garnon; la Sabiduría, representada por Zelda; y el Valor, representado por Link. Y el que controle las 3, controla el poder supremo. Pero, quién hizo esas piedras exactamente?',
            tags: ['Color', 'Favorito'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Din',
            icon: 'movies',
            title: 'Me comeré tu alma',
            media: 'media.extension',
            description: 'Aunque tiene un par de escenas especialmente brutas, es una película de muy bajo presupuesto pensada para reirse con ganas de las fuerzas del mal y de los muertos vivientes. Y la serie no está nada mal tampoco.',
            tags: ['Libro'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Necronomicon',
            icon: 'place',
            title: 'Fin',
            media: 'victory.jpg',
            description: 'Enhorabuena! Has llegado al final del todo. Te estarás preguntando si todo este esfuerzo ha merecido la pena, pero espero que al menos te hayas divertido resolviendo mi juego. Y que te guste mi regalo como premio por tu esfuerzo! Para el año que viene, tal vez te haga una expansión con otras 50 pruebas. Un beso, Vivi!',
            tags: ['La llave es importante', 'Al final no había monstruos', 'El Ornitorrinco era para despistar'],
            favorite: false,
            timestamp: 0
          }
        ],
        password: ''
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
          document.getElementById('scroll').scrollIntoView(true)
          return found
        } else {
          return this.quests[0]
        }
      },
      index () {
        return this.quests.findIndex(quest => quest.password === this.password)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .floating
    position: absolute
    bottom: -35px
    right: 5px
    z-index: 9999
</style>