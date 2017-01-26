<template lang="pug">
  div
    md-card(md-with-hover)
      md-card-media-cover(md-solid, v-for="(card, index) in cards")
        md-card-media(md-ratio="16:9")
          img(v-bind:src="'img/' + card.media")
          md-ink-ripple
        md-card-area
          router-link.md-primary.md-fab.md-fab-bottom-right.floating(tag="md-button", to="/quest", v-if="index >= cards.length -1")
            md-icon play_arrow
          md-card-header
            .md-title {{ card.title }}
            .md-subhead {{ card.subtitle }}
</template>

<script>
  export default {
    data () {
      return {
        cards: [
          {
            title: 'Feliz aniversario',
            subtitle: 'Esto es una gymkana creada para ti',
            media: 'harrypotter.jpg'
          },
          {
            title: 'Tendrás que viajar',
            subtitle: 'Tienes un coche nuevo',
            media: 'starwars.jpg'
          },
          {
            title: 'Resolver acertijos',
            subtitle: 'Eres más lista que yo',
            media: 'lordoftherings.jpg'
          },
          {
            title: 'Luchar contra monstruos',
            subtitle: 'Ornitorrincos asesinos',
            media: 'gameofthrones.jpg'
          },
          {
            title: 'Hablar con NPCs',
            subtitle: 'Recuerda que tienen sentimientos',
            media: 'worldofwarcraft.jpg'
          },
          {
            title: 'Jugar unas partidas',
            subtitle: 'No te vicies demasiado',
            media: 'games.jpg'
          },
          {
            title: 'Y encontrar tesoros',
            subtitle: 'Tomar prestado no es robar',
            media: 'darkmatherials.jpg'
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('home')
    }
  }
</script>

<style lang="stylus" scoped>
  .floating
    position: absolute
    top: -35px
</style>