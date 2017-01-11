<template lang="pug">
  md-theme(v-bind:md-name="active.theme")
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
          .md-subhead {{ active.subtitle }}
        md-button.md-icon-button
          md-icon help
          md-tooltip(md-direction="left")
            strong Pista: {{ active.clue }}
      md-card-media
        iframe(v-bind:src="active.media", v-if="!image()")
        img(v-bind:src="'img/quests/' + active.media", v-if="image()")
        md-ink-ripple
      md-card-content {{ active.description }}
        p
          md-chip(v-for="tag in active.tags") {{ tag }}
        md-input-container(md-has-password)
          label Código secreto
          md-input(type="password", required, v-model="password")
</template>

<script>
  import quests from '../fixtures/quests.js'
  export default {
    data () {
      return {
        quests: [],
        password: ''
      }
    },
    created () {
      this.quests = quests
    },
    methods: {
      image () {
        return (
          this.active.media.toLowerCase().indexOf('.jpg') !== -1 || this.active.media.toLowerCase().indexOf('.png') !== -1 || this.active.media.toLowerCase().indexOf('.bmp') !== -1 || this.active.media.toLowerCase().indexOf('.jpeg') !== -1 || this.active.media.toLowerCase().indexOf('.gif') !== -1
        )
      },
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      save () {
        this.$setItem(this.password, this.password)
      }
    },
    computed: {
      active () {
        if (this.password && this.quests.find(x => x.password === this.password)) {
          this.save()
          this.open()
          return this.quests.find(x => x.password === this.password)
        } else {
          return this.quests[0]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>