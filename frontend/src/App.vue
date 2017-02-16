<template lang="pug">
  .app
    md-toolbar(v-once)
      md-button.md-icon-button(v-on:click.native="toggle()")
        md-icon menu
      h2.md-title(style="flex: 1") Annyversary
    md-sidenav.md-left.md-fixed(md-swipeable, ref="sidebar", v-once)
      md-toolbar.md-account-header
        md-list.md-transparent
          md-list-item.md-avatar-list.center(v-on:click.native="toggle()")
            .flex
            md-avatar.md-large
              md-image(md-src="img/fergardi.jpg")
            md-avatar.md-large
              md-image(md-src="img/vivi.jpg")
            .flex
          md-list-item
            .flex
            h2.md-title Annyversary
            .flex
      md-list
        md-list-item(v-for="item in items")
          router-link(exact, v-bind:to="item.url")
            md-avatar
              md-icon.md-primary {{ item.icon }}
            span {{ item.title }}
      small.flex.center.signature &copy;fergardi2017
    .main
      router-view#scroll.content.animated.fadeIn
</template>

<script>
  import localforage from 'localforage'
  export default {
    data () {
      return {
        items: [
          {
            url: '/home',
            icon: 'cake',
            title: 'Bienvenida'
          },
          {
            url: '/quest',
            icon: 'extension',
            title: 'Acertijos'
          },
          {
            url: '/achievement',
            icon: 'star',
            title: 'Logros'
          },
          {
            url: '/help',
            icon: 'help',
            title: 'Ayuda'
          },
          {
            url: '/info',
            icon: 'school',
            title: 'Información'
          }
        ]
      }
    },
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
      },
      close () {
        this.$refs.sidebar.close()
      }
    }
  }
</script>

<style lang="stylus">
  body
    /*
    background url("img/background.jpg") no-repeat center center fixed
    -webkit-background-size cover
    -moz-background-size cover
    -o-background-size cover
    background-size cover
    box-sizing border-box
    */
    background-color #242f39 !important
  html
  body
  .app
    height 100%
    overflow hidden
  .app
    display flex
    flex-flow column
  .main
    overflow auto
    height 100%
  .content
    margin 0 !important
  .md-chip
    margin-right 5px
  .md-toolbar.md-account-header .md-avatar-list .md-list-item-container
    align-items center
  .router-link-active
    background-color rgba(153, 153, 153, 0.2);
  .flex
    display flex
    flex 1
  .md-avatar-list .md-avatar .md-icon
    border-radius: 50%
  .md-card
    border none
    box-shadow none
  .no-padding
    padding 0 !important
  .padding
    padding 16px
  .center
    align-items center
    justify-content center
  .signature
    width 100%
    position absolute
    bottom 0
    margin-bottom 1em
  @media screen and (min-width 768px)
    .content
      margin 0 25% !important
  @media screen and (min-width 1024px)
    .content
      margin 0 33% !important
</style>