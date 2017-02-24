<template lang="pug">
  div(v-once)
    md-card
      md-card-media-cover(md-solid, v-for="card in cards")
        md-card-media(md-ratio="16:9")
          md-image(v-bind:md-src="'img/' + card.media")
        md-card-area
          md-card-header.center
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
            subtitle: 'He creado este juego para ti',
            media: 'harrypotter.jpg'
          },
          {
            title: 'Tendrás que viajar',
            subtitle: 'Tienes un coche híbrido',
            media: 'starwars.jpg'
          },
          {
            title: 'Resolver acertijos',
            subtitle: 'Eres mucho más lista que yo',
            media: 'lordoftherings.jpg'
          },
          {
            title: 'Luchar contra monstruos',
            subtitle: 'Perros o incluso gatos',
            media: 'gameofthrones.jpg'
          },
          {
            title: 'Completar misiones',
            subtitle: 'Los NPCs también tienen sentimientos',
            media: 'worldofwarcraft.jpg'
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
</style>