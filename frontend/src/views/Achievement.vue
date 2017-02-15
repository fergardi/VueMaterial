<template lang="pug">
  div
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary star
        md-card-header-text
          .md-title Logros
          .md-subhead Lo que has conseguido hasta ahora
      md-card-media
        md-image(md-src="img/achievement.jpg")
        md-ink-ripple
      md-card-content.no-padding
        .padding
          span Aquí podrás ver todas las misiones que has ido completando durante la gymkana, con sus contraseñas y la fecha en la que fueron descubiertas:
        md-list.md-triple-line
          md-divider
          md-list-item(v-if="!ordered.length")
            md-avatar.md-large
              md-icon.md-primary announcement
            .md-list-text-container
              strong Absolutamente NADA
              span.italic Empieza a resolver acertijos!
              i AHORA
          md-list-item(v-else, v-for="achievement in ordered")
            md-avatar.md-large
              md-icon.md-primary {{ achievement.icon }}
            .md-list-text-container
              strong {{ achievement.title }}
              span {{ achievement.password }}
              i {{ achievement.timestamp | date }}
            md-avatar
              md-icon.md-primary star
            md-divider
</template>

<script>
  export default {
    data () {
      return {
        achievements: []
      }
    },
    created () {
      this.$material.setCurrentTheme('achievement')
      this.$iterateStorage((key, value, index) => {
        this.achievements.push(key)
      })
    },
    computed: {
      ordered () {
        return this.achievements
        .sort((x, y) => parseInt(x.timestamp) - parseInt(y.timestamp))
      }
    }
  }
</script>

<style lang="stylus" scoped>
  span
    display block
</style>