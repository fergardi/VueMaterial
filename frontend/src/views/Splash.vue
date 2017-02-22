<template lang="pug">
  div(v-once)
    md-boards.md-transparent(md-auto="true", :md-duration="10000", md-infinite)
      md-board.padded(v-for="(board, index) in boards")
        md-card
          md-card-media
            md-image.image(v-bind:md-src="'img/' + board.image")
          md-card-content.flex
            h1.title {{ board.title }}
            p {{ board.text }}        
            router-link(exact, to="/home", v-if="last(index)")
              md-button.md-raised.md-accent.button jugar
</template>

<script>
  import vuex from '../vuex/vuex.js'
  export default {
    data () {
      return {
        boards: [
          {
            image: 'heart.svg',
            title: 'Annyversary',
            text: 'He creado un nuevo juego exclusivo para tí como regalo por nuestro primer aniversario juntos'
          },
          {
            image: 'quest.svg',
            title: 'Misiones',
            text: 'Tendrás que superar distintas pruebas, como acertijos y viajes, para avanzar en el juego'
          },
          {
            image: 'chest.svg',
            title: 'Tesoros',
            text: 'Tras completarlas todas y obtener tu puntuación, encontrarás un misterioso regalo escondido'
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