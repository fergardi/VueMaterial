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
      md-card-content.no-padding
        .padding
          span Aquí podrás ver todas las misiones que has ido completando durante la gymkana, con sus contraseñas y la fecha en la que fueron descubiertas:
        md-list.md-triple-line
          md-divider
          md-list-item(v-if="!ordered.length")
            md-avatar.md-large
              md-icon.md-primary warning
            .md-list-text-container
              strong Absolutamente NADA
              span.italic Empieza a resolver acertijos!
              i AHORA
            md-avatar
              md-icon.md-primary star_border
          md-list-item(v-else, v-for="achievement in ordered")
            md-avatar.md-large
              md-icon.md-primary {{ achievement.icon }}
            .md-list-text-container
              strong {{ achievement.title }}
              span {{ achievement.password }}
              i {{ achievement.timestamp | date }}
            md-avatar(v-if="!achievement.cheat")
              md-icon.md-primary star
              md-tooltip(md-direction="left") Sin ayuda
            md-avatar(v-else)
              md-icon.md-primary star_half
              md-tooltip(md-direction="left") Con ayuda
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
      this.$iterateStorage((value, key, index) => {
        if (key !== 'LAST') this.achievements.push(value)
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
  span + span
    margin-top 1em
</style>