<template lang="pug">
  div
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary info
        md-card-header-text
          .md-title Información
          .md-subhead Datos técnicos
      md-card-media
        img(src="img/info.jpg")
        md-ink-ripple
      md-card-content 
        span Para nuestro aniversario quería hacer algo especial para tí, y, como esto del desarrollo es lo que mejor se me da, me dije: ¿Por qué no hacer una gymkana online con cosas frikis que nos gusten a los dos, como pelis, series, comics o libros? Espero que te diviertas jugándolo tanto como yo haciéndolo.
        p Por si tienes curiosidad, lo he creado usando:
        md-list.md-double-line.md-dense
          md-list-item
            md-icon cloud
            .md-list-text-container
              span NodeJS
              span https://nodejs.org/es/
          md-list-item
            md-icon build
            .md-list-text-container
              span VueJS
              span https://vuejs.org/
          md-list-item
            md-icon brush
            .md-list-text-container
              span Google Material Design
              span https://material.io/guidelines/
          md-list-item
            md-icon dashboard
            .md-list-text-container
              span Vue Material
              span https://material.io/guidelines/
          md-list-item
            md-icon android
            .md-list-text-container
              span Apache Cordova
              span https://cordova.apache.org/
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