<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000")
      span Correcto! A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click="close()")
        md-icon done
    md-card(md-with-hover)
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead {{ active.id }}/{{quests.length}}
        md-button.md-icon-button.md-primary
          md-icon help
          md-tooltip(md-direction="left")
            strong Pista: {{ active.clue }}
      md-card-media
        img(v-bind:src="'img/quests/' + active.media")
        md-ink-ripple
      md-card-content {{ active.description }}
        br
        md-chip(v-for="tag in active.tags") {{ tag }}
        md-input-container(md-has-password)
          label Código secreto
          md-input(type="password", required, v-model="password")
</template>

<script>
  import quests from '../fixtures/quests.js'
  import moment from 'moment'
  export default {
    data () {
      return {
        quests: [],
        password: ''
      }
    },
    created () {
      this.$material.setCurrentTheme('quest')
      this.quests = quests
    },
    methods: {
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      save (achievement) {
        achievement.timestamp = moment().format('x')
        if (!this.$getItem(this.password)) this.$setItem(this.password, achievement)
      }
    },
    computed: {
      active () {
        var found = this.quests.find(x => x.password === this.password)
        if (this.password && found) {
          this.save(found)
          this.open()
          return found
        } else {
          return this.quests[0]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>