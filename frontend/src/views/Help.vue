<template lang="pug">
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
    md-card-content Eres una chica lista, pero probablemente necesites algo de ayuda en las misiones más complicadas o en las que yo creo que sabes de qué van pero en realidad no tienes ni la remota idea. Debes saber que ésta app es una pista en sí misma, es decir, cada misión puede que tenga pistas ocultas (en los iconos de ayuda, en los tags, en las imágenes, etc).
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