<template lang="pug">
  md-card
    md-card-header
      md-avatar.md-large
        md-icon.md-primary help
      md-card-header-text
        .md-title Ayuda
        .md-subhead Necesitas una mano?
    md-card-media
      img(src="img/help.gif")
      md-ink-ripple
    md-card-content Aunque eres una chica lista, probablemente necesites algo de ayuda, sobre todo en las misiones más complicadas o en las que yo creo que sabes de qué van pero en realidad no. Debes saber que esta aplicación es una pista en sí misma, es decir, cada misión puede que tenga pistas ocultas en los iconos de ayuda, en los tags, en las imágenes, etc.
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('green')
    }
  }
</script>

<style lang="stylus" scoped>
</style>