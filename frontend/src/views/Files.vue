<template lang="pug">
  md-list.md-double-line
    md-subheader.md-inset Folders
    md-list-item
      md-avatar.md-avatar-icon
        md-icon folder
      .md-list-text-container
        span Photos
        p Jan 9, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
    md-list-item
      md-avatar.md-avatar-icon
        md-icon folder
      .md-list-text-container
        span Recipes
        p Jan 17, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
    md-list-item
      md-avatar.md-avatar-icon
        md-icon folder
      .md-list-text-container
        span Work
        p Jan 28, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
      md-divider.md-inset
    md-subheader.md-inset Files
    md-list-item
      md-avatar.md-avatar-icon.md-primary
        md-icon insert_drive_file
      .md-list-text-container
        span Vacation Itinerary
        p Jan 20, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
    md-list-item
      md-avatar.md-avatar-icon.md-primary(md-theme='orange')
        md-icon collections
      .md-list-text-container
        span Kitchen Remodel
        p Jan 10, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
    md-list-item
      md-avatar.md-avatar-icon.md-primary(md-theme='green')
        md-icon view_list
      .md-list-text-container
        span Grocery Shop
        p Jan 10, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
    md-list-item
      md-avatar.md-avatar-icon.md-primary(md-theme='orange')
        md-icon collections
      .md-list-text-container
        span Weekend Pictures
        p Jan 10, 2014
      md-button.md-icon-button.md-list-action
        md-icon info
</template>

<script>
  export default {
    data () {
      return {
        files: [
          {name:'Name1'},
          {name:'Name2'}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>