<template lang="pug">
  md-theme(md-name="splash")
    md-boards(md-swipeable, :md-swipe-distance="50")
      md-theme(v-for="(board, index) in boards", v-bind:md-name="board.theme")
        md-board.no-padding
          md-card
            md-card-media.flex
              .shadow
                img.image(v-bind:src="'img/' + board.image", v-bind:class="board.class")
            md-card-content.flex.padded
              h1.title {{ board.title }}
              p {{ board.subtitle }}        
              router-link(exact, to="/help", v-if="last(index)")
                md-button.md-raised.md-accent.button Jugar
</template>

<script>
  import vuex from '../vuex/vuex'
  export default {
    data () {
      return {
        boards: [
          {
            theme: 'welcome',
            title: 'Frikiversario',
            subtitle: 'He creado un juego totalmente nuevo, exclusivo para tí, como regalo por nuestro primer aniversario juntos',
            image: 'welcome.svg',
            class: 'tossing'
          },
          {
            theme: 'mission',
            title: 'Misiones',
            subtitle: 'Tendrás que superar distintas pruebas, cada una más complicada que la anterior, para poder avanzar en el juego',
            image: 'mission.svg',
            class: 'pulse'
          },
          {
            theme: 'search',
            title: 'Acertijos',
            subtitle: 'Para adivinar la contraseña que desbloquea el siguiente nivel, tienes que entender las pistas y usar todo tu ingenio',
            image: 'search.svg',
            class: 'floating'
          },
          {
            theme: 'travel',
            title: 'Viajes',
            subtitle: 'Tal vez tengas que usar tu nuevo y flamante coche híbrido para resolver algunas de las misiones más complejas',
            image: 'travel.svg',
            class: 'tossing'
          },
          {
            theme: 'monster',
            title: 'Monstruos',
            subtitle: 'Terribles enemigos te aguardan: perros, gatos, plantas y cualquiera que se interponga en tu camino',
            image: 'monster.svg',
            class: 'floating'
          },
          {
            theme: 'explore',
            title: 'Recuerdos',
            subtitle: 'Probablemente tendrás que volver a repasar películas, series o libros que no veías desde hace mucho tiempo',
            image: 'explore.svg',
            class: 'tossing'
          },
          {
            theme: 'chest',
            title: 'Tesoros',
            subtitle: 'Tras completar todas las pruebas y obtener tu puntuación total, encontrarás un misterioso regalo escondido al final',
            image: 'chest.svg',
            class: 'pulse'
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
    transition transform 1s cubic-bezier(0.19, 1, 0.22, 1)
</style>

<style lang="stylus" scoped>
  .image
    padding 50px
    height: 250px
  .shadow
    width 250px
    height 250px
    border-radius 50%
    background-color rgba(0,0,0,0.1)
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
    margin-top 20px
  .padded
    padding 30px
</style>