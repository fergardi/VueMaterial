<template lang="pug">
  div(v-once)
    md-boards.md-transparent(md-swipeable)
      md-board.padded(v-for="(board, index) in boards")
        md-card
          md-card-media
            md-image.image(v-bind:md-src="'img/' + board.image")
          md-card-content.flex
            h1.title {{ board.title }}
            p {{ board.subtitle }}        
            router-link(exact, to="/help", v-if="last(index)")
              md-button.md-raised.md-accent.button Comenzar
</template>

<script>
  import vuex from '../vuex/vuex.js'
  export default {
    data () {
      return {
        boards: [
          {
            title: 'Frikiversario',
            subtitle: 'He creado un nuevo juego, exclusivo para tí, como regalo por nuestro primer aniversario juntos',
            image: 'heart.svg'
          },
          {
            title: 'Misiones',
            subtitle: 'Tendrás que superar distintas pruebas, cada una más complicada que la anterior, para avanzar en el juego',
            image: 'quest.svg'
          },
          {
            title: 'Acertijos',
            subtitle: 'Para encontrar la contraseña que desbloquea el siguiente nivel, tienes que usar tu ingenio y las pistas disponibles',
            image: 'riddle.svg'
          },
          {
            title: 'Viajes',
            subtitle: 'Tal vez tengas que usar tu nuevo y flamante coche híbrido para resolver algunas de las pruebas',
            image: 'travel.svg'
          },
          {
            title: 'Monstruos',
            subtitle: 'Terribles enemigos te aguardan! Perros, gatos, plantas o tal vez incluso temibles ornitorrincos asesinos voladores',
            image: 'monster.svg'
          },
          {
            title: 'Tesoros',
            subtitle: 'Tras completar todas las pruebas y obtener tu puntuación final, encontrarás un misterioso regalo escondido',
            image: 'chest.svg'
          }
        ]
      }
    },
    methods: {
      last (index) {
        return index === this.boards.length - 1
      }
    },
    created () {
      this.$material.setCurrentTheme('splash')
    },
    mounted () {
      vuex.state.fullscreen = true
    },
    destroyed () {
      vuex.state.fullscreen = false
    }
  }
</script>

<style lang="stylus" scoped>
  .padded
    padding 25px
  .image
    padding 10px 50px
    height: 300px
  .image
  .title
  .text
  .button
    margin-top 15px
  .title
    font-size 32px
    font-weight 500
  .flex
    display flex
    flex-direction column
    align-items center
    justify-content center
    text-align center
</style>