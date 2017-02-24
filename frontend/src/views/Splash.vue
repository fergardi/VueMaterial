<template lang="pug">
  div(v-once)
    md-boards.md-transparent(md-swipeable)
      md-theme(v-for="(board, index) in boards", v-bind:md-name="board.theme")
        md-board.no-padding
          md-card
            md-card-media
              .shadow
                md-image.image(v-bind:md-src="'img/' + board.image")
            md-card-content.flex.padded
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
            theme: 'welcome',
            title: 'Frikiversario',
            subtitle: 'He creado un nuevo juego, exclusivo para tí, como regalo por nuestro primer aniversario',
            image: 'welcome.svg'
          },
          {
            theme: 'mission',
            title: 'Misiones',
            subtitle: 'Tendrás que superar distintas pruebas, cada una más complicada que la anterior, para poder avanzar',
            image: 'mission.svg'
          },
          {
            theme: 'search',
            title: 'Acertijos',
            subtitle: 'Para encontrar la contraseña que desbloquea el siguiente nivel, tienes que usar las pistas y tu ingenio',
            image: 'search.svg'
          },
          {
            theme: 'travel',
            title: 'Viajes',
            subtitle: 'Tal vez tengas que usar tu nuevo y flamante coche híbrido para resolver algunas de las misiones',
            image: 'travel.svg'
          },
          {
            theme: 'monster',
            title: 'Monstruos',
            subtitle: 'Terribles enemigos te aguardan! Perros, gatos, plantas o tal vez incluso ornitorrincos asesinos voladores',
            image: 'monster.svg'
          },
          {
            theme: 'explore',
            title: 'Recuerdos',
            subtitle: 'Probablemente, te darán ganas de volver a ver películas que no veías desde hace mucho tiempo',
            image: 'explore.svg'
          },
          {
            theme: 'chest',
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
      this.$material.setCurrentTheme('default')
    },
    mounted () {
      vuex.state.fullscreen = true
    },
    destroyed () {
      vuex.state.fullscreen = false
    }
  }
</script>

<style lang="stylus">
  .md-boards .md-boards-content .md-boards-wrapper
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
</style>

<style lang="stylus" scoped>
  .image
    padding 20px 50px
    height: 300px
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
    justify-content flex-start
    text-align center
  .md-board
  .md-card
    height 100% !important
  .md-card-media
    display flex
    justify-content center
    align-items center
  .padded
    padding 30px
  .shadow
    margin-top 30px
    width 300px
    height 300px
    border-radius 50%
    background-color rgba(0,0,0,0.1)
</style>