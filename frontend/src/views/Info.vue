<template lang="pug">
  div(v-once)
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary help
        md-card-header-text
          .md-title Información
          .md-subhead Datos técnicos
      md-card-media
        md-image(md-src="img/info.jpg")
      md-card-content.no-padding
        .padding
          span Espero que te haya gustado la idea. Además, me ha servido para aprender a desarrollar apps móviles. Y también he trabajado con personas de todo el mundo y mejorado las librerías que he usado para crear este juego. Me he convertido en colaborador oficial en un proyecto muy interesante.
          span Por si tienes curiosidad, lo he creado usando:
        md-list.md-double-line
          md-divider
          md-list-item(v-for="item in items")
            md-avatar.md-large
              md-icon.md-primary {{ item.icon }}
            .md-list-text-container
              strong {{ item.title }}
              span {{ item.subtitle }}
            md-divider
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            icon: 'android',
            title: 'Apache Cordova',
            subtitle: 'https://cordova.apache.org/'
          },
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
  span
    display block
  span + span
    margin-top 0.5em
</style>