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
        md-tooltip(md-direction="left")
          strong Pista
    md-card-media
      iframe(v-bind:src="active.media", v-if="!image()")
      img(v-bind:src="'/dist/img/quests/' + active.media", v-if="image()")
    md-card-content {{ active.description }}
      md-input-container.md-input-invalid(md-has-password)
        label Código secreto
        md-input(type="password", required, v-model="password")
        span.md-error {{ message }}
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
          subtitle: 'El código secreto no se reconoce',
          media: 'default.jpg',
          description: 'Debes encontrar el código que se corresponda con el acertijo actual para pasar al siguiente nivel. Pueden ser números, letras, o combinaciones de ambas cosas, pero siempre habrá solo una palabra, sin frases. Respeta siempre las mayúsculas, pero ignora siempre los signos de puntuación. Pista: el primer código es tu nombre.'
        },
        password: '',
        message: 'Código incorrecto!'
      }
    },
    created () {
      this.quests = quests;
    },
    methods: {
      image () {
        return (
          this.active.media.toLowerCase().indexOf('.jpg') !== -1 || 
          this.active.media.toLowerCase().indexOf('.png') !== -1 || 
          this.active.media.toLowerCase().indexOf('.bmp') !== -1 || 
          this.active.media.toLowerCase().indexOf('.jpeg') !== -1 || 
          this.active.media.toLowerCase().indexOf('.gif') !== -1
        );
      }
    },
    computed: {
      active () {
        if (this.password && this.quests.find(x => x.password === this.password)) {
          this.message = 'Código correcto!';
          return this.quests.find(x => x.password === this.password);
        } else {
          this.message = 'Código incorrecto!';
          return this.default;
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
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