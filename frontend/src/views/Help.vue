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
          md-list-item
            md-icon.md-size-2x.md-primary extension
            .md-list-text-container
              span Puzzle
              span Acertijos, enigmas, adivinanzas, etc
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary movies
            .md-list-text-container
              span Video
              span Cine, películas, series, dibujos, etc
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary games
            .md-list-text-container
              span Juego
              span Videojuegos, juegos de mesa, cartas, etc
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary chrome_reader_mode
            .md-list-text-container
              span Texto
              span Libros, comics, carteles, pósters, etc
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary place
            .md-list-text-container
              span Sitio
              span Mapas, viajes, lugares, etc
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('help')
    }
  }
</script>

<style lang="stylus" scoped>
</style>