<template lang="pug">
  div(v-once)
    md-boards.md-transparent(md-auto, :md-duration="5000", md-infinite)
      md-board.padded(v-for="(board, index) in boards")
        md-card
          md-card-media
            md-image.image(v-bind:md-src="board.image")
          md-card-content.flex
            h2.md-title.title {{ board.title }}
            p.text {{ board.text }}        
            router-link(exact, to="/home", v-if="last(index)")
              md-button.md-raised.md-primary.button EMPEZAR
</template>

<script>
  import vuex from '../vuex/vuex.js'
  export default {
    data () {
      return {
        boards: [
          {
            image: 'https://image.flaticon.com/icons/svg/324/324579.svg',
            title: 'FELICIDADES',
            text: 'text'
          },
          {
            image: 'https://image.flaticon.com/icons/svg/207/207786.svg',
            title: 'BATALLAS',
            text: 'text'
          },
          {
            image: 'https://image.flaticon.com/icons/svg/134/134892.svg',
            title: 'MISIONES',
            text: 'text'
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
    padding 50px 100px
  .image
  .title
  .text
  .button
    margin-top: 25px
  .flex
    display flex
    flex-direction column
    align-items center
    justify-content center
    text-align center
</style>