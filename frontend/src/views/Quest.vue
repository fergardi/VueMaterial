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
        md-switch.md-warn(v-model="help") Pista
      md-card-media
        md-image(v-bind:md-src="'img/quests/' + active.media", v-on:click.native="debug()")
        md-ink-ripple
      md-card-content
        span {{ active.description }}
        p
          md-chip.md-primary(v-for="tag in active.tags") {{ tag }}
          template(v-for="clue in active.clues")
            md-chip.md-warn.animated.fadeIn(v-show="help") {{ clue }}
        md-input-container(md-has-password)
          label Código
          md-input(type="password", v-model="password", required)
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
            description: 'También he creado tu propio avatar en 8bits! No he conseguido sacarte más parecida, así que es lo que hay.',
            tags: ['Avatar', '8bits'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Virginia',
            icon: 'theaters',
            title: 'Tenemos que volver',
            media: 'delorean.gif',
            description: 'Vas a tener que usar tu flamante coche nuevo para resolver algunas de las pruebas. Este también era híbrido, y solo consumía 1,21GW!',
            tags: ['California', 'Virginia'],
            clues: ['Placa'],
            timestamp: 0
          },
          {
            password: '1656JVS',
            icon: 'tv',
            title: 'Sherlock',
            media: 'sherlock.jpg',
            description: 'No sería un juego de acertijos sin nuestro detective favorito, no? Una pena que haya terminado. Al menos Mary está MUERTA.',
            tags: ['Familiar', 'Perdido'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Eurus',
            icon: 'theaters',
            title: 'Un paseo por el parque',
            media: 'jurassic.jpg',
            description: 'Recuerdo perfectamente esconderme debajo de la butaca del cine y gritar viendo esta película con 8 años. La nueva apesta.',
            tags: ['Bastón', 'Piedra'],
            clues: ['Mosquito'],
            timestamp: 0
          },
          {
            password: 'Ambar',
            icon: 'games',
            title: 'Woka Woka Woka',
            media: 'pacman.gif',
            description: 'Sabías que está inspirado en Alien? Los fantasmas representan al bicho mientras huyes de él por la nave.',
            tags: ['Color', 'Favorito'],
            clues: ['Fantasma'],
            timestamp: 0
          },
          {
            password: 'Blinky',
            icon: 'palette',
            title: 'Luz! Fuego!',
            media: 'goku.gif',
            description: 'Destrucción! El mundo puede ser una ruina! No lo podemos permitir! Esto sí eran dibujos animados y no la mierda de hoy.',
            tags: ['Nombre', 'Verdadero'],
            clues: ['Japonés'],
            timestamp: 0
          },
          {
            password: 'Kakaroto',
            icon: 'tv',
            title: 'Infiltrados',
            media: 'zylon.gif',
            description: 'Lo mejor de esta serie era que muchos Zylons no sabían que lo eran y se creían humanos. Te dejaba con la boca abierta cuando se descubría un nuevo modelo.',
            tags: ['Rubia', 'Modelo'],
            clues: ['Clave'],
            timestamp: 0
          },
          {
            password: 'Caprica6',
            icon: 'theaters',
            title: 'Ash',
            media: 'evil.gif',
            description: 'Aunque tiene algunas escenas especialmente brutas, te ries de lo lindo con esta saga.',
            tags: ['Libro', 'Nombre'],
            clues: ['Muertos'],
            timestamp: 0
          },
          {
            password: 'Necronomicon',
            icon: 'palette',
            title: 'Alquimia',
            media: 'alchemyst.jpg',
            description: 'Gracias por recomendarmela, me ha gustado mucho! Pero sigo prefiriendo Naruto Shippuden...',
            tags: ['Alquimista', 'Fuego'],
            clues: ['Apellido'],
            timestamp: 0
          },
          {
            password: 'Mustang',
            icon: 'chrome_reader_mode',
            title: 'Dune',
            media: 'dune.gif',
            description: 'Otra novela río repleta de familias, nobles, traiciones, conspiraciones y luchas por el poder. Y gusanos.',
            tags: ['Droga', 'Gusano'],
            clues: ['Especia'],
            timestamp: 0
          },
          {
            password: 'Melange',
            icon: 'theaters',
            title: 'Me duele el pecho',
            media: 'alien.gif',
            description: 'Esto sí que era suspense y claustrofobia en estado puro. Luego lo mezclaron con Predator y se jodió. Luego hicieron precuela y se jodió todavía más.',
            tags: ['Familia', 'Especie'],
            clues: ['Extraterrestre'],
            timestamp: 0
          },
          {
            password: 'Xenomorfo',
            icon: 'games',
            title: 'Ding ding!',
            media: 'aoe.gif',
            description: 'Te están atacando! Rush de escorpiones! Touche de torres! Empalizada de recursos! Si no matabas al jabalí antes del minuto 2, habías perdido.',
            tags: ['Chat', 'Risas'],
            clues: ['Atajo'],
            timestamp: 0
          },
          {
            password: '11',
            icon: 'tv',
            title: 'Almas de metal',
            media: 'westworld.gif',
            description: 'Una oscura odisea sobre el amanecer de la conciencia artificial y el futuro del pecado.',
            tags: ['Parque', 'Nombre'],
            clues: ['Empresa'],
            timestamp: 0
          },
          {
            password: 'Delos',
            icon: 'games',
            title: 'A la sombra',
            media: 'colossus.gif',
            description: 'Un grandísimo juego en el que derrotar a todos los colosos para resucitar a la princesa significaba tu propia destrucción.',
            tags: ['Grandis', 'Supernus'],
            clues: ['Coloso'],
            timestamp: 0
          },
          {
            password: 'Malus',
            icon: 'theaters',
            title: 'Tambores',
            media: 'jimanji.gif',
            description: 'Esto sí que era un juego de mesa. Ni apostando dinero ni hostias. Sabías que hay segunda parte?',
            tags: ['Secuela', 'Película'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Zathura',
            icon: 'chrome_reader_mode',
            title: 'Kvothe',
            media: 'kvothe.jpg',
            description: 'Una de mis sagas favoritas. Su representación de la magia es la más descriptiva que he leído.',
            tags: ['Viento', 'Sabio'],
            clues: ['Palabra'],
            timestamp: 0
          },
          {
            password: 'Piedra',
            icon: 'tv',
            title: 'Como conoci a vuestra madre',
            media: 'himym.jpg',
            description: 'Tantos años esperando para conocer a la madre y al final se muere para volver con Robin. Spoiler!',
            tags: ['Spoiler', 'Madre'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Tracy',
            icon: 'toys',
            title: 'Playmobil',
            media: 'playmobil.jpg',
            description: 'Pobrecillos, no tenían codos. No podían beber. Ni comer. Ni masturbarse.',
            tags: ['Marca', 'Española'],
            clues: ['Empresa'],
            timestamp: 0
          },
          {
            password: 'Famobil',
            icon: 'games',
            title: 'Fatality',
            media: 'kombat.gif',
            description: 'Sabías que su éxito fue el uso pionero de la captura de movimientos reales usando cámaras stop motion?',
            tags: ['Personaje', 'Saurian'],
            clues: ['Outworld'],
            timestamp: 0
          },
          {
            password: 'Reptile',
            icon: 'theaters',
            title: 'Ack, ack, ack!',
            media: 'mars.jpg',
            description: 'Como los guionistas no sabían lo que iban a decir los marcianos, escribieron "ack ack ack" en el guión, y luego se conservó durante la filmación!',
            tags: ['Idea', 'Original'],
            clues: ['Juego'],
            timestamp: 0
          },
          {
            password: 'Cartas',
            icon: 'chrome_reader_mode',
            title: 'Fundación',
            media: 'asimov.jpg',
            description: 'Otra novela río, esta vez futurista, sobre conspiraciones, partidos políticos, cultos religiosos, ansias de poder, y mucha intriga.',
            tags: ['Nombre', 'Ciclo'],
            clues: ['Trilogía'],
            timestamp: 0
          },
          {
            password: 'Trantor',
            icon: 'palette',
            title: 'Gravity Falls',
            media: 'gravify.jpg',
            description: 'El simple nombre sugiere misterio. El dibujo y el guión, el punto cómico a esta historia de sucesos paranormales y sobrenaturales a lo Expediente X.',
            tags: ['Dipper', 'Mabel'],
            clues: ['Familia'],
            timestamp: 0
          },
          {
            password: 'Pines',
            icon: 'tv',
            title: 'Quiero creer',
            media: 'files.jpg',
            description: 'Tenía algunos capítulos bastante escabrosos que luego no me dejaban dormir. Hasta la musiquita acojonaba cuando eras un crío.',
            tags: ['Serie', 'Final'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Verdad',
            icon: 'theaters',
            title: 'Cuidado con la cabeza',
            media: 'sleepy.gif',
            description: 'Aunque me gustó el libro, la película de Tim Burton es bastante más interesante y con una trama más enrevesada. De mis favoritas.',
            tags: ['Animal', 'Cruel'],
            clues: ['Negro'],
            timestamp: 0
          },
          {
            password: 'Temerario',
            icon: 'place',
            title: '25% desbloqueado',
            media: '25.jpg',
            description: 'Vas por el 25% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
            tags: ['Socky', 'Laura'],
            clues: ['Saldaña'],
            timestamp: 0
          },
          {
            password: 'Ornitorrinco',
            icon: 'theaters',
            title: 'Scott Pilgrim',
            media: '.jpg',
            description: 'Otra buena película de frikis allá donde las haya, basada en un cómic. Las vidas extra son muy importantes para luchar contra exnovios celosos...',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Mago de oz',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Guardianes de la galaxia',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'V',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Half life',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Independence day',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Super mario',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Mr robot',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Star wars',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Metal slug',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'ora de aventuras',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Community',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Pensamiento Profundo',
            media: '.jpg',
            description: 'La respuesta al sentido de la vida, el universo y todo lo demás.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '42',
            icon: 'games',
            title: 'Resident evil',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Blade runner',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Crash bandicoot',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Historia interminable',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'World of Warcraft',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'VIR',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Man seeking woman',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Inception',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Final fantasy',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Planeta simios',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Muppets',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: '50% desbloqueado',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Lemmings',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Wayward pines',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'toys',
            title: 'ecano',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'impsons',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Star trek',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Mad max',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Ready player one',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Tekken',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Heroes',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Saw',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Stranger things',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Monkey island',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Firefly',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Monty python',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Legend of zelda',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Dr who',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Avatar',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'The witcher',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'MIB',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Breaking bad',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'Overexposed model',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Terminator',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Heroes of might and magic',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'V de vendetta',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: '75% desbloqueado',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'aruto',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Juego de tronos',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Quinto elemento',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'El señor de los anillos',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Pesadilla antes de navidad',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'ick y morty',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Walking dead',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Indiana jones',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'toys',
            title: 'ego',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Worms',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Starship troopers',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'El hobbit',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'Einstein',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: '12 monos',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Harry potter',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'uturama',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Spiderman',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Coche fantastico',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Matrix',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Skyrim',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Lost',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'okemon',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Big bang theory',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'La momia',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: '100% desbloqueado',
            media: '100.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
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
          this.help = false
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
  .md-switch
    align-items center
  .md-chip.md-primary
    background-color #673ab7
    color white
  .md-chip.md-warn
    background-color #e91e63
    color white
</style>