<template lang="pug">
  div
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary help
        md-card-header-text
          .md-title Ayuda
          .md-subhead Te echo una mano?
      md-card-media
        img(src="img/help.gif")
        md-ink-ripple
      md-card-content 
        span Eres una chica lista, pero probablemente necesites algo de ayuda en las misiones más complicadas o en las que yo creo que sabes de qué van pero en realidad no tienes ni la remota idea. Debes saber que ésta app es una pista en sí misma, es decir, cada misión puede que tenga pistas ocultas (en los iconos de ayuda, en los tags, en las imágenes, etc).
        md-list.md-dense
          md-list-item
            md-icon extension
            span Simboliza puzzle
          md-list-item
            md-icon movies
            span Simboliza televisión
          md-list-item
            md-icon games
            span Simboliza videojuego
          md-list-item
            md-icon book
            span Simboliza libro
          md-list-item
            md-icon place
            span Simboliza lugar
          md-list-item
            md-icon filter_6
            span Simboliza juego

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