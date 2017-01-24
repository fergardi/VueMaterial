<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000")
      span Correcto! Se ha guardado en tus Logros. A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click="close()")
        md-icon done
    md-card(md-with-hover)
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Acertijo {{ active.id }} de {{ quests.length }}
      md-card-media
        img(v-bind:src="'img/quests/' + active.media")
        md-ink-ripple
        md-button.md-primary.md-fab.floating(v-on:click="debug()", v-if="active.id < quests.length")
          md-icon play_arrow
      md-card-content
        span {{ active.description }}
        p
          md-chip(v-for="tag in active.tags") {{ tag }}
        md-input-container(md-has-password)
          label Código secreto
          md-input(type="password", required, v-model="password")
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        quests: [
          {
            password: 'password',
            icon: 'icon',
            title: 'virginia',
            media: 'media.extension',
            description: 'virginia',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'regreso al futuro',
            media: 'media.extension',
            description: 'regreso al futuro',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'monkey island',
            media: 'media.extension',
            description: 'monkey island',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'half life',
            media: 'media.extension',
            description: 'half life',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'fisica',
            media: 'media.extension',
            description: 'fisica',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'skyrim',
            media: 'media.extension',
            description: 'skyrim',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'logica',
            media: 'media.extension',
            description: 'logica',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'la historia interminable',
            media: 'media.extension',
            description: 'la historia interminable',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'el hobbit',
            media: 'media.extension',
            description: 'el hobbit',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'lost',
            media: 'media.extension',
            description: 'lost',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'saw',
            media: 'media.extension',
            description: 'saw',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pokemon',
            media: 'media.extension',
            description: 'pokemon',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'cards agains humanity',
            media: 'media.extension',
            description: 'cards agains humanity',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'los simpsons',
            media: 'media.extension',
            description: 'los simpsons',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'world of warcraft',
            media: 'media.extension',
            description: 'world of warcraft',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'el señor de los anillos',
            media: 'media.extension',
            description: 'el señor de los anillos',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'super mario',
            media: 'media.extension',
            description: 'super mario',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'sherlock',
            media: 'media.extension',
            description: 'sherlock',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'crash bandicoot',
            media: 'media.extension',
            description: 'crash bandicoot',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'el principito',
            media: 'media.extension',
            description: 'el principito',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'harry potter',
            media: 'media.extension',
            description: 'harry potter',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'walking dead',
            media: 'media.extension',
            description: 'walking dead',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'terminator',
            media: 'media.extension',
            description: 'terminator',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'dragon ball',
            media: 'media.extension',
            description: 'dragon ball',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'alien',
            media: 'media.extension',
            description: 'alien',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'resident evil',
            media: 'media.extension',
            description: 'resident evil',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pacman',
            media: 'media.extension',
            description: 'pacman',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'breaking bad',
            media: 'media.extension',
            description: 'breaking bad',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'malcolm',
            media: 'media.extension',
            description: 'malcolm',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'mad max',
            media: 'media.extension',
            description: 'mad max',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'mortal kombat',
            media: 'media.extension',
            description: 'mortal kombat',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'jumanji',
            media: 'media.extension',
            description: 'jumanji',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'futurama',
            media: 'media.extension',
            description: 'futurama',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'guardianes de la galaxia',
            media: 'media.extension',
            description: 'guardianes de la galaxia',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'monty python',
            media: 'media.extension',
            description: 'monty python',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'indiana jones',
            media: 'media.extension',
            description: 'indiana jones',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'juego de tronos',
            media: 'media.extension',
            description: 'juego de tronos',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'matrix',
            media: 'media.extension',
            description: 'matrix',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'final fantasy',
            media: 'media.extension',
            description: 'final fantasy',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'star wars',
            media: 'media.extension',
            description: 'star wars',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pitufos',
            media: 'media.extension',
            description: 'pitufos',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'autoestopista galactico',
            media: 'media.extension',
            description: 'autoestopista galactico',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'overexposed model',
            media: 'media.extension',
            description: 'overexposed model',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'blade runner',
            media: 'media.extension',
            description: 'blade runner',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'fraggle rock',
            media: 'media.extension',
            description: 'fraggle rock',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'pesadilla antes de navidad',
            media: 'media.extension',
            description: 'pesadilla antes de navidad',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'los goonies',
            media: 'media.extension',
            description: 'los goonies',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'legend of zelda',
            media: 'media.extension',
            description: 'legend of zelda',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'evil dead',
            media: 'media.extension',
            description: 'evil dead',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'piti',
            media: 'media.extension',
            description: 'piti',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          },
          {
            password: 'password',
            icon: 'icon',
            title: 'fin',
            media: 'media.extension',
            description: 'fin',
            tags: ['tag1', 'tag2', 'tag3'],
            favorite: false,
            timestamp: 0
          }
        ],
        password: ''
      }
    },
    created () {
      this.$material.setCurrentTheme('quest')
    },
    methods: {
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      md5 (string) {
        var hash = 0
        if (string.length === 0) return hash
        for (var i = 0; i < string.length; i++) {
          var char = string.charCodeAt(i)
          hash = ((hash << 5) - hash) + char
          hash = hash & hash
        }
        return hash
      },
      debug () {
        this.password = this.active.password
      }
    },
    computed: {
      active () {
        var found = this.quests.find(quest => quest.password === this.password)
        if (this.password && found) {
          this.$getItem(this.password)
          .then((value) => {
            if (!value) {
              found.timestamp = moment().format('x')
              this.$setItem(this.password, found)
              this.open()
            }
          })
          return found
        } else {
          return this.quests[0]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .floating
    position: absolute
    bottom: -35px
    right: 5px
    z-index: 9999
</style>