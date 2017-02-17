<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="3000", md-position="top center", v-once)
      span Correcto! Se ha guardado en tus Logros. A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click.native="close()")
        md-icon done
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Acertijo {{ index }} de {{ quests.length }}
        md-switch.md-accent(v-model="help") Pista
      md-card-media
        md-image(v-bind:md-src="'img/quests/' + active.media")
      md-card-content
        span {{ active.description }}
        p
          md-chip.md-primary(v-for="tag in active.tags") {{ tag }}
          template(v-for="clue in active.clues")
            md-chip.md-accent.animated.fadeIn(v-show="help") {{ clue }}
        md-input-container.md-input-invalid(md-has-password)
          label Código
          md-input(type="password", v-model="password", required)
          span.md-error Respeta mayúsculas pero ignora signos de puntuación.
</template>

<script>
  import moment from 'moment'
  import data from '../data/quests.js'
  export default {
    data () {
      return {
        help: false,
        cheat: false,
        password: '',
        quests: [],
        active: null
      }
    },
    created () {
      this.$material.setCurrentTheme('quest')
      this.quests = data
      this.active = this.quests[0]
      this.$getItem('LAST')
      .then((value) => {
        this.active = value ? this.quests.find(quest => quest.password === value.password) || this.quests[0] : this.quests[0]
      })
    },
    methods: {
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      debug () {
        var index = this.quests.findIndex(quest => quest.password === this.active.password)
        this.password = this.quests[index + 1].password
      }
    },
    watch: {
      password (password) {
        var found = this.quests.find(quest => quest.password === password)
        if (found) {
          this.$getItem(password)
          .then((item) => {
            if (!item) {
              found.timestamp = moment().format('x')
              found.cheat = this.cheat
              this.$setItem('LAST', found)
              this.$setItem(password, found)
              this.open()
            }
            this.cheat = false
          })
          if (document.getElementById('scroll')) document.getElementById('scroll').scrollIntoView(true)
          this.help = false
          this.active = found
        }
      },
      help (boolean) {
        if (boolean) this.cheat = true
      }
    },
    computed: {
      index () {
        return this.quests.findIndex(quest => quest.password === this.active.password) + 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-switch
    align-items center
  .md-chip.md-primary
    background-color #673ab7
    color white
  .md-chip.md-accent
    background-color #4caf50
    color white
</style>