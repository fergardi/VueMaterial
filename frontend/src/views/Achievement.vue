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
        md-image(md-src="img/achievement.gif")
        md-ink-ripple
      md-card-content
        md-list.md-double-line
          md-list-item(v-if="!ordered.length")
            router-link(to="/quest")
              .md-list-text-container
                strong Absolutamente NADA
                span.italic Empieza a resolver acertijos!
              md-button.md-icon-button.md-list-action
                md-icon.md-primary announcement
          md-list-item(v-for="(achievement, index) in ordered")
            md-avatar.md-large
              md-image(v-bind:md-src="'img/quests/' + achievement.media")
            .md-list-text-container
              strong {{ achievement.title }}
              i {{ achievement.timestamp | date }}
            md-button.md-icon-button.md-list-action(v-on:click="fav(achievement)")
              md-icon(v-bind:class="{ 'md-primary' : achievement.favorite }") favorite
            md-divider.md-inset(v-if="index < ordered.length - 1")
</template>

<script>
  export default {
    data () {
      return {
        achievements: []
      }
    },
    methods: {
      fav (achievement) {
        achievement.favorite = !achievement.favorite
        this.$setItem(achievement.password, achievement)
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
</style>