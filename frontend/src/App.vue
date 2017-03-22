<template lang="pug">
  .app
    md-whiteframe
      md-toolbar.md-dense(v-once, v-if="!fullscreen")
        md-button.md-icon-button(v-on:click.native="toggle()")
          md-icon menu
        .flex
        h2.md-title(style="flex: 1") Frikiversario
        .flex
        md-button.md-icon-button.hidden
          md-icon search
    md-sidenav.md-left.md-fixed(ref="sidebar", md-swipeable, v-once, v-if="!fullscreen")
      md-whiteframe
        md-toolbar.md-account-header
          md-list.md-transparent
            router-link(exact, to="/splash")
              md-list-item.md-avatar-list.center
                .flex
                md-avatar.md-large
                  img(src="img/fergardi.jpg")
                md-avatar.md-large
                  img(src="img/vivi.jpg")
                .flex
            router-link(exact, to="/egg")
              md-list-item
                .flex
                h2.md-title Frikiversario
                .flex
      md-list
        md-list-item(v-for="item in items")
          router-link(exact, v-bind:to="item.url")
            md-avatar
              md-icon.md-primary {{ item.icon }}
            span {{ item.title }}
      small.flex.center.signature &copy;fergardi2017
    .main
      router-view#scroll.content.animation.fadeIn
</template>

<script>
  import localforage from 'localforage'
  import quests from './data/quests.js'
  import moment from 'moment'
  import vuex from './vuex/vuex.js'
  export default {
    data () {
      return {
        items: [
          {
            url: '/help',
            icon: 'school',
            title: 'Tutorial'
          },
          {
            url: '/achievement',
            icon: 'star',
            title: 'Puntuación'
          },
          {
            url: '/quest',
            icon: 'lock',
            title: 'Niveles'
          },
          {
            url: '/info',
            icon: 'help',
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
      var password = 'Pixels'
      var found = quests.find(quest => quest.password === password)
      if (found) {
        this.$getItem(password)
        .then((item) => {
          if (!item) {
            found.timestamp = moment().format('x')
            found.cheat = false
            this.$setItem('LAST', found)
            this.$setItem(password, found)
          }
        })
      }
    },
    methods: {
      toggle () {
        if (this.$refs.sidebar) this.$refs.sidebar.toggle()
      },
      close () {
        if (this.$refs.sidebar) this.$refs.sidebar.close()
      }
    },
    computed: {
      fullscreen () {
        return vuex.state.fullscreen
      }
    }
  }
</script>

<style lang="stylus">
  body
    background-color #242f39
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
    height: 100%
  .md-chip
    margin 2px
  .md-toolbar.md-account-header
    a:not(.md-button)
      color inherit
    .md-avatar-list
      .md-list-item-container
        align-items center
  .router-link-active
    background-color rgba(153, 153, 153, 0.2)
  .flex
    display flex
    flex 1
  .md-avatar-list
    .md-avatar
      .md-icon
        border-radius 50%
  .md-card
    border-radius 0
    border none
    box-shadow none
    .md-card-header
      padding 5px
      .md-avatar
        margin 0
  .md-dialog
    max-width 90%
    max-height 90%
  .no-padding
    padding 0 !important
  .padding
    padding 16px
  .center
    align-items center
    text-align center
    justify-content center
  .hidden
    visibility hidden
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
  /* ANIMATION TRANSITION */
  /*base code*/
  .animation
    -webkit-animation-duration 1s
    animation-duration 1s
    -webkit-animation-fill-mode both
    animation-fill-mode both
  .animation.infinite
    -webkit-animation-iteration-count infinite
    animation-iteration-count infinite
  .animation.slower
    -webkit-animation-duration 2s
    animation-duration 2s
  .animation.faster
    -webkit-animation-duration 0.5s
    animation-duration 0.5s
  /*the animation definition*/
  @keyframes fadeIn
    0%
      opacity 0
    100%
      opacity 1
  .fadeIn
    -webkit-animation-name fadeIn
    animation-name fadeIn
</style>