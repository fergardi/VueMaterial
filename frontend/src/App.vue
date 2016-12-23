<template lang="pug">
  .app.app-viewport
    md-theme
      layout
      router-view
</template>

<script>
  import layout from './views/Layout.vue'
  export default {
    components: { layout }
  }
</script>

<style lang="stylus">
  html,
  body,
  .app-viewport
    height: 100%;
    overflow: hidden;
  .app-viewport
    display: flex;
    flex-flow: column;
  .md-fab
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
    .md-icon
      color: #fff;
  .md-title
    padding-left: 8px;
    color: #fff;
  .md-list
    overflow: auto;
  .md-list-action .md-icon
    color: rgba(#000, .26);
  .md-avatar-icon .md-icon
    color: #fff !important;
  .md-sidenav .md-list-text-container > :nth-child(2)
    color: rgba(#fff, .54);
  .md-account-header
    .md-list-item:hover .md-button:hover
      background-color: inherit;
    .md-avatar-list .md-list-item-container:hover
      background: none !important;
</style>