<template lang="pug">
  md-sidenav.md-left.md-fixed(ref='sidebar')
    md-toolbar.md-account-header
      md-list.md-transparent
        md-list-item.md-avatar-list
          md-avatar.md-large
            img(src='https://placeimg.com/64/64/people/8', alt='People')
        md-list-item
          .md-list-text-container
            span Virginia Álvarez Fernández
            span vivi@email.com
          md-button.md-icon-button.md-list-action
            md-icon arrow_drop_down
    md-list
      router-link(to='/home')
        md-list-item.md-primary(@click='$refs.sidebar.toggle()')
          md-icon home
          span Inicio
      router-link(to='/quest')
        md-list-item(@click='$refs.sidebar.toggle()')
          md-icon announcement
          span Misiones
      router-link(to='/help')
        md-list-item(@click='$refs.sidebar.toggle()')
          md-icon help
          span Ayuda
      router-link(to='/about')
        md-list-item(@click='$refs.sidebar.toggle()')
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
</style>
