<template lang="pug">
  md-card(md-with-hover)
    md-card-header
      md-avatar.md-large
        md-icon.md-primary announcement
      md-card-header-text
        .md-title {{ active.title }}
        .md-subhead {{ active.subtitle }}
      md-button.md-icon-button
        md-icon help
        md-tooltip(md-direction="left") Si te portas bien a lo mejor te doy una pista
    md-card-media
      iframe(v-bind:src="active.media", v-if="!image()")
      img(v-bind:src="active.media", v-if="image()")
    md-card-content {{ active.description }}
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
          id: '',
          title: 'Código incorrecto',
          subtitle: 'El código secreto no se reconoce',
          media: 'http://www.evidentlycochrane.net/wp-content/uploads/2015/10/iStock_uncertaintyconcept_Medium.jpg',
          description: 'Debes encontrar un código que se corresponda con la misión actual para pasar al siguiente nivel. Pueden ser números, letras, o combinaciones de ambas cosas. Pista: el primer código es tu nombre.'
        },
        password: ''
      }
    },
    created () {
      this.quests = quests;
    },
    methods: {
      image () {
        return this.active.media.toLowerCase().indexOf('.jpg') !== -1 || this.active.media.toLowerCase().indexOf('.png') !== -1 || this.active.media.toLowerCase().indexOf('.jpeg') !== -1;
      }
    },
    computed: {
      active () {
        if (this.password && this.quests.find(x => x.id === this.password)) {
          return this.quests.find(x => x.id === this.password);
        } else {
          return this.default;
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-card
    opacity: 0.9;
  .md-card + .md-card
    margin-top: 15px;
  iframe
  img
    width: 100%;
    border: none;
  img
    height: auto;
  iframe
    height: 350px;
    max-height: 350px;
</style>