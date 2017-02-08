<template lang="pug">
  div(v-once)
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary info
        md-card-header-text
          .md-title Información
          .md-subhead Datos técnicos
      md-card-media
        md-image(md-src="img/info.jpg")
        md-ink-ripple
      md-card-content.no-padding 
        span.flex.padding Para nuestro aniversario quería hacer algo especial para tí, y, como esto del desarrollo es lo que mejor se me da, me dije: ¿Por qué no hacer una gymkana online con cosas frikis que nos gusten a los dos, como juegos, pelis, series, comics o libros? Espero que te diviertas jugándolo tanto como yo haciéndolo. Por si tienes curiosidad, lo he creado usando:
        md-list.md-double-line
          md-divider
          md-list-item
            md-icon.md-size-2x.md-primary cloud
            .md-list-text-container
              span NodeJS
              span https://nodejs.org/es/
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary build
            .md-list-text-container
              span VueJS
              span https://vuejs.org/
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary brush
            .md-list-text-container
              span Google Material Design
              span https://material.io/guidelines/
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary dashboard
            .md-list-text-container
              span Vue Material
              span https://vuematerial.github.io/
            md-divider
          md-list-item
            md-icon.md-size-2x.md-primary android
            .md-list-text-container
              span Apache Cordova
              span https://cordova.apache.org/
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('info')
    }
  }
</script>

<style lang="stylus" scoped>
</style>