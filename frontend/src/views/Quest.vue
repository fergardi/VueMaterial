<template lang="pug">
  md-theme(v-bind:md-name="active.theme")
    md-snackbar(ref="snackbar", v-bind:md-duration="5000")
      span {{ snackbar }}
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
        default: {
          password: '',
          title: 'Código incorrecto',
          icon: 'announcement',
          subtitle: 'El código secreto no se reconoce',
          theme: 'default',
          description: 'Debes encontrar el código que se corresponda con el acertijo actual para pasar al siguiente nivel. Pueden ser números, letras, o combinaciones de ambas cosas, pero siempre habrá como mucho una palabra, nada de frases. Respeta siempre las mayúsculas, pero ignora siempre los signos de puntuación.',
          clue: 'El primer código es tu nombre',
          tags: ['Los', 'tags', 'también', 'ayudan'],
          media: 'default.jpg'
        },
        password: '',
        snackbar: 'Correcto!'
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
      }
    },
    computed: {
      active () {
        if (this.password && this.quests.find(x => x.password === this.password)) {
          this.open()
          return this.quests.find(x => x.password === this.password)
        } else {
          return this.default
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>