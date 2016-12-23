<template lang="pug">
  div
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
        router-link(to='/files')
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
      md-toolbar.md-medium
        md-button.md-icon-button(@click='$refs.sidebar.toggle()')
          md-icon menu
        h2.md-title(style='flex: 1') My Files
        md-button.md-fab.md-mini
          md-icon add
        md-button.md-icon-button
          md-icon search
        md-button.md-icon-button
          md-icon view_module
</template>

<script>
</script>

<style lang="stylus" scoped>
</style>