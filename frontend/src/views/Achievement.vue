<template lang="pug">
  div

    md-dialog(ref="achievement")
      md-card
        md-card-header
          md-avatar.md-large
            md-icon.md-primary {{ selected.icon }}
          md-card-header-text
            .md-title {{ selected.title }}
        md-card-media
          md-image(v-bind:md-src="'img/quests/' + selected.media")
        md-card-content
          span {{ selected.description }}

    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary star
        md-card-header-text
          .md-title Puntuación total
          .md-subhead Lo que has conseguido hasta ahora
      md-card-media
        md-image(md-src="img/achievement.jpg")
      md-card-content.no-padding
        .padding
          span Aquí podrás ver todos los niveles que has ido completando durante el juego, con sus contraseñas, la fecha en la que fueron descubiertas y sus puntos.
          span.center Progreso total
          md-progress(v-bind:md-progress="achievements.length")
          span.center {{ achievements.length }} / 100
          span.center Puntuación total
          md-progress(v-bind:md-progress="score / 100")
          span.center {{ score }} / 10000
        md-list.md-triple-line
          md-divider
          md-list-item(v-for="achievement in ordered", v-on:click.native="select(achievement)")
            md-avatar.md-large
              md-icon.md-primary {{ achievement.icon }}
            .md-list-text-container
              strong {{ achievement.title }}
              span {{ achievement.password }}
              i {{ achievement.timestamp | date }}
            md-avatar(v-if="!achievement.cheat")
              md-icon.md-primary star
              md-tooltip(md-direction="left") +100
            md-avatar(v-else)
              md-icon.md-primary star_half
              md-tooltip(md-direction="left") +50
            md-divider
</template>

<script>
  export default {
    data () {
      return {
        achievements: [],
        selected: {
          media: '../achievement.jpg'
        }
      }
    },
    created () {
      this.$material.setCurrentTheme('achievement')
      this.$material.inkRipple = false
      this.$iterateStorage((value, key, index) => {
        if (key !== 'LAST') this.achievements.push(value)
      })
    },
    methods: {
      open () {
        this.$refs['achievement'].open()
      },
      select (achievement) {
        this.selected = achievement
        this.open()
      }
    },
    computed: {
      ordered () {
        return this.achievements
        .sort((first, second) => parseInt(first.timestamp) - parseInt(second.timestamp))
      },
      score () {
        return this.achievements
        .reduce((total, achievement) => total + (achievement.cheat ? 50 : 100), 0)
      }
    },
    destroyed () {
      this.$material.inkRipple = true
    }
  }
</script>

<style lang="stylus" scoped>
  span
    display block
  span + span
    margin-top 1em
  .md-dialog
    .md-card
      .md-card-header
        padding 0
        .md-card-header-text
          display flex
          align-items center
          justify-content flex-start
        .md-title
          margin 0 !important
      .md-card-content
        font-size 0.85em
        line-height 1.5em
</style>