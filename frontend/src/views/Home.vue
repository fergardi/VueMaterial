<template lang="pug">
  md-card(md-with-hover)
    md-card-media-cover(md-solid, v-for="card in cards")
      md-card-media(md-ratio="16:9")
        img(v-bind:src="'img/' + card.media")
        md-ink-ripple
      md-card-area
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
            title: 'Feliz aniversario!',
            subtitle: 'Esto es una gymkana online creada para ti',
            media: 'harrypotter.jpg'
          },
          {
            title: 'Tendrás que viajar',
            subtitle: 'Tienes un coche eléctrico',
            media: 'starwars.jpg'
          },
          {
            title: 'Resolver acertijos',
            subtitle: 'Descuida, eres más lista que yo',
            media: 'lordoftherings.jpg'
          },
          {
            title: 'Luchar contra monstruos',
            subtitle: 'O lo más parecido a la realidad',
            media: 'gameofthrones.jpg'
          },
          {
            title: 'Hablar con NPCs',
            subtitle: 'Recuerda que tienen sentimientos',
            media: 'worldofwarcraft.jpg'
          },
          {
            title: 'Jugar unas partidas',
            subtitle: 'No te vayas a enganchar',
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
      this.$material.setCurrentTheme('blue')
    }
  }
</script>

<style lang="stylus" scoped>
</style>