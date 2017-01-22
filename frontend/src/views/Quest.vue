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
          .md-subhead Acertijo {{ active.id }} de {{ quests.length }}
        md-button.md-icon-button.md-primary
          md-icon help
          md-tooltip(md-direction="left")
            strong Pista: {{ active.clue }}
      md-card-media
        img(v-bind:src="'img/quests/' + active.media")
        md-ink-ripple
        md-button.md-primary.md-fab.floating(v-on:click="debug()", v-if="active.id < quests.length")
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
            id: 1,
            password: null,
            icon: 'extension',
            title: 'Empieza el juego',
            clue: 'El primer código es tu nombre',
            media: 'default.jpg',
            description: 'He colocado un regalo muy especial de aniversario al final de una serie de pruebas de lógica friki que forman una gymkana online. Para cada acertijo, deberás encontrar e introducir el código secreto que desbloquea el siguiente, hasta llegar al último. Siempre será como mucho una palabra combinación de números y letras, pero nunca frases. Respeta las mayúsculas pero ignora los signos de puntuación.',
            tags: ['Los', 'tags', 'ayudan'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 2,
            password: 'Virginia',
            icon: 'local_movies',
            media: 'plate.jpg',
            description: 'Como vas a tener que usar tu nuevo y flamante coche eléctrico para resolver algún que otro acertijo, he pensado en calentar un poco creando un acertijo sobre el tema. No vayas a más de 140 km/h!',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 3,
            password: '1234VJS',
            icon: 'local_movies',
            media: 'gollum.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 4,
            password: 'Sombra',
            icon: 'extension',
            media: 'law.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 5,
            password: 'Ohm',
            icon: 'local_movies',
            media: 'sherlock.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 6,
            password: 'Eurus',
            icon: 'local_movies',
            media: 'moria.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 7,
            password: 'Vanya',
            icon: 'extension',
            media: 'einstein.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 8,
            password: 'Cerveza',
            icon: 'announcement',
            media: 'cah.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 9,
            password: 'Niños',
            icon: 'videogame_asset',
            media: 'item.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 10,
            password: 'Illidan',
            icon: 'videogame_asset',
            media: 'achievement.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 11,
            password: 'Jenkins',
            icon: 'local_movies',
            media: 'python.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 12,
            password: 'Ekallatum',
            icon: 'videogame_asset',
            media: 'ff.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 13,
            password: 'Vivi',
            icon: 'monochrome_photos',
            media: 'model.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 14,
            password: 'Arianne',
            icon: 'book',
            media: 'marauder.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 15,
            password: 'Gusano',
            icon: 'local_movies',
            media: 'deepthought.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 16,
            password: '42',
            icon: 'local_movies',
            media: 'robots.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 17,
            password: 'K2SO',
            icon: 'videogame_asset',
            media: 'triforce.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 18,
            password: 'Nayru',
            icon: 'local_movies',
            media: 'traitor.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 19,
            password: 'FN21878',
            icon: 'place',
            media: 'key.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
            favorite: false,
            timestamp: 0
          },
          {
            id: 20,
            password: 'Piti',
            icon: 'place',
            media: 'victory.jpg',
            description: 'Provisional',
            title: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            clue: 'Provisional',
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
        this.password = this.quests[this.active.id].password
      }
    },
    computed: {
      active () {
        var found = this.quests.find(x => x.password === this.password)
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