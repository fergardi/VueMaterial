<template lang="pug">
  md-card.md-primary(md-with-hover)
    md-card-header
      md-avatar.md-large
        img(src="http://www.ebcwebstore.com/images/Icon-Circle-Exclamation.png")
      md-card-header-text
        .md-title Titulo de la Mision
        .md-subhead Breve explicacion de la mision
      md-button.md-icon-button.md-list-action
        md-icon.md-primary place
    md-card-media
      iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11751.13290874479!2d-5.59323995!3d42.581123350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1483539569271", width="100%", height="300px" frameborder="0", style="border:0")
    md-card-content Texto explicativo de la mision.
</template>

<script>
</script>

<style lang="stylus" scoped>
</style>