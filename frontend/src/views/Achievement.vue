<template lang="pug">
  md-list.md-triple-line
    md-list-item(v-for="achievement in ordered")
      md-avatar.md-large
        img(v-bind:src="'img/quests/' + achievement.media")
      .md-list-text-container
        strong {{ achievement.title }}
        span.italic {{ achievement.password }}
        span.italic {{ readable(achievement.timestamp) }}
      md-button.md-icon-button.md-list-action(v-on:click="fav(achievement)")
        md-icon(v-bind:class="{ 'md-primary' : achievement.favorite }") star
</template>

<script>
  import moment from 'moment'
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
      },
      readable (timestamp) {
        return moment(parseInt(timestamp)).format('D/M/YYYY HH:mm:ss')
      }
    },
    created () {
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
  .italic
    font-style: italic;
</style>