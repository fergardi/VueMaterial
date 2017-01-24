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
            description: 'Bienvenida a tu propia gymkana de aniversario! Durante 50 pruebas, resolverás pequeños acertijos sobre temas de la cultura friki que tanto nos gusta a los dos, y deberás resolverlas todas para encontrar el regalo que he escondido. Hay de todo: libros, películas, series, dibujos animados, videojuegos, juegos... Para avanzar debes encontrar la contraseña que desbloquea la siguiente prueba. Los códigos siempre son de una palabra, compuesta por letras y/o números. Elimina los signos de puntuación, pero respeta las mayúsculas. Suerte y que te diviertas!',
            tags: ['Los', 'Tags', 'Ayudan', 'Nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Virginia',
            icon: 'movies',
            title: 'Marty, tenemos que volver',
            media: 'delorean.gif',
            description: 'Para resolver algunos acertijos tendrás que viajar usando tu flamante coche nuevo, que tiene algo que ver con este acertijo. También era híbrido, y sólo consumía 1.21GW por salto! Creo que he sido un poco enrevesado, pero eres una chica lista y seguro que lo sacas tarde o temprano.',
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
            icon: 'book',
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
            description: 'Allí transcurre este grandísimo juego. Supongo que te sonará. Lo que nos interesa aquí no es el juego como tal, sino la ubicación de las instalaciones del mismo. Has jugado?',
            tags: ['Nombre', 'Clave', 'Complejo'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'BlackMesa',
            icon: 'movies',
            title: 'Los números son chungos',
            media: 'lost.gif',
            description: 'Otra grandísima serie, probablemente la primera que vi como una "serie" de capítulos en los que el orden importaba y mucho. De cuando apenas tenía suficiente banda ancha de internet en casa para poder verlo en streaming, pero eso no me impedía pausar la carga y poder ver capítulos hasta altísimas horas de la madrugada. Final decepcionante.',
            tags: ['Spoiler', 'Perdidos', 'Hugo'],
            favorite: false,
            timestamp: 0
          },
          {
            password: '8',
            icon: 'book',
            title: 'Imaginación al poder',
            media: 'neverending.gif',
            description: 'Uno de los libros que con más cariño recuerdo de mi infancia. De cuando las novelas río de fantasía medieval eran demasiado complicados para un niño, que prefería entretenerse con amigables dragones y princesas en altos castillos.',
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
            description: 'Seguro que has hecho este rompecabezas antes. Te toca volverlo a hacer, pero ésta vez para responder a mi pregunta: ¿Qué bebe el dueño del pez?',
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
            icon: 'book',
            title: 'Le Petit Prince',
            media: 'little.gif',
            description: 'Otro precioso libro de obligada lectura infantil y no tan infantil. Mientras que los niños ven un elefante en el estómago de una boa, los adultos somos muchos más simples y aburridos... Menos mal que yo no.',
            tags: ['Realidad'],
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
            description: 'Otro agujero de horas y no parar de jugar. Por cierto, la historia del Warcraft está bastante bien. El Warcraft3 la expone en un orden muy interesante. Pero aquí buscamos al culpable de todo, en realidad.',
            tags: ['Arma', 'Inglés'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Frostmourne',
            icon: 'movies',
            title: 'Run',
            media: 'stranger.gif',
            description: 'Vaya pedazo de serie. Muy oscura y a la vez casi familiar con la pandilla de Verano Azul dando vueltas por la ciudad. Y la escena de las luces de navidad sobre la pared fue magistral. Tal vez deberías verla más de cerca.',
            tags: ['Luces', 'Letras', 'Palabra'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Currada',
            icon: 'book',
            title: 'Habla y entra',
            media: 'moria.gif',
            description: 'Otra escena mítica de otro gran libro y película. Aquí vamos a jugar un poco con el frikismo más extremo. Da gracias que no me gusta Star Trek...',
            tags: ['Élfico', 'Hermosa'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'Vanya',
            icon: 'games',
            title: '+1 UP!',
            media: 'media.extension',
            description: 'super mario',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'sherlock',
            media: 'media.extension',
            description: 'sherlock',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'crash bandicoot',
            media: 'media.extension',
            description: 'crash bandicoot',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'harry potter',
            media: 'media.extension',
            description: 'harry potter',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'walking dead',
            media: 'media.extension',
            description: 'walking dead',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'terminator',
            media: 'media.extension',
            description: 'terminator',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'dragon ball',
            media: 'media.extension',
            description: 'dragon ball',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'alien',
            media: 'media.extension',
            description: 'alien',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'resident evil',
            media: 'media.extension',
            description: 'resident evil',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pacman',
            media: 'media.extension',
            description: 'pacman',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'breaking bad',
            media: 'media.extension',
            description: 'breaking bad',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'big bang theory',
            media: 'media.extension',
            description: 'malcolm',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'mad max',
            media: 'media.extension',
            description: 'mad max',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'mortal kombat',
            media: 'media.extension',
            description: 'mortal kombat',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'jumanji',
            media: 'media.extension',
            description: 'jumanji',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'futurama',
            media: 'media.extension',
            description: 'futurama',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'guardianes de la galaxia',
            media: 'media.extension',
            description: 'guardianes de la galaxia',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'monty python',
            media: 'media.extension',
            description: 'monty python',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'indiana jones',
            media: 'media.extension',
            description: 'indiana jones',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'juego de tronos',
            media: 'media.extension',
            description: 'juego de tronos',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'matrix',
            media: 'media.extension',
            description: 'matrix',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'final fantasy',
            media: 'media.extension',
            description: 'final fantasy',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'star wars',
            media: 'media.extension',
            description: 'star wars',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pitufos',
            media: 'media.extension',
            description: 'pitufos',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'autoestopista galactico',
            media: 'media.extension',
            description: 'autoestopista galactico',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'overexposed model',
            media: 'media.extension',
            description: 'overexposed model',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'blade runner',
            media: 'media.extension',
            description: 'blade runner',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'fraggle rock',
            media: 'media.extension',
            description: 'fraggle rock',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pesadilla antes de navidad',
            media: 'media.extension',
            description: 'pesadilla antes de navidad',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'los goonies',
            media: 'media.extension',
            description: 'los goonies',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'legend of zelda',
            media: 'media.extension',
            description: 'legend of zelda',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'evil dead',
            media: 'media.extension',
            description: 'evil dead',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'piti',
            media: 'media.extension',
            description: 'piti',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'fin',
            media: 'media.extension',
            description: 'fin',
            tags: ['tag1', 'tag2', 'tag3'],
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