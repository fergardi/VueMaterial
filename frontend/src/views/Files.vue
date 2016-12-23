<template lang="pug">
  md-theme
    md-whiteframe(md-elevation='3')
      md-toolbar.md-medium
        md-button.md-icon-button(@click='$parent.$refs.sidebar.toggle()')
          md-icon menu
        h2.md-title(style='flex: 1') My Files
        md-button.md-fab.md-mini
          md-icon add
        md-button.md-icon-button
          md-icon search
        md-button.md-icon-button
          md-icon view_module
    md-list.md-double-line
      md-subheader.md-inset Examples
      md-list-item(v-for='file in files')
        md-avatar.md-avatar-icon
          md-icon folder
        .md-list-text-container
          span {{ file.name }}
          p {{ file.date }}
        md-button.md-icon-button.md-list-action
          md-icon info
</template>

<script>
  export default {
    data () {
      return {
        files: [
          { name:'Name1', date: new Date() },
          { name:'Name2', date: new Date() }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-list
    height: 100%;
    overflow: auto;
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
  .md-list-action .md-icon
    color: lightgray;
  .md-avatar-icon .md-icon
    color: #fff !important;
  .md-account-header
    .md-list-item:hover .md-button:hover
      background-color: inherit;
    .md-avatar-list .md-list-item-container:hover
      background: none !important;
</style>