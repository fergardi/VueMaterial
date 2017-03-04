<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000", md-position="top center")
      span {{ message }}
      md-button.md-accent(v-on:click.native="close()")
        md-icon(v-if="!cheat") star
        md-icon(v-else) star_half
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Nivel {{ index }} de {{ total }}
        md-switch.md-accent(v-model="help", v-bind:disabled="cheat")
      md-card-media
        md-image(v-bind:md-src="'img/quests/' + active.media", v-on:click.native="debug()")
      md-card-content
        span {{ active.description }}
        p
          md-chip.md-primary(v-for="tag in active.tags") {{ tag }}
          template(v-for="clue in active.clues")
            md-chip.md-accent.animated.fadeIn(v-show="help") {{ clue }}
        md-input-container.md-input-invalid(md-has-password, v-if="!last")
          label Código
          md-input(type="password", v-model="password", id="password", required)
          span.md-error Respeta mayúsculas pero ignora signos de puntuación.
</template>

<script>
  import moment from 'moment'
  import quests from '../data/quests.js'
  export default {
    data () {
      return {
        help: false,
        cheat: false,
        password: '',
        active: null,
        message: ''
      }
    },
    created () {
      this.$material.setCurrentTheme('quest')
      this.active = quests[0]
      this.$getItem('LAST')
      .then((value) => {
        this.active = value ? quests.find(quest => quest.password === value.password) || quests[0] : quests[0]
      })
    },
    methods: {
      open (message) {
        this.message = message
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      debug () {
        var index = quests.findIndex(quest => quest.password === this.active.password)
        this.password = quests[index + 1].password
      }
    },
    watch: {
      password (password) {
        var found = quests.find(quest => quest.password === password)
        if (found) {
          this.$getItem(password)
          .then((item) => {
            if (!item) {
              found.timestamp = moment().format('x')
              found.cheat = this.cheat
              this.$setItem('LAST', found)
              this.$setItem(password, found)
              this.open('Correcto! Logro desbloqueado!')
            }
            this.cheat = false
          })
          if (document.getElementById('scroll')) document.getElementById('scroll').scrollIntoView(true)
          // if (document.getElementById('password')) document.getElementById('password').focus()
          this.help = false
          this.password = ''
          this.active = found
        }
      },
      help (boolean) {
        if (boolean) this.cheat = true
      },
      cheat (boolean) {
        if (boolean) this.open('Has hecho trampas esta ronda!')
      }
    },
    computed: {
      index () {
        return quests.findIndex(quest => quest.password === this.active.password) + 1
      },
      total () {
        return quests.length
      },
      last () {
        return this.index === this.total
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-card
    .md-card-header
      .md-switch
        align-items center
        display flex
        flex-direction column
        justify-content center
        padding-right 10px
    .md-chip
      color white !important
</style>