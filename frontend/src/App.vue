<template lang="pug">
  .app
    md-whiteframe(md-elevation="3", v-once)
      md-toolbar
        md-button.md-icon-button(v-on:click="toggle()")
          md-icon menu
        h2.md-title(style="flex: 1") Annyversary
        router-link.md-icon-button(tag="md-button", to="/help")
          md-icon help
        router-link.md-icon-button(tag="md-button", to="/info")
          md-icon info
    md-sidenav.md-left.md-fixed(ref="sidebar", v-once)
      md-toolbar
        md-list.md-transparent
          md-list-item.md-avatar-list.center(v-on:click="toggle()")
            md-avatar.md-large
              md-image(md-src="img/vivi.jpg")
            h2.md-title(style="flex: 1") Annyversary
            md-avatar.md-large
              md-image(md-src="img/fergardi.jpg")
      md-list
        md-list-item(v-on:click="toggle()")
          router-link(to="/home")
            md-icon.md-primary home
            span Inicio
        md-list-item(v-on:click="toggle()")
          router-link(to="/quest")
            md-icon.md-primary announcement
            span Misiones
        md-list-item(v-on:click="toggle()")
          router-link(to="/achievement")
            md-icon.md-primary star
            span Logros
        md-list-item(v-on:click="toggle()")
          router-link(to="/help")
            md-icon.md-primary help
            span Ayuda
        md-list-item(v-on:click="toggle()")
          router-link(to="/info")
            md-icon.md-primary info
            span Información
    .main      
      router-view#scroll.content.animated.fadeIn
</template>

<script>
  import localforage from 'localforage'
  export default {
    created () {
      this.$storageConfig({
        driver: localforage.LOCALSTORAGE,
        name: 'Vue',
        storeName: 'Achievements',
        description: 'Vue Annyversary database'
      })
    },
    methods: {
      toggle () {
        this.$refs.sidebar.toggle()
      }
    }
  }
</script>

<style lang="stylus">
  body
    background: url("img/background.jpg") no-repeat center center fixed
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover
    box-sizing: border-box
  html
  body
  .app
    height: 100%
    overflow: hidden
  .app
    display: flex
    flex-flow: column
  .main
    overflow: auto
    height: 100%
  .content
    margin: 0 !important
  .md-chip
    margin-right: 5px
  .md-avatar
    .md-image
      border-radius: 50%
  .md-toolbar
    h2.md-title
      color: white
  @media screen and (min-width: 768px)
    .content
      margin: 0 25% !important
  @media screen and (min-width: 1024px)
    .content
      margin: 0 33% !important
</style>