<template lang="pug">
  .app
    md-whiteframe(md-elevation="5")
      md-toolbar
        md-button.md-icon-button(@click="toggle()")
          md-icon menu
        h2.md-title Annyversary
        span(style="flex: 1")
        md-button.md-icon-button
          md-icon help
        md-button.md-icon-button
          md-icon info
    md-sidenav.md-left.md-fixed(ref="sidebar")
      md-toolbar.md-account-header
        md-list.md-transparent
          md-list-item.md-avatar-list.center
            md-avatar.md-large
              img(src="img/fergardi.jpg")
            span(style="flex: 1")
            md-avatar.md-large
              img(src="img/vivi.jpg")
      md-list
        router-link(to="/home")
          md-list-item(@click="toggle()")
            md-icon home
            span Inicio
        router-link(to="/quest")
          md-list-item(@click="toggle()")
            md-icon announcement
            span Misiones
        router-link(to="/help")
          md-list-item(@click="toggle()")
            md-icon help
            span Ayuda
        router-link(to="/about")
          md-list-item(@click="toggle()")
            md-icon info
            span Info
    .main
      router-view.content.animated.fadeIn
</template>

<script>
  export default {
    methods: {
      toggle () {
        this.$refs.sidebar.toggle()
      }
    }
  }
</script>

<style lang="stylus">
  body
    background: url("img/background.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    box-sizing: border-box;
  html
  body
  .app
    height: 100%;
    overflow: hidden;
  .app
    display: flex;
    flex-flow: column;
  .main
    overflow: auto;
    height: 100%;
  .content
    margin: 16px 8px !important;
  .md-chip + .md-chip
    margin-left: 5px;
  iframe
  img
    width: 100%;
    border: none;
  img
    height: auto;
  iframe
    height: 350px;
    max-height: 350px;
  @media screen and (min-width: 768px)
    .content
      margin: 16px 25% !important;
  @media screen and (min-width: 1024px)
    .content
      margin: 16px 33% !important;
</style>