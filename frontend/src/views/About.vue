<template lang="pug">
  md-card
    md-card-header
      md-avatar.md-large
        md-icon.md-primary info
      md-card-header-text
        .md-title Acerca de
        .md-subhead Cosas legales
    md-card-media
      img(src="img/help.gif")
      md-ink-ripple
    md-card-content Ayuda
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('brown')
    }
  }
</script>

<style lang="stylus" scoped>
</style>