<template lang="pug">
  .app.app-viewport
    md-theme(md-name=theme)
      md-sidenav.md-left.md-fixed(ref='sidebar')
        md-toolbar.md-account-header
          md-list.md-transparent
            md-list-item.md-avatar-list
              md-avatar.md-large
                img(src='https://placeimg.com/64/64/people/8', alt='People')
              span(style='flex: 1')
              md-avatar
                img(src='https://placeimg.com/40/40/people/3', alt='People')
              md-avatar
                img(src='https://placeimg.com/40/40/people/4', alt='People')
            md-list-item
              .md-list-text-container
                span John Doe
                span johndoe@email.com
              md-button.md-icon-button.md-list-action
                md-icon arrow_drop_down
        md-list
          md-list-item.md-primary(@click='$refs.sidebar.toggle()')
            md-icon insert_drive_file
            span My files
          md-list-item(@click='$refs.sidebar.toggle()')
            md-icon people
            span Shared with me
          md-list-item(@click='$refs.sidebar.toggle()')
            md-icon access_time
            span Recent
          md-list-item(@click='$refs.sidebar.toggle()')
            md-icon start
            span Starred
          md-list-item(@click='$refs.sidebar.toggle()')
            md-icon delete
            span Trash
      md-whiteframe(md-elevation='3')
        md-toolbar.md-large
          .md-toolbar-container
            md-button.md-icon-button(@click='$refs.sidebar.toggle()')
              md-icon menu
            span(style='flex: 1')
            md-button.md-icon-button
              md-icon search
            md-button.md-icon-button
              md-icon view_module
          .md-toolbar-container
            h2.md-title My Files {{bla}}
            md-button.md-fab.md-mini
              md-icon add
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
        theme: 'orange'
      }
    }
  }
</script>

<style lang="stylus" scoped>
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