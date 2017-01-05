<template lang="pug">
  md-sidenav.md-left.md-fixed(ref="sidebar")
    md-toolbar.md-account-header
      md-list.md-transparent
        md-list-item.md-avatar-list.center
          md-avatar.md-large
            img(src="dist/img/fergardi.png")
          span(style="flex: 1")
          md-avatar.md-large
            img(src="dist/img/vivi.png")
    md-list
      router-link(to="/home")
        md-list-item(@click="$refs.sidebar.toggle()")
          md-icon home
          span Inicio
      router-link(to="/quest")
        md-list-item.md-primary(@click="$refs.sidebar.toggle()")
          md-icon.md-primary announcement
          span Misiones
      router-link(to="/help")
        md-list-item(@click="$refs.sidebar.toggle()")
          md-icon help
          span Ayuda
      router-link(to="/about")
        md-list-item(@click="$refs.sidebar.toggle()")
          md-icon info
          span Info
</template>

<script>
  export default {
    mounted () {
      this.$parent.$refs.sidebar = this.$refs.sidebar;
    }
  }
</script>

<style lang="stylus" scoped>
  .center
    justify-content: center;
</style>
