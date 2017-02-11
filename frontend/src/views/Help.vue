<template lang="pug">
  div(v-once)
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary help
        md-card-header-text
          .md-title Ayuda
          .md-subhead Te echo una mano?
      md-card-media
        md-image(md-src="img/help.jpg")
        md-ink-ripple
      md-card-content.no-padding
        span.flex.padding Eres una chica lista, pero probablemente necesites algo de ayuda en las misiones más complicadas o en las que yo creo que sabes de qué van pero en realidad no tienes ni la remota idea. Debes saber que ésta app es una pista en sí misma, es decir, cada misión puede que tenga pistas ocultas (en los iconos de ayuda, en los tags, en las imágenes, etc).
        md-list.md-double-line
          md-divider
          md-list-item(v-for="(item, index) in items", v-bind:class="{ 'md-disabled': last(index) }")
            md-avatar.md-large
              md-icon.md-primary {{ item.icon }}
            .md-list-text-container
              span {{ item.title }}
              span {{ item.subtitle }}
            md-divider
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            icon: 'extension',
            title: 'Puzzle',
            subtitle: 'Acertijos, enigmas, adivinanzas, etc'
          },
          {
            icon: 'movies',
            title: 'Video',
            subtitle: 'Cine, películas, series, dibujos, etc'
          },
          {
            icon: 'games',
            title: 'Juego',
            subtitle: 'Videojuegos, juegos de mesa, cartas, etc'
          },
          {
            icon: 'chrome_reader_mode',
            title: 'Texto',
            subtitle: 'Libros, comics, carteles, pósters, etc'
          },
          {
            icon: 'place',
            title: 'Sitio',
            subtitle: 'Mapas, viajes, lugares, etc'
          },
          {
            icon: 'audiotrack',
            title: 'Audio (2018)',
            subtitle: 'Música, sonidos, ruidos, etc'
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('help')
    },
    methods: {
      last (index) {
        return index === this.items.length - 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-disabled
    background-color: lightgray !important
    .md-icon
      color: grey !important
</style>