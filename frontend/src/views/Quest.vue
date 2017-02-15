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
            password: '',
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
            description: 'Lo mejor de esta serie era que muchos Zylons no sabían que lo eran y se creían humanos. Te dejaba con la boca abierta cuando se descubría un modelo nuevo.',
            tags: ['Rubia', 'Modelo'],
            clues: ['Clave'],
            timestamp: 0
          },
          {
            password: 'Caprica6',
            icon: 'theaters',
            title: 'Ash',
            media: 'evil.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'Fullmetal alchemist',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Dune',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Alien',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Age of empires',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Westworld',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Sombra del coloso',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Jumanji',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Nombre del viento',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Como conoci a vuestra madre',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'toys',
            title: 'laymobil',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Mortal kombat',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Mars attacks',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: '1984',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'ravity falls',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'X files',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Solo en casa',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: '25% desbloqueado',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Scott pilgrim',
            media: '.jpg',
            description: 'descripcion',
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
            title: 'Autoestopista galactico',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
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