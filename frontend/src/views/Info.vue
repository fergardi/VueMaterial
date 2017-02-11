<template lang="pug">
  div(v-once)
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary school
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
          md-list-item(v-for="item in items")
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
            icon: 'settings',
            title: 'NodeJS',
            subtitle: 'https://nodejs.org/'
          },
          {
            icon: 'code',
            title: 'VueJS',
            subtitle: 'https://vuejs.org/'
          },
          {
            icon: 'dashboard',
            title: 'Vue Material',
            subtitle: 'https://vuematerial.github.io/'
          },
          {
            icon: 'brush',
            title: 'Material Design',
            subtitle: 'https://material.io/guidelines/'
          },
          {
            icon: 'android',
            title: 'Apache Cordova',
            subtitle: 'https://cordova.apache.org/'
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('info')
    }
  }
</script>

<style lang="stylus" scoped>
</style>