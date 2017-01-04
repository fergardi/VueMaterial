<template lang="pug">
  .app
    md-whiteframe(md-elevation="3")
      md-toolbar
        md-button.md-icon-button(@click='$refs.sidebar.toggle()')
          md-icon menu
        h2.md-title(style='flex: 1') Annyversary
    sidebar
    .main
      router-view.content
</template>

<script>
  import sidebar from './views/Sidebar.vue'
  export default {
    components: { sidebar }
  }
</script>

<style lang="stylus">
  body
    background: url("https://s-media-cache-ak0.pinimg.com/originals/50/b0/31/50b03186899160af37b930057fe69c46.jpg") no-repeat center center fixed;
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
  iframe
    height: 250px;
    min-height: 250px;
  .main
    overflow: auto;
    height: 100%;
  .content
    margin: 15px;
  .md-card
    opacity: 0.9;
</style>