<template lang="pug">
  md-card
    md-card-header
      md-avatar.md-large
        md-icon.md-primary info
      md-card-header-text
        .md-title Info del juego
        .md-subhead Cosas
    md-card-media
      img(src="img/info.gif")
      md-ink-ripple
    md-card-content Para nuestro aniversario quería hacer algo especial para tí, y como esto es lo que mejor se me da, me dije ¿por qué no hacer una gymkana online con las cosas que te gustan? Espero que te diviertas jugándolo. Además, he aprovechado para aprender a desarrollar aplicaciones móviles! Por si tienes curiosidad, lo he creado usando:
      md-list.md-dense
        md-list-item(href="https://nodejs.org/es/")
          md-icon cloud
          span NodeJS
        md-list-item(href="https://vuejs.org/")
          md-icon build
          span VueJS
        md-list-item(href="https://material.io/guidelines/")
          md-icon brush
          span Google Material Design
        md-list-item(href="https://vuematerial.github.io/")
          md-icon dashboard
          span Vue Material
        md-list-item(href="https://cordova.apache.org/")
          md-icon android
          span Apache Cordova
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('about')
    }
  }
</script>

<style lang="stylus" scoped>
</style>