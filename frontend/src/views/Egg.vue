<template lang="pug">
  div(v-once)
    md-card
      md-card-media.flex
        .shadow
          img.image.pulse(src="img/heart.svg")
      md-card-content.flex.padded
        h1.title Frikiversario
        p Hecho con cariño por <b>@fergardi</b> para <b>@vivi</b>
        p 2016 - 2017
        router-link(exact, to="/quest")
          md-button.md-raised.md-accent.button Volver
</template>

<script>
  import vuex from '../vuex/vuex'
  export default {
    created () {
      this.$material.setCurrentTheme('egg')
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
  span
    display block
  span + span
    margin-top 0.5em
  .image
    padding 50px
    height: 275px
  .shadow
    width 275px
    height 275px
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
  .md-card
    height 100% !important
  .md-card-media
    display flex
    justify-content center
    align-items center
    margin-top 20px
  .md-card-content
    h1
    p
      color white
  .padded
    padding 30px
</style>