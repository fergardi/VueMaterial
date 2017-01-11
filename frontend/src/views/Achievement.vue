<template lang="pug">
  md-list
    md-list-item(v-for="achievement in achievements")
      md-avatar.md-large
        img(v-bind:src="'img/quests/' + unlock(achievement).media")
      span {{ unlock(achievement).title }}
      md-button.md-icon-button.md-list-action
        md-icon.md-primary star
</template>

<script>
  import quests from '../fixtures/quests.js'
  export default {
    data () {
      return {
        quests: [],
        achievements: []
      }
    },
    methods: {
      unlock (password) {
        return this.quests.find(x => x.password === password)
      }
    },
    created () {
      this.quests = quests
      this.$iterateStorage((value, key, index) => {
        this.achievements.push(key)
      })
    }
  }
</script>

<style lang="stylus" scoped>
</style>